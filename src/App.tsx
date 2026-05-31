import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import ScrollToTop from './components/layout/ScrollToTop';
import MobileActionBar from './components/layout/MobileActionBar';
import ScrollProgress from './components/layout/ScrollProgress';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import MembershipPage from './pages/MembershipPage';
import GalleryPage from './pages/GalleryPage';
import ExercisePage from './pages/ExercisePage';
import ContactPage from './pages/ContactPage';
import JoinPage from './pages/JoinPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CalculatorsPage from './pages/CalculatorsPage';
import DietChartPage from './pages/DietChartPage';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 650, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <WhatsAppFloat />
        <MobileActionBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/calculators" element={<CalculatorsPage />} />
          <Route path="/diet-chart" element={<DietChartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
