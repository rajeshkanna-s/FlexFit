// ---------------------------------------------------------------------------
// Diet Chart Calculation Engine
// All pure functions — no React dependencies
// ---------------------------------------------------------------------------

import {
  type GoalKey,
  type DietPref,
  type MealSlot,
  type FoodItem,
  type GoalFoodMap,
  goalFoodDatabase,
  goalMeta,
  monthlyGuidance,
} from './dietFoods.data';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface UserProfile {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  weightKg: number;
  heightCm: number;
  activityMultiplier: number;
  goal: GoalKey;
  dietPref: DietPref;
  allergies: string[];       // e.g. ['nuts', 'lactose']
  region: string;
  mealsPerDay: number;       // 3–6
  planDuration?: 'weekly' | 'monthly' | 'both';
  proteinFocus?: string[];
}


export interface NutritionStats {
  bmi: number;
  bmiCategory: string;
  bmr: number;
  tdee: number;
  targetCalories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  hydrationMl: number;
}

export interface DayMealPlan {
  dayName: string;
  meals: { slot: MealSlot; slotLabel: string; food: FoodItem }[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
}

export interface WeeklyPlan {
  days: DayMealPlan[];
}

export interface MonthlyPhase {
  weekLabel: string;
  phaseName: string;
  focus: string;
  keyFoods: string[];
  avoid: string[];
  tip: string;
}

export interface MonthlyPlan {
  phases: MonthlyPhase[];
  dos: string[];
  donts: string[];
  supplements?: string[];
}

// ---------------------------------------------------------------------------
// 1. BMI
// ---------------------------------------------------------------------------
export function calculateBMI(weightKg: number, heightCm: number): { bmi: number; category: string } {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  let category: string;
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  return { bmi, category };
}

// ---------------------------------------------------------------------------
// 2. BMR (Mifflin-St Jeor)
// ---------------------------------------------------------------------------
export function calculateBMR(weightKg: number, heightCm: number, age: number, gender: 'male' | 'female' | 'other'): number {
  if (gender === 'male') {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else if (gender === 'female') {
    return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  } else {
    // average of male and female
    const m = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    const f = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    return (m + f) / 2;
  }
}

// ---------------------------------------------------------------------------
// 3. TDEE
// ---------------------------------------------------------------------------
export function calculateTDEE(bmr: number, activityMultiplier: number): number {
  return bmr * activityMultiplier;
}

// ---------------------------------------------------------------------------
// 4. Target Calories
// ---------------------------------------------------------------------------
export function calculateTargetCalories(tdee: number, goal: GoalKey, gender: 'male' | 'female' | 'other'): number {
  const meta = goalMeta.find(g => g.key === goal)!;
  let target = tdee + meta.calorieAdjust;

  // Enforce safe minimums
  const minCal = gender === 'female' ? 1200 : 1500;
  if (target < minCal) target = minCal;

  return target;
}

// ---------------------------------------------------------------------------
// 5. Macro Split
// ---------------------------------------------------------------------------
export function calculateMacros(targetCalories: number, goal: GoalKey, weightKg: number): {
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
} {
  const meta = goalMeta.find(g => g.key === goal)!;

  // For muscle gain, protein is based on body weight (2g/kg)
  if (goal === 'muscleGain') {
    const proteinGrams = weightKg * 2.0;
    const proteinCal = proteinGrams * 4;
    const fatCal = targetCalories * (meta.macroSplit.fat / 100);
    const fatGrams = fatCal / 9;
    const carbsCal = Math.max(0, targetCalories - proteinCal - fatCal);
    const carbsGrams = carbsCal / 4;
    return { proteinGrams, carbsGrams, fatGrams };
  }

  const proteinGrams = (targetCalories * (meta.macroSplit.protein / 100)) / 4;
  const carbsGrams = (targetCalories * (meta.macroSplit.carbs / 100)) / 4;
  const fatGrams = (targetCalories * (meta.macroSplit.fat / 100)) / 9;

  return { proteinGrams, carbsGrams, fatGrams };
}

// ---------------------------------------------------------------------------
// 6. Hydration
// ---------------------------------------------------------------------------
export function calculateHydration(weightKg: number): number {
  const base = 35 * weightKg; // ml
  const exerciseAdd = 500;    // assume 1hr exercise
  const heatAdd = 250;        // South India is hot
  return Math.max(2000, base + exerciseAdd + heatAdd);
}

// ---------------------------------------------------------------------------
// 7. Full Stats
// ---------------------------------------------------------------------------
export function calculateAllStats(profile: UserProfile): NutritionStats {
  const { bmi, category: bmiCategory } = calculateBMI(profile.weightKg, profile.heightCm);
  const bmr = calculateBMR(profile.weightKg, profile.heightCm, profile.age, profile.gender);
  const tdee = calculateTDEE(bmr, profile.activityMultiplier);
  const targetCalories = calculateTargetCalories(tdee, profile.goal, profile.gender);
  const { proteinGrams, carbsGrams, fatGrams } = calculateMacros(targetCalories, profile.goal, profile.weightKg);
  const hydrationMl = calculateHydration(profile.weightKg);

  return { bmi, bmiCategory, bmr, tdee, targetCalories, proteinGrams, carbsGrams, fatGrams, hydrationMl };
}

// ---------------------------------------------------------------------------
// 8. Food Filtering & Protein Prioritisation
// ---------------------------------------------------------------------------
export function matchesProteinFocus(foodName: string, focus: string[]): boolean {
  if (!focus || focus.length === 0) return true;
  const nameLower = foodName.toLowerCase();
  return focus.some(f => {
    const key = f.toLowerCase();
    if (key === 'chicken' && nameLower.includes('chicken')) return true;
    if (key === 'egg' && (nameLower.includes('egg') || nameLower.includes('omelette') || nameLower.includes('bhurji'))) return true;
    if (key === 'paneer' && (nameLower.includes('paneer') || nameLower.includes('cottage cheese'))) return true;
    if (key === 'soya' && (nameLower.includes('soya') || nameLower.includes('tofu') || nameLower.includes('tempeh'))) return true;
    if (key === 'fish' && (nameLower.includes('fish') || nameLower.includes('seafood') || nameLower.includes('mackerel') || nameLower.includes('sardine') || nameLower.includes('salmon') || nameLower.includes('nethili'))) return true;
    if (key === 'extra_nonveg' && (nameLower.includes('mutton') || nameLower.includes('chicken') || nameLower.includes('fish') || nameLower.includes('egg') || nameLower.includes('bone broth'))) return true;
    if (key === 'dals' && (nameLower.includes('dal') || nameLower.includes('chana') || nameLower.includes('sprouts') || nameLower.includes('rajma') || nameLower.includes('pulses') || nameLower.includes('sundal') || nameLower.includes('moong'))) return true;
    if (key === 'millets' && (nameLower.includes('ragi') || nameLower.includes('millet') || nameLower.includes('oats') || nameLower.includes('thinai') || nameLower.includes('samai') || nameLower.includes('varagu') || nameLower.includes('quinoa'))) return true;
    return false;
  });
}

function filterFoods(foods: FoodItem[], dietPref: DietPref, allergies: string[]): FoodItem[] {
  return foods.filter(f => {
    // Diet preference check
    if (!f.diet.includes(dietPref)) return false;
    // Allergy check
    if (f.allergens && f.allergens.some(a => allergies.includes(a))) return false;
    return true;
  });
}

// ---------------------------------------------------------------------------
// 9. Meal Slot Selection
// ---------------------------------------------------------------------------
const MEAL_SLOTS: { slot: MealSlot; label: string }[] = [
  { slot: 'wakeUp', label: 'Wake-up / Detox' },
  { slot: 'breakfast', label: 'Breakfast' },
  { slot: 'midMorning', label: 'Mid-Morning Snack' },
  { slot: 'lunch', label: 'Lunch' },
  { slot: 'prePostWorkout', label: 'Pre/Post Workout' },
  { slot: 'dinner', label: 'Dinner' },
];

function getActiveSlots(mealsPerDay: number): { slot: MealSlot; label: string }[] {
  // Always include wakeUp, breakfast, lunch, dinner (4 base)
  // Add midMorning for 5+, prePostWorkout for 6
  if (mealsPerDay <= 3) {
    return [
      MEAL_SLOTS[0], // wakeUp
      MEAL_SLOTS[1], // breakfast
      MEAL_SLOTS[3], // lunch
      MEAL_SLOTS[5], // dinner
    ];
  }
  if (mealsPerDay === 4) {
    return [
      MEAL_SLOTS[0], // wakeUp
      MEAL_SLOTS[1], // breakfast
      MEAL_SLOTS[3], // lunch
      MEAL_SLOTS[4], // prePostWorkout
      MEAL_SLOTS[5], // dinner
    ];
  }
  if (mealsPerDay === 5) {
    return [
      MEAL_SLOTS[0], // wakeUp
      MEAL_SLOTS[1], // breakfast
      MEAL_SLOTS[2], // midMorning
      MEAL_SLOTS[3], // lunch
      MEAL_SLOTS[4], // prePostWorkout
      MEAL_SLOTS[5], // dinner
    ];
  }
  // 6 meals = all slots
  return [...MEAL_SLOTS];
}

// ---------------------------------------------------------------------------
// 10. Seeded random (deterministic per user name for consistency)
// ---------------------------------------------------------------------------
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + c;
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickItem(items: FoodItem[], dayIndex: number, slotIndex: number, seed: number, proteinFocus?: string[]): FoodItem {
  if (items.length === 0) {
    // Fallback — should never happen if database is properly populated
    return { name: 'Fresh fruit / vegetable salad', portion: '1 serving', calories: 100, protein: 2, carbs: 20, fat: 1, diet: ['veg', 'nonVeg', 'eggetarian', 'vegan'] };
  }

  if (proteinFocus && proteinFocus.length > 0) {
    const focusedItems = items.filter(f => matchesProteinFocus(f.name, proteinFocus));
    if (focusedItems.length > 0) {
      // 85% chance to choose a focused item, 15% chance to choose any allowed item for dietary variety
      const rollIdx = (seed + dayIndex * 19 + slotIndex * 3) % 100;
      if (rollIdx < 85) {
        const idx = (seed + dayIndex * 7 + slotIndex * 13) % focusedItems.length;
        return focusedItems[idx];
      }
    }
  }

  const idx = (seed + dayIndex * 7 + slotIndex * 13) % items.length;
  return items[idx];
}


// ---------------------------------------------------------------------------
// 11. Generate Weekly Plan
// ---------------------------------------------------------------------------
const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function generateWeeklyPlan(profile: UserProfile): WeeklyPlan {
  const goalFoods: GoalFoodMap = goalFoodDatabase[profile.goal];
  const slots = getActiveSlots(profile.mealsPerDay);
  const seed = simpleHash(profile.name || 'FlexFit');

  // Pre-filter all slots for diet preference and allergies
  const filteredSlots: Record<MealSlot, FoodItem[]> = {
    wakeUp: filterFoods(goalFoods.wakeUp, profile.dietPref, profile.allergies),
    breakfast: filterFoods(goalFoods.breakfast, profile.dietPref, profile.allergies),
    midMorning: filterFoods(goalFoods.midMorning, profile.dietPref, profile.allergies),
    lunch: filterFoods(goalFoods.lunch, profile.dietPref, profile.allergies),
    prePostWorkout: filterFoods(goalFoods.prePostWorkout, profile.dietPref, profile.allergies),
    dinner: filterFoods(goalFoods.dinner, profile.dietPref, profile.allergies),
  };

  const days: DayMealPlan[] = DAY_NAMES.map((dayName, dayIndex) => {
    const meals = slots.map((s, slotIndex) => {
      const available = filteredSlots[s.slot];
      const food = pickItem(available, dayIndex, slotIndex, seed, profile.proteinFocus);
      return { slot: s.slot, slotLabel: s.label, food };
    });

    const totalCalories = meals.reduce((sum, m) => sum + m.food.calories, 0);
    const totalProtein = meals.reduce((sum, m) => sum + m.food.protein, 0);
    const totalCarbs = meals.reduce((sum, m) => sum + m.food.carbs, 0);
    const totalFat = meals.reduce((sum, m) => sum + m.food.fat, 0);

    return { dayName, meals, totalCalories, totalProtein, totalCarbs, totalFat };
  });

  return { days };
}

// ---------------------------------------------------------------------------
// 12. Generate Monthly Plan
// ---------------------------------------------------------------------------
export function generateMonthlyPlan(profile: UserProfile): MonthlyPlan {
  const guidance = monthlyGuidance[profile.goal];
  const goalFoods = goalFoodDatabase[profile.goal];

  // Build key foods list from the database
  const filteredBreakfast = filterFoods(goalFoods.breakfast, profile.dietPref, profile.allergies);
  const filteredLunch = filterFoods(goalFoods.lunch, profile.dietPref, profile.allergies);
  const filteredDinner = filterFoods(goalFoods.dinner, profile.dietPref, profile.allergies);

  const getPrioritizedNames = (list: FoodItem[], limit: number) => {
    let matched = list;
    if (profile.proteinFocus && profile.proteinFocus.length > 0) {
      const focused = list.filter(f => matchesProteinFocus(f.name, profile.proteinFocus!));
      if (focused.length > 0) {
        matched = [...focused, ...list.filter(f => !focused.includes(f))];
      }
    }
    return matched.slice(0, limit).map(f => f.name);
  };

  const allFoodNames = [
    ...getPrioritizedNames(filteredBreakfast, 3),
    ...getPrioritizedNames(filteredLunch, 3),
    ...getPrioritizedNames(filteredDinner, 2),
  ];

  const phases: MonthlyPhase[] = [
    {
      weekLabel: 'Week 1',
      phaseName: 'Foundation Phase',
      focus: profile.goal === 'weightLoss'
        ? 'Reduce sugar and processed foods. Build consistent meal timing habits.'
        : profile.goal === 'weightGain'
          ? 'Gradually increase portion sizes. Establish a regular eating schedule every 2.5–3 hours.'
          : profile.goal === 'muscleGain'
            ? 'Establish protein intake baseline (2g/kg). Learn proper pre/post workout nutrition timing.'
            : profile.goal === 'bodyToning'
              ? 'Clean up your diet. Remove junk food and establish balanced meal patterns.'
              : 'Introduce calcium-rich and anti-inflammatory foods. Start a food journal.',
      keyFoods: allFoodNames.slice(0, 5),
      avoid: guidance.donts.slice(0, 3),
      tip: 'Your stomach needs time to adapt to new foods and portions. Drink 3–4 litres of water daily, especially in hot South Indian weather.',
    },
    {
      weekLabel: 'Week 2',
      phaseName: 'Adaptation Phase',
      focus: profile.goal === 'weightLoss'
        ? 'Introduce millets fully. Replace white rice with brown/red rice or millet alternatives.'
        : profile.goal === 'weightGain'
          ? 'Add calorie-dense toppings (ghee, nuts, dry fruits) to meals. Introduce a mid-morning and evening snack.'
          : profile.goal === 'muscleGain'
            ? 'Fine-tune protein distribution across all meals. Add a protein shake if not already using one.'
            : profile.goal === 'bodyToning'
              ? 'Start timing your carbs around workouts. Reduce evening carb portions slightly.'
              : 'Increase omega-3 intake (fish, flaxseeds, walnuts). Add bone broth or ragi malt to your routine.',
      keyFoods: allFoodNames.slice(2, 7),
      avoid: guidance.donts.slice(1, 4),
      tip: 'If you feel bloated or uncomfortable, reduce fibre intake slightly and increase water. Your body is still adapting.',
    },
    {
      weekLabel: 'Week 3',
      phaseName: 'Intensification Phase',
      focus: profile.goal === 'weightLoss'
        ? 'Assess progress on the scale and mirror. If weight is not dropping, cut dinner carbs by half.'
        : profile.goal === 'weightGain'
          ? 'Increase total calories by another 100–200 kcal if weight has not moved. Add a pre-bed snack.'
          : profile.goal === 'muscleGain'
            ? 'Progressive overload in training. Increase carb intake on heavy training days.'
            : profile.goal === 'bodyToning'
              ? 'Add an extra 15 minutes of cardio per session. Tighten portion control on rest days.'
              : 'Add turmeric + black pepper to at least 2 meals daily. Ensure 15 min morning sunlight.',
      keyFoods: allFoodNames.slice(3, 8),
      avoid: guidance.donts.slice(0, 3),
      tip: 'This is the critical week where consistency matters most. Do not give up — results compound from here.',
    },
    {
      weekLabel: 'Week 4',
      phaseName: 'Consolidation Phase',
      focus: profile.goal === 'weightLoss'
        ? 'Lock in the eating pattern that worked best. Prepare for Month 2 with sustainable habits.'
        : profile.goal === 'weightGain'
          ? 'Review progress. If gaining 0.3–0.5 kg/week, maintain current plan. Otherwise increase portions again.'
          : profile.goal === 'muscleGain'
            ? 'Take body measurements and progress photos. Adjust protein/carbs if strength gains plateau.'
            : profile.goal === 'bodyToning'
              ? 'Review body measurements (waist, chest, arms). If toning is visible, maintain. If not, tighten deficit slightly.'
              : 'Evaluate joint mobility and pain levels. If improved, maintain current diet. If not, consult your doctor.',
      keyFoods: allFoodNames.slice(1, 6),
      avoid: guidance.donts.slice(2, 5),
      tip: 'One cheat meal per week is allowed (e.g., Sunday lunch Biryani). Eat the protein first, then rice. Practice portion control.',
    },
  ];

  return {
    phases,
    dos: guidance.dos,
    donts: guidance.donts,
    supplements: guidance.supplements,
  };
}
