import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Fire,
  Activity,
  PersonFill,
  Rulers,
  ArrowCounterclockwise,
  Bullseye,
  TrophyFill,
  ChevronRight,
  InfoCircleFill,
  HeartFill,
  GraphUpArrow,
  GraphDownArrow
} from 'react-bootstrap-icons';
import PageHero from './PageHero';

// --- BMI Types & Helpers ---
interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  description: string;
}

function calculateBmi(weightKg: number, heightCm: number): BMIResult {
  const heightInMeters = heightCm / 100;
  const bmi = weightKg / (heightInMeters * heightInMeters);

  let category: string;
  let color: string;
  let description: string;

  if (bmi < 18.5) {
    category = 'Underweight';
    color = '#3b82f6'; // Blue
    description = 'You are in the underweight range. Consider speaking with a trainer or healthcare provider about a structured nutrition plan to build muscle mass safely.';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal';
    color = '#10b981'; // Green
    description = 'Great job! You have a healthy weight. Keep up your active lifestyle, strength training, and balanced nutrition to maintain it.';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
    color = '#f97316'; // Orange
    description = 'You are in the overweight range. Combining a slight calorie deficit with regular cardiovascular and strength training can help you lean down.';
  } else {
    category = 'Obese';
    color = '#ef4444'; // Red
    description = 'You are in the obese range. We recommend consulting a healthcare provider and working with our certified coaches to design a safe, low-impact exercise and nutrition program.';
  }

  return { bmi, category, color, description };
}

// --- Calorie Types & Helpers ---
interface CalorieResult {
  bmr: number;
  tdee: number;
  activityLevelLabel: string;
}

const activityLevels = [
  { value: '1.2', label: 'Sedentary', description: 'Desk job, little to no exercise' },
  { value: '1.375', label: 'Lightly Active', description: 'Light exercise 1-3 days/week' },
  { value: '1.55', label: 'Moderately Active', description: 'Moderate gym workouts 3-5 days/week' },
  { value: '1.725', label: 'Very Active', description: 'Hard exercise or heavy training 6-7 days/week' },
  { value: '1.9', label: 'Super Active', description: 'Athletes, physical jobs, twice-a-day training' }
];

function calculateBMR(weightKg: number, heightCm: number, age: number, gender: 'male' | 'female'): number {
  if (gender === 'male') {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }
}

// --- Macro Types & Helpers ---
interface MacroResult {
  bmr: number;
  tdee: number;
  goalCalories: number;
  protein: number;
  carbs: number;
  fat: number;
  proteinCalories: number;
  carbsCalories: number;
  fatCalories: number;
}

const goalAdjustments: Record<string, { factor: number; label: string; colorClass: string; proteinMultiplier: number; description: string }> = {
  loss: {
    factor: 0.8,
    label: 'Fat Loss (20% Deficit)',
    colorClass: 'text-orange',
    proteinMultiplier: 1.8,
    description: 'Aiming to burn fat while retaining lean muscle. Eating below your maintenance level.'
  },
  maintain: {
    factor: 1.0,
    label: 'Maintenance',
    colorClass: 'text-yellow',
    proteinMultiplier: 1.6,
    description: 'Eating at your exact energy expenditure to preserve current body weight and composition.'
  },
  gain: {
    factor: 1.1,
    label: 'Muscle Gain (10% Surplus)',
    colorClass: 'text-blue',
    proteinMultiplier: 2.0,
    description: 'Providing extra energy and protein for hypertrophy (muscle building) and strength gains.'
  }
};

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<'bmi' | 'calorie' | 'macro'>('bmi');

  // --- Shared Input Units State ---
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'inch'>('cm');

  // Helper converter: weight input to kg
  const toKg = (val: string): number => {
    const num = parseFloat(val);
    if (isNaN(num)) return 0;
    return weightUnit === 'kg' ? num : num * 0.45359237;
  };

  // Helper converter: height input to cm
  const toCm = (val: string): number => {
    const num = parseFloat(val);
    if (isNaN(num)) return 0;
    return heightUnit === 'cm' ? num : num * 2.54;
  };

  // --- 1. BMI State ---
  const [bmiWeight, setBmiWeight] = useState('');
  const [bmiHeight, setBmiHeight] = useState('');
  const [bmiResult, setBmiResult] = useState<BMIResult | null>(null);
  const [bmiError, setBmiError] = useState('');

  const handleBmiCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setBmiError('');
    setBmiResult(null);

    const wKg = toKg(bmiWeight);
    const hCm = toCm(bmiHeight);

    if (wKg <= 0 || hCm <= 0) {
      setBmiError('Please enter valid, positive values for height and weight.');
      return;
    }
    if (wKg > 400 || hCm > 272) {
      setBmiError('Please verify your measurements. The entered values seem extremely high.');
      return;
    }

    const res = calculateBmi(wKg, hCm);
    setBmiResult(res);
  };

  const handleBmiReset = () => {
    setBmiWeight('');
    setBmiHeight('');
    setBmiResult(null);
    setBmiError('');
  };

  // --- 2. Calorie State ---
  const [calGender, setCalGender] = useState<'male' | 'female'>('male');
  const [calAge, setCalAge] = useState('');
  const [calWeight, setCalWeight] = useState('');
  const [calHeight, setCalHeight] = useState('');
  const [calActivity, setCalActivity] = useState('1.55');
  const [calResult, setCalResult] = useState<CalorieResult | null>(null);
  const [calError, setCalError] = useState('');

  const handleCalCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalError('');
    setCalResult(null);

    const wKg = toKg(calWeight);
    const hCm = toCm(calHeight);
    const age = parseInt(calAge);

    if (wKg <= 0 || hCm <= 0 || isNaN(age) || age <= 0) {
      setCalError('Please fill in all details with valid positive numbers.');
      return;
    }
    if (age < 12 || age > 100) {
      setCalError('This calculator is designed for individuals between 12 and 100 years old.');
      return;
    }
    if (wKg > 400 || hCm > 272) {
      setCalError('Please double check inputs. Values are outside ordinary physical limits.');
      return;
    }

    const bmr = calculateBMR(wKg, hCm, age, calGender);
    const activityMult = parseFloat(calActivity);
    const tdee = bmr * activityMult;

    const matchedActivity = activityLevels.find(a => a.value === calActivity);

    setCalResult({
      bmr,
      tdee,
      activityLevelLabel: matchedActivity ? matchedActivity.label : 'Moderately Active'
    });
  };

  const handleCalReset = () => {
    setCalAge('');
    setCalWeight('');
    setCalHeight('');
    setCalGender('male');
    setCalActivity('1.55');
    setCalResult(null);
    setCalError('');
  };

  // --- 3. Macro State ---
  const [macGender, setMacGender] = useState<'male' | 'female'>('male');
  const [macAge, setMacAge] = useState('');
  const [macWeight, setMacWeight] = useState('');
  const [macHeight, setMacHeight] = useState('');
  const [macActivity, setMacActivity] = useState('1.55');
  const [macGoal, setMacGoal] = useState('maintain');
  const [macResult, setMacResult] = useState<MacroResult | null>(null);
  const [macError, setMacError] = useState('');

  const handleMacCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setMacError('');
    setMacResult(null);

    const wKg = toKg(macWeight);
    const hCm = toCm(macHeight);
    const age = parseInt(macAge);

    if (wKg <= 0 || hCm <= 0 || isNaN(age) || age <= 0) {
      setMacError('Please enter valid numbers for gender, age, weight, and height.');
      return;
    }
    if (age < 12 || age > 100) {
      setMacError('Age must be between 12 and 100.');
      return;
    }
    if (wKg > 400 || hCm > 272) {
      setMacError('Please verify height and weight inputs.');
      return;
    }

    // Step 1: Mifflin BMR
    const bmr = calculateBMR(wKg, hCm, age, macGender);

    // Step 2: TDEE
    const activityMult = parseFloat(macActivity);
    const tdee = bmr * activityMult;

    // Step 3: Adjusted Goal Calories
    const goalCal = tdee * goalAdjustments[macGoal].factor;

    // Step 4: Split
    // Protein based on goal multiplier per kg
    const proteinGrams = wKg * goalAdjustments[macGoal].proteinMultiplier;
    const proteinCal = proteinGrams * 4;

    // Fat: 25% of goal calories
    const fatCal = goalCal * 0.25;
    const fatGrams = fatCal / 9;

    // Carbs: remainder
    const carbsCal = Math.max(0, goalCal - proteinCal - fatCal);
    const carbsGrams = carbsCal / 4;

    setMacResult({
      bmr,
      tdee,
      goalCalories: goalCal,
      protein: proteinGrams,
      carbs: carbsGrams,
      fat: fatGrams,
      proteinCalories: proteinCal,
      carbsCalories: carbsCal,
      fatCalories: fatCal
    });
  };

  const handleMacReset = () => {
    setMacAge('');
    setMacWeight('');
    setMacHeight('');
    setMacGender('male');
    setMacActivity('1.55');
    setMacGoal('maintain');
    setMacResult(null);
    setMacError('');
  };

  return (
    <>
      <Helmet>
        <title>Fitness Calculators - BMI, Calorie, & Macros | FlexFit Club Chennai</title>
        <meta
          name="description"
          content="Calculate your Body Mass Index (BMI), Daily Calorie Needs (BMR & TDEE), and custom macronutrient ratios to support your fat loss or muscle building goal."
        />
        <link rel="canonical" href="https://flexfitclub.in/calculators" />
      </Helmet>

      <PageHero
        label="Calculators"
        title="Know Your"
        highlight="Numbers"
        subtitle="Track your BMI, establish your daily calorie targets, and customize your nutrition ratios to accelerate your fitness results."
      />

      <section className="section section-card">
        <div className="container">
          {/* Unit Toggle Buttons */}
          <div className="d-flex justify-content-center justify-content-sm-end gap-3 mb-4 flex-wrap">
            <div className="btn-group" role="group" aria-label="Weight Units">
              <button
                type="button"
                className={`btn-ff px-3 py-1 btn-sm ${weightUnit === 'kg' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                style={{ minHeight: '36px', fontSize: '0.8rem' }}
                onClick={() => setWeightUnit('kg')}
              >
                KG
              </button>
              <button
                type="button"
                className={`btn-ff px-3 py-1 btn-sm ${weightUnit === 'lb' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                style={{ minHeight: '36px', fontSize: '0.8rem' }}
                onClick={() => setWeightUnit('lb')}
              >
                LB
              </button>
            </div>

            <div className="btn-group" role="group" aria-label="Height Units">
              <button
                type="button"
                className={`btn-ff px-3 py-1 btn-sm ${heightUnit === 'cm' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                style={{ minHeight: '36px', fontSize: '0.8rem' }}
                onClick={() => setHeightUnit('cm')}
              >
                CM
              </button>
              <button
                type="button"
                className={`btn-ff px-3 py-1 btn-sm ${heightUnit === 'inch' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                style={{ minHeight: '36px', fontSize: '0.8rem' }}
                onClick={() => setHeightUnit('inch')}
              >
                INCH
              </button>
            </div>
          </div>

          {/* Nav Tabs Switcher */}
          <div className="d-flex justify-content-center gap-2 gap-sm-3 mb-5 flex-wrap">
            <button
              className={`btn-ff d-flex align-items-center gap-2 ${activeTab === 'bmi' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
              onClick={() => setActiveTab('bmi')}
            >
              <Rulers />
              <span>BMI Calculator</span>
            </button>
            <button
              className={`btn-ff d-flex align-items-center gap-2 ${activeTab === 'calorie' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
              onClick={() => setActiveTab('calorie')}
            >
              <Fire />
              <span>Calorie Calculator</span>
            </button>
            <button
              className={`btn-ff d-flex align-items-center gap-2 ${activeTab === 'macro' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
              onClick={() => setActiveTab('macro')}
            >
              <Calculator />
              <span>Macro Calculator</span>
            </button>
          </div>

          {/* Calculator Layout */}
          {activeTab === 'bmi' && (
            <div className="row g-4 align-items-stretch" data-aos="fade-up">
              {/* Form Input */}
              <div className="col-lg-5">
                <div className="contact-card">
                  <h3 className="mb-4 text-yellow text-uppercase">Enter Body Stats</h3>
                  <form onSubmit={handleBmiCalculate}>
                    <div className="mb-4">
                      <label className="form-label text-yellow small fw-bold text-uppercase">
                        Weight ({weightUnit === 'kg' ? 'kg' : 'lbs'})
                      </label>
                      <input
                        type="number"
                        step="any"
                        placeholder={`Enter weight in ${weightUnit}`}
                        className="form-control"
                        value={bmiWeight}
                        onChange={(e) => setBmiWeight(e.target.value)}
                        required
                        min="1"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-yellow small fw-bold text-uppercase">
                        Height ({heightUnit === 'cm' ? 'cm' : 'inches'})
                      </label>
                      <input
                        type="number"
                        step="any"
                        placeholder={`Enter height in ${heightUnit}`}
                        className="form-control"
                        value={bmiHeight}
                        onChange={(e) => setBmiHeight(e.target.value)}
                        required
                        min="1"
                      />
                    </div>

                    {bmiError && <div className="alert alert-danger mb-4 py-2 small">{bmiError}</div>}

                    <div className="d-flex gap-3 mt-4">
                      <button className="btn-ff btn-ff-primary flex-grow-1" type="submit">
                        Calculate BMI
                      </button>
                      <button
                        className="btn-ff btn-ff-outline px-3"
                        type="button"
                        onClick={handleBmiReset}
                        title="Reset Fields"
                      >
                        <ArrowCounterclockwise />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Result Display */}
              <div className="col-lg-7">
                <div className="contact-card d-flex flex-column justify-content-between h-100">
                  {bmiResult ? (
                    <div className="text-center p-3 animate-fade-in">
                      <h3 className="mb-4 text-uppercase">Your BMI Result</h3>

                      <div className="d-inline-flex justify-content-center align-items-center mb-4 position-relative" style={{ width: '160px', height: '160px' }}>
                        <svg width="160" height="160" viewBox="0 0 120 120" className="position-absolute start-0 top-0">
                          <circle
                            cx="60"
                            cy="60"
                            r="52"
                            fill="transparent"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="8"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="52"
                            fill="transparent"
                            stroke={bmiResult.color}
                            strokeWidth="8"
                            strokeDasharray="326.72"
                            strokeDashoffset={326.72 - (326.72 * Math.min(Math.max((bmiResult.bmi - 15) / 20, 0), 1))}
                            strokeLinecap="round"
                            style={{
                              transition: 'stroke-dashoffset 0.8s ease-in-out',
                              transform: 'rotate(-90deg)',
                              transformOrigin: '50% 50%'
                            }}
                          />
                        </svg>
                        <div className="text-center position-relative z-index-1">
                          <span className="d-block h1 mb-0 fw-bold" style={{ color: bmiResult.color }}>
                            {bmiResult.bmi.toFixed(2)}
                          </span>
                          <span className="text-muted-ff small text-uppercase fw-bold">BMI</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="fw-bold mb-2 text-uppercase" style={{ color: bmiResult.color, fontSize: '1.5rem' }}>
                          {bmiResult.category}
                        </h4>
                        <p className="text-muted-ff max-w-620 mx-auto px-lg-4">{bmiResult.description}</p>
                      </div>

                      {/* Scale Slider */}
                      <div className="mt-5 px-sm-3">
                        <p className="text-yellow small fw-bold text-uppercase mb-2">BMI Scale Position</p>
                        <div className="position-relative mb-2" style={{ height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px' }}>
                          <div className="d-flex h-100 w-100 rounded-pill overflow-hidden">
                            <div style={{ background: '#3b82f6', width: '25%' }} title="Underweight" />
                            <div style={{ background: '#10b981', width: '25%' }} title="Normal" />
                            <div style={{ background: '#f97316', width: '25%' }} title="Overweight" />
                            <div style={{ background: '#ef4444', width: '25%' }} title="Obese" />
                          </div>
                          {/* Cursor indicator pin */}
                          <div
                            className="position-absolute top-50 translate-middle-y"
                            style={{
                              left: `calc(${Math.min(Math.max((bmiResult.bmi - 15) / 20 * 100, 0), 100)}% - 6px)`,
                              transition: 'left 0.8s ease-in-out',
                              width: '12px',
                              height: '22px',
                              background: '#fff',
                              border: '2px solid var(--color-black)',
                              borderRadius: '4px',
                              boxShadow: '0 0 10px rgba(255,255,255,0.9)'
                            }}
                          />
                        </div>
                        <div className="row text-center text-uppercase fw-bold g-1" style={{ fontSize: '0.72rem' }}>
                          <div className="col-3" style={{ color: '#3b82f6' }}>&lt; 18.5<br /><span className="d-none d-sm-inline">Underweight</span></div>
                          <div className="col-3" style={{ color: '#10b981' }}>18.5 - 24.9<br /><span className="d-none d-sm-inline">Normal</span></div>
                          <div className="col-3" style={{ color: '#f97316' }}>25 - 29.9<br /><span className="d-none d-sm-inline">Overweight</span></div>
                          <div className="col-3" style={{ color: '#ef4444' }}>&ge; 30<br /><span className="d-none d-sm-inline">Obese</span></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center my-auto py-5 text-muted-ff">
                      <Rulers className="mb-3 text-yellow" style={{ fontSize: '3.5rem' }} />
                      <h4 className="text-uppercase mb-2 text-white">Awaiting Calculation</h4>
                      <p className="small max-w-620 mx-auto">
                        Enter your weight and height on the left panel, choose your preference units, and click "Calculate BMI" to see your results immediately.
                      </p>
                    </div>
                  )}

                  {/* Info footer inside card */}
                  <div className="mt-4 pt-3 border-top border-secondary small text-muted-ff">
                    <div className="d-flex gap-2 align-items-start">
                      <InfoCircleFill className="text-yellow mt-1 flex-shrink-0" />
                      <p className="mb-0">
                        <strong>Educational Disclaimer:</strong> BMI (Body Mass Index) is a standard diagnostic tool based on height and weight. It does not directly account for muscle mass, bone density, water retention, age, or sex.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'calorie' && (
            <div className="row g-4 align-items-stretch" data-aos="fade-up">
              {/* Form Input */}
              <div className="col-lg-5">
                <div className="contact-card">
                  <h3 className="mb-4 text-yellow text-uppercase">Enter Details</h3>
                  <form onSubmit={handleCalCalculate}>
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Gender</label>
                      <div className="d-flex gap-3">
                        <button
                          type="button"
                          className={`btn-ff flex-grow-1 ${calGender === 'male' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                          style={{ minHeight: '44px' }}
                          onClick={() => setCalGender('male')}
                        >
                          Male
                        </button>
                        <button
                          type="button"
                          className={`btn-ff flex-grow-1 ${calGender === 'female' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                          style={{ minHeight: '44px' }}
                          onClick={() => setCalGender('female')}
                        >
                          Female
                        </button>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Age (years)</label>
                      <input
                        type="number"
                        placeholder="Enter your age"
                        className="form-control"
                        value={calAge}
                        onChange={(e) => setCalAge(e.target.value)}
                        required
                        min="1"
                        max="120"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">
                        Weight ({weightUnit === 'kg' ? 'kg' : 'lbs'})
                      </label>
                      <input
                        type="number"
                        step="any"
                        placeholder={`Enter weight in ${weightUnit}`}
                        className="form-control"
                        value={calWeight}
                        onChange={(e) => setCalWeight(e.target.value)}
                        required
                        min="1"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">
                        Height ({heightUnit === 'cm' ? 'cm' : 'inches'})
                      </label>
                      <input
                        type="number"
                        step="any"
                        placeholder={`Enter height in ${heightUnit}`}
                        className="form-control"
                        value={calHeight}
                        onChange={(e) => setCalHeight(e.target.value)}
                        required
                        min="1"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Activity Level</label>
                      <select
                        className="form-select"
                        value={calActivity}
                        onChange={(e) => setCalActivity(e.target.value)}
                      >
                        {activityLevels.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label} ({level.description})
                          </option>
                        ))}
                      </select>
                    </div>

                    {calError && <div className="alert alert-danger mb-4 py-2 small">{calError}</div>}

                    <div className="d-flex gap-3">
                      <button className="btn-ff btn-ff-primary flex-grow-1" type="submit">
                        Calculate Calories
                      </button>
                      <button
                        className="btn-ff btn-ff-outline px-3"
                        type="button"
                        onClick={handleCalReset}
                        title="Reset Fields"
                      >
                        <ArrowCounterclockwise />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Result Display */}
              <div className="col-lg-7">
                <div className="contact-card d-flex flex-column justify-content-between h-100">
                  {calResult ? (
                    <div className="animate-fade-in">
                      <h3 className="mb-4 text-center text-uppercase">Daily Energy Expenditure</h3>

                      <div className="row g-3 mb-4">
                        <div className="col-sm-6">
                          <div className="p-4 rounded border border-secondary text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                            <p className="text-muted-ff small text-uppercase mb-1 fw-bold">Basal Metabolic Rate (BMR)</p>
                            <span className="h2 fw-bold text-yellow d-block">{calResult.bmr.toFixed(2)}</span>
                            <p className="text-muted-ff small mb-0 mt-1">kcal / day resting energy</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="p-4 rounded border-yellow text-center" style={{ background: 'rgba(255,214,0,0.03)', border: '1px solid var(--color-border-yellow)' }}>
                            <p className="text-yellow small text-uppercase mb-1 fw-bold">Daily Burn (TDEE)</p>
                            <span className="h2 fw-bold text-white d-block">{calResult.tdee.toFixed(2)}</span>
                            <p className="text-muted-ff small mb-0 mt-1">kcal / day with physical activity</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 mb-4 rounded text-center small border border-secondary" style={{ background: 'rgba(255,255,255,0.015)' }}>
                        Energy estimation incorporates your physical activity multiplier corresponding to <strong>{calResult.activityLevelLabel}</strong>.
                      </div>

                      <h4 className="text-uppercase text-yellow mb-3 small fw-bold">Estimated Daily Intake for Goals</h4>
                      <div className="row g-3 mb-4">
                        <div className="col-sm-4">
                          <div className="p-3 rounded border border-secondary text-center h-100" style={{ background: 'rgba(239,68,68,0.04)' }}>
                            <p className="small text-uppercase text-muted-ff mb-1">Fat Loss</p>
                            <h4 className="fw-bold text-danger mb-0">{(calResult.tdee - 500).toFixed(2)}</h4>
                            <span className="text-muted-ff style-xs" style={{ fontSize: '0.72rem' }}>-500 kcal deficit</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="p-3 rounded border border-yellow text-center h-100" style={{ background: 'rgba(255,214,0,0.04)' }}>
                            <p className="small text-uppercase text-yellow mb-1">Maintain</p>
                            <h4 className="fw-bold text-white mb-0">{calResult.tdee.toFixed(2)}</h4>
                            <span className="text-muted-ff style-xs" style={{ fontSize: '0.72rem' }}>Maintenance kcal</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="p-3 rounded border border-secondary text-center h-100" style={{ background: 'rgba(59,130,246,0.04)' }}>
                            <p className="small text-uppercase text-muted-ff mb-1">Muscle Gain</p>
                            <h4 className="fw-bold text-primary mb-0">{(calResult.tdee + 500).toFixed(2)}</h4>
                            <span className="text-muted-ff style-xs" style={{ fontSize: '0.72rem' }}>+500 kcal surplus</span>
                          </div>
                        </div>
                      </div>

                      <h4 className="text-uppercase text-yellow mb-3 small fw-bold">Suggested Macro Split (Balanced)</h4>
                      <div className="row g-2">
                        <div className="col-4">
                          <div className="p-2 border border-secondary rounded text-center" style={{ background: 'rgba(255,255,255,0.01)' }}>
                            <span className="text-muted-ff small d-block">Protein (30%)</span>
                            <strong className="text-white">{((calResult.tdee * 0.3) / 4).toFixed(2)}g</strong>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="p-2 border border-secondary rounded text-center" style={{ background: 'rgba(255,255,255,0.01)' }}>
                            <span className="text-muted-ff small d-block">Carbs (40%)</span>
                            <strong className="text-white">{((calResult.tdee * 0.4) / 4).toFixed(2)}g</strong>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="p-2 border border-secondary rounded text-center" style={{ background: 'rgba(255,255,255,0.01)' }}>
                            <span className="text-muted-ff small d-block">Fat (30%)</span>
                            <strong className="text-white">{((calResult.tdee * 0.3) / 9).toFixed(2)}g</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center my-auto py-5 text-muted-ff">
                      <Fire className="mb-3 text-yellow" style={{ fontSize: '3.5rem' }} />
                      <h4 className="text-uppercase mb-2 text-white">Awaiting Calculation</h4>
                      <p className="small max-w-620 mx-auto">
                        Provide your age, gender, activity levels, and measurements on the left form, and hit "Calculate Calories" to see BMR and TDEE figures.
                      </p>
                    </div>
                  )}

                  {/* Info Footer */}
                  <div className="mt-4 pt-3 border-top border-secondary small text-muted-ff">
                    <div className="d-flex gap-2 align-items-start">
                      <InfoCircleFill className="text-yellow mt-1 flex-shrink-0" />
                      <p className="mb-0">
                        <strong>Mifflin-St Jeor Equation:</strong> BMR represents your energy burned completely at rest. TDEE includes daily movement. We suggest custom diets matching these targets based on your goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'macro' && (
            <div className="row g-4 align-items-stretch" data-aos="fade-up">
              {/* Form Input */}
              <div className="col-lg-5">
                <div className="contact-card">
                  <h3 className="mb-4 text-yellow text-uppercase">Enter Details</h3>
                  <form onSubmit={handleMacCalculate}>
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Gender</label>
                      <div className="d-flex gap-3">
                        <button
                          type="button"
                          className={`btn-ff flex-grow-1 ${macGender === 'male' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                          style={{ minHeight: '44px' }}
                          onClick={() => setMacGender('male')}
                        >
                          Male
                        </button>
                        <button
                          type="button"
                          className={`btn-ff flex-grow-1 ${macGender === 'female' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                          style={{ minHeight: '44px' }}
                          onClick={() => setMacGender('female')}
                        >
                          Female
                        </button>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Age (years)</label>
                      <input
                        type="number"
                        placeholder="Enter your age"
                        className="form-control"
                        value={macAge}
                        onChange={(e) => setMacAge(e.target.value)}
                        required
                        min="1"
                        max="120"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">
                        Weight ({weightUnit === 'kg' ? 'kg' : 'lbs'})
                      </label>
                      <input
                        type="number"
                        step="any"
                        placeholder={`Enter weight in ${weightUnit}`}
                        className="form-control"
                        value={macWeight}
                        onChange={(e) => setMacWeight(e.target.value)}
                        required
                        min="1"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">
                        Height ({heightUnit === 'cm' ? 'cm' : 'inches'})
                      </label>
                      <input
                        type="number"
                        step="any"
                        placeholder={`Enter height in ${heightUnit}`}
                        className="form-control"
                        value={macHeight}
                        onChange={(e) => setMacHeight(e.target.value)}
                        required
                        min="1"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Activity Level</label>
                      <select
                        className="form-select"
                        value={macActivity}
                        onChange={(e) => setMacActivity(e.target.value)}
                      >
                        {activityLevels.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label} ({level.description})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-yellow small fw-bold text-uppercase mb-2">Fitness Goal</label>
                      <div className="row g-2">
                        <div className="col-4">
                          <button
                            type="button"
                            className={`btn-ff w-100 p-2 text-center flex-column d-flex align-items-center justify-content-center ${macGoal === 'loss' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                            style={{ minHeight: '84px', borderRadius: '6px' }}
                            onClick={() => setMacGoal('loss')}
                          >
                            <GraphDownArrow className="mb-2 text-danger" style={{ fontSize: '1.25rem' }} />
                            <span className="small fw-bold">Fat Loss</span>
                          </button>
                        </div>
                        <div className="col-4">
                          <button
                            type="button"
                            className={`btn-ff w-100 p-2 text-center flex-column d-flex align-items-center justify-content-center ${macGoal === 'maintain' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                            style={{ minHeight: '84px', borderRadius: '6px' }}
                            onClick={() => setMacGoal('maintain')}
                          >
                            <Activity className="mb-2 text-success" style={{ fontSize: '1.25rem' }} />
                            <span className="small fw-bold">Maintain</span>
                          </button>
                        </div>
                        <div className="col-4">
                          <button
                            type="button"
                            className={`btn-ff w-100 p-2 text-center flex-column d-flex align-items-center justify-content-center ${macGoal === 'gain' ? 'btn-ff-primary' : 'btn-ff-outline'}`}
                            style={{ minHeight: '84px', borderRadius: '6px' }}
                            onClick={() => setMacGoal('gain')}
                          >
                            <GraphUpArrow className="mb-2 text-info" style={{ fontSize: '1.25rem' }} />
                            <span className="small fw-bold">Muscle Gain</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {macError && <div className="alert alert-danger mb-4 py-2 small">{macError}</div>}

                    <div className="d-flex gap-3">
                      <button className="btn-ff btn-ff-primary flex-grow-1" type="submit">
                        Calculate Macros
                      </button>
                      <button
                        className="btn-ff btn-ff-outline px-3"
                        type="button"
                        onClick={handleMacReset}
                        title="Reset Fields"
                      >
                        <ArrowCounterclockwise />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Result Display */}
              <div className="col-lg-7">
                <div className="contact-card d-flex flex-column justify-content-between h-100">
                  {macResult ? (
                    <div className="animate-fade-in">
                      <h3 className="mb-4 text-center text-uppercase">Your Custom Macro Splits</h3>

                      {/* Calories summary */}
                      <div className="row g-2 mb-4 text-center">
                        <div className="col-4">
                          <div className="p-2 border border-secondary rounded" style={{ background: 'rgba(255,255,255,0.015)' }}>
                            <span className="text-muted-ff small d-block" style={{ fontSize: '0.72rem' }}>BMR</span>
                            <span className="fw-bold text-white small">{macResult.bmr.toFixed(2)} kcal</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="p-2 border border-secondary rounded" style={{ background: 'rgba(255,255,255,0.015)' }}>
                            <span className="text-muted-ff small d-block" style={{ fontSize: '0.72rem' }}>TDEE</span>
                            <span className="fw-bold text-white small">{macResult.tdee.toFixed(2)} kcal</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="p-2 border-yellow rounded" style={{ background: 'rgba(255,214,0,0.05)', border: '1px solid var(--color-border-yellow)' }}>
                            <span className="text-yellow small d-block" style={{ fontSize: '0.72rem' }}>TARGET CALS</span>
                            <span className="fw-bold text-white small">{macResult.goalCalories.toFixed(2)} kcal</span>
                          </div>
                        </div>
                      </div>

                      {/* Goal note */}
                      <div className="p-3 mb-4 rounded text-center small border border-secondary" style={{ background: 'rgba(255,255,255,0.01)' }}>
                        <span className="badge-float position-static px-2 py-1 me-2 rounded text-black fw-bold bg-yellow small text-uppercase" style={{ fontSize: '0.72rem' }}>
                          Goal Adjusted
                        </span>
                        {goalAdjustments[macGoal].description}
                      </div>

                      {/* Macros Breakdown */}
                      <div className="space-y-4 mb-4">
                        {/* Protein */}
                        <div className="p-3 rounded border border-secondary mb-3" style={{ background: 'rgba(239,68,68,0.03)' }}>
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <strong className="text-danger text-uppercase">Protein</strong>
                            <span className="badge text-danger" style={{ background: 'rgba(239,68,68,0.1)' }}>
                              {macResult.proteinCalories.toFixed(2)} kcal ({Math.round((macResult.proteinCalories / macResult.goalCalories) * 100)}%)
                            </span>
                          </div>
                          <div className="d-flex align-items-baseline gap-2 flex-wrap">
                            <span className="h3 fw-bold text-white mb-0">{macResult.protein.toFixed(2)}g</span>
                            <span className="text-muted-ff small">({goalAdjustments[macGoal].proteinMultiplier}g per kg body weight • Building Muscle)</span>
                          </div>
                          <div className="progress mt-2" style={{ height: '6px', background: 'rgba(255,255,255,0.08)' }}>
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: `${(macResult.proteinCalories / macResult.goalCalories) * 100}%` }}
                              aria-valuenow={Math.round((macResult.proteinCalories / macResult.goalCalories) * 100)}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>

                        {/* Carbohydrates */}
                        <div className="p-3 rounded border border-secondary mb-3" style={{ background: 'rgba(245,158,11,0.03)' }}>
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <strong className="text-warning text-uppercase">Carbohydrates</strong>
                            <span className="badge text-warning" style={{ background: 'rgba(245,158,11,0.1)' }}>
                              {macResult.carbsCalories.toFixed(2)} kcal ({Math.round((macResult.carbsCalories / macResult.goalCalories) * 100)}%)
                            </span>
                          </div>
                          <div className="d-flex align-items-baseline gap-2 flex-wrap">
                            <span className="h3 fw-bold text-white mb-0">{macResult.carbs.toFixed(2)}g</span>
                            <span className="text-muted-ff small">(Remainder of energy intake • Primary Energy Source)</span>
                          </div>
                          <div className="progress mt-2" style={{ height: '6px', background: 'rgba(255,255,255,0.08)' }}>
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: `${(macResult.carbsCalories / macResult.goalCalories) * 100}%` }}
                              aria-valuenow={Math.round((macResult.carbsCalories / macResult.goalCalories) * 100)}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>

                        {/* Fat */}
                        <div className="p-3 rounded border border-secondary mb-3" style={{ background: 'rgba(6,182,212,0.03)' }}>
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <strong className="text-info text-uppercase">Fats</strong>
                            <span className="badge text-info" style={{ background: 'rgba(6,182,212,0.1)' }}>
                              {macResult.fatCalories.toFixed(2)} kcal ({Math.round((macResult.fatCalories / macResult.goalCalories) * 100)}%)
                            </span>
                          </div>
                          <div className="d-flex align-items-baseline gap-2 flex-wrap">
                            <span className="h3 fw-bold text-white mb-0">{macResult.fat.toFixed(2)}g</span>
                            <span className="text-muted-ff small">(25% of energy intake • Joint Health & Hormonal Support)</span>
                          </div>
                          <div className="progress mt-2" style={{ height: '6px', background: 'rgba(255,255,255,0.08)' }}>
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: `${(macResult.fatCalories / macResult.goalCalories) * 100}%` }}
                              aria-valuenow={Math.round((macResult.fatCalories / macResult.goalCalories) * 100)}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Quick Reference Table */}
                      <h4 className="text-yellow small fw-bold text-uppercase mt-4 mb-2">Macro Quick Reference</h4>
                      <div className="table-responsive rounded border border-secondary">
                        <table className="table table-dark table-hover mb-0 text-center align-middle" style={{ background: 'var(--color-black-card)' }}>
                          <thead>
                            <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                              <th scope="col" className="text-start ps-3 text-muted-ff text-uppercase small">Macro</th>
                              <th scope="col" className="text-muted-ff text-uppercase small">Target Grams</th>
                              <th scope="col" className="text-muted-ff text-uppercase small">Calories</th>
                              <th scope="col" className="text-muted-ff text-uppercase small">% of Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-start ps-3 text-danger fw-bold">Protein</td>
                              <td className="fw-bold">{macResult.protein.toFixed(2)}g</td>
                              <td>{macResult.proteinCalories.toFixed(2)} kcal</td>
                              <td>{Math.round((macResult.proteinCalories / macResult.goalCalories) * 100)}%</td>
                            </tr>
                            <tr>
                              <td className="text-start ps-3 text-warning fw-bold">Carbs</td>
                              <td className="fw-bold">{macResult.carbs.toFixed(2)}g</td>
                              <td>{macResult.carbsCalories.toFixed(2)} kcal</td>
                              <td>{Math.round((macResult.carbsCalories / macResult.goalCalories) * 100)}%</td>
                            </tr>
                            <tr>
                              <td className="text-start ps-3 text-info fw-bold">Fat</td>
                              <td className="fw-bold">{macResult.fat.toFixed(2)}g</td>
                              <td>{macResult.fatCalories.toFixed(2)} kcal</td>
                              <td>{Math.round((macResult.fatCalories / macResult.goalCalories) * 100)}%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Related Tools */}
                      <h4 className="text-yellow small fw-bold text-uppercase mt-4 mb-2">Related Health Tools</h4>
                      <div className="row g-2">
                        <div className="col-sm-6">
                          <button
                            onClick={() => setActiveTab('calorie')}
                            className="btn-ff btn-ff-outline w-100 text-start d-flex align-items-center justify-content-between px-3 py-2"
                            style={{ minHeight: '44px', textTransform: 'none' }}
                          >
                            <div className="d-flex align-items-center gap-2">
                              <Fire className="text-yellow" />
                              <span className="small">Daily Calorie Calculator</span>
                            </div>
                            <ChevronRight className="small text-muted-ff" />
                          </button>
                        </div>
                        <div className="col-sm-6">
                          <button
                            onClick={() => setActiveTab('bmi')}
                            className="btn-ff btn-ff-outline w-100 text-start d-flex align-items-center justify-content-between px-3 py-2"
                            style={{ minHeight: '44px', textTransform: 'none' }}
                          >
                            <div className="d-flex align-items-center gap-2">
                              <Rulers className="text-yellow" />
                              <span className="small">BMI Calculator</span>
                            </div>
                            <ChevronRight className="small text-muted-ff" />
                          </button>
                        </div>
                        <div className="col-sm-6">
                          <Link
                            to="/programs"
                            className="btn-ff btn-ff-outline w-100 text-start d-flex align-items-center justify-content-between px-3 py-2"
                            style={{ minHeight: '44px', textTransform: 'none' }}
                          >
                            <div className="d-flex align-items-center gap-2">
                              <TrophyFill className="text-yellow" />
                              <span className="small">Explore Diet Plans</span>
                            </div>
                            <ChevronRight className="small text-muted-ff" />
                          </Link>
                        </div>
                        <div className="col-sm-6">
                          <Link
                            to="/exercise"
                            className="btn-ff btn-ff-outline w-100 text-start d-flex align-items-center justify-content-between px-3 py-2"
                            style={{ minHeight: '44px', textTransform: 'none' }}
                          >
                            <div className="d-flex align-items-center gap-2">
                              <HeartFill className="text-yellow" />
                              <span className="small">Exercise Library</span>
                            </div>
                            <ChevronRight className="small text-muted-ff" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center my-auto py-5 text-muted-ff">
                      <Calculator className="mb-3 text-yellow" style={{ fontSize: '3.5rem' }} />
                      <h4 className="text-uppercase mb-2 text-white">Awaiting Calculation</h4>
                      <p className="small max-w-620 mx-auto">
                        Provide your age, gender, activity levels, weight, and fitness goal on the left form, and click "Calculate Macros" to map your protein, fat, and carbs intake splits.
                      </p>
                    </div>
                  )}

                  {/* Info Footer */}
                  <div className="mt-4 pt-3 border-top border-secondary small text-muted-ff">
                    <div className="d-flex gap-2 align-items-start">
                      <InfoCircleFill className="text-yellow mt-1 flex-shrink-0" />
                      <p className="mb-0">
                        <strong>Macronutrient Targets:</strong> Muscle hypertrophy is optimized with sufficient protein intake. Fats are essential for metabolism and hormone synthesis. Carbs provide primary fuel for high intensity sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
