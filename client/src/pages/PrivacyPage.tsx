import { Helmet } from 'react-helmet-async';

const PrivacyPage = () => (
  <main className="page-shell section">
    <Helmet>
      <title>Privacy Policy | FlexFit Club</title>
      <link rel="canonical" href="https://flexfitclub.in/privacy" />
    </Helmet>
    <div className="container">
      <h1>Privacy Policy</h1>
      <p className="text-muted-ff">FlexFit Club uses submitted contact and membership information only to respond to inquiries, manage trials, process membership support, and improve member service. We do not sell or rent personal information.</p>
      <div className="policy-grid mt-4">
        <section className="policy-card">
          <h2>Information We Collect</h2>
          <ul>
            <li>Name, email address, and phone number.</li>
            <li>Membership, enquiry, and feedback details submitted through forms.</li>
            <li>Payment details when a paid membership or service is processed.</li>
            <li>Website usage data and cookies used to improve the site experience.</li>
          </ul>
        </section>
        <section className="policy-card">
          <h2>How We Use It</h2>
          <ul>
            <li>To contact you about membership, free trials, personal training, or support requests.</li>
            <li>To manage bookings, feedback, and member communication.</li>
            <li>To improve services, programs, and website performance.</li>
          </ul>
        </section>
        <section className="policy-card">
          <h2>Data Protection</h2>
          <ul>
            <li>We do not sell or rent personal data.</li>
            <li>Payment information is handled through encrypted payment systems.</li>
            <li>You can contact FlexFit Club at flexfitclub2k25@gmail.com for privacy-related requests.</li>
          </ul>
        </section>
      </div>
    </div>
  </main>
);

export default PrivacyPage;
