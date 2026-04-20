// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Globe, 
//   Facebook, 
//   Twitter, 
//   Youtube,
//   ExternalLink,
//   Heart
// } from "lucide-react";
// import keralaLogo from "@/assets/kerala-logo.png";
// import healthMinistryLogo from "@/assets/health-ministry-logo.png";

// const Footer = () => {
//   const { language } = useLanguage();
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-primary text-primary-foreground">
//       {/* Emergency Section */}
//       <div className="bg-destructive text-destructive-foreground py-4">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="flex items-center space-x-3 mb-2 md:mb-0">
//               <Phone className="h-5 w-5" />
//               <span className="font-semibold">Emergency Helpline:</span>
//               <a href="tel:108" className="text-lg font-bold hover:underline">108</a>
//             </div>
//             <div className="flex items-center space-x-3">
//               <span className="text-sm">24/7 Medical Emergency</span>
//               <Separator orientation="vertical" className="h-4 bg-destructive-foreground/30" />
//               <span className="text-sm">24/7 മെഡിക്കൽ എമർജൻസി</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Organization Info */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center space-x-3 mb-4">
//               <img 
//                 src={keralaLogo} 
//                 alt="Kerala Government" 
//                 className="h-12 w-12 object-contain"
//               />
//               <img 
//                 src={healthMinistryLogo} 
//                 alt="Health Ministry" 
//                 className="h-12 w-12 object-contain"
//               />
//             </div>
//             <h3 className="font-bold text-lg mb-2">
//               {language === 'en' ? 'Kerala Health Department' : 'കേരള ആരോഗ്യ വകുപ്പ്'}
//             </h3>
//             <p className="text-sm text-primary-foreground/70 leading-relaxed">
//               {language === 'en' 
//                 ? 'Ensuring accessible and quality healthcare for all migrant workers in Kerala through innovative digital health record management.'
//                 : 'നൂതന ഡിജിറ്റൽ ഹെൽത്ത് റെക്കോർഡ് മാനേജ്മെന്റിലൂടെ കേരളത്തിലെ എല്ലാ കുടിയേറ്റ തൊഴിലാളികൾക്കും ആക്സസ് ചെയ്യാവുന്നതും ഗുണനിലവാരമുള്ളതുമായ ആരോഗ്യ സംരക്ഷണം ഉറപ്പാക്കുന്നു.'
//               }
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">
//               {language === 'en' ? 'Quick Links' : 'ദ്രുത ലിങ്കുകൾ'}
//             </h4>
//             <ul className="space-y-2">
//               {[
//                 { en: 'Worker Registration', ml: 'തൊഴിലാളി രജിസ്ട്രേഷൻ' },
//                 { en: 'Provider Login', ml: 'പ്രൊവൈഡർ ലോഗിൻ' },
//                 { en: 'Find Health Centers', ml: 'ആരോഗ്യ കേന്ദ്രങ്ങൾ കണ്ടെത്തുക' },
//                 { en: 'Help & Support', ml: 'സഹായവും പിന്തുണയും' },
//                 { en: 'Download Mobile App', ml: 'മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യുക' }
//               ].map((link, index) => (
//                 <li key={index}>
//                   <a 
//                     href="#" 
//                     className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
//                   >
//                     {language === 'en' ? link.en : link.ml}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Government Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">
//               {language === 'en' ? 'Government Portals' : 'സർക്കാർ പോർട്ടലുകൾ'}
//             </h4>
//             <ul className="space-y-2">
//               {[
//                 { name: 'Kerala Government', url: 'https://kerala.gov.in' },
//                 { name: 'National Health Mission', url: 'https://nhm.gov.in' },
//                 { name: 'Ministry of Health', url: 'https://mohfw.gov.in' },
//                 { name: 'Digital Health Mission', url: 'https://ndhm.gov.in' },
//                 { name: 'Kerala Health Services', url: '#' }
//               ].map((portal, index) => (
//                 <li key={index}>
//                   <a 
//                     href={portal.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center space-x-1"
//                   >
//                     <span>{portal.name}</span>
//                     <ExternalLink className="h-3 w-3" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">
//               {language === 'en' ? 'Contact Us' : 'ഞങ്ങളെ ബന്ധപ്പെടുക'}
//             </h4>
//             <div className="space-y-3">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-sm text-primary-foreground/80">
//                     Director of Health Services<br />
//                     Government of Kerala<br />
//                     Thiruvananthapuram - 695001
//                   </p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <Phone className="h-4 w-4" />
//                 <a 
//                   href="tel:+914712304210" 
//                   className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
//                 >
//                   +91 471 230 4210
//                 </a>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <Mail className="h-4 w-4" />
//                 <a 
//                   href="mailto:health@kerala.gov.in" 
//                   className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
//                 >
//                   health@kerala.gov.in
//                 </a>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <Globe className="h-4 w-4" />
//                 <a 
//                   href="https://dhs.kerala.gov.in" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
//                 >
//                   dhs.kerala.gov.in
//                 </a>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div className="mt-6">
//               <h5 className="font-medium mb-3">
//                 {language === 'en' ? 'Follow Us' : 'ഞങ്ങളെ പിന്തുടരുക'}
//               </h5>
//               <div className="flex space-x-3">
//                 <Button 
//                   variant="outline" 
//                   size="sm" 
//                   className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
//                 >
//                   <Facebook className="h-4 w-4" />
//                 </Button>
//                 <Button 
//                   variant="outline" 
//                   size="sm" 
//                   className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
//                 >
//                   <Twitter className="h-4 w-4" />
//                 </Button>
//                 <Button 
//                   variant="outline" 
//                   size="sm" 
//                   className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
//                 >
//                   <Youtube className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-primary-foreground/20">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
//             <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
//               <p className="text-sm text-primary-foreground/70">
//                 © {currentYear} Government of Kerala. All rights reserved.
//               </p>
//               <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
//                 <a href="#" className="hover:text-primary-foreground">Privacy Policy</a>
//                 <Separator orientation="vertical" className="h-3 bg-primary-foreground/30" />
//                 <a href="#" className="hover:text-primary-foreground">Terms of Service</a>
//                 <Separator orientation="vertical" className="h-3 bg-primary-foreground/30" />
//                 <a href="#" className="hover:text-primary-foreground">Accessibility</a>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-2 text-sm text-primary-foreground/70">
//               <span>Made with</span>
//               <Heart className="h-4 w-4 text-red-400" />
//               <span>for Kerala</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Youtube,
  ExternalLink,
  Heart,
} from "lucide-react";
import keralaLogo from "@/assets/kerala-logo.png";
import healthMinistryLogo from "@/assets/health-ministry-logo.png";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const translations = {
    emergencyText: {
      en: "24/7 Medical Emergency",
      ml: "24/7 മെഡിക്കൽ എമർജൻസി",
      hi: "24/7 चिकित्सा आपातकाल",
    },
    helplineLabel: {
      en: "Emergency Helpline:",
      ml: "അത്യാഹിതത്തിനുള്ള സഹായ നമ്പർ:",
      hi: "आपातकालीन हेल्पलाइन:",
    },
    departmentName: {
      en: "Kerala Health Department",
      ml: "കേരള ആരോഗ്യ വകുപ്പ്",
      hi: "केरल स्वास्थ्य विभाग",
    },
    departmentDesc: {
      en: "Ensuring accessible and quality healthcare for all migrant workers in Kerala through innovative digital health record management.",
      ml: "നൂതന ഡിജിറ്റൽ ഹെൽത്ത് റെക്കോർഡ് മാനേജ്മെന്റിലൂടെ കേരളത്തിലെ എല്ലാ കുടിയേറ്റ തൊഴിലാളികൾക്കും ആക്സസ് ചെയ്യാവുന്നതും ഗുണനിലവാരമുള്ളതുമായ ആരോഗ്യ സംരക്ഷണം ഉറപ്പാക്കുന്നു.",
      hi: "केरल में सभी प्रवासी श्रमिकों के लिए अभिनव डिजिटल स्वास्थ्य रिकॉर्ड प्रबंधन के माध्यम से सुलभ और गुणवत्तापूर्ण स्वास्थ्य सेवा सुनिश्चित करना।",
    },
    quickLinks: {
      en: "Quick Links",
      ml: "ദ്രുത ലിങ്കുകൾ",
      hi: "त्वरित लिंक",
    },
    govPortals: {
      en: "Government Portals",
      ml: "സർക്കാർ പോർട്ടലുകൾ",
      hi: "सरकारी पोर्टल्स",
    },
    contactUs: {
      en: "Contact Us",
      ml: "ഞങ്ങളെ ബന്ധപ്പെടുക",
      hi: "संपर्क करें",
    },
    followUs: {
      en: "Follow Us",
      ml: "ഞങ്ങളെ പിന്തുടരുക",
      hi: "हमें फॉलो करें",
    },
    privacy: {
      en: "Privacy Policy",
      ml: "ഗോപനീയത നയം",
      hi: "गोपनीयता नीति",
    },
    terms: {
      en: "Terms of Service",
      ml: "സേവന വ്യവസ്ഥകൾ",
      hi: "सेवा की शर्तें",
    },
    accessibility: {
      en: "Accessibility",
      ml: "പ്രവേശ്യാവസ്ഥ",
      hi: "पहुँच",
    },
    madeWith: {
      en: "Made with",
      ml: "ഉണ്ടാക്കിയിരിക്കുന്നത്",
      hi: "बनाया गया",
    },
    forKerala: {
      en: "for Kerala",
      ml: "കേരളത്തിനായി",
      hi: "केरल के लिए",
    },
  };

  const quickLinks = [
    {
      en: "Worker Registration",
      ml: "തൊഴിലാളി രജിസ്ട്രേഷൻ",
      hi: "श्रमिक पंजीकरण",
    },
    {
      en: "Provider Login",
      ml: "പ്രൊവൈഡർ ലോഗിൻ",
      hi: "प्रदाता लॉगिन",
    },
    {
      en: "Find Health Centers",
      ml: "ആരോഗ്യ കേന്ദ്രങ്ങൾ കണ്ടെത്തുക",
      hi: "स्वास्थ्य केंद्र खोजें",
    },
    {
      en: "Help & Support",
      ml: "സഹായവും പിന്തുണയും",
      hi: "मदद और समर्थन",
    },
    {
      en: "Download Mobile App",
      ml: "മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യുക",
      hi: "मोबाइल ऐप डाउनलोड करें",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Emergency Section */}
      <div className="bg-destructive text-destructive-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-2 md:mb-0">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">{translations.helplineLabel[language]}</span>
              <a href="tel:108" className="text-lg font-bold hover:underline">
                108
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm">{translations.emergencyText[language]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={keralaLogo} alt="Kerala Government" className="h-12 w-12 object-contain" />
              <img src={healthMinistryLogo} alt="Health Ministry" className="h-12 w-12 object-contain" />
            </div>
            <h3 className="font-bold text-lg mb-2">{translations.departmentName[language]}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {translations.departmentDesc[language]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{translations.quickLinks[language]}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
                  >
                    {link[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{translations.govPortals[language]}</h4>
            <ul className="space-y-2">
              {[
                { name: "Kerala Government", url: "https://kerala.gov.in" },
                { name: "National Health Mission", url: "https://nhm.gov.in" },
                { name: "Ministry of Health", url: "https://mohfw.gov.in" },
                { name: "Digital Health Mission", url: "https://ndhm.gov.in" },
                { name: "Kerala Health Services", url: "#" },
              ].map((portal, index) => (
                <li key={index}>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center space-x-1"
                  >
                    <span>{portal.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{translations.contactUs[language]}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/80">
                    Director of Health Services<br />
                    Government of Kerala<br />
                    Thiruvananthapuram - 695001
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+914712304210"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  +91 471 230 4210
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:health@kerala.gov.in"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  health@kerala.gov.in
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4" />
                <a
                  href="https://dhs.kerala.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  dhs.kerala.gov.in
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">{translations.followUs[language]}</h5>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-primary-foreground/70">
                © {currentYear} Government of Kerala. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
                <a href="#" className="hover:text-primary-foreground">{translations.privacy[language]}</a>
                <Separator orientation="vertical" className="h-3 bg-primary-foreground/30" />
                <a href="#" className="hover:text-primary-foreground">{translations.terms[language]}</a>
                <Separator orientation="vertical" className="h-3 bg-primary-foreground/30" />
                <a href="#" className="hover:text-primary-foreground">{translations.accessibility[language]}</a>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-primary-foreground/70">
              <span>{translations.madeWith[language]}</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>{translations.forKerala[language]}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
