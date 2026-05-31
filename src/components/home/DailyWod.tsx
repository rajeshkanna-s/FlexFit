import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Fire, Award, ChevronRight, LightningChargeFill } from 'react-bootstrap-icons';
import SectionHeading from '../common/SectionHeading';
import SectionLabel from '../common/SectionLabel';

interface WodDay {
  dayName: string;
  workoutName: string;
  muscleFilter: string;
  difficulty: number;
  duration: string;
  sets: string;
  calories: string;
  description: string;
}

const WOD_SCHEDULE: WodDay[] = [
  {
    dayName: 'Sunday',
    workoutName: 'Active Recovery & Rest',
    muscleFilter: 'All Muscles',
    difficulty: 1,
    duration: '30 Min',
    sets: '0 Sets',
    calories: '150 kcal',
    description: 'Sunday is rest day! Focus on light walking, mobility drills, or stretching to help your muscle fibers recover and rebuild for the upcoming week.',
  },
  {
    dayName: 'Monday',
    workoutName: 'Chest & Cardio Blaster',
    muscleFilter: 'Chest,Cardio',
    difficulty: 4,
    duration: '90 Min',
    sets: '18 Sets',
    calories: '750 kcal',
    description: 'Kickstart your week with heavy chest presses and incline flyes to build chest mass, followed by high-intensity cardio to torch calories.',
  },
  {
    dayName: 'Tuesday',
    workoutName: 'Biceps & Abs Sculpt',
    muscleFilter: 'Biceps,Abdominals',
    difficulty: 3,
    duration: '60 Min',
    sets: '14 Sets',
    calories: '500 kcal',
    description: 'Build peak bicep biceps with preacher and hammer curls, super-setted with focused core stability movements for defined abs.',
  },
  {
    dayName: 'Wednesday',
    workoutName: 'Lat & Cardio Shred',
    muscleFilter: 'Lats,Cardio',
    difficulty: 4,
    duration: '90 Min',
    sets: '16 Sets',
    calories: '650 kcal',
    description: 'Carve out a wide V-taper using pull-ups, lat pulldowns, and rows, concluding with a 30-minute calorie-burning steady-state cardio session.',
  },
  {
    dayName: 'Thursday',
    workoutName: 'Triceps & Abs Definition',
    muscleFilter: 'Triceps,Abdominals',
    difficulty: 3,
    duration: '60 Min',
    sets: '12 Sets',
    calories: '480 kcal',
    description: 'Isolate the triceps with overhead extensions and pushdowns to maximize arm thickness, paired with intense abdominal training.',
  },
  {
    dayName: 'Friday',
    workoutName: 'Shoulder & Cardio Engine',
    muscleFilter: 'Shoulders,Cardio',
    difficulty: 4,
    duration: '90 Min',
    sets: '18 Sets',
    calories: '680 kcal',
    description: 'Build round boulders with overhead presses and lateral raises, capped off with an endurance cardio finisher to improve conditioning.',
  },
  {
    dayName: 'Saturday',
    workoutName: 'Leg & Glutes Powerhouse',
    muscleFilter: 'Quadriceps,Hamstrings,Calves,Glutes',
    difficulty: 5,
    duration: '90 Min',
    sets: '20 Sets',
    calories: '850 kcal',
    description: 'Squats, lunges, leg presses, and calf raises. Saturday legs demand maximum effort, triggering heavy muscle growth and metabolic burn.',
  }
];

export default function DailyWod() {
  const [currentDayIndex, setCurrentDayIndex] = useState(() => new Date().getDay());
  const [countdown, setCountdown] = useState({ hours: '00', minutes: '00', seconds: '00' });

  // Update day index at midnight, and run the countdown timer
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      setCurrentDayIndex(now.getDay());

      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diffMs = midnight.getTime() - now.getTime();

      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

      setCountdown({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const todayWod = WOD_SCHEDULE[currentDayIndex];

  // Render star ratings for difficulty
  const renderDifficulty = (rating: number) => {
    return (
      <div className="d-flex gap-1 align-items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <LightningChargeFill
            key={i}
            className={i < rating ? 'text-yellow' : 'text-white-dim'}
            style={{ fontSize: '0.9rem', opacity: i < rating ? 1 : 0.25 }}
          />
        ))}
        <span className="small text-muted-ff ms-1 font-heading" style={{ fontSize: '0.72rem' }}>
          {rating === 1 ? 'EASY / REST' : rating <= 3 ? 'MODERATE' : 'HIGH INTENSITY'}
        </span>
      </div>
    );
  };

  return (
    <section className="section section-mid daily-wod-section">
      <div className="container">
        <div className="text-center mb-5">
          <SectionLabel text="Today's Training focus" />
          <SectionHeading line1="Workout of" line2="The Day" highlightLine={2} />
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left Column: Today's WOD Details */}
          <div className="col-lg-7" data-aos="fade-right">
            <div className="contact-card d-flex flex-column justify-content-between h-100 position-relative overflow-hidden" style={{ border: '1px solid var(--color-border-yellow)' }}>
              {/* Floating Today badge */}
              <div className="position-absolute end-0 top-0 bg-yellow text-black fw-bold px-3 py-2 small text-uppercase font-heading" style={{ borderBottomLeftRadius: '8px', zIndex: 5, fontSize: '0.75rem', letterSpacing: '1px' }}>
                Active Today
              </div>

              <div>
                <span className="text-yellow text-uppercase fw-bold font-heading small d-block mb-1" style={{ letterSpacing: '2px' }}>
                  {todayWod.dayName}'s Workout
                </span>
                <h3 className="h2 text-white text-uppercase fw-bold mb-3">{todayWod.workoutName}</h3>

                {/* Countdown timer */}
                <div className="d-inline-flex align-items-center gap-2 mb-4 p-2 px-3 rounded" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid var(--color-border)' }}>
                  <Clock className="text-yellow" style={{ fontSize: '0.9rem' }} />
                  <span className="text-muted-ff style-xs text-uppercase fw-bold" style={{ fontSize: '0.72rem', letterSpacing: '0.5px' }}>Next WOD In:</span>
                  <span className="text-yellow font-heading fw-bold" style={{ letterSpacing: '1px', fontFamily: 'monospace', fontSize: '0.95rem' }}>
                    {countdown.hours}:{countdown.minutes}:{countdown.seconds}
                  </span>
                </div>

                {/* Workout Stats boxes */}
                <div className="row g-2 mb-4 text-center">
                  <div className="col-4">
                    <div className="p-3 rounded border border-secondary h-100 d-flex flex-column justify-content-center" style={{ background: 'rgba(255,255,255,0.015)' }}>
                      <Clock className="text-yellow mx-auto mb-2" style={{ fontSize: '1.25rem' }} />
                      <span className="text-muted-ff style-xs text-uppercase d-block mb-1" style={{ fontSize: '0.65rem' }}>Duration</span>
                      <strong className="text-white small d-block">{todayWod.duration}</strong>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-3 rounded border border-secondary h-100 d-flex flex-column justify-content-center" style={{ background: 'rgba(255,255,255,0.015)' }}>
                      <Award className="text-yellow mx-auto mb-2" style={{ fontSize: '1.25rem' }} />
                      <span className="text-muted-ff style-xs text-uppercase d-block mb-1" style={{ fontSize: '0.65rem' }}>Volume</span>
                      <strong className="text-white small d-block">{todayWod.sets}</strong>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-3 rounded border border-secondary h-100 d-flex flex-column justify-content-center" style={{ background: 'rgba(255,255,255,0.015)' }}>
                      <Fire className="text-yellow mx-auto mb-2" style={{ fontSize: '1.25rem' }} />
                      <span className="text-muted-ff style-xs text-uppercase d-block mb-1" style={{ fontSize: '0.65rem' }}>Est. Burn</span>
                      <strong className="text-white small d-block">{todayWod.calories}</strong>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-yellow small fw-bold text-uppercase d-block mb-2 font-heading" style={{ letterSpacing: '1px' }}>Difficulty Level</span>
                  {renderDifficulty(todayWod.difficulty)}
                </div>

                <p className="text-muted-ff mb-4">{todayWod.description}</p>
              </div>

              <div>
                <Link
                  className="btn-ff btn-ff-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  to={`/exercise?muscle=${todayWod.muscleFilter}`}
                >
                  <span>Launch Workout Videos</span>
                  <ChevronRight />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Weekly Schedule */}
          <div className="col-lg-5" data-aos="fade-left">
            <div className="contact-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h5 text-yellow text-uppercase fw-bold mb-4 font-heading" style={{ letterSpacing: '1px' }}>
                  Weekly Workout Sheet
                </h3>

                <div className="d-flex flex-column gap-2 mb-4">
                  {WOD_SCHEDULE.map((item, index) => {
                    const isToday = index === currentDayIndex;
                    return (
                      <Link
                        key={item.dayName}
                        to={`/exercise?muscle=${item.muscleFilter}`}
                        className={`d-flex align-items-center justify-content-between p-3 rounded transition-all ${
                          isToday
                            ? 'bg-warning text-black border-yellow'
                            : 'border border-secondary text-muted-ff hover-wod-row'
                        }`}
                        style={{
                          textDecoration: 'none',
                          border: isToday ? '1px solid var(--color-yellow)' : '1px solid var(--color-border)',
                          background: isToday ? 'rgba(255,214,0,0.1)' : 'rgba(255,255,255,0.01)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <span
                            className="font-heading fw-bold text-uppercase"
                            style={{
                              fontSize: '0.85rem',
                              width: '90px',
                              color: isToday ? 'var(--color-yellow)' : 'var(--color-white)'
                            }}
                          >
                            {item.dayName}
                          </span>
                          <span
                            className="small"
                            style={{
                              fontWeight: isToday ? '700' : 'normal',
                              color: isToday ? 'var(--color-white)' : 'inherit'
                            }}
                          >
                            {item.workoutName}
                          </span>
                        </div>
                        {isToday ? (
                          <span className="badge bg-yellow text-black font-heading style-xs px-2 py-1 text-uppercase fw-bold" style={{ fontSize: '0.62rem' }}>
                            Today
                          </span>
                        ) : (
                          <ChevronRight style={{ opacity: 0.5, fontSize: '0.85rem' }} />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Target guidelines */}
              <div className="p-3 rounded text-center small border border-secondary" style={{ background: 'rgba(255,255,255,0.015)' }}>
                <strong className="text-yellow text-uppercase font-heading d-block mb-1" style={{ fontSize: '0.72rem', letterSpacing: '1px' }}>
                  Target Training Time Guidelines
                </strong>
                <span className="text-muted-ff small">
                  <strong>1 Hour</strong> &rarr; Weight Training &nbsp;|&nbsp; <strong>30 Min</strong> &rarr; Cardio Engine
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
