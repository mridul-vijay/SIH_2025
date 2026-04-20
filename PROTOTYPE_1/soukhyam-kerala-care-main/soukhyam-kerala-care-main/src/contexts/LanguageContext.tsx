// import React, { createContext, useContext, useState, ReactNode } from 'react';

// type Language = 'en' | 'hi' | 'as' | 'bn' | 'kn' | 'gu' | 'ml' | 'mr' | 'or' | 'pa' | 'ta' | 'te' | 'ur';

// export const languages = [
//   { code: 'en', name: 'English', nativeName: 'English' },
//   { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
//   { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
//   { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
//   { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
//   { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
//   { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
//   { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
//   { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
//   { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
//   { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
//   { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
//   { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
// ];

// interface LanguageContextType {
//   language: Language;
//   setLanguage: (language: Language) => void;
//   toggleLanguage: () => void;
//   getCurrentLanguage: () => typeof languages[0];
//   getContentLocale: () => 'en' | 'ml' | 'hi';
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (context === undefined) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };

// interface LanguageProviderProps {
//   children: ReactNode;
// }

// export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
//   const [language, setLanguage] = useState<Language>('en');

//   // const toggleLanguage = () => {
//   //   setLanguage(prev => prev === 'en' ? 'ml' : 'en');
//   // };

//     const toggleLanguage = () => {
//     const cycle = ['en', 'ml', 'hi'];
//     const currentIndex = cycle.indexOf(language);
//     const nextIndex = (currentIndex + 1) % cycle.length;
//     setLanguage(cycle[nextIndex] as Language);
//   };

//   // const toggleLanguage = () => {
//   //   const cycle: Language[] = [
//   //     'en', 'hi', 'as', 'bn', 'kn', 'gu', 'ml', 'mr', 'or', 'pa', 'ta', 'te', 'ur'
//   //   ];



//     const handleSetLanguage = (newLanguage: Language) => {
//       console.log('Language changing from', language, 'to', newLanguage);
//       setLanguage(newLanguage);
//     };

//     const getCurrentLanguage = () => {
//       return languages.find(lang => lang.code === language) || languages[0];
//     };

//     // const getContentLocale = () => {
//     //   // Map Malayalam to Malayalam content, all others to English for now
//     //   const locale = language === 'ml' ? 'ml' : 'en';
//     //   console.log('Current language:', language, 'Content locale:', locale);
//     //   return locale;
//     // };

//     const getContentLocale = (): 'en' | 'ml' | 'hi' => {
//       // Return the language itself if it's supported, otherwise fallback to 'en'
//       const supportedLocales: ('en' | 'ml' | 'hi')[] = ['en', 'ml', 'hi'];
//       const locale = supportedLocales.includes(language as 'en' | 'ml' | 'hi')
//         ? (language as 'en' | 'ml' | 'hi')
//         : 'en';
//       return locale;
//     };

//     return (
//       <LanguageContext.Provider value={{
//         language,
//         setLanguage: handleSetLanguage,
//         toggleLanguage,
//         getCurrentLanguage,
//         getContentLocale
//       }}>
//         {children}
//       </LanguageContext.Provider>
//     );
//   };

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 
  | 'en' | 'hi' | 'as' | 'bn' | 'kn' | 'gu' | 'ml' | 'mr' | 'or' | 'pa' | 'ta' | 'te' | 'ur';

export const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  getCurrentLanguage: () => typeof languages[0];
  getContentLocale: () => Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Cycle through all languages when toggling
  const toggleLanguage = () => {
    const cycle: Language[] = [
      'en', 'hi', 'as', 'bn', 'kn', 'gu', 'ml', 'mr', 'or', 'pa', 'ta', 'te', 'ur'
    ];
    const currentIndex = cycle.indexOf(language);
    const nextIndex = (currentIndex + 1) % cycle.length;
    setLanguage(cycle[nextIndex]);
  };

  const handleSetLanguage = (newLanguage: Language) => {
    console.log('Language changing from', language, 'to', newLanguage);
    setLanguage(newLanguage);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === language) || languages[0];
  };

  const getContentLocale = (): Language => {
    // Simply return the current language as the content locale
    return language;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      toggleLanguage,
      getCurrentLanguage,
      getContentLocale,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
