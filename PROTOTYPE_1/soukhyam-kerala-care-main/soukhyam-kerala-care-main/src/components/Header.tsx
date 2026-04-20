// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Globe, Menu, X, ChevronDown } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useLanguage, languages } from "@/contexts/LanguageContext";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import keralaLogo from "@/assets/kerala-logo.png";
// import healthMinistryLogo from "@/assets/health-ministry-logo.png";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { language, setLanguage, getCurrentLanguage, getContentLocale } = useLanguage();
//   const navigate = useNavigate();

//   const contentLocale = getContentLocale();

//   const smoothScrollToUserTypes = () => {
//     const element = document.getElementById('user-types');
//     if (!element) return;

//     const headerOffset = 72; // account for sticky header
//     const target = element.getBoundingClientRect().top + window.scrollY - headerOffset;
//     const start = window.scrollY;
//     const distance = target - start;
//     const duration = 900; // ms
//     let startTime: number | null = null;

//     const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

//     const animation = (currentTime: number) => {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const progress = Math.min(timeElapsed / duration, 1);
//       const ease = easeInOutCubic(progress);
//       window.scrollTo(0, start + distance * ease);
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//       else setIsMenuOpen(false);
//     };

//     requestAnimationFrame(animation);
//   };

//   const navItems = contentLocale === 'en' 
//     ? ['Home', 'About Program', 'Health Centers', 'Contact']
//     : ['ഹോം', 'പ്രോഗ്രാമിനെക്കുറിച്ച്', 'ആരോഗ്യ കേന്ദ്രങ്ങൾ', 'ബന്ധപ്പെടുക'];

//   return (
//     <header className="bg-background border-b border-border shadow-soft sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           {/* Logos Section */}
//           <div className="flex items-center space-x-4">
//             <img 
//               src={keralaLogo} 
//               alt="Kerala Government" 
//               className="h-12 w-12 object-contain"
//             />
//             <img 
//               src={healthMinistryLogo} 
//               alt="Health Ministry" 
//               className="h-12 w-12 object-contain"
//             />
//             <div className="hidden md:block">
//               <h1 className="text-lg font-bold text-primary">
//                 {contentLocale === 'en' 
//                   ? 'Kerala Health Department' 
//                   : 'കേരള ആരോഗ്യ വകുപ്പ്'
//                 }
//               </h1>
//               <p className="text-sm text-muted-foreground">
//                 {contentLocale === 'en' 
//                   ? 'Migrant Worker Health Records' 
//                   : 'കുടിയേറ്റ തൊഴിലാളി ആരോഗ്യ റെക്കോർഡുകൾ'
//                 }
//               </p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-6">
//             {navItems.map((item, index) => (
//               <a 
//                 key={index}
//                 href="#" 
//                 className="text-foreground hover:text-primary transition-colors font-medium"
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center space-x-3">
//             {/* Language Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="hidden sm:flex items-center space-x-2 border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
//                 >
//                   <Globe className="h-4 w-4" />
//                   <span className="font-medium">{getCurrentLanguage().nativeName}</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48 max-h-64 overflow-y-auto">
//                 {languages.map((lang) => (
//                   <DropdownMenuItem
//                     key={lang.code}
//                     onClick={() => setLanguage(lang.code as any)}
//                     className={`cursor-pointer ${language === lang.code ? 'bg-accent' : ''}`}
//                   >
//                     <span className="flex items-center space-x-2">
//                       <span className="font-medium">{lang.nativeName}</span>
//                       <span className="text-muted-foreground text-xs">({lang.name})</span>
//                     </span>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>

//             {/* Login/Register Button */}
//             <div className="hidden md:flex">
//               <Button 
//                 size="sm"
//                 onClick={smoothScrollToUserTypes}
//                 className="bg-primary hover:bg-primary/90 transition-all duration-300"
//               >
//                 {contentLocale === 'en' ? 'Login / Register' : 'ലോഗിൻ / രജിസ്റ്റർ'}
//               </Button>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <Button
//               variant="outline"
//               size="sm"
//               className="lg:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden mt-4 pb-4 border-t border-border">
//             <nav className="flex flex-col space-y-3 mt-4">
//               {navItems.map((item, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="text-foreground hover:text-primary transition-colors font-medium py-2"
//                 >
//                   {item}
//                 </a>
//               ))}
//               <div className="flex flex-col space-y-2 pt-4 border-t border-border">
//                 <Button 
//                   size="sm"
//                   onClick={smoothScrollToUserTypes}
//                   className="transition-all duration-300"
//                 >
//                   {contentLocale === 'en' ? 'Login / Register' : 'ലോഗിൻ / രജിസ്റ്റർ'}
//                 </Button>
//                 <div className="sm:hidden">
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="flex items-center justify-center space-x-2 w-full"
//                       >
//                         <Globe className="h-4 w-4" />
//                         <span className="font-medium">{getCurrentLanguage().nativeName}</span>
//                         <ChevronDown className="h-3 w-3" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="center" className="w-48 max-h-64 overflow-y-auto">
//                       {languages.map((lang) => (
//                         <DropdownMenuItem
//                           key={lang.code}
//                           onClick={() => setLanguage(lang.code as any)}
//                           className={`cursor-pointer ${language === lang.code ? 'bg-accent' : ''}`}
//                         >
//                           <span className="flex items-center space-x-2">
//                             <span className="font-medium">{lang.nativeName}</span>
//                             <span className="text-muted-foreground text-xs">({lang.name})</span>
//                           </span>
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage, languages } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import keralaLogo from "@/assets/kerala-logo.png";
import healthMinistryLogo from "@/assets/health-ministry-logo.png";

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, getCurrentLanguage, getContentLocale } = useLanguage();
  const navigate = useNavigate();

  const contentLocale = getContentLocale();

  // ✅ Translations map
  const translations = {
    navItems: {
      en: ['Home', 'About Program', 'Health Centers', 'Contact'],
      ml: ['ഹോം', 'പ്രോഗ്രാമിനെക്കുറിച്ച്', 'ആരോഗ്യ കേന്ദ്രങ്ങൾ', 'ബന്ധപ്പെടുക'],
      hi: ['होम', 'कार्यक्रम के बारे में', 'हेल्थ सेंटर्स', 'संपर्क करें'],
    },
    title: {
      en: 'Kerala Health Department',
      ml: 'കേരള ആരോഗ്യ വകുപ്പ്',
      hi: 'केरल स्वास्थ्य विभाग',
    },
    subtitle: {
      en: 'Migrant Worker Health Records',
      ml: 'കുടിയേറ്റ തൊഴിലാളി ആരോഗ്യ റെക്കോർഡുകൾ',
      hi: 'प्रवासी श्रमिक स्वास्थ्य रिकॉर्ड',
    },
    loginRegister: {
      en: 'Login / Register',
      ml: 'ലോഗിൻ / രജിസ്റ്റർ',
      hi: 'लॉगिन / रजिस्टर',
    },
  };

  const navItems = translations.navItems[contentLocale];

  const smoothScrollToUserTypes = () => {
    const element = document.getElementById('user-types');
    if (!element) return;

    const headerOffset = 72;
    const target = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    const start = window.scrollY;
    const distance = target - start;
    const duration = 900;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, start + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
      else setIsMenuOpen(false);
    };

    requestAnimationFrame(animation);
  };

  return (
    <header className="bg-background border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logos */}
          <div className="flex items-center space-x-4">
            <img src={keralaLogo} alt="Kerala Government" className="h-12 w-12 object-contain" />
            <img src={healthMinistryLogo} alt="Health Ministry" className="h-12 w-12 object-contain" />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">{translations.title[contentLocale]}</h1>
              <p className="text-sm text-muted-foreground">{translations.subtitle[contentLocale]}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:flex items-center space-x-2 border-border hover:bg-accent hover:text-accent-foreground"
                >
                  <Globe className="h-4 w-4" />
                  <span className="font-medium">{getCurrentLanguage().nativeName}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 max-h-64 overflow-y-auto">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`cursor-pointer ${language === lang.code ? 'bg-accent' : ''}`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="font-medium">{lang.nativeName}</span>
                      <span className="text-muted-foreground text-xs">({lang.name})</span>
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login/Register */}
            <div className="hidden md:flex">
              <Button
                size="sm"
                onClick={smoothScrollToUserTypes}
                className="bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                {translations.loginRegister[contentLocale]}
              </Button>
            </div>

            {/* Mobile Toggle */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 mt-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button
                  size="sm"
                  onClick={smoothScrollToUserTypes}
                  className="transition-all duration-300"
                >
                  {translations.loginRegister[contentLocale]}
                </Button>
                <div className="sm:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center justify-center space-x-2 w-full"
                      >
                        <Globe className="h-4 w-4" />
                        <span className="font-medium">{getCurrentLanguage().nativeName}</span>
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48 max-h-64 overflow-y-auto">
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => setLanguage(lang.code as any)}
                          className={`cursor-pointer ${language === lang.code ? 'bg-accent' : ''}`}
                        >
                          <span className="flex items-center space-x-2">
                            <span className="font-medium">{lang.nativeName}</span>
                            <span className="text-muted-foreground text-xs">({lang.name})</span>
                          </span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
