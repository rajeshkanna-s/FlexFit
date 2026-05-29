export interface Plan {
  id: string;
  key: 'basic' | 'pro' | 'elite';
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular: boolean;
  features: { text: string; included: boolean }[];
}

export const plans: Plan[] = [
  {
    id: '1',
    key: 'basic',
    name: 'Basic',
    monthlyPrice: 999,
    annualPrice: 9590,
    isPopular: false,
    features: [
      { text: 'Gym Floor Access', included: true },
      { text: 'Cardio Zone', included: true },
      { text: 'Locker Room', included: true },
      { text: 'Group Classes (2 per week)', included: true },
      { text: 'Personal Training sessions', included: false },
      { text: 'Custom Diet Plan', included: false },
      { text: 'Body Composition Analysis', included: false },
      { text: 'Supplement Guidance', included: false },
      { text: 'Guest Passes', included: false }
    ]
  },
  {
    id: '2',
    key: 'pro',
    name: 'Pro',
    monthlyPrice: 1799,
    annualPrice: 17270,
    isPopular: true,
    features: [
      { text: 'Everything in Basic', included: true },
      { text: 'Personal Training (4 sessions/month)', included: true },
      { text: 'Custom Diet & Nutrition Plan', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: 'Monthly Body Progress Check', included: true },
      { text: 'Supplement Guidance', included: true },
      { text: 'Body Composition Analysis', included: false },
      { text: 'Dedicated Trainer', included: false },
      { text: 'Guest Passes', included: false }
    ]
  },
  {
    id: '3',
    key: 'elite',
    name: 'Elite',
    monthlyPrice: 2999,
    annualPrice: 28790,
    isPopular: false,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited Personal Training', included: true },
      { text: 'DEXA Body Composition Analysis', included: true },
      { text: 'Dedicated Personal Trainer', included: true },
      { text: 'Weekly Detailed Progress Report', included: true },
      { text: 'Priority Class Booking', included: true },
      { text: '2 Guest Passes/month', included: true },
      { text: 'Protein Shake on Training Days', included: true }
    ]
  }
];
