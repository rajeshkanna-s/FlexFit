import { Helmet } from 'react-helmet-async';
import PageHero from './PageHero';

const TermsPage = () => (
  <>
    <Helmet>
      <title>Terms and Conditions | FlexFit Club</title>
      <link rel="canonical" href="https://flexfitclub.in/terms" />
    </Helmet>
    <PageHero label="Terms" title="Terms And" highlight="Conditions" />
    <section className="section section-card">
      <div className="container">
        <div className="policy-card">
          <h2>1. Introduction</h2>
          <p className="text-muted-ff">Welcome to Flexfit. By accessing or using our website, services, and facilities, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before using our services.</p>

          <h2>2. Membership & Registration</h2>
          <p className="text-muted-ff">To access certain services, users may need to register for a membership.</p>
          <p className="text-muted-ff">Members must provide accurate and current information during registration.</p>
          <p className="text-muted-ff">Memberships are non-transferable and must not be shared with others.</p>
          <p className="text-muted-ff">We reserve the right to refuse or cancel memberships at our discretion.</p>

          <h2>3. Payment & Billing</h2>
          <p className="text-muted-ff">Membership fees, personal training, and other services must be paid in advance.</p>
          <p className="text-muted-ff">We accept various payment methods, including credit/debit cards and online payments.</p>
          <p className="text-muted-ff">No refunds will be issued for unused membership periods, except as required by law.</p>

          <h2>4. Use of Facilities & Conduct</h2>
          <p className="text-muted-ff">Members must adhere to all gym rules and etiquette.</p>
          <p className="text-muted-ff">Proper attire and footwear are required.</p>
          <p className="text-muted-ff">Equipment must be used safely and returned after use.</p>
          <p className="text-muted-ff">Any misconduct, harassment, or damage to property may result in membership termination.</p>

          <h2>5. Health & Safety</h2>
          <p className="text-muted-ff">Members should consult a physician before starting any fitness program.</p>
          <p className="text-muted-ff">The gym is not responsible for injuries or health issues arising from exercise.</p>
          <p className="text-muted-ff">Personal belongings should be stored securely; we are not liable for lost or stolen items.</p>

          <h2>6. Personal Training & Classes</h2>
          <p className="text-muted-ff">Personal training services must be booked in advance.</p>
          <p className="text-muted-ff">Cancellations must be made at least 24 hours prior to the scheduled session.</p>
          <p className="text-muted-ff">Group classes are subject to availability and may be rescheduled or canceled.</p>

          <h2>7. Website Use & Content</h2>
          <p className="text-muted-ff">All content on our website, including text, images, and videos, is owned by Flexfit and may not be copied or used without permission.</p>
          <p className="text-muted-ff">Users must not engage in unlawful activities, including hacking or spreading malware.</p>

          <h2>8. Limitation of Liability</h2>
          <p className="text-muted-ff">We are not responsible for any injuries, damages, or losses resulting from the use of our facilities or services.</p>
          <p className="text-muted-ff">Our liability is limited to the maximum extent permitted by law.</p>

          <h2>9. Changes to Terms & Conditions</h2>
          <p className="text-muted-ff">We reserve the right to modify these Terms at any time.</p>
          <p className="text-muted-ff mb-0">Continued use of our services constitutes acceptance of any changes.</p>
        </div>
      </div>
    </section>
  </>
);

export default TermsPage;
