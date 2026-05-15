import type { Program } from '../types/program.types';

export const programs: Program[] = [
  {
    id: '1',
    slug: 'strength',
    image: '/assets/images/programs/strength.jpg',
    icon: 'activity',
    badge: 'BEGINNER TO ADVANCED',
    title: 'STRENGTH TRAINING',
    shortDesc: 'Build powerful muscles with powerlifting, Olympic lifting, and bodybuilding programs.',
    fullDesc: 'Build powerful muscles and increase raw strength with our comprehensive powerlifting, Olympic lifting, and bodybuilding programs. Our certified coaches create a periodized plan tailored to your current fitness level and long-term goals.',
    features: ['Full-body and split routines', 'Compound movement focus', 'Progressive overload tracking', 'Bi-weekly form check with trainer', 'Supplement and recovery guidance'],
    duration: '3 months, 6 months, or ongoing',
    sessions: '5 days/week recommended'
  },
  {
    id: '2',
    slug: 'cardio',
    image: '/assets/images/programs/cardio.jpg',
    icon: 'heart',
    badge: 'ALL FITNESS LEVELS',
    title: 'CARDIO & HIIT',
    shortDesc: 'Burn fat fast, boost stamina, and improve cardiovascular health.',
    fullDesc: 'Burn fat fast, boost stamina, and improve cardiovascular health with our high-intensity interval training sessions. Alternating between burst efforts and recovery, HIIT maximizes calorie burn in minimum time.',
    features: ['Treadmill, cycle, elliptical, rower sessions', 'HIIT circuit routines', 'Heart-rate zone training', 'Fat-loss nutrition tips', 'Weekly progress measurements'],
    duration: 'Ongoing monthly membership',
    sessions: '4-5 days/week recommended'
  },
  {
    id: '3',
    slug: 'personal',
    image: '/assets/images/programs/personal.jpg',
    icon: 'person',
    badge: '1-ON-1 COACHING',
    title: 'PERSONAL TRAINING',
    shortDesc: 'Focused coaching designed entirely around your goals.',
    fullDesc: 'Work directly with one of our certified trainers in a private, focused session designed entirely around your goals. Every workout is custom-built and evolves with your progress.',
    features: ['Initial fitness assessment', 'Custom workout program', 'Personalized diet plan', 'Form correction', 'Weekly progress report'],
    duration: 'Monthly, minimum 1 month',
    sessions: '4, 8, or 12 sessions/month packages'
  },
  {
    id: '4',
    slug: 'weightloss',
    image: '/assets/images/programs/weightloss.jpg',
    icon: 'graph',
    badge: '90-DAY CHALLENGE',
    title: 'WEIGHT LOSS PROGRAM',
    shortDesc: 'Structured fat loss with training, cardio, and nutrition coaching.',
    fullDesc: 'Our structured 90-day weight loss challenge combines smart cardio, strength training, and proven nutrition coaching for sustainable fat loss. No crash diets. No gimmicks. Just science and hard work.',
    features: ['Calorie and macro guidance', '5-day/week training protocol', 'Weekly trainer check-ins', 'Body composition analysis', 'Group accountability support'],
    duration: '90 days recommended minimum',
    sessions: '5 days/week'
  },
  {
    id: '5',
    slug: 'muscle',
    image: '/assets/images/programs/muscle.jpg',
    icon: 'lightning',
    badge: 'HYPERTROPHY FOCUSED',
    title: 'MUSCLE BUILDING',
    shortDesc: 'Gain quality muscle mass with progressive overload and recovery.',
    fullDesc: 'Gain quality muscle mass with hypertrophy-focused training plans built on progressive overload, proper periodization, and adequate recovery.',
    features: ['Push/pull/legs or body-part split', 'Volume and intensity tracking', 'Protein and surplus guidance', 'Supplement recommendations', 'Monthly photo progress tracking'],
    duration: '3-6 months for visible results',
    sessions: '4-6 days/week'
  },
  {
    id: '6',
    slug: 'yoga',
    image: '/assets/images/programs/yoga.jpg',
    icon: 'wind',
    badge: 'RECOVERY & WELLNESS',
    title: 'YOGA & FLEXIBILITY',
    shortDesc: 'Improve mobility, posture, recovery, and mental clarity.',
    fullDesc: 'Balance your strength training with mindful recovery. Our yoga and flexibility sessions improve joint mobility, correct postural imbalances, reduce injury risk, and promote mental clarity.',
    features: ['Hatha and Vinyasa yoga', 'Dynamic stretching routines', 'Foam rolling and release', 'Breathing basics', 'Morning and evening sessions'],
    duration: 'Ongoing or add-on',
    sessions: '3 days/week recommended'
  }
];
