import { Helmet } from 'react-helmet-async';
import PageHero from './PageHero';

const PrivacyPage = () => (
  <>
    <Helmet>
      <title>Privacy Policy | FlexFit Club</title>
      <link rel="canonical" href="https://flexfitclub.in/privacy" />
    </Helmet>
    <PageHero label="Privacy" title="Privacy" highlight="Policy" />
    <section className="section section-card">
      <div className="container">
        <div className="policy-card">
          <h2>1. Introduction</h2>
          <p className="text-muted-ff">Welcome to FlexfitClub. Your privacy is important to us, and this Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.</p>

          <h2>2. Information We Collect</h2>
          <p className="text-muted-ff">Personal Information: Name, email address, phone number, payment details, and membership information.</p>
          <p className="text-muted-ff">Usage Data: IP address, browser type, pages visited, and time spent on our website.</p>
          <p className="text-muted-ff">Cookies and Tracking Technologies: Used to enhance user experience and gather analytical data.</p>

          <h2>3. How We Use Your Information</h2>
          <p className="text-muted-ff">To provide and improve our services.</p>
          <p className="text-muted-ff">To process payments and manage memberships.</p>
          <p className="text-muted-ff">To send promotional emails and updates (you can opt out anytime).</p>
          <p className="text-muted-ff">To enhance website security and prevent fraudulent activities.</p>

          <h2>4. Data Protection & Security</h2>
          <p className="text-muted-ff">We implement security measures to protect your data from unauthorized access or disclosure.</p>
          <p className="text-muted-ff">Payment information is encrypted and processed securely.</p>

          <h2>5. Third-Party Sharing</h2>
          <p className="text-muted-ff">We do not sell or rent your personal data.</p>
          <p className="text-muted-ff">Third-party service providers may have access to certain data for payment processing and marketing.</p>
          <p className="text-muted-ff">Legal compliance: We may share data if required by law or to protect our rights.</p>

          <h2>6. Cookies & Tracking Technologies</h2>
          <p className="text-muted-ff">We use cookies to improve user experience and website functionality.</p>
          <p className="text-muted-ff">You can manage cookie preferences in your browser settings.</p>

          <h2>7. Your Rights & Choices</h2>
          <p className="text-muted-ff">You have the right to access, update, or delete your personal information.</p>
          <p className="text-muted-ff">You can opt out of marketing emails at any time.</p>
          <p className="text-muted-ff">For any data-related requests, contact us at [Contact Email].</p>

          <h2>8. Changes to This Policy</h2>
          <p className="text-muted-ff">We may update this Privacy Policy periodically.</p>
          <p className="text-muted-ff mb-0">Continued use of our services implies acceptance of any changes.</p>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPage;
