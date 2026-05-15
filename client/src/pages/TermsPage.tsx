import { Helmet } from 'react-helmet-async';

const TermsPage = () => (
  <main className="page-shell section">
    <Helmet>
      <title>Terms of Use | FlexFit Club</title>
      <link rel="canonical" href="https://flexfitclub.in/terms" />
    </Helmet>
    <div className="container">
      <h1>Terms of Use</h1>
      <p className="text-muted-ff">Membership access, personal training, and trial sessions are subject to FlexFit Club policies, health declarations, trainer availability, and safe gym usage rules.</p>
    </div>
  </main>
);

export default TermsPage;
