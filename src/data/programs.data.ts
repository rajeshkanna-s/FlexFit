import type { Program } from '../types/program.types';

export const programs: Program[] = [
  {
    id: '1',
    slug: 'strength',
    image: '/assets/images/program-illustrations/strength-training.png',
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
    image: '/assets/images/program-illustrations/cardio-hiit.png',
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
    image: '/assets/images/program-illustrations/personal-training.png',
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
    image: '/assets/images/program-illustrations/weight-loss.png',
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
    image: '/assets/images/program-illustrations/muscle-building.png',
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
    slug: 'contest-prep',
    image: '/assets/images/program-illustrations/contest-prep.png',
    icon: 'trophy',
    badge: 'NATURAL BODYBUILDING',
    title: 'BODYBUILDING CONTEST PREP',
    shortDesc: 'Coaching for natural bodybuilding and men\'s physique competitions.',
    fullDesc: 'Prepare for natural bodybuilding and men\'s physique competitions with structured training, posing guidance, nutrition support, and progress tracking tailored to your body type and stage timeline.',
    features: ['Stage-focused training plan', 'Fat-loss and conditioning phases', 'Posing and presentation guidance', 'Diet adjustments by progress', 'Check-ins for sustainable prep'],
    duration: '12-16 weeks or custom prep timeline',
    sessions: 'Coach-guided plan with regular check-ins'
  }
];
