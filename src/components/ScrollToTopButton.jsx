import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="ページトップに戻る"
    >
      <ArrowUpIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopButton;
