export interface MemberInquiry {
  name: string;
  phone: string;
  email?: string;
  age?: number;
  gender?: string;
  goal: string;
  timing?: string;
  plan: 'basic' | 'pro' | 'elite' | 'trial';
  notes?: string;
}
