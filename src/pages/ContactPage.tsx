import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import FormInput from '../components/common/FormInput';
import Icon from '../components/common/Icon';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import CtaBand from '../components/common/CtaBand';
import { branchLocationIds, branchLocations, getBranchLocation } from '../data/locations.data';
import PageHero from './PageHero';

interface ContactFormValues {
  name: string;
  phone: string;
  email?: string;
  branchId: string;
  subject: string;
  message?: string;
}

const schema: yup.ObjectSchema<ContactFormValues> = yup.object({
  name: yup.string().required('Full name is required'),
  phone: yup.string().matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number').required('Phone number is required'),
  email: yup.string().email('Enter a valid email').optional(),
  branchId: yup.string().oneOf(branchLocationIds, 'Please choose a FlexFit branch').required('Please choose a FlexFit branch'),
  subject: yup.string().required('Please choose a subject'),
  message: yup.string().optional()
});

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async (values: ContactFormValues) => {
    const branch = getBranchLocation(values.branchId);
    const message = encodeURIComponent(
      `Hi FlexFit! My name is ${values.name}. Phone: ${values.phone}. Preferred branch: ${branch?.shortName || values.branchId}. 90-day challenge price: ${branch?.challengeOffer.price || 'Not specified'}. Couple offer price: ${branch?.coupleOffer.price || 'Not specified'}. Yearly plan price: ${branch?.yearlyOffer?.price || 'Not specified'}. Address: ${branch?.address || 'Not specified'}. Map: ${branch?.mapUrl || 'Not specified'}. Subject: ${values.subject}. ${values.message || ''}`
    );
    setStatus('success');
    reset();
    window.open(`https://wa.me/919940846719?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>Contact FlexFit Club - Chennai Branches | WhatsApp, Email, Location</title>
        <meta name="description" content="Contact FlexFit Club in Chrompet and Chitlapakkam, Chennai. Choose your nearest branch before sending a WhatsApp enquiry." />
        <link rel="canonical" href="https://flexfitclub.in/contact" />
      </Helmet>
      <PageHero label="Contact" title="Let's Start" highlight="Your Journey" />
      <section className="section section-card">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <SectionLabel text="Reach Us" />
              <SectionHeading line1="Contact" line2="Info" highlightLine={2} />
              <div className="contact-card mt-4">
                <div className="contact-info-row">
                  <Icon name="phone" />
                  <div>
                    <strong>Call</strong>
                    <a href="tel:+919940846719">+91 99408 46719</a>
                  </div>
                </div>
                <div className="contact-info-row">
                  <Icon name="email" />
                  <div>
                    <strong>Email</strong>
                    <span>flexfitclub2k25@gmail.com</span>
                  </div>
                </div>
                <div className="contact-info-row">
                  <Icon name="instagram" />
                  <div>
                    <strong>Instagram</strong>
                    <a href="https://www.instagram.com/flex._.fit_" target="_blank" rel="noreferrer">@flex._.fit_</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-card">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row">
                    <div className="col-md-6"><FormInput label="Full Name *" registration={register('name')} error={errors.name} /></div>
                    <div className="col-md-6"><FormInput label="Phone Number *" registration={register('phone')} error={errors.phone} /></div>
                  </div>
                  <FormInput label="Email Address" type="email" registration={register('email')} error={errors.email} />
                  <div className="mb-3">
                    <label className="form-label text-yellow small fw-bold text-uppercase">Preferred Branch *</label>
                    <select className={`form-select ${errors.branchId ? 'is-invalid' : ''}`} {...register('branchId')}>
                      <option value="">Choose location</option>
                      {branchLocations.map((location) => (
                        <option value={location.id} key={location.id}>{location.shortName}</option>
                      ))}
                    </select>
                    {errors.branchId && <div className="invalid-feedback">{errors.branchId.message}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-yellow small fw-bold text-uppercase">Subject *</label>
                    <select className={`form-select ${errors.subject ? 'is-invalid' : ''}`} {...register('subject')}>
                      <option value="">Choose subject</option>
                      <option>Membership Inquiry</option>
                      <option>Personal Training</option>
                      <option>Group Classes</option>
                      <option>Pricing & Plans</option>
                      <option>Feedback / Complaint</option>
                      <option>Other</option>
                    </select>
                    {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-yellow small fw-bold text-uppercase">Message</label>
                    <textarea className="form-control" rows={5} {...register('message')} />
                  </div>
                  {status === 'success' && <div className="alert alert-success">Thank you! WhatsApp opened with your message. Contact form integration can be added later.</div>}
                  <div className="d-flex flex-wrap gap-3">
                    <button className="btn-ff btn-ff-primary" type="submit" disabled={isSubmitting}>Send on WhatsApp</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="contact-card contact-details-card mt-5">
            <div className="contact-details-grid">
              <div className="contact-detail-block">
                <p className="mb-3"><strong>Locations</strong></p>
                <div className="branch-location-list">
                  {branchLocations.map((location) => (
                    <div className="branch-location-item" key={location.id}>
                      <strong>{location.shortName}</strong>
                      <span>{location.address}</span>
                      <a className="text-yellow fw-bold" href={location.mapUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="contact-detail-block">
                <p className="mb-3"><strong>Working Hours</strong></p>
                <div className="working-hours-grid">
                  {branchLocations.map((location) => (
                    <div className="branch-location-item working-hours-card" key={`${location.id}-hours`}>
                      <strong>{location.shortName}</strong>
                      <span>Sunday: {location.workingHours.sunday}</span>
                      <span>Monday - Friday: {location.workingHours.weekdays}</span>
                      <span>Saturday: {location.workingHours.saturday}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="branch-map-grid mt-5">
            {branchLocations.map((location) => (
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(location.embedQuery)}&output=embed`}
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: 10 }}
                allowFullScreen
                loading="lazy"
                title={`${location.shortName} Location`}
                key={location.id}
              />
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Fastest response is on WhatsApp." text="Send your goal, preferred timing, and plan interest. We will guide you from there." />
    </>
  );
};

export default ContactPage;
