import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowCounterclockwise,
  CheckCircleFill,
  InfoCircleFill,
  Droplet,
  FileEarmarkPdf,
  Fire,
  PersonFill,
  Rulers,
  Activity,
  ExclamationTriangleFill,
} from 'react-bootstrap-icons';
import PageHero from './PageHero';
import {
  type GoalKey,
  type DietPref,
  type RegionKey,
  goalMeta,
  activityOptions,
  regionOptions,
  allergyOptions,
  avoidByGoal,
  cookingOilGuidelines,
  snacksByGoal,
  foodProteinLevels,
} from '../data/dietFoods.data';
import {
  type UserProfile,
  type NutritionStats,
  type WeeklyPlan,
  type MonthlyPlan,
  calculateAllStats,
  generateWeeklyPlan,
  generateMonthlyPlan,
} from '../data/dietEngine';
import { generatePremiumPDF } from '../data/dietPdfGenerator';

// ---------------------------------------------------------------------------
// Step constants
// ---------------------------------------------------------------------------
const TOTAL_STEPS = 5;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function DietChartPage() {
  // --- Wizard step state ---
  const [step, setStep] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  // --- Step 1: Goal ---
  const [goal, setGoal] = useState<GoalKey | ''>('');

  // --- Step 2: Basic details ---
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'inch'>('cm');
  const [activityMult, setActivityMult] = useState(1.55);
  const [dietPref, setDietPref] = useState<DietPref>('nonVeg');
  const [allergies, setAllergies] = useState<string[]>([]);
  const [region, setRegion] = useState<RegionKey>('tamilNadu');
  const [mealsPerDay, setMealsPerDay] = useState(5);
  const [planDuration, setPlanDuration] = useState<'weekly' | 'monthly' | 'both'>('both');
  const [proteinFocus, setProteinFocus] = useState<string[]>(['chicken', 'egg', 'paneer', 'soya', 'extra_nonveg']);
  const [proteinSearch, setProteinSearch] = useState('');

  // --- Step 3: Goal-specific extras (stored as simple map) ---
  const [extras, setExtras] = useState<Record<string, string>>({});

  // --- Step 4 & 5: Calculated results ---
  const [stats, setStats] = useState<NutritionStats | null>(null);
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan | null>(null);
  const [monthlyPlan, setMonthlyPlan] = useState<MonthlyPlan | null>(null);

  // --- Errors ---
  const [error, setError] = useState('');

  // --- Helpers ---
  const toKg = (val: string) => {
    const n = parseFloat(val);
    if (isNaN(n)) return 0;
    return weightUnit === 'kg' ? n : n * 0.45359237;
  };
  const toCm = (val: string) => {
    const n = parseFloat(val);
    if (isNaN(n)) return 0;
    return heightUnit === 'cm' ? n : n * 2.54;
  };

  const scrollToTop = () => {
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  };

  const handleNext = () => {
    setError('');

    if (step === 1 && !goal) {
      setError('Please select a fitness goal to continue.');
      return;
    }
    if (step === 2) {
      if (!name.trim()) { setError('Please enter your name.'); return; }
      const a = parseInt(age);
      if (isNaN(a) || a < 10 || a > 80) { setError('Please enter a valid age (10–80).'); return; }
      const wKg = toKg(weight);
      if (wKg < 30 || wKg > 200) { setError('Please enter a valid weight (30–200 kg).'); return; }
      const hCm = toCm(height);
      if (hCm < 100 || hCm > 250) { setError('Please enter a valid height (100–250 cm).'); return; }
    }
    if (step === 4) {
      // Generate the plan
      const profile = buildProfile();
      const s = calculateAllStats(profile);
      setStats(s);
      const wp = generateWeeklyPlan(profile);
      setWeeklyPlan(wp);
      const mp = generateMonthlyPlan(profile);
      setMonthlyPlan(mp);
    }

    setStep(prev => Math.min(prev + 1, TOTAL_STEPS));
    scrollToTop();
  };

  const handleBack = () => {
    setError('');
    setStep(prev => Math.max(prev - 1, 1));
    scrollToTop();
  };

  const handleReset = () => {
    setStep(1);
    setGoal('');
    setName('');
    setAge('');
    setGender('male');
    setWeight('');
    setHeight('');
    setActivityMult(1.55);
    setDietPref('nonVeg');
    setAllergies([]);
    setRegion('tamilNadu');
    setMealsPerDay(5);
    setPlanDuration('both');
    setProteinFocus(['chicken', 'egg', 'paneer', 'soya', 'extra_nonveg']);
    setProteinSearch('');
    setExtras({});
    setStats(null);
    setWeeklyPlan(null);
    setMonthlyPlan(null);
    setError('');
    scrollToTop();
  };

  const buildProfile = (): UserProfile => ({
    name: name.trim(),
    age: parseInt(age),
    gender,
    weightKg: toKg(weight),
    heightCm: toCm(height),
    activityMultiplier: activityMult,
    goal: goal as GoalKey,
    dietPref,
    allergies,
    region,
    mealsPerDay,
    planDuration,
    proteinFocus,
  });

  const handleCalculateStats = () => {
    setError('');
    const a = parseInt(age);
    if (isNaN(a) || a < 10 || a > 80) { setError('Invalid age.'); return; }
    const wKg = toKg(weight);
    const hCm = toCm(height);
    if (wKg < 30 || wKg > 200 || hCm < 100 || hCm > 250) { setError('Invalid weight or height.'); return; }

    const profile = buildProfile();
    const s = calculateAllStats(profile);
    setStats(s);
  };

  const toggleAllergy = (key: string) => {
    setAllergies(prev =>
      prev.includes(key) ? prev.filter(a => a !== key) : [...prev, key]
    );
  };

  const setExtra = (key: string, value: string) => {
    setExtras(prev => ({ ...prev, [key]: value }));
  };

  const selectedGoalMeta = goalMeta.find(g => g.key === goal);

  // Calculate stats for step 4 preview
  const previewStats = (() => {
    try {
      const a = parseInt(age);
      const wKg = toKg(weight);
      const hCm = toCm(height);
      if (isNaN(a) || wKg < 30 || hCm < 100 || !goal) return null;
      const profile = buildProfile();
      return calculateAllStats(profile);
    } catch { return null; }
  })();

  // Filter food protein levels based on search input
  const filteredProteinLevels = foodProteinLevels.filter(item =>
    item.name.toLowerCase().includes(proteinSearch.toLowerCase())
  );

  // =========================================================================
  // RENDER
  // =========================================================================
  return (
    <>
      <Helmet>
        <title>Personalised Diet Chart - South Indian Meal Plan | FlexFit Club Chennai</title>
        <meta
          name="description"
          content="Get a free personalised weekly and monthly diet chart using South Indian cuisine. Weight Loss, Weight Gain, Muscle Gain, Body Toning, and Joint Health meal plans."
        />
        <link rel="canonical" href="https://flexfitclub.in/diet-chart" />
      </Helmet>

      <PageHero
        label="Diet Chart"
        title="Your Personalised"
        highlight="Meal Plan"
        subtitle="South Indian nutrition plans tailored to your body, goal, and dietary preference. Powered by science, rooted in local cuisine."
      />

      <section className="section section-card" ref={topRef}>
        <div className="container">
          {/* Step Progress Bar */}
          {step < TOTAL_STEPS && (
            <div className="diet-step-progress mb-5" data-aos="fade-down">
              {[1, 2, 3, 4].map(s => (
                <div key={s} className={`diet-step-dot ${step >= s ? 'active' : ''} ${step === s ? 'current' : ''}`}>
                  <span className="diet-step-number">{step > s ? <CheckCircleFill /> : s}</span>
                  <span className="diet-step-label d-none d-sm-block">
                    {s === 1 ? 'Goal' : s === 2 ? 'Details' : s === 3 ? 'Questions' : 'Summary'}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* ================= STEP 1: Goal Selection ================= */}
          {step === 1 && (
            <div data-aos="fade-up">
              <div className="text-center mb-4">
                <h2 className="text-uppercase">Choose Your <span className="text-yellow">Goal</span></h2>
                <p className="text-muted-ff">Select the primary fitness goal for your personalised diet plan.</p>
              </div>
              <div className="row g-3 justify-content-center">
                {goalMeta.map(g => (
                  <div className="col-6 col-md-4 col-lg" key={g.key}>
                    <button
                      type="button"
                      className={`diet-goal-card ${goal === g.key ? 'active' : ''}`}
                      onClick={() => setGoal(g.key)}
                      style={{ '--goal-color': g.color } as React.CSSProperties}
                    >
                      <span className="diet-goal-emoji">{g.emoji}</span>
                      <strong>{g.label}</strong>
                      <small>{g.tagline}</small>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= STEP 2: Basic Details ================= */}
          {step === 2 && (
            <div data-aos="fade-up">
              <div className="text-center mb-4">
                <h2 className="text-uppercase">Your <span className="text-yellow">Details</span></h2>
                <p className="text-muted-ff">Tell us about yourself so we can calculate your exact nutrition targets.</p>
              </div>
              <div className="row g-4 justify-content-center">
                <div className="col-lg-8">
                  <div className="contact-card">
                    {/* Plan Duration Selection */}
                    <div className="mb-4">
                      <label className="form-label text-yellow small fw-bold text-uppercase d-flex align-items-center gap-1">
                        📅 Plan Duration & Type
                      </label>
                      <div className="d-flex flex-wrap gap-2">
                        {([
                          { key: 'weekly' as const, label: '📅 Weekly Diet Plan', desc: 'Detailed 7-day meal chart' },
                          { key: 'monthly' as const, label: '📆 Monthly Diet Plan', desc: '4-week progression phase' },
                          { key: 'both' as const, label: '🌟 Combined Full Plan', desc: 'Both weekly chart & monthly phases' }
                        ]).map(p => (
                          <button 
                            key={p.key} 
                            type="button" 
                            className={`btn-ff flex-grow-1 text-start d-flex flex-column p-3 ${planDuration === p.key ? 'btn-ff-primary' : 'btn-ff-outline'}`} 
                            style={{ minHeight: '64px', borderRadius: '8px' }} 
                            onClick={() => setPlanDuration(p.key)}
                          >
                            <strong style={{ fontSize: '0.88rem' }}>{p.label}</strong>
                            <small className="text-muted-ff" style={{ fontSize: '0.72rem', fontWeight: 'normal', color: planDuration === p.key ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.5)' }}>{p.desc}</small>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Your Name</label>
                      <input type="text" className="form-control" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    {/* Age */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Age (years)</label>
                      <input type="number" className="form-control" placeholder="Enter your age" value={age} onChange={e => setAge(e.target.value)} min={10} max={80} />
                    </div>

                    {/* Gender */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Gender</label>
                      <div className="d-flex gap-2">
                        {(['male', 'female', 'other'] as const).map(g => (
                          <button key={g} type="button" className={`btn-ff flex-grow-1 ${gender === g ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '44px' }} onClick={() => setGender(g)}>
                            {g.charAt(0).toUpperCase() + g.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Weight */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Weight</label>
                      <div className="input-group">
                        <input type="number" step="any" placeholder="Enter weight" className="form-control" value={weight} onChange={e => setWeight(e.target.value)} min={1} />
                        <div className="input-group-text p-1 d-flex gap-1" style={{ background: 'var(--color-black-card)', borderColor: 'var(--color-border)', zIndex: 3 }}>
                          <button type="button" className={`btn btn-sm py-1 px-2 fw-bold ${weightUnit === 'kg' ? 'btn-warning text-black' : 'text-white-50 border-0 bg-transparent'}`} onClick={() => setWeightUnit('kg')} style={{ minHeight: 'auto', fontSize: '0.75rem' }}>KG</button>
                          <button type="button" className={`btn btn-sm py-1 px-2 fw-bold ${weightUnit === 'lb' ? 'btn-warning text-black' : 'text-white-50 border-0 bg-transparent'}`} onClick={() => setWeightUnit('lb')} style={{ minHeight: 'auto', fontSize: '0.75rem' }}>LB</button>
                        </div>
                      </div>
                    </div>

                    {/* Height */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Height</label>
                      <div className="input-group">
                        <input type="number" step="any" placeholder="Enter height" className="form-control" value={height} onChange={e => setHeight(e.target.value)} min={1} />
                        <div className="input-group-text p-1 d-flex gap-1" style={{ background: 'var(--color-black-card)', borderColor: 'var(--color-border)', zIndex: 3 }}>
                          <button type="button" className={`btn btn-sm py-1 px-2 fw-bold ${heightUnit === 'cm' ? 'btn-warning text-black' : 'text-white-50 border-0 bg-transparent'}`} onClick={() => setHeightUnit('cm')} style={{ minHeight: 'auto', fontSize: '0.75rem' }}>CM</button>
                          <button type="button" className={`btn btn-sm py-1 px-2 fw-bold ${heightUnit === 'inch' ? 'btn-warning text-black' : 'text-white-50 border-0 bg-transparent'}`} onClick={() => setHeightUnit('inch')} style={{ minHeight: 'auto', fontSize: '0.75rem' }}>INCH</button>
                        </div>
                      </div>
                    </div>

                    {/* Activity Level */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase mb-2">Activity Level</label>
                      <div className="activity-selector">
                        {activityOptions.map(level => (
                          <button type="button" className={`activity-option ${activityMult === level.value ? 'active' : ''}`} key={level.value} onClick={() => setActivityMult(level.value)}>
                            <span className="activity-radio"></span>
                            <div className="activity-details">
                              <strong>{level.label}</strong>
                              <small>{level.description}</small>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Diet Preference */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Dietary Preference</label>
                      <div className="d-flex flex-wrap gap-2">
                        {([
                          { key: 'veg' as DietPref, label: '🥬 Vegetarian' },
                          { key: 'nonVeg' as DietPref, label: '🍗 Non-Vegetarian' },
                          { key: 'eggetarian' as DietPref, label: '🥚 Eggetarian' },
                          { key: 'vegan' as DietPref, label: '🌱 Vegan' },
                        ]).map(d => (
                          <button key={d.key} type="button" className={`btn-ff ${dietPref === d.key ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '40px', fontSize: '0.85rem' }} onClick={() => {
                            setDietPref(d.key);
                            if (d.key === 'veg') {
                              setProteinFocus(['paneer', 'soya', 'dals']);
                            } else if (d.key === 'vegan') {
                              setProteinFocus(['soya', 'dals', 'millets']);
                            } else if (d.key === 'eggetarian') {
                              setProteinFocus(['egg', 'paneer', 'soya', 'extra_nonveg']);
                            } else {
                              setProteinFocus(['chicken', 'egg', 'paneer', 'soya', 'extra_nonveg']);
                            }
                          }}>
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Protein Focus Customisation */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">
                        🎯 Protein Source Focus (Prioritise in meals)
                      </label>
                      <div className="d-flex flex-wrap gap-2">
                        {(dietPref === 'nonVeg' || dietPref === 'eggetarian' ? [
                          { key: 'chicken', label: '🍗 Chicken' },
                          { key: 'egg', label: '🥚 Eggs' },
                          { key: 'paneer', label: '🧀 Paneer' },
                          { key: 'soya', label: '🌱 Soya & Tofu' },
                          { key: 'fish', label: '🐟 Fish' },
                          { key: 'extra_nonveg', label: '🫘 Lean Meat & Extra' }
                        ] : dietPref === 'vegan' ? [
                          { key: 'soya', label: '🌱 Tofu / Soy / Tempeh' },
                          { key: 'dals', label: '🫘 Dals & Sprouts' },
                          { key: 'millets', label: '🌾 Millets & Oats' }
                        ] : [ // veg
                          { key: 'paneer', label: '🧀 Paneer' },
                          { key: 'soya', label: '🌱 Tofu / Soya chunks' },
                          { key: 'dals', label: '🫘 Dals & Sprouts' },
                          { key: 'millets', label: '🌾 Millets & Oats' }
                        ]).map(item => {
                          const active = proteinFocus.includes(item.key);
                          const toggleFocus = () => {
                            setProteinFocus(prev =>
                              prev.includes(item.key) ? prev.filter(p => p !== item.key) : [...prev, item.key]
                            );
                          };
                          return (
                            <button
                              key={item.key}
                              type="button"
                              className={`diet-allergy-chip ${active ? 'active' : ''}`}
                              onClick={toggleFocus}
                            >
                              {active ? '✕ ' : ''}{item.label}
                            </button>
                          );
                        })}
                      </div>
                      <small className="text-muted-ff d-block mt-1" style={{ fontSize: '0.72rem' }}>
                        * The generator will automatically prioritize meals containing these checked protein sources.
                      </small>
                    </div>

                    {/* Allergies */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Food Allergies / Restrictions</label>
                      <div className="d-flex flex-wrap gap-2">
                        {allergyOptions.map(a => (
                          <button
                            key={a.key}
                            type="button"
                            className={`diet-allergy-chip ${allergies.includes(a.key) ? 'active' : ''}`}
                            onClick={() => toggleAllergy(a.key)}
                          >
                            {allergies.includes(a.key) ? '✕ ' : ''}{a.label}
                          </button>
                        ))}
                        <button
                          type="button"
                          className={`diet-allergy-chip ${allergies.length === 0 ? 'active' : ''}`}
                          onClick={() => setAllergies([])}
                        >
                          None
                        </button>
                      </div>
                    </div>

                    {/* Region */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Regional Preference</label>
                      <div className="d-flex flex-wrap gap-2">
                        {regionOptions.map(r => (
                          <button key={r.key} type="button" className={`btn-ff ${region === r.key ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '40px', fontSize: '0.85rem' }} onClick={() => setRegion(r.key)}>
                            {r.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Meals per day */}
                    <div className="mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Meals per Day</label>
                      <div className="d-flex gap-2">
                        {[3, 4, 5, 6].map(n => (
                          <button key={n} type="button" className={`btn-ff flex-grow-1 ${mealsPerDay === n ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '44px' }} onClick={() => setMealsPerDay(n)}>
                            {n} Meals
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 3: Goal-Specific Questions ================= */}
          {step === 3 && goal && (
            <div data-aos="fade-up">
              <div className="text-center mb-4">
                <h2 className="text-uppercase">
                  <span style={{ color: selectedGoalMeta?.color }}>{selectedGoalMeta?.emoji}</span>{' '}
                  {selectedGoalMeta?.label} <span className="text-yellow">Questions</span>
                </h2>
                <p className="text-muted-ff">A few more details to personalise your plan perfectly.</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="contact-card">
                    {goal === 'weightLoss' && (
                      <>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">How much weight do you want to lose? (kg)</label>
                          <input type="number" className="form-control" placeholder="e.g. 10" value={extras.targetLoss || ''} onChange={e => setExtra('targetLoss', e.target.value)} />
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Do you have any medical conditions?</label>
                          <select className="form-select" value={extras.medical || ''} onChange={e => setExtra('medical', e.target.value)}>
                            <option value="">No known conditions</option>
                            <option value="thyroid">Thyroid</option>
                            <option value="pcod">PCOD / PCOS</option>
                            <option value="diabetes">Diabetes</option>
                            <option value="other">Other (consult doctor)</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">How often do you eat outside food?</label>
                          <div className="d-flex gap-2">
                            {['Daily', 'Occasionally', 'Rarely'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.outsideFood === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px', fontSize: '0.85rem' }} onClick={() => setExtra('outsideFood', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Open to intermittent fasting?</label>
                          <div className="d-flex gap-2">
                            {['Yes', 'No', 'Tell me more'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.fasting === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px', fontSize: '0.85rem' }} onClick={() => setExtra('fasting', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {goal === 'weightGain' && (
                      <>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">How much weight do you want to gain? (kg)</label>
                          <input type="number" className="form-control" placeholder="e.g. 8" value={extras.targetGain || ''} onChange={e => setExtra('targetGain', e.target.value)} />
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Fast metabolism / Hard to gain weight?</label>
                          <div className="d-flex gap-2">
                            {['Yes', 'No'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.fastMeta === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px' }} onClick={() => setExtra('fastMeta', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Currently doing strength training?</label>
                          <div className="d-flex gap-2">
                            {['Yes', 'No'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.strength === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px' }} onClick={() => setExtra('strength', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Any digestive issues (acidity, bloating)?</label>
                          <div className="d-flex gap-2">
                            {['Yes', 'No'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.digestive === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px' }} onClick={() => setExtra('digestive', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {goal === 'muscleGain' && (
                      <>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Current training split?</label>
                          <select className="form-select" value={extras.split || ''} onChange={e => setExtra('split', e.target.value)}>
                            <option value="">Select</option>
                            <option value="ppl">Push-Pull-Legs</option>
                            <option value="upper-lower">Upper-Lower Split</option>
                            <option value="full-body">Full Body 3x/week</option>
                            <option value="bro-split">Bro Split (5-day)</option>
                            <option value="custom">Custom</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Using protein supplements?</label>
                          <div className="d-flex gap-2">
                            {['Yes', 'No'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.supplement === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px' }} onClick={() => setExtra('supplement', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Training experience?</label>
                          <div className="d-flex gap-2">
                            {['Beginner', 'Intermediate', 'Advanced'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.experience === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px', fontSize: '0.85rem' }} onClick={() => setExtra('experience', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">What time do you train?</label>
                          <div className="d-flex gap-2">
                            {['Morning', 'Afternoon', 'Evening'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.trainTime === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px', fontSize: '0.85rem' }} onClick={() => setExtra('trainTime', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {goal === 'bodyToning' && (
                      <>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Focus areas?</label>
                          <select className="form-select" value={extras.focus || ''} onChange={e => setExtra('focus', e.target.value)}>
                            <option value="">Select</option>
                            <option value="full">Full Body</option>
                            <option value="core">Core / Abs</option>
                            <option value="arms">Arms & Shoulders</option>
                            <option value="legs">Legs & Glutes</option>
                            <option value="upper">Upper Body</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Do cardio along with weight training?</label>
                          <div className="d-flex gap-2">
                            {['Yes', 'No'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.cardio === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px' }} onClick={() => setExtra('cardio', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Hours of sleep per night?</label>
                          <select className="form-select" value={extras.sleep || ''} onChange={e => setExtra('sleep', e.target.value)}>
                            <option value="">Select</option>
                            <option value="<6">Less than 6 hours</option>
                            <option value="6-7">6–7 hours</option>
                            <option value="7-8">7–8 hours</option>
                            <option value="8+">8+ hours</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Okay with slight caloric deficit for fat loss?</label>
                          <div className="d-flex gap-2">
                            {['Yes', 'No'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.deficit === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px' }} onClick={() => setExtra('deficit', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {goal === 'jointBoneHealth' && (
                      <>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Any diagnosed conditions?</label>
                          <select className="form-select" value={extras.condition || ''} onChange={e => setExtra('condition', e.target.value)}>
                            <option value="">No diagnosed conditions</option>
                            <option value="arthritis">Arthritis</option>
                            <option value="osteoporosis">Osteoporosis</option>
                            <option value="knee-pain">Knee Pain</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Currently on medications?</label>
                          <div className="d-flex gap-2">
                            {['Yes', 'No'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.meds === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px' }} onClick={() => setExtra('meds', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Do you consume dairy products?</label>
                          <div className="d-flex gap-2">
                            {['Yes', 'No'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.dairy === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px' }} onClick={() => setExtra('dairy', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-yellow small fw-bold text-uppercase">Regular sunlight exposure?</label>
                          <div className="d-flex gap-2">
                            {['Yes, daily', 'Occasionally', 'Rarely'].map(o => (
                              <button key={o} type="button" className={`btn-ff flex-grow-1 ${extras.sunlight === o ? 'btn-ff-primary' : 'btn-ff-outline'}`} style={{ minHeight: '42px', fontSize: '0.82rem' }} onClick={() => setExtra('sunlight', o)}>{o}</button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 4: Stats Summary ================= */}
          {step === 4 && previewStats && (
            <div data-aos="fade-up">
              <div className="text-center mb-4">
                <h2 className="text-uppercase">Your <span className="text-yellow">Nutrition Stats</span></h2>
                <p className="text-muted-ff">Review your calculated targets below. Click "Generate My Diet Plan" to get your personalised chart.</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="diet-stats-card contact-card">
                    {/* Profile header */}
                    <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary">
                      <div className="avatar-initials" style={{ background: selectedGoalMeta?.color }}>
                        {name.trim().charAt(0).toUpperCase() || 'U'}
                      </div>
                      <div>
                        <h4 className="text-white mb-0 text-uppercase">{name || 'User'}</h4>
                        <span className="text-muted-ff small">{selectedGoalMeta?.emoji} {selectedGoalMeta?.label} • {dietPref.charAt(0).toUpperCase() + dietPref.slice(1)}</span>
                      </div>
                    </div>

                    {/* Stats grid */}
                    <div className="row g-3 mb-4">
                      <div className="col-6 col-md-3">
                        <div className="p-3 rounded border border-secondary text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                          <Rulers className="text-yellow mb-1" />
                          <span className="text-muted-ff small d-block text-uppercase">BMI</span>
                          <strong className="text-white d-block" style={{ fontSize: '1.3rem' }}>{previewStats.bmi.toFixed(1)}</strong>
                          <span className="text-muted-ff small">{previewStats.bmiCategory}</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="p-3 rounded border border-secondary text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                          <Activity className="text-yellow mb-1" />
                          <span className="text-muted-ff small d-block text-uppercase">BMR</span>
                          <strong className="text-white d-block" style={{ fontSize: '1.3rem' }}>{previewStats.bmr.toFixed(0)}</strong>
                          <span className="text-muted-ff small">kcal/day</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="p-3 rounded border border-secondary text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                          <Fire className="text-yellow mb-1" />
                          <span className="text-muted-ff small d-block text-uppercase">TDEE</span>
                          <strong className="text-white d-block" style={{ fontSize: '1.3rem' }}>{previewStats.tdee.toFixed(0)}</strong>
                          <span className="text-muted-ff small">kcal/day</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="p-3 rounded text-center" style={{ background: 'rgba(255,214,0,0.05)', border: '1px solid var(--color-border-yellow)' }}>
                          <PersonFill className="text-yellow mb-1" />
                          <span className="text-yellow small d-block text-uppercase">Target</span>
                          <strong className="text-white d-block" style={{ fontSize: '1.3rem' }}>{previewStats.targetCalories.toFixed(0)}</strong>
                          <span className="text-muted-ff small">kcal/day</span>
                        </div>
                      </div>
                    </div>

                    {/* Macro split */}
                    <div className="p-3 rounded border border-secondary mb-4" style={{ background: 'rgba(255,255,255,0.015)' }}>
                      <h5 className="text-yellow small fw-bold text-uppercase mb-3">Daily Macro Targets</h5>
                      <div className="row g-2 text-center">
                        <div className="col-4">
                          <div className="p-2 border border-danger rounded" style={{ background: 'rgba(239,68,68,0.03)' }}>
                            <strong className="text-danger small d-block text-uppercase">Protein</strong>
                            <span className="text-white fw-bold">{previewStats.proteinGrams.toFixed(0)}g</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="p-2 border border-warning rounded" style={{ background: 'rgba(245,158,11,0.03)' }}>
                            <strong className="text-warning small d-block text-uppercase">Carbs</strong>
                            <span className="text-white fw-bold">{previewStats.carbsGrams.toFixed(0)}g</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="p-2 border border-info rounded" style={{ background: 'rgba(6,182,212,0.03)' }}>
                            <strong className="text-info small d-block text-uppercase">Fats</strong>
                            <span className="text-white fw-bold">{previewStats.fatGrams.toFixed(0)}g</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hydration */}
                    <div className="d-flex align-items-center gap-2 p-3 rounded border border-secondary" style={{ background: 'rgba(6,182,212,0.03)' }}>
                      <Droplet className="text-info" style={{ fontSize: '1.3rem' }} />
                      <div>
                        <strong className="text-white small text-uppercase">Hydration Target</strong>
                        <span className="text-muted-ff small d-block">{(previewStats.hydrationMl / 1000).toFixed(1)} litres / day ({previewStats.hydrationMl} ml)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 5: Full Diet Chart Output ================= */}
          {step === 5 && stats && weeklyPlan && monthlyPlan && (
            <div className="diet-output" data-aos="fade-up">
              {/* Print button */}
              <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <h2 className="text-uppercase mb-0">
                  FlexFit <span className="text-yellow">Diet Plan</span>
                </h2>
                <div className="d-flex gap-2 flex-wrap">
                  <button className="btn-ff btn-ff-primary px-3 py-2 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }} onClick={() => {
                    if (stats && weeklyPlan && monthlyPlan && goal) {
                      generatePremiumPDF({
                        name: name.trim(),
                        age: parseInt(age),
                        gender,
                        weightKg: toKg(weight),
                        heightCm: toCm(height),
                        dietPref,
                        goal: goal as GoalKey,
                        stats,
                        weeklyPlan,
                        monthlyPlan,
                        planDuration,
                        proteinFocus,
                      });
                    }
                  }}>
                    <FileEarmarkPdf /> Download PDF
                  </button>
                  <button className="btn-ff btn-ff-outline px-3 py-2 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }} onClick={handleReset}>
                    <ArrowCounterclockwise /> Start Over
                  </button>
                </div>
              </div>

              {/* Profile Summary Card */}
              <div className="contact-card mb-4 diet-print-profile">
                <div className="row g-3 align-items-center">
                  <div className="col-md-4 d-flex align-items-center gap-3">
                    <div className="avatar-initials" style={{ background: selectedGoalMeta?.color, width: '60px', height: '60px', fontSize: '1.3rem' }}>
                      {name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-white mb-0 text-uppercase">{name}</h4>
                      <span className="text-muted-ff small">{selectedGoalMeta?.emoji} {selectedGoalMeta?.label}</span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row g-2 text-center">
                      <div className="col-3"><span className="text-muted-ff small d-block">BMI</span><strong className="text-white">{stats.bmi.toFixed(1)}</strong></div>
                      <div className="col-3"><span className="text-muted-ff small d-block">Target Cal</span><strong className="text-yellow">{stats.targetCalories.toFixed(0)}</strong></div>
                      <div className="col-3"><span className="text-muted-ff small d-block">Protein</span><strong className="text-white">{stats.proteinGrams.toFixed(0)}g</strong></div>
                      <div className="col-3"><span className="text-muted-ff small d-block">Water</span><strong className="text-white">{(stats.hydrationMl / 1000).toFixed(1)}L</strong></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Diet Chart */}
              {(planDuration === 'weekly' || planDuration === 'both') && (
                <>
                  <h3 className="text-yellow text-uppercase mb-3">📅 Weekly Diet Chart</h3>
                  <div className="diet-weekly-wrapper mb-5">
                    {weeklyPlan.days.map((day, di) => (
                      <div key={di} className="diet-day-card contact-card mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4 className="text-white mb-0 text-uppercase" style={{ fontSize: '1.05rem' }}>
                            <span className="text-yellow me-2">{['🟡','🟢','🔵','🟣','🟠','🔴','⚪'][di]}</span>
                            {day.dayName}
                          </h4>
                          <span className="badge" style={{ background: 'rgba(255,214,0,0.12)', color: 'var(--color-yellow)', fontSize: '0.75rem' }}>
                            ~{day.totalCalories} kcal
                          </span>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-dark table-hover mb-0 align-middle diet-meal-table" style={{ background: 'transparent' }}>
                            <thead>
                              <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                                <th className="text-muted-ff text-uppercase small ps-2" style={{ fontSize: '0.7rem', width: '25%' }}>Meal</th>
                                <th className="text-muted-ff text-uppercase small" style={{ fontSize: '0.7rem' }}>Food Items</th>
                                <th className="text-muted-ff text-uppercase small text-center" style={{ fontSize: '0.7rem', width: '15%' }}>Portion</th>
                                <th className="text-muted-ff text-uppercase small text-end pe-2" style={{ fontSize: '0.7rem', width: '10%' }}>Cal</th>
                              </tr>
                            </thead>
                            <tbody>
                              {day.meals.map((m, mi) => (
                                <tr key={mi}>
                                  <td className="text-yellow small fw-bold ps-2" style={{ fontSize: '0.78rem' }}>{m.slotLabel}</td>
                                  <td className="text-white small">
                                    {m.food.name}
                                    {m.food.nameTamil && <span className="text-muted-ff d-block" style={{ fontSize: '0.72rem' }}>({m.food.nameTamil})</span>}
                                  </td>
                                  <td className="text-muted-ff small text-center" style={{ fontSize: '0.78rem' }}>{m.food.portion}</td>
                                  <td className="text-white small text-end fw-bold pe-2">{m.food.calories}</td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr style={{ background: 'rgba(255,214,0,0.04)' }}>
                                <td colSpan={3} className="text-yellow small fw-bold text-uppercase ps-2">Day Total</td>
                                <td className="text-yellow small fw-bold text-end pe-2">~{day.totalCalories}</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        {/* Practical daily tip */}
                        <div className="d-flex gap-2 mt-2 p-2 rounded small" style={{ background: 'rgba(255,255,255,0.015)' }}>
                          <InfoCircleFill className="text-yellow flex-shrink-0 mt-1" style={{ fontSize: '0.75rem' }} />
                          <span className="text-muted-ff" style={{ fontSize: '0.75rem' }}>
                            {di === 0 && 'Start your day with the detox drink on an empty stomach, 20 min before breakfast.'}
                            {di === 1 && 'Chew your food slowly — it takes 20 minutes for your brain to register fullness.'}
                            {di === 2 && 'Pre-workout meals should be consumed 30–60 minutes before training.'}
                            {di === 3 && 'Keep dinner light and eat at least 2 hours before sleeping.'}
                            {di === 4 && 'If feeling hungry between meals, drink water first — thirst is often mistaken for hunger.'}
                            {di === 5 && 'Saturday is a great day to meal-prep for the coming week. Batch cook dals and millets.'}
                            {di === 6 && 'Sunday cheat meal allowed — practice portion control. Eat the protein first, then carbs.'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Monthly Progression Plan */}
              {(planDuration === 'monthly' || planDuration === 'both') && (
                <>
                  <h3 className="text-yellow text-uppercase mb-3">📆 Monthly Progression Plan</h3>
                  <div className="row g-3 mb-5">
                    {monthlyPlan.phases.map((phase, pi) => (
                      <div className="col-md-6" key={pi}>
                        <div className="diet-phase-card contact-card h-100">
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="badge" style={{ background: selectedGoalMeta?.color, color: '#000', fontWeight: 800 }}>{phase.weekLabel}</span>
                            <h5 className="text-white mb-0 text-uppercase" style={{ fontSize: '0.95rem' }}>{phase.phaseName}</h5>
                          </div>
                          <p className="text-muted-ff small mb-2">{phase.focus}</p>
                          <div className="mb-2">
                            <span className="text-yellow small fw-bold text-uppercase d-block mb-1" style={{ fontSize: '0.7rem' }}>Key Foods This Week</span>
                            <div className="d-flex flex-wrap gap-1">
                              {phase.keyFoods.map((f, fi) => (
                                <span key={fi} className="badge" style={{ background: 'rgba(255,214,0,0.08)', color: 'var(--color-white-muted)', fontSize: '0.7rem', fontWeight: 600 }}>{f}</span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-2 pt-2 border-top border-secondary">
                            <span className="text-muted-ff small" style={{ fontSize: '0.75rem' }}>💡 {phase.tip}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Do's and Don'ts */}
              <div className="row g-4 mb-5">
                <div className="col-md-6">
                  <div className="contact-card h-100">
                    <h4 className="text-uppercase mb-3" style={{ color: '#10b981', fontSize: '1rem' }}>✅ Monthly Do's</h4>
                    <ul className="list-unstyled mb-0">
                      {monthlyPlan.dos.map((d, i) => (
                        <li key={i} className="d-flex gap-2 align-items-start mb-2 small text-muted-ff">
                          <CheckCircleFill className="flex-shrink-0 mt-1" style={{ color: '#10b981', fontSize: '0.8rem' }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-card h-100">
                    <h4 className="text-uppercase mb-3" style={{ color: '#ef4444', fontSize: '1rem' }}>❌ Monthly Don'ts</h4>
                    <ul className="list-unstyled mb-0">
                      {monthlyPlan.donts.map((d, i) => (
                        <li key={i} className="d-flex gap-2 align-items-start mb-2 small text-muted-ff">
                          <ExclamationTriangleFill className="flex-shrink-0 mt-1" style={{ color: '#ef4444', fontSize: '0.8rem' }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Foods to Avoid */}
              {goal && (
                <div className="contact-card mb-4">
                  <h4 className="text-uppercase mb-3" style={{ color: '#f97316', fontSize: '1rem' }}>🚫 Foods to Avoid for {selectedGoalMeta?.label}</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {avoidByGoal[goal as GoalKey].map((food, i) => (
                      <span key={i} className="badge" style={{ background: 'rgba(239,68,68,0.08)', color: '#f87171', fontSize: '0.78rem', fontWeight: 600, padding: '6px 10px' }}>
                        {food}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Snack Ideas */}
              {goal && (
                <div className="contact-card mb-4">
                  <h4 className="text-uppercase mb-3" style={{ color: '#10b981', fontSize: '1rem' }}>🥗 Healthy Snack Ideas</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {snacksByGoal[goal as GoalKey].map((s, i) => (
                      <span key={i} className="badge" style={{ background: 'rgba(16,185,129,0.08)', color: '#34d399', fontSize: '0.78rem', fontWeight: 600, padding: '6px 10px' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Cooking Oil */}
              <div className="contact-card mb-4">
                <h4 className="text-yellow text-uppercase mb-3" style={{ fontSize: '1rem' }}>🫒 Cooking Oil Guidelines</h4>
                <ul className="list-unstyled mb-0">
                  {cookingOilGuidelines.map((g, i) => (
                    <li key={i} className="d-flex gap-2 align-items-start mb-2 small text-muted-ff">
                      <CheckCircleFill className="flex-shrink-0 mt-1 text-yellow" style={{ fontSize: '0.8rem' }} />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supplements (if any) */}
              {monthlyPlan.supplements && monthlyPlan.supplements.length > 0 && (
                <div className="contact-card mb-4">
                  <h4 className="text-uppercase mb-3" style={{ color: '#8b5cf6', fontSize: '1rem' }}>💊 Supplement Suggestions</h4>
                  <ul className="list-unstyled mb-2">
                    {monthlyPlan.supplements.map((s, i) => (
                      <li key={i} className="d-flex gap-2 align-items-start mb-2 small text-muted-ff">
                        <CheckCircleFill className="flex-shrink-0 mt-1" style={{ color: '#8b5cf6', fontSize: '0.8rem' }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-ff small mb-0 mt-2 border-top border-secondary pt-2" style={{ fontStyle: 'italic', fontSize: '0.72rem' }}>
                    ⚕️ Consult a doctor before taking any supplements.
                  </p>
                </div>
              )}

              {/* Disclaimer */}
              <div className="p-3 rounded border border-secondary mb-4" style={{ background: 'rgba(255,255,255,0.015)' }}>
                <div className="d-flex gap-2 align-items-start">
                  <InfoCircleFill className="text-yellow mt-1 flex-shrink-0" />
                  <p className="text-muted-ff small mb-0">
                    <strong>Disclaimer:</strong> This diet chart is generated by an AI fitness assistant for general guidance only. It is not a substitute for professional medical or nutritional advice. Please consult a registered dietitian or doctor before starting this diet, especially if you have conditions like diabetes, thyroid, hypertension, or any food-related health issues.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-4">
                <p className="text-muted-ff mb-3">Ready to take your fitness to the next level?</p>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <Link className="btn-ff btn-ff-primary" to="/join">Join FlexFit Club</Link>
                  <Link className="btn-ff btn-ff-outline" to="/calculators">Try Calculators</Link>
                  <button className="btn-ff btn-ff-outline" onClick={handleReset}>
                    <ArrowCounterclockwise className="me-2" /> Generate Another Plan
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="alert alert-danger mt-4 py-2 small d-flex align-items-center gap-2">
              <ExclamationTriangleFill /> {error}
            </div>
          )}

          {/* Navigation Buttons */}
          {step < TOTAL_STEPS && (
            <div className="d-flex justify-content-between mt-4 pt-3 border-top border-secondary">
              <button
                className="btn-ff btn-ff-outline d-flex align-items-center gap-2"
                onClick={handleBack}
                disabled={step === 1}
                style={{ opacity: step === 1 ? 0.4 : 1 }}
              >
                <ChevronLeft /> Back
              </button>
              <button
                className="btn-ff btn-ff-primary d-flex align-items-center gap-2"
                onClick={handleNext}
              >
                {step === 4 ? '🍽️ Generate My Diet Plan' : 'Next'} <ChevronRight />
              </button>
            </div>
          )}

          {/* Food Protein Levels Table Section (Only on Step 1, below navigation buttons) */}
          {step === 1 && (
            <div className="mt-5 pt-4 border-top border-secondary" data-aos="fade-up">
              <div className="row align-items-center mb-4 g-3">
                <div className="col-md-7 d-flex align-items-center gap-3">
                  <div className="p-2 rounded-3 text-black d-flex align-items-center justify-content-center" style={{ background: '#ff8a00', width: '48px', height: '48px', borderRadius: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>🥩</span>
                  </div>
                  <div>
                    <h3 className="text-yellow text-uppercase mb-0 fw-bold tracking-wide" style={{ fontSize: '1.8rem', letterSpacing: '1px', color: '#ff8a00' }}>Food Protein Levels</h3>
                    <p className="text-muted-ff mb-0 small">Quick reference for protein & calorie content</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="protein-search-group">
                    <span className="protein-search-icon">🔍</span>
                    <input 
                      type="text" 
                      className="protein-search-input" 
                      placeholder="Search food item... (e.g. Chicken, Paneer, Egg)" 
                      value={proteinSearch}
                      onChange={e => setProteinSearch(e.target.value)}
                    />
                    {proteinSearch && (
                      <button className="btn btn-sm btn-ff-outline px-2 py-1 ms-2" style={{ minHeight: 'auto', fontSize: '0.7rem' }} onClick={() => setProteinSearch('')}>Clear</button>
                    )}
                  </div>
                </div>
              </div>

              <div className="contact-card p-4">
                {/* Scrollable Table Container */}
                <div style={{ maxHeight: '420px', overflowY: 'auto' }} className="table-responsive custom-scrollbar">
                  <table className="table table-dark table-hover mb-0 align-middle">
                    <thead>
                      <tr className="protein-table-header" style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '2px solid rgba(255,255,255,0.06)' }}>
                        <th className="text-muted-ff text-uppercase small ps-3" style={{ fontSize: '0.75rem', width: '8%', border: 'none' }}>#</th>
                        <th className="text-muted-ff text-uppercase small" style={{ fontSize: '0.75rem', border: 'none' }}>Food Item</th>
                        <th className="text-center text-muted-ff text-uppercase small" style={{ fontSize: '0.75rem', width: '22%', border: 'none' }}>Protein (g)</th>
                        <th className="text-end text-muted-ff text-uppercase small pe-3" style={{ fontSize: '0.75rem', width: '22%', border: 'none' }}>Calories (kcal)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProteinLevels.length > 0 ? (
                        filteredProteinLevels.map((item, index) => (
                          <tr key={item.id} style={{ background: index % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td className="text-muted-ff small ps-3" style={{ border: 'none' }}>{item.id}</td>
                            <td className="text-white fw-bold small" style={{ border: 'none' }}>{item.name}</td>
                            <td className="text-center fw-bold small" style={{ color: '#ff8a00', border: 'none' }}>{item.protein}</td>
                            <td className="text-end fw-bold small pe-3" style={{ color: '#ff8a00', border: 'none' }}>{item.calories}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="text-center text-muted-ff py-4" style={{ border: 'none' }}>No matching food items found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
