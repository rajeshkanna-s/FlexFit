import { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, ChevronDown, Search } from 'react-bootstrap-icons';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import { exercises } from '../data/exercises.generated';
import PageHero from './PageHero';

const EQUIPMENT_ORDER = [
  'All Equipment',
  'None',
  'Barbell',
  'Dumbbell',
  'Kettlebell',
  'Machine',
  'Plate',
  'Resistance Band',
  'Suspension',
  'Cable',
  'Smith Machine',
  'Medicine Ball',
  'Rope'
];

const MUSCLE_ORDER = [
  'All Muscles',
  'Abdominals',
  'Shoulders',
  'Biceps',
  'Triceps',
  'Forearms',
  'Quadriceps',
  'Hamstrings',
  'Calves',
  'Glutes',
  'Abductors',
  'Adductors',
  'Lats',
  'Upper Back',
  'Traps',
  'Lower Back',
  'Chest',
  'Cardio',
  'Neck',
  'Full Body',
  'Other'
];

const assetPath = (folder: 'Workouts' | 'Exercise_Images', file?: string) => (
  file ? `/assets/${folder}/${encodeURIComponent(file)}` : '/assets/images/logo.png'
);

const LazyVideoCard = ({ exercise }: { exercise: (typeof videoExercises)[number] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="exercise-card" ref={cardRef}>
      <div className="exercise-media">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
        >
          <source src={assetPath('Workouts', exercise.media)} type="video/mp4" />
        </video>
      </div>
      <div className="exercise-card-body">
        <div className="exercise-tags">
          <span>{exercise.equipment}</span>
          <span>{exercise.muscle}</span>
        </div>
        <h3>{exercise.name}</h3>
        <p>{exercise.workoutName}</p>
      </div>
    </article>
  );
};

const uniqueOptions = (preferred: string[], values: string[], allLabel: string) => {
  const available = new Set(values.filter(Boolean));
  const ordered = preferred.filter((item) => item === allLabel || available.has(item));
  const extras = [...available].filter((item) => !ordered.includes(item)).sort((a, b) => a.localeCompare(b));
  return [...ordered, ...extras];
};

const videoExercises = exercises.filter((exercise) => exercise.mediaType === 'video' && exercise.media);

interface FilterSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const FilterSelect = ({ label, value, options, onChange }: FilterSelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="exercise-select">
      <button type="button" className={`exercise-select-toggle ${open ? 'open' : ''}`} onClick={() => setOpen((current) => !current)} aria-expanded={open}>
        <span>{value || label}</span>
        <ChevronDown />
      </button>
      {open && (
        <div className="exercise-select-menu" role="listbox">
          {options.map((option) => (
            <button
              type="button"
              className={option === value ? 'active' : ''}
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              <span>{option}</span>
              {option === value && <Check />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ExercisePage = () => {
  const [equipment, setEquipment] = useState('All Equipment');
  const [muscle, setMuscle] = useState('All Muscles');
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(24);

  const equipmentOptions = useMemo(
    () => uniqueOptions(EQUIPMENT_ORDER, videoExercises.map((exercise) => exercise.equipment), 'All Equipment'),
    []
  );

  const muscleOptions = useMemo(
    () => uniqueOptions(MUSCLE_ORDER, videoExercises.map((exercise) => exercise.muscle), 'All Muscles'),
    []
  );

  const filteredExercises = useMemo(() => {
    const searchText = query.trim().toLowerCase();
    return videoExercises.filter((exercise) => {
      const matchesEquipment = equipment === 'All Equipment' || exercise.equipment === equipment;
      const matchesMuscle = muscle === 'All Muscles' || exercise.muscle === muscle;
      const matchesSearch = !searchText || `${exercise.name} ${exercise.workoutName} ${exercise.muscle} ${exercise.equipment}`.toLowerCase().includes(searchText);
      return matchesEquipment && matchesMuscle && matchesSearch;
    });
  }, [equipment, muscle, query]);

  const visibleExercises = filteredExercises.slice(0, visibleCount);

  const resetFilters = () => {
    setEquipment('All Equipment');
    setMuscle('All Muscles');
    setQuery('');
    setVisibleCount(24);
  };

  return (
    <>
      <Helmet>
        <title>Exercise Library | FlexFit Club Chrompet</title>
        <meta name="description" content="Explore FlexFit Club's exercise library with workout videos, equipment filters, and muscle-group filters." />
        <link rel="canonical" href="https://flexfitclub.in/exercise" />
      </Helmet>
      <PageHero label="Exercise" title="Exercise" highlight="Library" />
      <section className="section section-card exercise-library-section">
        <div className="container">
          <div className="exercise-library-head">
            <div>
              <SectionLabel text="Workout Guide" />
              <SectionHeading line1="Find The Right" line2="Exercise" highlightLine={2} />
            </div>
          </div>

          <div className="exercise-filter-panel">
            <div className="exercise-search">
              <Search />
              <input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(24); }} placeholder="Search exercise, muscle, equipment..." />
            </div>
            <FilterSelect label="All Equipment" value={equipment} options={equipmentOptions} onChange={(value) => { setEquipment(value); setVisibleCount(24); }} />
            <FilterSelect label="All Muscles" value={muscle} options={muscleOptions} onChange={(value) => { setMuscle(value); setVisibleCount(24); }} />
            <button className="btn-ff btn-ff-outline exercise-reset" type="button" onClick={resetFilters}>Reset</button>
          </div>

          <div className="exercise-result-bar">
            <span>{filteredExercises.length} matching videos</span>
            <span>{equipment} / {muscle}</span>
          </div>

          <div className="exercise-grid">
            {visibleExercises.map((exercise) => (
              <LazyVideoCard exercise={exercise} key={exercise.id} />
            ))}
          </div>

          {filteredExercises.length === 0 && (
            <div className="exercise-empty">
              <h3>No videos found</h3>
              <p className="text-muted-ff">Try changing equipment, muscle group, or search text.</p>
              <button className="btn-ff btn-ff-primary" type="button" onClick={resetFilters}>Show All Videos</button>
            </div>
          )}

          {visibleCount < filteredExercises.length && (
            <div className="text-center mt-5">
              <button className="btn-ff btn-ff-primary" type="button" onClick={() => setVisibleCount((count) => count + 24)}>
                Load More Videos
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ExercisePage;
