import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 flex items-center">
                <span className="text-white font-bold text-xl">DP-Manager</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">{t('nav.features_menu')}</Link></li>
              <li><Link to="/references" className="text-blue-200 hover:text-white transition-colors">{t('nav.clients_menu')}</Link></li>
              <li><Link to="/resources/documents" className="text-blue-200 hover:text-white transition-colors">{t('nav.resources.documents')}</Link></li>
              <li><Link to="/partners" className="text-blue-200 hover:text-white transition-colors">{t('nav.partners.link1')}</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><Link to="/legal-notices" className="text-blue-200 hover:text-white transition-colors">{t('footer.legalNotices')}</Link></li>
              <li><Link to="/privacy-policy" className="text-blue-200 hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="/terms" className="text-blue-200 hover:text-white transition-colors">{t('footer.terms')}</Link></li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-200" />
                <span className="text-blue-200 text-sm">contact@leadersoft.dz</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-200" />
                <span className="text-blue-200 text-sm">
                  <span className="phone-number">0560 95 21 28</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-200" />
                <span className="text-blue-200 text-sm">Blida, Algérie</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
