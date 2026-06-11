import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import FormInput from '../components/common/FormInput';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import { branchLocationIds, branchLocations, getBranchLocation } from '../data/locations.data';
import PageHero from './PageHero';

type PlanKey = 'challenge' | 'couple' | 'yearly';

interface JoinFormValues {
  name: string;
  phone: string;
  email?: string;
  age?: number;
  gender?: string;
  branchId: string;
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
  branchId: yup.string().oneOf(branchLocationIds, 'Please choose a FlexFit branch').required('Please choose a FlexFit branch'),
  goal: yup.string().required('Choose your primary goal'),
  timing: yup.string().optional(),
  notes: yup.string().optional()
});

const planOptions: { key: PlanKey; title: string; price: string }[] = [
  { key: 'challenge', title: '90-Day Challenge', price: 'Branch-wise price' },
  { key: 'couple', title: 'Couple Offer', price: 'Branch-wise price' },
  { key: 'yearly', title: 'Yearly Plan', price: 'Branch-wise price' }
];

const planLabels: Record<PlanKey, string> = {
  challenge: '90 Days Body Transformation Challenge',
  couple: '12 Months Couple Offer',
  yearly: '12 Months Yearly Plan'
};

const planSummary: Record<PlanKey, string> = {
  challenge: 'Focused 90-day body transformation with personal attention, diet chart, workout plan, and full guidance. Price depends on your selected branch.',
  couple: 'Annual couple package for two members. Price depends on your selected branch.',
  yearly: 'Annual individual membership plan. Price depends on your selected branch.'
};

const JoinPage = () => {
  const [searchParams] = useSearchParams();
  const programInterest = searchParams.get('program');
  const initialBranchId = useMemo(() => {
    const branch = searchParams.get('branch') || '';
    return branchLocationIds.includes(branch) ? branch : '';
  }, [searchParams]);
  const initialPlan = useMemo<PlanKey>(() => {
    const plan = searchParams.get('plan');
    if (plan === 'couple-offer') return 'couple';
    if (plan === 'yearly-plan') return 'yearly';
    return plan && ['challenge', 'couple', 'yearly'].includes(plan) ? (plan as PlanKey) : 'challenge';
  }, [searchParams]);
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>(initialPlan);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting }, reset } = useForm<JoinFormValues>({
    resolver: yupResolver(schema),
    defaultValues: { branchId: initialBranchId }
  });
  const selectedBranchId = watch('branchId') || '';
  const selectedBranch = getBranchLocation(selectedBranchId);
  const getPlanPrice = (planKey: PlanKey, fallback: string) => {
    if (planKey === 'challenge') return selectedBranch?.challengeOffer.price || 'Choose branch for price';
    if (planKey === 'couple') return selectedBranch?.coupleOffer.price || 'Choose branch for price';
    if (planKey === 'yearly') return selectedBranch?.yearlyOffer.price || 'Choose branch for price';
    return fallback;
  };
  const handleBranchSelect = (branchId: string) => {
    setValue('branchId', branchId, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
  };

  const onSubmit = async (values: JoinFormValues) => {
    const programText = programInterest ? ` Program interest: ${programInterest}.` : '';
    const branch = getBranchLocation(values.branchId);
    const branchOfferText = selectedPlan === 'challenge'
      ? ` Branch challenge price: ${branch?.challengeOffer.price || 'Not specified'}.`
      : selectedPlan === 'couple'
        ? ` Branch couple offer price: ${branch?.coupleOffer.price || 'Not specified'}.`
        : selectedPlan === 'yearly'
          ? ` Branch yearly plan price: ${branch?.yearlyOffer.price || 'Not specified'}.`
          : '';
    const message = encodeURIComponent(
      `Hi FlexFit! My name is ${values.name}, I want to join/enquire about the ${planLabels[selectedPlan]} plan.${programText} Preferred branch: ${branch?.shortName || values.branchId}.${branchOfferText} Address: ${branch?.address || 'Not specified'}. Map: ${branch?.mapUrl || 'Not specified'}. Goal: ${values.goal}. Timing: ${values.timing || 'Flexible'}. Please contact me.`
    );
    setStatus('success');
    reset();
    window.open(`https://wa.me/919940846719?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>Join FlexFit Club | Chennai Branches</title>
        <meta name="description" content="Join FlexFit Club today. Choose your Chrompet or Anna Nagar, Chitlapakkam branch, pick a plan, and start your transformation." />
        <link rel="canonical" href="https://flexfitclub.in/join" />
      </Helmet>
      <PageHero label="Join Now" title="Join" highlight="FlexFit Club" />
      <section className="section section-card">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="text-center mb-5">
                <SectionLabel text="Start Today" />
                <SectionHeading line1="Choose A Plan" line2="Meet Your Coach" highlightLine={2} centered />
              </div>
              <div className="contact-card">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <input type="hidden" {...register('branchId')} />
                  <div className="join-step-panel mb-4">
                    <span>Step 1</span>
                    <h3>Choose Your Branch</h3>
                    <div className="branch-selector">
                      {branchLocations.map((location) => (
                        <button
                          type="button"
                          className={`branch-option ${selectedBranchId === location.id ? 'active' : ''}`}
                          key={location.id}
                          onClick={() => handleBranchSelect(location.id)}
                        >
                          <span className="branch-radio"></span>
                          <span className="branch-name">{location.shortName}</span>
                        </button>
                      ))}
                    </div>
                    {errors.branchId && <div className="d-block invalid-feedback">{errors.branchId.message}</div>}
                  </div>
                  <div className="join-step-panel mb-4">
                    <span>Step 2</span>
                    <h3>Choose A Plan</h3>
                    <div className="plan-selector">
                      {planOptions.map((plan) => (
                        <button type="button" className={`plan-option ${selectedPlan === plan.key ? 'active' : ''}`} key={plan.key} onClick={() => setSelectedPlan(plan.key)}>
                          <strong className="d-block">{plan.title}</strong>
                          <span className="text-muted-ff">{getPlanPrice(plan.key, plan.price)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="selected-plan-note mb-4">
                    <span>Selected plan</span>
                    <strong>{planLabels[selectedPlan]}</strong>
                    <p>
                      {planSummary[selectedPlan]}
                      {selectedPlan === 'challenge' && ` Selected branch price: ${selectedBranch?.challengeOffer.price || 'Choose a branch first.'}`}
                      {selectedPlan === 'couple' && ` Selected branch price: ${selectedBranch?.coupleOffer.price || 'Choose a branch first.'}`}
                      {selectedPlan === 'yearly' && ` Selected branch price: ${selectedBranch?.yearlyOffer.price || 'Choose a branch first.'}`}
                      {programInterest ? ` Program interest: ${programInterest}.` : ''}
                    </p>
                  </div>
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
                      <option>Morning (5/5:30 AM - 10 AM)</option>
                      <option>Evening (4 PM - 10 PM, Mon-Sat)</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-yellow small fw-bold text-uppercase">Health Notes</label>
                    <textarea className="form-control" rows={4} placeholder="Any health conditions or injuries our trainer should know? (Optional)" {...register('notes')} />
                  </div>
                  {status === 'success' && <div className="alert alert-success">Success! We opened WhatsApp so the team can confirm your enquiry.</div>}
                  <button className="btn-ff btn-ff-primary w-100" type="submit" disabled={isSubmitting}>
                    {selectedPlan === 'challenge' ? 'Reserve My Challenge Seat' : selectedPlan === 'couple' ? 'Send Couple Offer Enquiry' : 'Send Yearly Plan Enquiry'}
                  </button>
                </form>
              </div>
              <div className="row g-3 text-center join-trust-row">
                {['No Joining Fee', 'Friendly Coaches', 'WhatsApp Confirmation'].map((item) => (
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
