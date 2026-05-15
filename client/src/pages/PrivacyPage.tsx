import { Helmet } from 'react-helmet-async';

const PrivacyPage = () => (
  <main className="page-shell section">
    <Helmet>
      <title>Privacy Policy | FlexFit Club</title>
      <link rel="canonical" href="https://flexfitclub.in/privacy" />
    </Helmet>
    <div className="container">
      <h1>Privacy Policy</h1>
      <p className="text-muted-ff">FlexFit Club uses submitted contact and membership information only to respond to inquiries, manage trials, and improve member service. We do not sell personal information.</p>
    </div>
  </main>
);

export default PrivacyPage;
