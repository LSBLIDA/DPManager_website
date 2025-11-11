import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useEffect } from 'react';

 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

// ...existing code...
const navigation = [
  { key: 'home', name: t('nav.home'), href: '/' },
  { key: 'features_menu', name: t('nav.features_menu'), href: '/about' },
  { key: 'clients_menu', name: t('nav.clients_menu'), href: '/references' },
  { key: 'resources', name: t('nav.resources.main'), href: '/resources' },
  { key: 'partners', name: t('nav.partners.main'), href: '/partners' },
  { key: 'contact', name: t('nav.contact'), href: '/contact' },
];


  const isActive = (href: string) => location.pathname === href;

  return (

    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-4.png" alt="DP-Manager" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              item.name === t('nav.resources.main') ? (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 inline-flex items-center ${
                      location.pathname.includes('/resources')
                        ? 'text-violet-600 border-b-2 border-violet-600'
                        : 'text-gray-700 hover:text-violet-600'
                    }`}
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-200 ${
                    isResourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                      <div className="py-2">
                        <Link
                          to="/resources/documents"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition-colors"
                        >
                          {t('nav.resources.documents')}
                        </Link>
                        <Link
                          to="/resources/articles"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition-colors"
                        >
                          {t('nav.resources.articles')}
                        </Link>
                        <Link
                          to="/resources/videos"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition-colors"
                        >
                          {t('nav.resources.videos')}
                        </Link>
                        <Link
                          to="/resources/case-studies"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition-colors"
                        >
                          {t('nav.resources.caseStudies')}
                        </Link>
                        <Link
                          to="/resources/faq"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition-colors"
                        >
                          {t('nav.resources.faq')}
                        </Link>
                      </div>
                  </div>
                </div>
              ) : item.key === 'partners' ? (
  <div 
    key={item.key}
    className="relative group"
    onMouseEnter={() => setIsPartnersOpen(true)}
    onMouseLeave={() => setIsPartnersOpen(false)}
  >
                  <Link
                    to="/partners"
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 inline-flex items-center ${
                      location.pathname.includes('/partners')
                        ? 'text-violet-600 border-b-2 border-violet-600'
                        : 'text-gray-700 hover:text-violet-600'
                    }`}
                  >
                     {item.name}


                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Link>
                  <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-200 ${
                    isPartnersOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                      <div className="py-2">
<Link
  to="/partners"
  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition-colors"
>
  {t('nav.partners.link1')}
</Link>
<Link
  to="/partners/become"
  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition-colors"
>
  {t('nav.partners.link2')}
</Link>


</div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-violet-600 border-b-2 border-violet-600'
                      : 'text-gray-700 hover:text-violet-600'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button and Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link
              to="/demo"
              className="bg-violet-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors duration-200"
            >
              {t('nav.requestDemo')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                return (
                  item.name === t('nav.resources.main') ? (
                    <div key={item.name} className="px-3 py-2">
                      <div className="text-base font-medium text-gray-700 mb-2">{item.name}</div>
                      <div className="pl-4 space-y-1">
                        <Link
                          to="/resources/documents"
                          className="block py-1 text-sm text-gray-600 hover:text-violet-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t('nav.resources.documents')}
                        </Link>
                        <Link
                          to="/resources/articles"
                          className="block py-1 text-sm text-gray-600 hover:text-violet-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t('nav.resources.articles')}
                        </Link>
                        <Link
                          to="/resources/videos"
                          className="block py-1 text-sm text-gray-600 hover:text-violet-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t('nav.resources.videos')}
                        </Link>
                        <Link
                          to="/resources/case-studies"
                          className="block py-1 text-sm text-gray-600 hover:text-violet-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t('nav.resources.caseStudies')}
                        </Link>
                        <Link
                          to="/resources/faq"
                          className="block py-1 text-sm text-gray-600 hover:text-violet-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t('nav.resources.faq')}
                        </Link>
                      </div>
                    </div>
                  ) : item.key === 'partners' ? (
  <div key={item.key} className="px-3 py-2">
    <div className="text-base font-medium text-gray-700 mb-2">{item.name}</div>
    <div className="pl-4 space-y-1">
                        <Link
                          to="/partners"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition-colors"
                           onClick={() => setIsMenuOpen(false)}
                        >
                          {t('nav.partners.link1')}
                        </Link>
                        <Link
                          to="/partners/become"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition-colors"
                           onClick={() => setIsMenuOpen(false)}
                        >
                          {t('nav.partners.link2')}
                        </Link>

                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive(item.href)
                          ? 'text-violet-600 bg-violet-50'
                          : 'text-gray-700 hover:text-violet-600 hover:bg-gray-50'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                );
              })}
              <div className="px-3 py-2 border-t border-gray-200 mt-2">
                <LanguageSelector />
              </div>
              <Link
                to="/demo"
                className="mt-4 bg-violet-600 text-white px-6 py-2 rounded-lg text-base font-medium hover:bg-violet-700 transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.requestDemo')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
