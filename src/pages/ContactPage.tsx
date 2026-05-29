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
import PageHero from './PageHero';

interface ContactFormValues {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message?: string;
}

const schema: yup.ObjectSchema<ContactFormValues> = yup.object({
  name: yup.string().required('Full name is required'),
  phone: yup.string().matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number').required('Phone number is required'),
  email: yup.string().email('Enter a valid email').optional(),
  subject: yup.string().required('Please choose a subject'),
  message: yup.string().optional()
});

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async (values: ContactFormValues) => {
    const message = encodeURIComponent(
      `Hi FlexFit! My name is ${values.name}. Phone: ${values.phone}. Subject: ${values.subject}. ${values.message || ''}`
    );
    setStatus('success');
    reset();
    window.open(`https://wa.me/919940846719?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>Contact FlexFit Club - Chrompet Chennai | WhatsApp, Email, Location</title>
        <meta name="description" content="Contact FlexFit Club in Chrompet, Chennai. Visit us at Muthusamy Nagar or WhatsApp +91 99408 46719 for membership queries." />
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
                    <strong>Call / WhatsApp</strong>
                    <a href="https://wa.me/919940846719" target="_blank" rel="noreferrer">+91 99408 46719</a>
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
                <hr className="border-secondary" />
                <p><strong>Address</strong><br />Plot no 5, First Floor, Muthusamy Main Road, Muthusamy Nagar, Chrompet, Chennai - 600044</p>
                <a className="text-yellow fw-bold" href="https://maps.app.goo.gl/K8LZ5yGL2shDQjWH9" target="_blank" rel="noreferrer">View on Google Maps</a>
                <hr className="border-secondary" />
                <p className="mb-1"><strong>Working Hours</strong></p>
                <p className="text-muted-ff mb-0">Monday - Friday: 5:00 AM - 10:00 PM<br />Saturday: 5:00 AM - 9:00 PM<br />Sunday: 6:00 AM - 8:00 PM<br />Public Holidays: 7:00 AM - 7:00 PM</p>
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
                    <a className="btn-ff btn-success" href="https://wa.me/919940846719?text=Hi%20FlexFit!%20I%20want%20to%20know%20more." target="_blank" rel="noreferrer">WhatsApp Us</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <iframe
              src="https://www.google.com/maps?q=FlexFit%20Club%2C%20Chrompet%2C%20Chennai&output=embed"
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: 10 }}
              allowFullScreen
              loading="lazy"
              title="FlexFit Club Location"
            />
          </div>
        </div>
      </section>
      <CtaBand title="Fastest response is on WhatsApp." text="Send your goal, preferred timing, and plan interest. We will guide you from there." />
    </>
  );
};

export default ContactPage;
