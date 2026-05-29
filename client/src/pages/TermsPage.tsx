import { Helmet } from 'react-helmet-async';

const TermsPage = () => (
  <main className="page-shell section">
    <Helmet>
      <title>Terms of Use | FlexFit Club</title>
      <link rel="canonical" href="https://flexfitclub.in/terms" />
    </Helmet>
    <div className="container">
      <h1>Terms of Use</h1>
      <p className="text-muted-ff">Membership access, personal training, group classes, and trial sessions are subject to FlexFit Club policies, health declarations, trainer availability, and safe gym usage rules.</p>
      <div className="policy-grid mt-4">
        <section className="policy-card">
          <h2>Membership Rules</h2>
          <ul>
            <li>Memberships are non-transferable and cannot be shared.</li>
            <li>Fees must be paid in advance. Credit/debit cards and online payments may be accepted.</li>
            <li>No refunds are provided for unused membership periods.</li>
            <li>Proper gym attire and footwear are required.</li>
            <li>Equipment must be used safely and returned after use.</li>
          </ul>
        </section>
        <section className="policy-card">
          <h2>Personal Training</h2>
          <ul>
            <li>Personal training sessions must be booked in advance.</li>
            <li>Cancellations require at least 24 hours notice.</li>
            <li>Group classes are subject to trainer and slot availability.</li>
          </ul>
        </section>
        <section className="policy-card">
          <h2>Health & Liability</h2>
          <ul>
            <li>Members should consult a physician before starting any fitness program.</li>
            <li>FlexFit Club is not liable for injuries, health issues, or lost/stolen belongings.</li>
            <li>Members must follow trainer guidance and use equipment responsibly.</li>
          </ul>
        </section>
      </div>
    </div>
  </main>
);

export default TermsPage;
