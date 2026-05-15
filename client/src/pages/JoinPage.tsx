import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import FormInput from '../components/common/FormInput';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import PageHero from './PageHero';

type PlanKey = 'basic' | 'pro' | 'elite' | 'challenge' | 'trial';

interface JoinFormValues {
  name: string;
  phone: string;
  email?: string;
  age?: number;
  gender?: string;
  goal: string;
  timing?: string;
  notes?: string;
}

const schema: yup.ObjectSchema<JoinFormValues> = yup.object({
  name: yup.string().required('Full name is required'),
  phone: yup.string().matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number').required('Phone number is required'),
  email: yup.string().email('Enter a valid email').optional(),
  age: yup.number().transform((value) => (Number.isNaN(value) ? undefined : value)).min(15).max(70).optional(),
  gender: yup.string().optional(),
  goal: yup.string().required('Choose your primary goal'),
  timing: yup.string().optional(),
  notes: yup.string().optional()
});

const planOptions: { key: PlanKey; title: string; price: string }[] = [
  { key: 'challenge', title: '90-Day Challenge', price: 'Rs. 5000/- only' },
  { key: 'basic', title: 'Basic', price: 'Rs. 999/mo' },
  { key: 'pro', title: 'Pro', price: 'Rs. 1,799/mo' },
  { key: 'elite', title: 'Elite', price: 'Rs. 2,999/mo' },
  { key: 'trial', title: 'Free Trial', price: '1 session' }
];

const planLabels: Record<PlanKey, string> = {
  basic: 'Basic',
  pro: 'Pro',
  elite: 'Elite',
  challenge: '90 Days Body Transformation Challenge',
  trial: 'Free Trial'
};

const planSummary: Record<PlanKey, string> = {
  basic: 'Best for self-guided gym floor access with cardio and regular training.',
  pro: 'Best for members who want personal training sessions and diet guidance.',
  elite: 'Best for serious transformation with dedicated trainer support.',
  challenge: 'Focused 90-day body transformation with personal attention, diet chart, workout plan, and full guidance.',
  trial: 'Best first step if you want to visit, meet the team, and feel the space.'
};

const JoinPage = () => {
  const [searchParams] = useSearchParams();
  const programInterest = searchParams.get('program');
  const initialPlan = useMemo<PlanKey>(() => {
    const plan = searchParams.get('plan') as PlanKey | null;
    return plan && ['basic', 'pro', 'elite', 'challenge', 'trial'].includes(plan) ? plan : 'trial';
  }, [searchParams]);
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>(initialPlan);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<JoinFormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async (values: JoinFormValues) => {
    const programText = programInterest ? ` Program interest: ${programInterest}.` : '';
    const message = encodeURIComponent(
      `Hi FlexFit! My name is ${values.name}, I want to join/enquire about the ${planLabels[selectedPlan]} plan.${programText} Goal: ${values.goal}. Timing: ${values.timing || 'Flexible'}. Please contact me.`
    );
    setStatus('success');
    reset();
    window.open(`https://wa.me/919940846719?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>Join FlexFit Club - Book Your Free Trial | Chrompet Chennai</title>
        <meta name="description" content="Join FlexFit Club today. Book a free 1-day trial session, pick your membership plan, and start your transformation. Chrompet, Chennai." />
        <link rel="canonical" href="https://flexfitclub.in/join" />
      </Helmet>
      <PageHero label="Join Now" title="Book Your" highlight="Free Trial" />
      <section className="section section-card">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="text-center mb-5">
                <SectionLabel text="Start Today" />
                <SectionHeading line1="Choose A Plan" line2="Meet Your Coach" highlightLine={2} centered />
              </div>
              <div className="plan-selector mb-4">
                {planOptions.map((plan) => (
                  <button type="button" className={`plan-option ${selectedPlan === plan.key ? 'active' : ''}`} key={plan.key} onClick={() => setSelectedPlan(plan.key)}>
                    <strong className="d-block">{plan.title}</strong>
                    <span className="text-muted-ff">{plan.price}</span>
                  </button>
                ))}
              </div>
              <div className="selected-plan-note mb-4">
                <span>Selected plan</span>
                <strong>{planLabels[selectedPlan]}</strong>
                <p>{planSummary[selectedPlan]}{programInterest ? ` Program interest: ${programInterest}.` : ''}</p>
              </div>
              <div className="contact-card">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row">
                    <div className="col-md-6"><FormInput label="Full Name *" registration={register('name')} error={errors.name} /></div>
                    <div className="col-md-6"><FormInput label="Phone Number *" registration={register('phone')} error={errors.phone} /></div>
                    <div className="col-md-6"><FormInput label="Email Address" type="email" registration={register('email')} error={errors.email} /></div>
                    <div className="col-md-6"><FormInput label="Age" type="number" registration={register('age')} error={errors.age} /></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Gender</label>
                      <select className="form-select" {...register('gender')}>
                        <option value="">Choose</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-yellow small fw-bold text-uppercase">Primary Goal *</label>
                      <select className={`form-select ${errors.goal ? 'is-invalid' : ''}`} {...register('goal')}>
                        <option value="">Choose goal</option>
                        <option>Lose Weight / Burn Fat</option>
                        <option>Build Muscle / Gain Strength</option>
                        <option>Gain Weight</option>
                        <option>Maintain a Fit Body</option>
                        <option>Improve Overall Fitness</option>
                        <option>Bodybuilding / Competition Prep</option>
                        <option>Stress Relief & Wellness</option>
                        <option>Just Getting Started</option>
                      </select>
                      {errors.goal && <div className="invalid-feedback">{errors.goal.message}</div>}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-yellow small fw-bold text-uppercase">Preferred Timing</label>
                    <select className="form-select" {...register('timing')}>
                      <option value="">Choose timing</option>
                      <option>Morning (5 AM - 10 AM)</option>
                      <option>Afternoon (10 AM - 4 PM)</option>
                      <option>Evening (4 PM - 10 PM)</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-yellow small fw-bold text-uppercase">Health Notes</label>
                    <textarea className="form-control" rows={4} placeholder="Any health conditions or injuries our trainer should know? (Optional)" {...register('notes')} />
                  </div>
                  {status === 'success' && <div className="alert alert-success">Success! We opened WhatsApp so the team can confirm your enquiry.</div>}
                  <button className="btn-ff btn-ff-primary w-100" type="submit" disabled={isSubmitting}>
                    {selectedPlan === 'challenge' ? 'Reserve My Challenge Seat' : 'Send My Enquiry'}
                  </button>
                </form>
                <div className="text-center mt-4">
                  <span className="text-muted-ff me-2">Prefer to chat directly?</span>
                  <a className="text-yellow fw-bold" href="https://wa.me/919940846719" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                </div>
              </div>
              <div className="row g-3 text-center mt-4">
                {['No Joining Fee', 'Free Trial Session', 'WhatsApp Confirmation'].map((item) => (
                  <div className="col-md-4" key={item}>
                    <div className="feature-card py-3">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinPage;
