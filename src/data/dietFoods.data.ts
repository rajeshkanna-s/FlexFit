// ---------------------------------------------------------------------------
// South Indian Food Database for Diet Chart Generator
// ---------------------------------------------------------------------------

export type GoalKey = 'weightLoss' | 'weightGain' | 'muscleGain' | 'bodyToning' | 'jointBoneHealth';
export type DietPref = 'veg' | 'nonVeg' | 'eggetarian' | 'vegan';
export type MealSlot = 'wakeUp' | 'breakfast' | 'midMorning' | 'lunch' | 'prePostWorkout' | 'dinner';
export type RegionKey = 'tamilNadu' | 'kerala' | 'andhraTelangana' | 'karnataka';

export interface FoodItem {
  name: string;
  nameTamil?: string;
  portion: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  diet: DietPref[];          // which diets this food is allowed in
  allergens?: string[];      // e.g. ['nuts','lactose','gluten','seafood','soy']
  region?: RegionKey[];      // preferred regions (empty = universal)
}

export interface GoalFoodMap {
  wakeUp: FoodItem[];
  breakfast: FoodItem[];
  midMorning: FoodItem[];
  lunch: FoodItem[];
  prePostWorkout: FoodItem[];
  dinner: FoodItem[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const ALL_NONVEG: DietPref[] = ['veg', 'nonVeg', 'eggetarian', 'vegan'];
const VEG_EGG: DietPref[] = ['veg', 'eggetarian'];
const VEG_ONLY: DietPref[] = ['veg'];
const NONVEG_EGG: DietPref[] = ['nonVeg', 'eggetarian'];
const NONVEG_ONLY: DietPref[] = ['nonVeg'];
const VEGAN: DietPref[] = ['vegan'];
const VEG_VEGAN: DietPref[] = ['veg', 'vegan'];
const ALL_DIETS: DietPref[] = ['veg', 'nonVeg', 'eggetarian', 'vegan'];

// ---------------------------------------------------------------------------
// 1. WEIGHT LOSS
// ---------------------------------------------------------------------------
const weightLossFoods: GoalFoodMap = {
  wakeUp: [
    { name: 'Warm lemon water with honey', portion: '1 glass (250ml)', calories: 25, protein: 0, carbs: 7, fat: 0, diet: ALL_DIETS },
    { name: 'Jeera water (Cumin water)', nameTamil: 'Jeeragam Thanni', portion: '1 glass', calories: 10, protein: 0, carbs: 2, fat: 0, diet: ALL_DIETS },
    { name: 'Methi seeds soaked water', nameTamil: 'Vendhayam Thanni', portion: '1 glass', calories: 15, protein: 1, carbs: 2, fat: 0, diet: ALL_DIETS },
    { name: 'Apple cider vinegar + warm water', portion: '1 glass', calories: 5, protein: 0, carbs: 1, fat: 0, diet: ALL_DIETS },
    { name: 'Green tea (unsweetened)', portion: '1 cup', calories: 5, protein: 0, carbs: 1, fat: 0, diet: ALL_DIETS },
    { name: 'Black coffee (no sugar)', portion: '1 cup', calories: 5, protein: 0, carbs: 1, fat: 0, diet: ALL_DIETS },
    { name: 'Turmeric water', nameTamil: 'Manjal Thanni', portion: '1 glass', calories: 10, protein: 0, carbs: 2, fat: 0, diet: ALL_DIETS },
  ],
  breakfast: [
    { name: 'Ragi Dosa with mint chutney', nameTamil: 'Kezhvaragu Dosai', portion: '2 dosas', calories: 220, protein: 7, carbs: 40, fat: 4, diet: ALL_DIETS },
    { name: 'Oats Idli with sambar', portion: '3 idlis', calories: 240, protein: 9, carbs: 42, fat: 3, diet: ALL_DIETS },
    { name: 'Pesarattu (Green gram dosa)', nameTamil: 'Paasi Payiru Dosai', portion: '2 dosas', calories: 230, protein: 14, carbs: 32, fat: 4, diet: ALL_DIETS },
    { name: 'Vegetable Upma (Rava)', portion: '1 bowl (200g)', calories: 210, protein: 6, carbs: 36, fat: 5, diet: ALL_DIETS },
    { name: 'Boiled egg whites with millet toast', portion: '4 whites + 1 slice', calories: 180, protein: 18, carbs: 18, fat: 2, diet: NONVEG_EGG, allergens: ['gluten'] },
    { name: 'Moong dal chilla with veggies', portion: '2 chillas', calories: 200, protein: 14, carbs: 28, fat: 3, diet: ALL_DIETS },
    { name: 'Sprouted ragi porridge', nameTamil: 'Kezhvaragu Kanji', portion: '1 bowl', calories: 190, protein: 6, carbs: 38, fat: 2, diet: ALL_DIETS },
    { name: 'Multigrain dosa with chutney', portion: '2 dosas', calories: 215, protein: 8, carbs: 38, fat: 3, diet: ALL_DIETS },
    { name: 'Egg white omelette with veggies', portion: '3-egg omelette', calories: 120, protein: 18, carbs: 3, fat: 2, diet: NONVEG_EGG },
  ],
  midMorning: [
    { name: 'Buttermilk (Neer Mor)', nameTamil: 'Neer Mor', portion: '1 glass (250ml)', calories: 45, protein: 3, carbs: 5, fat: 1, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Green tea + 5 almonds', portion: '1 cup + 5 nuts', calories: 70, protein: 3, carbs: 2, fat: 5, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Cucumber + carrot sticks', portion: '1 bowl', calories: 35, protein: 1, carbs: 8, fat: 0, diet: ALL_DIETS },
    { name: 'Roasted chana (Sundal)', nameTamil: 'Pottukadalai', portion: '1 small cup (30g)', calories: 100, protein: 6, carbs: 15, fat: 2, diet: ALL_DIETS },
    { name: 'Papaya slices', portion: '1 cup (150g)', calories: 60, protein: 1, carbs: 14, fat: 0, diet: ALL_DIETS },
    { name: 'Guava (Koyyapalam)', portion: '1 medium', calories: 70, protein: 2, carbs: 15, fat: 1, diet: ALL_DIETS },
    { name: 'Tender coconut water', nameTamil: 'Ilaneer', portion: '1 glass', calories: 50, protein: 1, carbs: 10, fat: 0, diet: ALL_DIETS },
  ],
  lunch: [
    { name: 'Brown rice + sambar + poriyal + rasam', portion: '1 cup rice + sides', calories: 380, protein: 12, carbs: 65, fat: 6, diet: ALL_DIETS },
    { name: 'Varagu rice + keerai kootu + rasam', nameTamil: 'Varagu Arisi', portion: '1 cup rice + sides', calories: 340, protein: 12, carbs: 55, fat: 5, diet: ALL_DIETS },
    { name: 'Thinai rice + drumstick sambar + cabbage poriyal', nameTamil: 'Thinai Arisi', portion: '1 cup rice + sides', calories: 350, protein: 11, carbs: 58, fat: 5, diet: ALL_DIETS },
    { name: 'Samai rice + rasam + beans poriyal', nameTamil: 'Samai Arisi', portion: '1 cup rice + sides', calories: 345, protein: 10, carbs: 60, fat: 4, diet: ALL_DIETS },
    { name: 'Grilled fish + millet rice + rasam', nameTamil: 'Meen Pollichathu', portion: '150g fish + 1 cup rice', calories: 420, protein: 32, carbs: 45, fat: 8, diet: NONVEG_ONLY, allergens: ['seafood'] },
    { name: 'Chicken breast salad bowl with brown rice', portion: '150g chicken + 0.5 cup rice', calories: 400, protein: 35, carbs: 38, fat: 7, diet: NONVEG_ONLY },
    { name: 'Red rice + dal + snake gourd poriyal', nameTamil: 'Sivappu Arisi', portion: '1 cup rice + sides', calories: 370, protein: 13, carbs: 62, fat: 5, diet: ALL_DIETS },
  ],
  prePostWorkout: [
    { name: 'Black coffee (pre-workout)', portion: '1 cup', calories: 5, protein: 0, carbs: 1, fat: 0, diet: ALL_DIETS },
    { name: 'Banana + 5 soaked almonds', portion: '1 banana + 5 nuts', calories: 140, protein: 4, carbs: 28, fat: 4, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Paneer cubes (grilled)', portion: '80g', calories: 160, protein: 14, carbs: 2, fat: 10, diet: VEG_EGG, allergens: ['lactose'] },
    { name: 'Boiled eggs (post-workout)', portion: '2 whole eggs', calories: 140, protein: 12, carbs: 1, fat: 10, diet: NONVEG_EGG },
    { name: 'Roasted makhana (Fox nuts)', portion: '1 cup (30g)', calories: 100, protein: 3, carbs: 18, fat: 1, diet: ALL_DIETS },
    { name: 'Moong sprouts chaat', portion: '1 cup', calories: 120, protein: 9, carbs: 18, fat: 1, diet: ALL_DIETS },
    { name: 'Dates + walnuts', portion: '3 dates + 3 walnuts', calories: 150, protein: 3, carbs: 26, fat: 5, diet: ALL_DIETS, allergens: ['nuts'] },
  ],
  dinner: [
    { name: 'Ragi balls + spinach sambar', nameTamil: 'Kezhvaragu Mudde', portion: '2 balls + sambar', calories: 280, protein: 10, carbs: 48, fat: 4, diet: ALL_DIETS },
    { name: 'Chapati + palak paneer (low oil)', portion: '2 chapati + curry', calories: 310, protein: 14, carbs: 42, fat: 8, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
    { name: 'Clear pepper rasam + vegetable stir-fry', nameTamil: 'Milagu Rasam', portion: '1 bowl + veggies', calories: 160, protein: 5, carbs: 28, fat: 3, diet: ALL_DIETS },
    { name: 'Grilled fish with salad', portion: '150g fish + salad', calories: 250, protein: 30, carbs: 8, fat: 10, diet: NONVEG_ONLY, allergens: ['seafood'] },
    { name: 'Moong dal khichdi (millet)', portion: '1 bowl', calories: 260, protein: 12, carbs: 42, fat: 4, diet: ALL_DIETS },
    { name: 'Bottle gourd kootu + 1 chapati', nameTamil: 'Sorakkai Kootu', portion: '1 bowl + 1 chapati', calories: 230, protein: 8, carbs: 38, fat: 4, diet: ALL_DIETS, allergens: ['gluten'] },
    { name: 'Egg curry (no coconut) + roti', portion: '2 eggs + 1 roti', calories: 300, protein: 16, carbs: 30, fat: 12, diet: NONVEG_EGG, allergens: ['gluten'] },
  ],
};

// ---------------------------------------------------------------------------
// 2. WEIGHT GAIN
// ---------------------------------------------------------------------------
const weightGainFoods: GoalFoodMap = {
  wakeUp: [
    { name: 'Badam milk (warm)', nameTamil: 'Badam Paal', portion: '1 glass (300ml)', calories: 180, protein: 8, carbs: 18, fat: 8, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['nuts', 'lactose'] },
    { name: 'Banana milkshake', portion: '1 glass (350ml)', calories: 220, protein: 7, carbs: 38, fat: 5, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Dates soaked in milk', portion: '5 dates + 1 glass milk', calories: 250, protein: 8, carbs: 42, fat: 6, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Warm turmeric milk with ghee', nameTamil: 'Manjal Paal', portion: '1 glass', calories: 160, protein: 6, carbs: 14, fat: 8, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Ragi malt with jaggery', nameTamil: 'Kezhvaragu Koozh', portion: '1 glass', calories: 200, protein: 5, carbs: 40, fat: 3, diet: ALL_DIETS },
    { name: 'Soy milk with dates', portion: '1 glass', calories: 180, protein: 8, carbs: 30, fat: 4, diet: VEGAN, allergens: ['soy'] },
  ],
  breakfast: [
    { name: 'Ghee Roast Dosa with potato masala', portion: '2 large dosas', calories: 420, protein: 8, carbs: 58, fat: 16, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Pongal with ghee + vada', nameTamil: 'Ven Pongal + Vadai', portion: '1 bowl + 1 vada', calories: 480, protein: 14, carbs: 62, fat: 18, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Idli (4) with coconut chutney + sambar', portion: '4 idlis', calories: 380, protein: 12, carbs: 68, fat: 6, diet: ALL_DIETS },
    { name: 'Paratha with curd + pickle', portion: '2 parathas', calories: 440, protein: 10, carbs: 52, fat: 20, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['gluten', 'lactose'] },
    { name: 'Poori with potato curry', nameTamil: 'Poori Masala', portion: '4 pooris + curry', calories: 520, protein: 10, carbs: 60, fat: 24, diet: ALL_DIETS, allergens: ['gluten'] },
    { name: 'Egg dosa (3 whole eggs)', portion: '2 dosas + 3 eggs', calories: 480, protein: 24, carbs: 42, fat: 22, diet: NONVEG_EGG },
    { name: 'Puttu with kadala curry (Kerala)', nameTamil: 'Puttu + Kadala', portion: '2 puttu + curry', calories: 460, protein: 14, carbs: 68, fat: 14, diet: ALL_DIETS, region: ['kerala'] },
  ],
  midMorning: [
    { name: 'Peanut chikki', nameTamil: 'Kadalai Mittai', portion: '2 pieces (60g)', calories: 280, protein: 8, carbs: 30, fat: 14, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Banana (Nendran / Red banana)', nameTamil: 'Sevvalai / Nendran', portion: '2 bananas', calories: 210, protein: 3, carbs: 50, fat: 1, diet: ALL_DIETS },
    { name: 'Full-fat curd with dry fruits', portion: '1 bowl (200g)', calories: 250, protein: 10, carbs: 22, fat: 14, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose', 'nuts'] },
    { name: 'Trail mix (cashew, raisin, almond)', portion: '50g', calories: 260, protein: 6, carbs: 28, fat: 14, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Cheese sandwich (whole wheat)', portion: '1 sandwich', calories: 300, protein: 12, carbs: 32, fat: 14, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
    { name: 'Coconut ladoo', nameTamil: 'Thengai Ladoo', portion: '2 pieces', calories: 220, protein: 3, carbs: 28, fat: 10, diet: ALL_DIETS },
  ],
  lunch: [
    { name: 'Kerala Matta rice + fish curry + thoran', portion: '1.5 cups rice + sides', calories: 580, protein: 28, carbs: 78, fat: 14, diet: NONVEG_ONLY, allergens: ['seafood'], region: ['kerala'] },
    { name: 'White rice + chicken Chettinad + poriyal', nameTamil: 'Chettinad Kozhi', portion: '1.5 cups rice + 200g chicken', calories: 620, protein: 38, carbs: 72, fat: 16, diet: NONVEG_ONLY, region: ['tamilNadu'] },
    { name: 'White rice + thick dal + ghee + papad', portion: '1.5 cups rice + sides', calories: 520, protein: 16, carbs: 80, fat: 12, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Biryani (veg) with raita', portion: '1.5 cups', calories: 550, protein: 14, carbs: 78, fat: 18, diet: ALL_DIETS, allergens: ['lactose'] },
    { name: 'Biryani (chicken) with raita', portion: '1.5 cups', calories: 620, protein: 32, carbs: 72, fat: 18, diet: NONVEG_ONLY, allergens: ['lactose'] },
    { name: 'Sambar rice + avial + curd', portion: '1.5 cups + sides', calories: 500, protein: 15, carbs: 76, fat: 12, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Paneer butter masala + naan + rice', portion: '150g paneer + 1 naan + 1 cup rice', calories: 650, protein: 22, carbs: 72, fat: 28, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
  ],
  prePostWorkout: [
    { name: 'Banana shake with peanut butter', portion: '1 glass (400ml)', calories: 380, protein: 14, carbs: 50, fat: 14, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Whole eggs omelette + toast', portion: '3 eggs + 2 toast', calories: 380, protein: 22, carbs: 28, fat: 20, diet: NONVEG_EGG, allergens: ['gluten'] },
    { name: 'Paneer tikka', portion: '150g', calories: 280, protein: 20, carbs: 6, fat: 18, diet: VEG_EGG, allergens: ['lactose'] },
    { name: 'Dry fruits ladoo', portion: '2 ladoos', calories: 240, protein: 6, carbs: 30, fat: 10, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Sweet potato (boiled) + milk', portion: '1 medium potato + 1 glass milk', calories: 280, protein: 10, carbs: 48, fat: 4, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Protein smoothie (soy + banana)', portion: '1 glass', calories: 300, protein: 16, carbs: 44, fat: 6, diet: VEGAN, allergens: ['soy'] },
  ],
  dinner: [
    { name: 'Chapati + paneer bhurji + dal', portion: '3 chapati + sides', calories: 520, protein: 24, carbs: 56, fat: 18, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
    { name: 'Rice + egg curry + vegetable stir-fry', portion: '1.5 cups rice + 2 eggs + veggies', calories: 540, protein: 22, carbs: 72, fat: 16, diet: NONVEG_EGG },
    { name: 'Thick coconut curry + Kerala Matta rice', portion: '1.5 cups rice + curry', calories: 520, protein: 12, carbs: 76, fat: 18, diet: ALL_DIETS, region: ['kerala'] },
    { name: 'Chicken curry + roti + salad', portion: '200g chicken + 2 roti', calories: 560, protein: 38, carbs: 46, fat: 18, diet: NONVEG_ONLY, allergens: ['gluten'] },
    { name: 'Curd rice with pickle + papad', nameTamil: 'Thayir Sadam', portion: '1.5 cups', calories: 360, protein: 10, carbs: 58, fat: 8, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Tofu stir-fry + brown rice', portion: '150g tofu + 1.5 cups rice', calories: 460, protein: 20, carbs: 62, fat: 14, diet: VEGAN, allergens: ['soy'] },
    { name: 'Mutton kuzhambu + rice', nameTamil: 'Aattu Kari Kuzhambu', portion: '150g mutton + 1.5 cups rice', calories: 580, protein: 32, carbs: 68, fat: 16, diet: NONVEG_ONLY },
  ],
};

// ---------------------------------------------------------------------------
// 3. MUSCLE GAIN
// ---------------------------------------------------------------------------
const muscleGainFoods: GoalFoodMap = {
  wakeUp: [
    { name: 'Warm water with lemon + 5 soaked almonds', portion: '1 glass + 5 almonds', calories: 55, protein: 2, carbs: 4, fat: 4, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Black coffee (unsweetened)', portion: '1 cup', calories: 5, protein: 0, carbs: 1, fat: 0, diet: ALL_DIETS },
    { name: 'Whey protein shake (if supplements used)', portion: '1 scoop + water', calories: 120, protein: 24, carbs: 3, fat: 1, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Pea protein shake', portion: '1 scoop + water', calories: 110, protein: 22, carbs: 4, fat: 1, diet: VEGAN },
    { name: 'Egg whites (raw / boiled)', portion: '4 whites', calories: 68, protein: 16, carbs: 0, fat: 0, diet: NONVEG_EGG },
    { name: 'Ragi malt (no sugar)', nameTamil: 'Kezhvaragu Kanji', portion: '1 glass', calories: 150, protein: 4, carbs: 32, fat: 1, diet: ALL_DIETS },
  ],
  breakfast: [
    { name: 'Pesarattu with paneer stuffing', portion: '2 dosas + 100g paneer', calories: 420, protein: 28, carbs: 38, fat: 14, diet: VEG_EGG, allergens: ['lactose'] },
    { name: 'Egg white omelette + whole wheat toast', portion: '5 whites + 2 toast', calories: 280, protein: 28, carbs: 30, fat: 4, diet: NONVEG_EGG, allergens: ['gluten'] },
    { name: 'Soya chunks upma', nameTamil: 'Soya Upma', portion: '1 large bowl', calories: 320, protein: 24, carbs: 38, fat: 6, diet: ALL_DIETS, allergens: ['soy'] },
    { name: 'Oats + whey + banana smoothie', portion: '1 large glass', calories: 380, protein: 30, carbs: 48, fat: 6, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose', 'gluten'] },
    { name: 'Ragi idli (4) + egg curry', portion: '4 idlis + 2-egg curry', calories: 380, protein: 22, carbs: 52, fat: 8, diet: NONVEG_EGG },
    { name: 'Paneer paratha + curd', portion: '2 parathas + curd', calories: 460, protein: 22, carbs: 48, fat: 18, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
    { name: 'Tofu scramble + millet toast', portion: '150g tofu + 2 toast', calories: 300, protein: 22, carbs: 28, fat: 10, diet: VEGAN, allergens: ['soy'] },
  ],
  midMorning: [
    { name: 'Boiled eggs', portion: '3 whole eggs', calories: 210, protein: 18, carbs: 2, fat: 14, diet: NONVEG_EGG },
    { name: 'Greek yogurt with walnuts', portion: '200g + 5 walnuts', calories: 220, protein: 16, carbs: 12, fat: 12, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose', 'nuts'] },
    { name: 'Black chana sundal', nameTamil: 'Kondakadalai Sundal', portion: '1 large cup (150g)', calories: 200, protein: 12, carbs: 30, fat: 4, diet: ALL_DIETS },
    { name: 'Peanut butter + apple slices', portion: '2 tbsp PB + 1 apple', calories: 240, protein: 8, carbs: 26, fat: 14, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Paneer cubes + mint chutney', portion: '100g paneer', calories: 200, protein: 18, carbs: 3, fat: 12, diet: VEG_EGG, allergens: ['lactose'] },
    { name: 'Protein bar (homemade oat-date bar)', portion: '1 bar', calories: 200, protein: 10, carbs: 28, fat: 6, diet: ALL_DIETS, allergens: ['nuts', 'gluten'] },
  ],
  lunch: [
    { name: 'Grilled chicken breast + brown rice + dal', portion: '200g chicken + 1.5 cups rice + dal', calories: 580, protein: 48, carbs: 62, fat: 10, diet: NONVEG_ONLY },
    { name: 'Soya chunks biryani + raita', portion: '1.5 cups', calories: 480, protein: 28, carbs: 64, fat: 10, diet: ALL_DIETS, allergens: ['soy', 'lactose'] },
    { name: 'Fish curry + millet rice + poriyal', portion: '200g fish + 1.5 cups rice', calories: 520, protein: 40, carbs: 58, fat: 10, diet: NONVEG_ONLY, allergens: ['seafood'] },
    { name: 'Paneer curry + brown rice + salad', portion: '150g paneer + 1.5 cups rice', calories: 540, protein: 26, carbs: 62, fat: 16, diet: VEG_EGG, allergens: ['lactose'] },
    { name: 'Rajma + rice + curd', portion: '1.5 cups rice + rajma + curd', calories: 520, protein: 20, carbs: 78, fat: 10, diet: ALL_DIETS, allergens: ['lactose'] },
    { name: 'Egg fried rice + chicken soup', portion: '1.5 cups + soup', calories: 540, protein: 32, carbs: 64, fat: 14, diet: NONVEG_ONLY },
    { name: 'Tofu kurma + millet rice + poriyal', portion: '150g tofu + 1.5 cups rice', calories: 480, protein: 22, carbs: 62, fat: 12, diet: VEGAN, allergens: ['soy'] },
  ],
  prePostWorkout: [
    { name: 'Banana + peanut butter', portion: '1 banana + 1 tbsp PB', calories: 200, protein: 5, carbs: 32, fat: 8, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Whey protein shake + banana', portion: '1 scoop + 1 banana', calories: 240, protein: 26, carbs: 32, fat: 2, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Boiled sweet potato + egg whites', portion: '1 potato + 4 whites', calories: 220, protein: 18, carbs: 34, fat: 1, diet: NONVEG_EGG },
    { name: 'Sprouts salad with lemon', portion: '1 large bowl (200g)', calories: 160, protein: 12, carbs: 24, fat: 2, diet: ALL_DIETS },
    { name: 'Paneer + oats smoothie', portion: '1 glass', calories: 280, protein: 20, carbs: 30, fat: 8, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
    { name: 'Dates + mixed nuts', portion: '4 dates + 30g nuts', calories: 220, protein: 5, carbs: 34, fat: 8, diet: ALL_DIETS, allergens: ['nuts'] },
  ],
  dinner: [
    { name: 'Grilled chicken + chapati + salad', portion: '200g chicken + 2 chapati', calories: 480, protein: 44, carbs: 38, fat: 12, diet: NONVEG_ONLY, allergens: ['gluten'] },
    { name: 'Egg bhurji + roti + dal', portion: '3 eggs + 2 roti + dal', calories: 480, protein: 28, carbs: 46, fat: 18, diet: NONVEG_EGG, allergens: ['gluten'] },
    { name: 'Paneer tikka + millet roti + salad', portion: '150g paneer + 2 roti', calories: 440, protein: 28, carbs: 40, fat: 16, diet: VEG_EGG, allergens: ['lactose'] },
    { name: 'Fish fry (shallow) + rice + rasam', portion: '200g fish + 1 cup rice', calories: 460, protein: 38, carbs: 48, fat: 10, diet: NONVEG_ONLY, allergens: ['seafood'] },
    { name: 'Soya chunks curry + brown rice', portion: '150g soya + 1 cup rice', calories: 420, protein: 28, carbs: 54, fat: 8, diet: ALL_DIETS, allergens: ['soy'] },
    { name: 'Cottage cheese salad + multigrain bread', portion: '150g cheese + 2 slices', calories: 360, protein: 24, carbs: 28, fat: 14, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
    { name: 'Tempeh stir-fry + quinoa', portion: '150g tempeh + 1 cup quinoa', calories: 420, protein: 26, carbs: 48, fat: 12, diet: VEGAN, allergens: ['soy'] },
  ],
};

// ---------------------------------------------------------------------------
// 4. BODY TONING
// ---------------------------------------------------------------------------
const bodyToningFoods: GoalFoodMap = {
  wakeUp: [
    { name: 'Warm lemon water', portion: '1 glass', calories: 10, protein: 0, carbs: 3, fat: 0, diet: ALL_DIETS },
    { name: 'Green tea (unsweetened)', portion: '1 cup', calories: 5, protein: 0, carbs: 1, fat: 0, diet: ALL_DIETS },
    { name: 'Jeera + cinnamon water', portion: '1 glass', calories: 10, protein: 0, carbs: 2, fat: 0, diet: ALL_DIETS },
    { name: 'Apple cider vinegar water', portion: '1 glass', calories: 5, protein: 0, carbs: 1, fat: 0, diet: ALL_DIETS },
    { name: 'Turmeric ginger tea', portion: '1 cup', calories: 10, protein: 0, carbs: 2, fat: 0, diet: ALL_DIETS },
    { name: 'Black coffee (pre-workout)', portion: '1 cup', calories: 5, protein: 0, carbs: 1, fat: 0, diet: ALL_DIETS },
  ],
  breakfast: [
    { name: 'Idli (3) with protein sambar', portion: '3 idlis + sambar', calories: 280, protein: 14, carbs: 48, fat: 4, diet: ALL_DIETS },
    { name: 'Ragi dosa + egg white scramble', portion: '2 dosas + 3 whites', calories: 270, protein: 18, carbs: 38, fat: 4, diet: NONVEG_EGG },
    { name: 'Oats porridge + chia seeds + berries', portion: '1 bowl', calories: 260, protein: 10, carbs: 40, fat: 6, diet: ALL_DIETS, allergens: ['gluten'] },
    { name: 'Moong dal chilla + mint chutney', portion: '2 chillas', calories: 220, protein: 16, carbs: 28, fat: 4, diet: ALL_DIETS },
    { name: 'Pesarattu + curd', portion: '2 dosas + curd', calories: 280, protein: 16, carbs: 36, fat: 6, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Egg white omelette + ragi toast', portion: '4 whites + 1 toast', calories: 200, protein: 20, carbs: 22, fat: 2, diet: NONVEG_EGG },
    { name: 'Tofu scramble + vegetable upma', portion: '100g tofu + 1 bowl', calories: 280, protein: 18, carbs: 34, fat: 6, diet: VEGAN, allergens: ['soy'] },
  ],
  midMorning: [
    { name: 'Sprouts salad', portion: '1 bowl (150g)', calories: 100, protein: 8, carbs: 14, fat: 1, diet: ALL_DIETS },
    { name: 'Roasted makhana', portion: '1 cup (30g)', calories: 100, protein: 3, carbs: 18, fat: 1, diet: ALL_DIETS },
    { name: 'Green tea + 4 almonds', portion: '1 cup + 4 nuts', calories: 50, protein: 2, carbs: 2, fat: 3, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Cucumber raita', portion: '1 small bowl', calories: 60, protein: 3, carbs: 6, fat: 2, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Apple + cinnamon', portion: '1 medium apple', calories: 80, protein: 0, carbs: 20, fat: 0, diet: ALL_DIETS },
    { name: 'Hummus + carrot sticks', portion: '2 tbsp + sticks', calories: 100, protein: 4, carbs: 12, fat: 4, diet: ALL_DIETS },
  ],
  lunch: [
    { name: 'Brown rice + grilled chicken + poriyal', portion: '1 cup rice + 150g chicken + veggies', calories: 440, protein: 35, carbs: 48, fat: 8, diet: NONVEG_ONLY },
    { name: 'Millet rice + sambar + salad', portion: '1 cup rice + sides', calories: 350, protein: 12, carbs: 58, fat: 5, diet: ALL_DIETS },
    { name: 'Quinoa salad bowl + paneer', portion: '1 bowl + 100g paneer', calories: 400, protein: 22, carbs: 42, fat: 12, diet: VEG_EGG, allergens: ['lactose'] },
    { name: 'Fish curry + red rice + beans poriyal', portion: '150g fish + 1 cup rice', calories: 420, protein: 32, carbs: 50, fat: 8, diet: NONVEG_ONLY, allergens: ['seafood'] },
    { name: 'Dal + brown rice + stir-fry vegetables', portion: '1 cup rice + sides', calories: 380, protein: 14, carbs: 60, fat: 6, diet: ALL_DIETS },
    { name: 'Tofu tikka + millet rice + rasam', portion: '150g tofu + 1 cup rice', calories: 380, protein: 20, carbs: 52, fat: 8, diet: VEGAN, allergens: ['soy'] },
    { name: 'Egg curry + roti + salad', portion: '2 eggs + 2 roti + salad', calories: 400, protein: 20, carbs: 42, fat: 14, diet: NONVEG_EGG, allergens: ['gluten'] },
  ],
  prePostWorkout: [
    { name: 'Banana + 5 almonds', portion: '1 banana + 5 nuts', calories: 140, protein: 4, carbs: 28, fat: 4, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Boiled egg whites', portion: '3 whites', calories: 50, protein: 12, carbs: 0, fat: 0, diet: NONVEG_EGG },
    { name: 'Paneer cubes', portion: '80g', calories: 160, protein: 14, carbs: 2, fat: 10, diet: VEG_EGG, allergens: ['lactose'] },
    { name: 'Mixed fruit bowl', portion: '1 bowl (150g)', calories: 90, protein: 1, carbs: 22, fat: 0, diet: ALL_DIETS },
    { name: 'Protein shake (whey/pea)', portion: '1 scoop', calories: 120, protein: 24, carbs: 3, fat: 1, diet: ALL_DIETS },
    { name: 'Roasted chana', nameTamil: 'Pottukadalai', portion: '30g', calories: 100, protein: 6, carbs: 15, fat: 2, diet: ALL_DIETS },
  ],
  dinner: [
    { name: 'Grilled fish + salad', portion: '150g fish + salad', calories: 250, protein: 30, carbs: 8, fat: 10, diet: NONVEG_ONLY, allergens: ['seafood'] },
    { name: 'Moong dal soup + ragi roti', portion: '1 bowl soup + 2 roti', calories: 260, protein: 14, carbs: 40, fat: 4, diet: ALL_DIETS },
    { name: 'Palak paneer (low-fat) + 1 chapati', portion: '100g paneer + 1 chapati', calories: 280, protein: 16, carbs: 26, fat: 10, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
    { name: 'Chicken breast + sautéed vegetables', portion: '150g chicken + veggies', calories: 280, protein: 34, carbs: 10, fat: 8, diet: NONVEG_ONLY },
    { name: 'Vegetable clear soup + multigrain toast', portion: '1 bowl + 1 toast', calories: 180, protein: 6, carbs: 28, fat: 4, diet: ALL_DIETS, allergens: ['gluten'] },
    { name: 'Egg white bhurji + roti + cucumber', portion: '4 whites + 1 roti', calories: 220, protein: 18, carbs: 28, fat: 4, diet: NONVEG_EGG, allergens: ['gluten'] },
    { name: 'Tofu stir-fry + brown rice (small)', portion: '100g tofu + 0.5 cup rice', calories: 260, protein: 16, carbs: 32, fat: 6, diet: VEGAN, allergens: ['soy'] },
  ],
};

// ---------------------------------------------------------------------------
// 5. JOINT & BONE HEALTH
// ---------------------------------------------------------------------------
const jointBoneHealthFoods: GoalFoodMap = {
  wakeUp: [
    { name: 'Turmeric milk (warm)', nameTamil: 'Manjal Paal', portion: '1 glass', calories: 120, protein: 5, carbs: 12, fat: 5, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Ginger + turmeric tea', portion: '1 cup', calories: 15, protein: 0, carbs: 3, fat: 0, diet: ALL_DIETS },
    { name: 'Ragi malt (calcium-rich)', nameTamil: 'Kezhvaragu Koozh', portion: '1 glass', calories: 180, protein: 5, carbs: 36, fat: 2, diet: ALL_DIETS },
    { name: 'Amla juice', nameTamil: 'Nellikkai Juice', portion: '1 small glass (100ml)', calories: 30, protein: 0, carbs: 7, fat: 0, diet: ALL_DIETS },
    { name: 'Warm sesame seed milk', nameTamil: 'Ellu Paal', portion: '1 glass', calories: 140, protein: 5, carbs: 8, fat: 10, diet: ALL_DIETS },
    { name: 'Soaked walnuts + warm water', portion: '5 walnuts + 1 glass', calories: 100, protein: 3, carbs: 2, fat: 8, diet: ALL_DIETS, allergens: ['nuts'] },
  ],
  breakfast: [
    { name: 'Ragi dosa with moringa chutney', nameTamil: 'Kezhvaragu Dosai + Murungai Thogayal', portion: '2 dosas', calories: 240, protein: 8, carbs: 42, fat: 4, diet: ALL_DIETS },
    { name: 'Sesame seed idli (Ellu Idli) + sambar', portion: '3 idlis', calories: 260, protein: 10, carbs: 44, fat: 5, diet: ALL_DIETS },
    { name: 'Oats + milk + almonds + berries', portion: '1 bowl', calories: 300, protein: 12, carbs: 42, fat: 8, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose', 'nuts', 'gluten'] },
    { name: 'Pesarattu + curd', portion: '2 dosas + curd', calories: 280, protein: 16, carbs: 36, fat: 6, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Whole egg + spinach omelette + ragi toast', portion: '2 eggs + toast', calories: 260, protein: 18, carbs: 22, fat: 10, diet: NONVEG_EGG },
    { name: 'Paneer paratha + turmeric milk', portion: '1 paratha + 1 glass milk', calories: 340, protein: 16, carbs: 36, fat: 12, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
    { name: 'Ragi porridge with dates + chia', portion: '1 bowl', calories: 280, protein: 8, carbs: 48, fat: 5, diet: ALL_DIETS },
  ],
  midMorning: [
    { name: 'Walnuts + dates', portion: '5 walnuts + 3 dates', calories: 200, protein: 4, carbs: 28, fat: 10, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Sesame chikki', nameTamil: 'Ellu Urundai', portion: '2 pieces', calories: 180, protein: 4, carbs: 22, fat: 8, diet: ALL_DIETS },
    { name: 'Amla + guava fruit bowl', portion: '1 bowl', calories: 80, protein: 2, carbs: 18, fat: 0, diet: ALL_DIETS },
    { name: 'Curd with flaxseeds', portion: '1 bowl (200g)', calories: 120, protein: 6, carbs: 10, fat: 5, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Turmeric milk (warm)', nameTamil: 'Manjal Paal', portion: '1 cup', calories: 100, protein: 4, carbs: 10, fat: 4, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Pumpkin seeds + sunflower seeds mix', portion: '30g', calories: 160, protein: 6, carbs: 6, fat: 12, diet: ALL_DIETS },
  ],
  lunch: [
    { name: 'Ragi rice + moringa sambar + drumstick poriyal', nameTamil: 'Murungai Keerai Sambar', portion: '1 cup rice + sides', calories: 380, protein: 14, carbs: 62, fat: 6, diet: ALL_DIETS },
    { name: 'Small fish fry (Nethili) + rice + rasam', nameTamil: 'Nethili Meen Varuval', portion: '100g fish + 1 cup rice', calories: 420, protein: 28, carbs: 52, fat: 10, diet: NONVEG_ONLY, allergens: ['seafood'] },
    { name: 'Spinach dal + brown rice + curd', portion: '1 cup rice + sides', calories: 380, protein: 16, carbs: 58, fat: 6, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose'] },
    { name: 'Sardine curry + millet rice', portion: '150g sardine + 1 cup rice', calories: 440, protein: 30, carbs: 50, fat: 12, diet: NONVEG_ONLY, allergens: ['seafood'] },
    { name: 'Paneer + methi curry + roti', portion: '100g paneer + 2 roti', calories: 400, protein: 20, carbs: 40, fat: 14, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
    { name: 'Tofu + moringa stir-fry + millet rice', portion: '150g tofu + 1 cup rice', calories: 400, protein: 20, carbs: 54, fat: 10, diet: VEGAN, allergens: ['soy'] },
    { name: 'Nalli elumbu soup + rice + poriyal', nameTamil: 'Nalli Elumbu Rasam', portion: '1 bowl soup + 1 cup rice', calories: 420, protein: 24, carbs: 50, fat: 12, diet: NONVEG_ONLY },
  ],
  prePostWorkout: [
    { name: 'Warm ginger water + dates', portion: '1 cup + 3 dates', calories: 100, protein: 1, carbs: 24, fat: 0, diet: ALL_DIETS },
    { name: 'Turmeric milk + walnuts', portion: '1 cup + 4 walnuts', calories: 180, protein: 7, carbs: 14, fat: 10, diet: ['veg', 'nonVeg', 'eggetarian'], allergens: ['lactose', 'nuts'] },
    { name: 'Banana + almond butter', portion: '1 banana + 1 tbsp', calories: 180, protein: 4, carbs: 28, fat: 7, diet: ALL_DIETS, allergens: ['nuts'] },
    { name: 'Boiled eggs + orange', portion: '2 eggs + 1 orange', calories: 200, protein: 14, carbs: 16, fat: 10, diet: NONVEG_EGG },
    { name: 'Mixed seeds trail mix', portion: '30g', calories: 160, protein: 6, carbs: 8, fat: 12, diet: ALL_DIETS },
    { name: 'Amla juice + roasted chana', portion: '100ml + 30g', calories: 130, protein: 6, carbs: 22, fat: 2, diet: ALL_DIETS },
  ],
  dinner: [
    { name: 'Moringa (drumstick leaves) soup + ragi roti', nameTamil: 'Murungai Keerai Soup', portion: '1 bowl + 2 roti', calories: 260, protein: 10, carbs: 40, fat: 4, diet: ALL_DIETS },
    { name: 'Mutton bone broth + rice', nameTamil: 'Nalli Elumbu Soup', portion: '1 bowl + 1 cup rice', calories: 380, protein: 22, carbs: 46, fat: 10, diet: NONVEG_ONLY },
    { name: 'Salmon / mackerel curry + millet rice', portion: '150g fish + 1 cup rice', calories: 420, protein: 30, carbs: 48, fat: 12, diet: NONVEG_ONLY, allergens: ['seafood'] },
    { name: 'Spinach paneer + chapati', portion: '100g paneer + 2 chapati', calories: 340, protein: 18, carbs: 34, fat: 12, diet: VEG_EGG, allergens: ['lactose', 'gluten'] },
    { name: 'Dal fry + ragi roti + sesame chutney', portion: '1 bowl dal + 2 roti', calories: 320, protein: 14, carbs: 48, fat: 6, diet: ALL_DIETS },
    { name: 'Kale tofu stir-fry + quinoa', portion: '150g tofu + 1 cup', calories: 360, protein: 20, carbs: 42, fat: 10, diet: VEGAN, allergens: ['soy'] },
    { name: 'Egg curry + turmeric rice', portion: '2 eggs + 1 cup rice', calories: 360, protein: 18, carbs: 46, fat: 10, diet: NONVEG_EGG },
  ],
};

// ---------------------------------------------------------------------------
// Master index
// ---------------------------------------------------------------------------
export const goalFoodDatabase: Record<GoalKey, GoalFoodMap> = {
  weightLoss: weightLossFoods,
  weightGain: weightGainFoods,
  muscleGain: muscleGainFoods,
  bodyToning: bodyToningFoods,
  jointBoneHealth: jointBoneHealthFoods,
};

// ---------------------------------------------------------------------------
// Snack Quick-Reference
// ---------------------------------------------------------------------------
export const snacksByGoal: Record<GoalKey, string[]> = {
  weightLoss: ['Cucumber slices', 'Roasted chana', 'Green tea', '1 seasonal fruit', 'Buttermilk (Neer Mor)'],
  weightGain: ['Peanut butter toast', 'Banana shake', 'Dry fruits mix', 'Peanut chikki (Kadalai Mittai)', 'Cheese sandwich'],
  muscleGain: ['Protein shake', 'Boiled eggs', 'Paneer cubes', 'Mixed nuts', 'Greek yogurt'],
  bodyToning: ['Sprouts salad', 'Roasted makhana', 'Green tea', 'Fruit + 5 almonds', 'Hummus + veggies'],
  jointBoneHealth: ['Turmeric milk', 'Walnuts + dates', 'Sesame chikki (Ellu Urundai)', 'Amla juice', 'Warm ginger water'],
};

// ---------------------------------------------------------------------------
// Foods to Avoid by Goal
// ---------------------------------------------------------------------------
export const avoidByGoal: Record<GoalKey, string[]> = {
  weightLoss: [
    'Deep-fried items (Medu Vada, Bonda, Bajji)',
    'White rice in large portions',
    'Sugary drinks and fruit juices',
    'Maida-based foods (Naan, white bread)',
    'Excessive coconut chutney / oil',
    'Sweets and Payasam',
  ],
  weightGain: [
    'Skipping meals',
    'Low-calorie / diet foods',
    'Excessive fibre that reduces appetite',
    'Carbonated drinks and soda',
    'Junk food-based calorie surplus',
  ],
  muscleGain: [
    'Alcohol (especially beer)',
    'Excessive sugar and sweets',
    'Processed / packaged snacks',
    'Skipping post-workout meals',
    'Low protein meals',
  ],
  bodyToning: [
    'Sugar, maida, fried foods',
    'Alcohol and soda',
    'Processed snacks with preservatives',
    'Late-night heavy eating',
    'Excessive carbs outside workout window',
  ],
  jointBoneHealth: [
    'Excess salt and sodium',
    'Soda / cola / carbonated drinks',
    'Excess sugar and processed food',
    'Red meat in excess',
    'Excess caffeine (>3 cups/day)',
    'Alcohol',
  ],
};

// ---------------------------------------------------------------------------
// Cooking Oil Guidelines
// ---------------------------------------------------------------------------
export const cookingOilGuidelines = [
  'Use cold-pressed (Chekku) Sesame oil (Nalla Ennai) for everyday cooking',
  'Groundnut oil for deep-frying (occasional)',
  'Limited Coconut oil for specific South Indian dishes',
  'Ghee in moderation for flavour (1-2 tsp/day)',
  'Avoid refined seed oils (sunflower, canola, soybean)',
];

// ---------------------------------------------------------------------------
// Monthly Do's and Don'ts
// ---------------------------------------------------------------------------
export interface MonthlyGuidance {
  dos: string[];
  donts: string[];
  supplements?: string[];
}

export const monthlyGuidance: Record<GoalKey, MonthlyGuidance> = {
  weightLoss: {
    dos: [
      'Drink 3–4 litres of water daily',
      'Eat slowly and chew well — stop at 80% full',
      'Focus on millets and whole grains over white rice',
      'Include protein in every single meal',
      'Walk 8,000–10,000 steps daily outside the gym',
      'Track your food intake for the first 2 weeks',
    ],
    donts: [
      'Do not skip breakfast or any meal',
      'Avoid eating after 8:30 PM',
      'Do not drink calories (juices, sodas, chai with sugar)',
      'Avoid crash diets or eating below 1200 kcal',
      'Do not weigh yourself daily — use weekly averages',
    ],
  },
  weightGain: {
    dos: [
      'Eat every 2.5–3 hours to maintain calorie surplus',
      'Add ghee, nuts, and calorie-dense toppings to meals',
      'Prioritise whole food calories over junk food',
      'Do compound strength training 4–5x/week',
      'Sleep 7–8 hours for optimal recovery and growth',
      'Track weight weekly — aim for 0.3–0.5 kg/week gain',
    ],
    donts: [
      'Do not skip meals — eat even when not hungry',
      'Avoid excessive cardio that burns surplus calories',
      'Do not rely only on supplements for calories',
      'Avoid eating only junk food for the surplus',
      'Do not go more than 4 hours without eating',
    ],
  },
  muscleGain: {
    dos: [
      'Hit 1.8–2.2g protein per kg body weight daily',
      'Time your carbs around workouts (pre/post)',
      'Progressive overload in your training program',
      'Drink 3.5–4 litres of water daily',
      'Sleep 7–9 hours for muscle recovery and growth',
      'Have a protein source within 60 minutes post-workout',
    ],
    donts: [
      'Do not skip post-workout nutrition',
      'Avoid alcohol — it impairs protein synthesis',
      'Do not train the same muscle group daily',
      'Avoid very low-fat diets — fats support hormones',
      'Do not neglect rest days',
    ],
    supplements: [
      'Whey Protein (post-workout, 1 scoop)',
      'Creatine Monohydrate (5g/day)',
      'Multivitamin (daily)',
    ],
  },
  bodyToning: {
    dos: [
      'Combine weight training + 20 min cardio per session',
      'Keep carb-heavy meals near your workout window',
      'Eat protein with every meal (1.8–2g/kg)',
      'Track measurements (waist, chest, arms) bi-weekly',
      'Stay hydrated — 3–4 litres/day',
      'Get 7–8 hours sleep for recovery',
    ],
    donts: [
      'Do not completely cut carbs or fats',
      'Avoid excessive cheat meals — max 1/week',
      'Do not rely only on cardio without resistance training',
      'Avoid late-night heavy eating',
      'Do not expect results in 1 week — allow 4–6 weeks',
    ],
  },
  jointBoneHealth: {
    dos: [
      'Include calcium-rich foods daily (ragi, sesame, dairy)',
      'Get 15–20 minutes of morning sunlight for Vitamin D',
      'Eat anti-inflammatory spices: turmeric, ginger, garlic',
      'Include omega-3 foods 3–4 times per week',
      'Do low-impact exercises (swimming, yoga, walking)',
      'Drink bone broth or ragi malt regularly',
    ],
    donts: [
      'Do not consume excess salt or processed food',
      'Avoid carbonated drinks (leach calcium from bones)',
      'Do not skip warm-ups before exercise',
      'Avoid high-impact exercises without proper guidance',
      'Do not ignore persistent joint pain — see a doctor',
    ],
    supplements: [
      'Calcium + Vitamin D3 (as per doctor advice)',
      'Omega-3 Fish Oil (1000mg/day) or Algae-based for vegans',
      'Collagen peptides (optional, consult doctor)',
    ],
  },
};

// ---------------------------------------------------------------------------
// Goal metadata (labels, colours, icons, macro splits)
// ---------------------------------------------------------------------------
export interface GoalMeta {
  key: GoalKey;
  label: string;
  emoji: string;
  tagline: string;
  color: string;
  macroSplit: { protein: number; carbs: number; fat: number };
  calorieAdjust: number; // kcal delta from TDEE (negative = deficit)
}

export const goalMeta: GoalMeta[] = [
  {
    key: 'weightLoss',
    label: 'Weight Loss',
    emoji: '🔥',
    tagline: 'Burn fat, preserve lean muscle, feel lighter',
    color: '#f97316',
    macroSplit: { protein: 30, carbs: 40, fat: 30 },
    calorieAdjust: -400,
  },
  {
    key: 'weightGain',
    label: 'Weight Gain',
    emoji: '💪',
    tagline: 'Fuel your body with calorie-dense nutrition',
    color: '#10b981',
    macroSplit: { protein: 25, carbs: 50, fat: 25 },
    calorieAdjust: 400,
  },
  {
    key: 'muscleGain',
    label: 'Muscle Gain',
    emoji: '🏋️',
    tagline: 'Maximise protein for hypertrophy and strength',
    color: '#3b82f6',
    macroSplit: { protein: 35, carbs: 40, fat: 25 },
    calorieAdjust: 250,
  },
  {
    key: 'bodyToning',
    label: 'Body Toning',
    emoji: '🎯',
    tagline: 'Lean out with controlled portions and balance',
    color: '#8b5cf6',
    macroSplit: { protein: 35, carbs: 40, fat: 25 },
    calorieAdjust: -200,
  },
  {
    key: 'jointBoneHealth',
    label: 'Joint & Bone Health',
    emoji: '🦴',
    tagline: 'Anti-inflammatory foods for strong bones and joints',
    color: '#06b6d4',
    macroSplit: { protein: 25, carbs: 45, fat: 30 },
    calorieAdjust: 0,
  },
];

// ---------------------------------------------------------------------------
// Activity level options (reused from CalculatorsPage)
// ---------------------------------------------------------------------------
export const activityOptions = [
  { value: 1.2, label: 'Sedentary', description: 'Desk job, little to no exercise' },
  { value: 1.375, label: 'Lightly Active', description: 'Light exercise 1–3 days/week' },
  { value: 1.55, label: 'Moderately Active', description: 'Moderate gym workouts 3–5 days/week' },
  { value: 1.725, label: 'Very Active', description: 'Hard exercise or heavy training 6–7 days/week' },
];

// ---------------------------------------------------------------------------
// Region options
// ---------------------------------------------------------------------------
export const regionOptions: { key: RegionKey; label: string }[] = [
  { key: 'tamilNadu', label: 'Tamil Nadu' },
  { key: 'kerala', label: 'Kerala' },
  { key: 'andhraTelangana', label: 'Andhra / Telangana' },
  { key: 'karnataka', label: 'Karnataka' },
];

// ---------------------------------------------------------------------------
// Allergy options
// ---------------------------------------------------------------------------
export const allergyOptions = [
  { key: 'lactose', label: 'Lactose / Dairy' },
  { key: 'nuts', label: 'Nuts' },
  { key: 'gluten', label: 'Gluten / Wheat' },
  { key: 'seafood', label: 'Seafood' },
  { key: 'soy', label: 'Soy' },
];

// ---------------------------------------------------------------------------
// Food Protein Levels (lookup data)
// ---------------------------------------------------------------------------
export interface ProteinLevelItem {
  id: number;
  name: string;
  protein: string;
  calories: string;
}

export const foodProteinLevels: ProteinLevelItem[] = [
  { id: 1, name: 'Chicken (cooked, 100g)', protein: '27', calories: '165' },
  { id: 2, name: 'Paneer (100g)', protein: '18', calories: '265' },
  { id: 3, name: 'Oats (dry, 100g)', protein: '13', calories: '389' },
  { id: 4, name: 'Raw Peanuts (boiled, 100g)', protein: '13', calories: '318' },
  { id: 5, name: 'Black Channa (boiled, 100g)', protein: '8.9', calories: '164' },
  { id: 6, name: 'White Channa (boiled, 100g)', protein: '9', calories: '164' },
  { id: 7, name: 'Green Moong (boiled, 100g)', protein: '7', calories: '105' },
  { id: 8, name: 'Pumpkin Seeds (28g, ~1oz)', protein: '7', calories: '151' },
  { id: 9, name: 'Egg (bhurji, 1)', protein: '7', calories: '110' },
  { id: 10, name: 'Egg (omelette, 1)', protein: '6.8', calories: '94' },
  { id: 11, name: 'Egg (1 whole)', protein: '6', calories: '70' },
  { id: 12, name: 'Green Peas (cooked, 100g)', protein: '5.4', calories: '84' },
  { id: 13, name: 'Peanut Butter (1 tbsp ~16g)', protein: '4', calories: '94' },
  { id: 14, name: 'Dry Fruits (mixed, 50g)', protein: '4', calories: '150' },
  { id: 15, name: 'Egg White (boiled, 1)', protein: '3.6', calories: '17' },
  { id: 16, name: 'Curd (100g)', protein: '3.5', calories: '61' },
  { id: 17, name: 'Wheat Bread (1 slice)', protein: '3.5', calories: '70' },
  { id: 18, name: 'Almonds (soaked/not, 10 pcs)', protein: '2.5', calories: '70' },
  { id: 19, name: 'Guava (100g)', protein: '2.6', calories: '68' },
  { id: 20, name: 'Spinach (Palak, cooked 100g)', protein: '2.9', calories: '23' },
  { id: 21, name: 'Broccoli (cooked, 100g)', protein: '2.8', calories: '35' },
  { id: 22, name: 'Mushrooms (cooked, 100g)', protein: '3.1', calories: '28' },
  { id: 23, name: 'Dry Grapes (raisins, 100g)', protein: '3.1', calories: '299' },
  { id: 24, name: 'Milk (cow, 100ml)', protein: '3.2', calories: '61' },
  { id: 25, name: 'Dry Fruits Juice (nuts mix)', protein: '3-5', calories: '120-180' },
  { id: 26, name: 'Walnuts (5 halves ~14g)', protein: '2', calories: '93' },
  { id: 27, name: 'Dry Fig (2 pieces ~40g)', protein: '1', calories: '100' },
  { id: 28, name: 'Beetroot Juice (100ml)', protein: '1', calories: '43' },
  { id: 29, name: 'Carrot Juice (100ml)', protein: '0.9', calories: '39' },
  { id: 30, name: 'Carrot (100g)', protein: '0.9', calories: '41' },
  { id: 31, name: 'Pomegranate Juice (100ml)', protein: '0.1', calories: '54' },
  { id: 32, name: 'Dates (3 pieces ~24g)', protein: '0.6', calories: '66' },
  { id: 33, name: 'Watermelon (100g)', protein: '0.6', calories: '30' },
  { id: 34, name: 'Cucumber (100g)', protein: '0.7', calories: '16' },
  { id: 35, name: 'Watermelon Juice (100ml)', protein: '0.2', calories: '30' },
  { id: 36, name: 'Butter (10g)', protein: '0.1', calories: '72' },
];

