import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import ResourcesPage from './pages/ResourcesPage';
import DocumentsPage from './pages/resources/DocumentsPage';
import ArticlesPage from './pages/resources/ArticlesPage';
import VideosPage from './pages/resources/VideosPage';
import CaseStudiesPage from './pages/resources/CaseStudiesPage';
import FaqPage from './pages/resources/FaqPage';
import PartnersPage from './pages/PartnersPage';
import BecomePartnerPage from './pages/BecomePartnerPage';
import ContactPage from './pages/ContactPage';
import DemoPage from './pages/DemoPage';
import ReferencesPage from './pages/ReferencesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LegalNoticesPage from './pages/LegalNoticesPage';
import TermsPage from './pages/TermsPage';
import PricingPage from './pages/PricingPage';
import PromoPage from './pages/PromoPage';

// Composant pour gérer le scroll vers le haut
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<FeaturesPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/documents" element={<DocumentsPage />} />
            <Route path="/resources/articles" element={<ArticlesPage />} />
            <Route path="/resources/videos" element={<VideosPage />} />
            <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
            <Route path="/resources/faq" element={<FaqPage />} />
            <Route path="/references" element={<ReferencesPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/partners/become" element={<BecomePartnerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/legal-notices" element={<LegalNoticesPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/promo" element={<PromoPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;