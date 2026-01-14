'use client';

import { useState, useEffect, useRef } from 'react';

export default function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('US');
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  ];

  const messages = [
    {
      text: 'Start the New Year with New Rituals',
      link: { text: 'Shop Brew Tools', href: '#' }
    },
    {
      text: 'Free Shipping on Subscriptions and Orders over $40',
      link: null
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (code) => {
    setSelectedLanguage(code);
    setIsDropdownOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage);
  const currentMessage = messages[currentIndex];

  return (
    <div className="relative flex items-center justify-between bg-[#8ad3e3] py-1 px-6 text-xs text-[#00344d] sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Spacer for left side */}
      <div className="w-20"></div>
      
      {/* Center message */}
      <span 
        className={`flex items-center gap-2 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span>{currentMessage.text}</span>
        {currentMessage.link && (
          <>
            <span className="text-[#1c2333]">|</span>
            <a className="underline hover:no-underline" href={currentMessage.link.href}>
              {currentMessage.link.text}
            </a>
          </>
        )}
      </span>

      {/* Language Switcher */}
      <div className="relative -mr-2" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1 px-2 py-1 hover:opacity-80 transition-opacity"
        >
          <span className="text-base">{currentLanguage?.flag}</span>
          <span className="font-medium">{currentLanguage?.code}</span>
          <svg
            className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 ${
                    selectedLanguage === lang.code ? 'bg-gray-50 font-medium' : ''
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
