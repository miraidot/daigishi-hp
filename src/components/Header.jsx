import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = ({ activeSection, setActiveSection, handleScroll }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const sections = [
    { id: 'profile', text: 'プロフィール' },
    { id: 'policy', text: '政策・取り組み' },
    { id: 'activity', text: '活動報告' },
    { id: 'notice', text: 'お知らせ' },
    { id: 'game', text: 'ごみ拾いチャレンジ' },
    { id: 'contact', text: 'お問い合わせ' },
  ];

  const handleClick = (id) => {
    setActiveSection(id);
    handleScroll(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <h1 className="text-xl font-bold text-blue-600">
              青山 まさる | △△町議会議員
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={`#${section.id}`}
                onClick={() => handleClick(section.id)}
                className={`text-sm font-medium ${
                  activeSection === section.id
                    ? 'text-blue-600 hover:text-blue-600'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {section.text}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={`#${section.id}`}
                  onClick={() => handleClick(section.id)}
                  className={`block px-3 py-2 text-sm font-medium ${
                    activeSection === section.id
                      ? 'text-blue-600 hover:text-blue-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {section.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => {
                  scrollToSection(section.id);
                  setMobileMenuOpen(false);
                }}
                className="block rounded-md px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {section.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
