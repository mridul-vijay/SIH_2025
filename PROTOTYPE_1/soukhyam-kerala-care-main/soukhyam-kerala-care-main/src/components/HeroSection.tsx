// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Heart, Shield, Users, MapPin } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "@/contexts/LanguageContext";
// import heroBackground from "@/assets/kerala-hero-bg.jpg";

// const HeroSection = () => {
//   const { getContentLocale } = useLanguage();
//   const contentLocale = getContentLocale();
//   const navigate = useNavigate();

//   const smoothScrollToUserTypes = () => {
//     const element = document.getElementById('user-types');
//     if (!element) return;
//     const headerOffset = 72;
//     const target = element.getBoundingClientRect().top + window.scrollY - headerOffset;
//     const start = window.scrollY;
//     const distance = target - start;
//     const duration = 900;
//     let startTime: number | null = null;
//     const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
//     const animation = (currentTime: number) => {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const progress = Math.min(timeElapsed / duration, 1);
//       const ease = easeInOutCubic(progress);
//       window.scrollTo(0, start + distance * ease);
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//     };
//     requestAnimationFrame(animation);
//   };

//   return (
//     <section 
//       className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
//       style={{ 
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`
//       }}
//     >
//       <div className="container mx-auto px-4 py-16 text-center text-white relative z-10">
//         {/* Hero Badges */}
//         <div className="flex flex-wrap justify-center gap-2 mb-6">
//           <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
//             {contentLocale === 'en' ? 'Government Initiative' : 'സർക്കാർ സംരംഭം'}
//           </Badge>
//           <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
//             {contentLocale === 'en' ? 'Free Registration' : 'സൗജന്യ രജിസ്ട്രേഷൻ'}
//           </Badge>
//           <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
//             {contentLocale === 'en' ? '24/7 Access' : '24/7 ആക്സസ്'}
//           </Badge>
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight mt-8">
//           {contentLocale === 'en' ? (
//             <>
//               <span className="block text-white">Kerala Migrant Worker</span>
//               <span className="block text-secondary mt-2">Health Record System</span>
//             </>
//           ) : (
//             <>
//               <span className="block text-white">കേരള കുടിയേറ്റ തൊഴിലാളി</span>
//               <span className="block text-secondary mt-2">ആരോഗ്യ റെക്കോർഡ് സിസ്റ്റം</span>
//             </>
//           )}
//         </h1>

//         <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/80 leading-relaxed">
//           {contentLocale === 'en' 
//             ? 'Your health, our priority. Get your unique health ID, access medical records anywhere, and connect with quality healthcare services across Kerala.'
//             : 'നിങ്ങളുടെ ആരോഗ്യം, ഞങ്ങളുടെ മുൻഗണന. നിങ്ങളുടെ അദ്വിതീയ ഹെൽത്ത് ഐഡി നേടുക, എവിടെനിന്നും മെഡിക്കൽ റെക്കോർഡുകൾ ആക്സസ് ചെയ്യുക, കേരളത്തിലുടനീളം ഗുണനിലവാരമുള്ള ആരോഗ്യ സേവനങ്ങളുമായി ബന്ധപ്പെടുക.'
//           }
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//           <Button 
//             size="lg" 
//             className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark transition-all duration-500 hover:scale-105"
//             onClick={smoothScrollToUserTypes}
//           >
//             <Users className="mr-2 h-5 w-5" />
//             {contentLocale === 'en' ? 'Worker Registration' : 'തൊഴിലാളി രജിസ്ട്രേഷൻ'}
//           </Button>
//           <Button 
//             size="lg" 
//             variant="secondary" 
//             className="text-lg px-8 py-6 transition-all duration-500 hover:scale-105"
//             onClick={smoothScrollToUserTypes}
//           >
//             <Shield className="mr-2 h-5 w-5" />
//             {contentLocale === 'en' ? 'Healthcare Provider Login' : 'ആരോഗ്യ സേവന ദാതാവ് ലോഗിൻ'}
//           </Button>
//         </div>

//         {/* Quick Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
//           <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
//             <CardContent className="p-4 text-center">
//               <Heart className="h-8 w-8 text-secondary mx-auto mb-2" />
//               <div className="text-2xl font-bold text-white">50K+</div>
//               <div className="text-sm text-white/80">
//                 {contentLocale === 'en' ? 'Registered Workers' : 'രജിസ്റ്റർ ചെയ്ത തൊഴിലാളികൾ'}
//               </div>
//             </CardContent>
//           </Card>
          
//           <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
//             <CardContent className="p-4 text-center">
//               <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
//               <div className="text-2xl font-bold text-white">500+</div>
//               <div className="text-sm text-white/80">
//                 {contentLocale === 'en' ? 'Health Centers' : 'ആരോഗ്യ കേന്ദ്രങ്ങൾ'}
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
//             <CardContent className="p-4 text-center">
//               <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
//               <div className="text-2xl font-bold text-white">100%</div>
//               <div className="text-sm text-white/80">
//                 {contentLocale === 'en' ? 'Secure & Private' : 'സുരക്ഷിതവും സ്വകാര്യവും'}
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
//             <CardContent className="p-4 text-center">
//               <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
//               <div className="text-2xl font-bold text-white">24/7</div>
//               <div className="text-sm text-white/80">
//                 {contentLocale === 'en' ? 'Support Available' : 'പിന്തുണ ലഭ്യം'}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Heart, Shield, Users, MapPin } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "@/contexts/LanguageContext";
// import heroBackground from "@/assets/kerala-hero-bg.jpg";

// const translations = {
//   badges: {
//     en: ['Government Initiative', 'Free Registration', '24/7 Access'],
//     hi: ['सरकारी पहल', 'नि:शुल्क पंजीकरण', '24/7 पहुँच'],
//     as: ['সরকাৰী উদ্যম', 'বিনামূলীয়া পঞ্জীয়ন', '২৪/৭ প্ৰৱেশাধিকার'],
//     bn: ['সরকারি উদ্যোগ', 'ফ্রি নিবন্ধন', '২৪/৭ প্রবেশাধিকার'],
//     kn: ['ಸರಕಾರದ ಉಪಕ್ರಮ', 'ಉಚಿತ ನೋಂದಣಿ', '24/7 ಪ್ರವೇಶ'],
//     gu: ['સરકારી પહેલ', 'મફત નોંધણી', '24/7 ઍક્સેસ'],
//     ml: ['സർക്കാർ സംരംഭം', 'സൗജന്യ രജിസ്ട്രേഷൻ', '24/7 ആക്സസ്'],
//     mr: ['सरकारी उपक्रम', 'मोफत नोंदणी', '24/7 प्रवेश'],
//     or: ['ସରକାରୀ ପ୍ରୟାସ', 'ମୁକ୍ତ ନୋଁଦଣୀ', '24/7 ପ୍ରବେଶ'],
//     pa: ['ਸਰਕਾਰੀ ਪਹਲ', 'ਮੁਫਤ ਰਜਿਸਟ੍ਰੇਸ਼ਨ', '24/7 ਪਹੁੰਚ'],
//     ta: ['அரசு முயற்சி', 'இலவச பதிவு', '24/7 அணுகல்'],
//     te: ['ప్రభుత్వ ప్రారంభం', 'ఉచిత రిజిస్ట్రేషన్', '24/7 యాక్సెస్'],
//     ur: ['حکومتی اقدام', 'مفت رجسٹریشن', '24/7 رسائی'],
//   },
//   headingTop: {
//     en: 'Kerala Migrant Worker',
//     hi: 'केरला प्रवासी श्रमिक',
//     as: 'কেৰালা অভিবাসী কৰ্মচাৰী',
//     bn: 'কেরালা অভিবাসী কর্মী',
//     kn: 'ಕೇರಳ ವಲಸಿಗ ಕಾರ್ಮಿಕ',
//     gu: 'કેરળ પ્રવાસી કામદાર',
//     ml: 'കേരള കുടിയേറ്റ തൊഴിലാളി',
//     mr: 'केरळ स्थलांतरित कामगार',
//     or: 'କେରଳା ମାଇଗ୍ରାଣ୍ଟ କାର୍ମିକ',
//     pa: 'ਕੇਰਲਾ ਪਰਵਾਸੀ ਮਜ਼ਦੂਰ',
//     ta: 'கேரளா குடியேறிய தொழிலாளி',
//     te: 'కేరళ వలసదారుడు కార్మికుడు',
//     ur: 'کیرالہ مہاجر کارکن',
//   },
//   headingBottom: {
//     en: 'Health Record System',
//     hi: 'स्वास्थ्य रिकॉर्ड प्रणाली',
//     as: 'স্বাস্থ্য ৰেকৰ্ড ব্যৱস্থা',
//     bn: 'স্বাস্থ্য রেকর্ড সিস্টেম',
//     kn: 'ಆರೋಗ್ಯ ದಾಖಲೆ ವ್ಯವಸ್ಥೆ',
//     gu: 'સ્વાસ્થ્ય રેકોર્ડ સિસ્ટમ',
//     ml: 'ആരോഗ്യ റെക്കോർഡ് സിസ്റ്റം',
//     mr: 'आरोग्य नोंदणी प्रणाली',
//     or: 'ସ୍ୱାସ୍ଥ୍ୟ ରେକର୍ଡ ପ୍ରଣାଳୀ',
//     pa: 'ਸਿਹਤ ਰਿਕਾਰਡ ਸਿਸਟਮ',
//     ta: 'ஆரோக்கிய பதிவேடு அமைப்பு',
//     te: 'ఆరోగ్య రికార్డు వ్యవస్థ',
//     ur: 'صحت ریکارڈ سسٹم',
//   },
//   description: {
//     en: 'Your health, our priority. Get your unique health ID, access medical records anywhere, and connect with quality healthcare services across Kerala.',
//     hi: 'आपका स्वास्थ्य, हमारी प्राथमिकता। अपनी अद्वितीय स्वास्थ्य आईडी प्राप्त करें, कहीं से भी मेडिकल रिकॉर्ड एक्सेस करें, और केरल में गुणवत्तापूर्ण स्वास्थ्य सेवाओं से जुड़ें।',
//     as: 'আপোনাৰ স্বাস্থ্য, আমাৰ প্ৰাধান্য। আপোনাৰ অনন্য স্বাস্থ্য আইডি লাভ কৰক, যিকোনো ঠাইৰ পৰা চিকিৎসা নথিপত্ৰত প্ৰৱেশ কৰক, আৰু কেৰালাত গুণগতমানযুক্ত স্বাস্থ্য সেৱাসমূহৰ সৈতে সংযোগ স্থাপন কৰক।',
//     bn: 'আপনার স্বাস্থ্য, আমাদের অগ্রাধিকার। আপনার অনন্য স্বাস্থ্য আইডি পান, যেকোনো জায়গা থেকে মেডিকেল রেকর্ড অ্যাক্সেস করুন, এবং কেরালার মানসম্মত স্বাস্থ্যসেবা পরিষেবার সাথে সংযোগ করুন।',
//     kn: 'ನಿಮ್ಮ ಆರೋಗ್ಯ ನಮ್ಮ ಆದ್ಯತೆ. ನಿಮ್ಮ ಅನನ್ಯ ಆರೋಗ್ಯ ಐಡಿ ಪಡೆಯಿರಿ, ಎಲ್ಲಿಂದಲಾದರೂ ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳನ್ನು ಪ್ರವೇಶಿಸಿ, ಮತ್ತು ಕೇರಳದಲ್ಲಿನ ಗುಣಮಟ್ಟದ ಆರೋಗ್ಯ ಸೇವೆಗಳಿಗೆ ಸಂಪರ್ಕ ಹೊಂದಿ.',
//     gu: 'તમારું આરોગ્ય, અમારી પ્રાથમિકતા. તમારું અનન્ય હેલ્થ આઈડી મેળવો, ક્યાંયથી પણ મેડિકલ રેકોર્ડ્સ ઍક્સેસ કરો, અને કેરળમાં ગુણવત્તાવાળા આરોગ્યસેવા સાથે જોડાઓ.',
//     ml: 'നിങ്ങളുടെ ആരോഗ്യം, ഞങ്ങളുടെ മുൻഗണന. നിങ്ങളുടെ അദ്വിതീയ ഹെൽത്ത് ഐഡി നേടുക, എവിടെനിന്നും മെഡിക്കൽ റെക്കോർഡുകൾ ആക്സസ് ചെയ്യുക, കേരളത്തിലുടനീളം ഗുണനിലവാരമുള്ള ആരോഗ്യ സേവനങ്ങളുമായി ബന്ധപ്പെടുക.',
//     mr: 'आपले आरोग्य, आमची प्राधान्ये. आपले अद्वितीय आरोग्य आयडी मिळवा, कुठूनही वैद्यकीय नोंदींमध्ये प्रवेश करा, आणि केरळमधील दर्जेदार आरोग्य सेवा जोडून घ्या.',
//     or: 'ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ, ଆମର ପ୍ରାଥମିକତା। ଆପଣଙ୍କର ବିଶିଷ୍ଟ ସ୍ୱାସ୍ଥ୍ୟ ID ପାଆନ୍ତୁ, କେଉଁଠୁ ମେଡିକେଲ୍ ରେକର୍ଡ ଆକ୍ସେସ୍ କରନ୍ତୁ, ଏବଂ କେରଳର ଗୁଣବତ୍ତାପୂର୍ଣ୍ଣ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ସହିତ ସଂଯୋଗ ସ୍ଥାପନ କରନ୍ତୁ।',
//     pa: 'ਤੁਹਾਡਾ ਸਿਹਤ, ਸਾਡੀ ਪ੍ਰਾਥਮਿਕਤਾ। ਆਪਣੀ ਵਿਲੱਖਣ ਸਿਹਤ ID ਪ੍ਰਾਪਤ ਕਰੋ, ਕਿਸੇ ਵੀ ਥਾਂ ਤੋਂ ਮੈਡੀਕਲ ਰਿਕਾਰਡਾਂ ਤੱਕ ਪਹੁੰਚ ਕਰੋ, ਅਤੇ ਕੇਰਲਾ ਵਿੱਚ ਗੁਣਵੱਤਾਪੂਰਨ ਸਿਹਤ ਸੇਵਾਵਾਂ ਨਾਲ ਜੁੜੋ।',
//     ta: 'உங்கள் ஆரோக்கியம், எங்கள் முன்னுரிமை. உங்கள் தனிப்பட்ட ஆரோக்கிய ஐடியைப் பெறுங்கள், எங்கேயிருந்து வேண்டுமானாலும் மருத்துவ பதிவுகளை அணுகுங்கள், மற்றும் கேரளா முழுவதும் தரமான சுகாதார சேவைகளுடன் இணைக.',
//     te: 'మీ ఆరోగ్యం, మా ప్రాధాన్యత. మీ ప్రత్యేక ఆరోగ్య ID పొందండి, ఎక్కడినుండైనా వైద్య రికార్డులు యాక్సెస్ చేయండి, మరియు కేరళలో ఉన్న నాణమైన ఆరోగ్య సేవలతో కనెక్ట్ అవ్వండి.',
//     ur: 'آپ کی صحت، ہماری ترجیح ہے۔ اپنی منفرد صحت کی شناخت حاصل کریں، کہیں سے بھی طبی ریکارڈز تک رسائی حاصل کریں، اور کیرالہ بھر میں معیاری صحت کی خدمات سے رابطہ کریں۔',
//   },
//   ctaWorker: {
//     en: 'Worker Registration',
//     hi: 'कर्मचारी पंजीकरण',
//     as: 'কৰ্মচাৰী পঞ্জীয়ন',
//     bn: 'কর্মী নিবন্ধন',
//     kn: 'ಕಾರ್ಮಿಕ ನೋಂದಣಿ',
//     gu: 'કર્મચારી નોંધણી',
//     ml: 'തൊഴിലാളി രജിസ്ട്രേഷൻ',
//     mr: 'कामगार नोंदणी',
//     or: 'କାର୍ମିକ ନୋଁଦଣୀ',
//     pa: 'ਕਰਮਚਾਰੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ',
//     ta: 'தொழிலாளர் பதிவு',
//     te: 'కార్మికుడి రిజిస్ట్రేషన్',
//     ur: 'ملازم رجسٹریشن',
//   },
//   ctaProvider: {
//     en: 'Healthcare Provider Login',
//     hi: 'स्वास्थ्य सेवा प्रदाता लॉगिन',
//     as: 'স্বাস্থ্য সেৱা প্ৰদানকাৰী লগইন',
//     bn: 'স্বাস্থ্য পরিষেবা প্রদানকারী লগইন',
//     kn: 'ಆರೋಗ್ಯ ಸೇವಾ ಪೂರೈಕೆದಾರ ಲಾಗಿನ್',
//     gu: 'હેલ્થકેર પ્રદાતા લૉગિન',
//     ml: 'ആരോഗ്യ സേവന ദാതാവ് ലോഗിൻ',
//     mr: 'आरोग्य सेवा प्रदाता लॉगिन',
//     or: 'ସ୍ୱାସ୍ଥ୍ୟ ସେବା ପ୍ରଦାତା ଲଗଇନ୍',
//     pa: 'ਸਿਹਤ ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਲਾਗਇਨ',
//     ta: 'ஆரோக்கிய சேவை வழங்குநர் உள்நுழைவு',
//     te: 'ఆరోగ్య సేవా ప్రదాత లాగిన్',
//     ur: 'صحت کی دیکھभال فراہم کنندہ لاگ ان',
//   },
//   stats: {
//     registeredWorkers: {
//       en: 'Registered Workers',
//       hi: 'पंजीकृत कर्मचारी',
//       as: 'পঞ্জীয়ন কৰা কৰ্মচাৰী',
//       bn: 'নিবন্ধিত কর্মী',
//       kn: 'ನೋಂದಾಯಿತ ಕಾರ್ಮಿಕರು',
//       gu: 'નોંધાયેલા કર્મચારી',
//       ml: 'രജിസ്റ്റർ ചെയ്ത തൊഴിലാളികൾ',
//       mr: 'नोंदणीकृत कामगार',
//       or: 'ନୋଁଦଣିତ କାର୍ମିକ',
//       pa: 'ਰਜਿਸਟਰਡ ਕਰਮਚਾਰੀ',
//       ta: 'பதிவுசெய்யப்பட்ட தொழிலாளர்கள்',
//       te: 'నమోదు చేసిన కార్మికులు',
//       ur: 'رجسٹرڈ ملازمین',
//     },
//     healthCenters: {
//       en: 'Health Centers',
//       hi: 'स्वास्थ्य केंद्र',
//       as: 'স্বাস্থ্য কেন্দ্ৰ',
//       bn: 'স্বাস্থ্য কেন্দ্র',
//       kn: 'ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳು',
//       gu: 'હેલ્થ સેન્ટર્સ',
//       ml: 'ആരോഗ്യ കേന്ദ്രങ്ങൾ',
//       mr: 'आरोग्य केंद्र',
//       or: 'ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ର',
//       pa: 'ਸਿਹਤ ਕੇਂਦਰ',
//       ta: 'ஆரோக்கிய மையங்கள்',
//       te: 'ఆరోగ్య కేంద్రాలు',
//       ur: 'صحت کے مراکز',
//     },
//     securePrivate: {
//       en: 'Secure & Private',
//       hi: 'सुरक्षित और निजी',
//       as: 'নিরাপদ আৰু ব্যক্তিগত',
//       bn: 'নিরাপদ ও ব্যক্তিগত',
//       kn: 'ಸುರಕ್ಷಿತ ಮತ್ತು ಖಾಸಗಿ',
//       gu: 'સુરક્ષિત અને ખાનગી',
//       ml: 'സുരക്ഷിതവും സ്വകാര്യവും',
//       mr: 'सुरक्षित आणि खाजगी',
//       or: 'ସୁରକ୍ଷିତ ଏବଂ ନିଜସ୍ୱ',
//       pa: 'ਸੁਰੱਖਿਅਤ ਅਤੇ ਨਿੱਜੀ',
//       ta: 'பாதுகாப்பான மற்றும் தனிப்பட்ட',
//       te: 'భద్రతగల మరియు ప్రైవేటు',
//       ur: 'محفوظ اور نجی',
//     },
//     supportAvailable: {
//       en: 'Support Available',
//       hi: 'सहायता उपलब्ध',
//       as: 'সহায়তা উপলব্ধ',
//       bn: 'সহায়তা উপলব্ধ',
//       kn: 'ಮತ್ತು ಬೆಂಬಲ ಲಭ್ಯ',
//       gu: 'સહાય ઉપલબ્ધ',
//       ml: 'പിന്തുണ ലഭ്യം',
//       mr: 'मदत उपलब्ध',
//       or: 'ସହାଯ୍ୟ ଉପଲବ୍ଧ',
//       pa: 'ਸਹਾਇਤਾ ਉਪਲੱਬਧ',
//       ta: 'ஆதரவு கிடைக்கும்',
//       te: 'సహాయం అందుబాటులో ఉంది',
//       ur: 'مدد دستیاب ہے',
//     }
//   }
// };

// const HeroSection = () => {
//   const { getContentLocale } = useLanguage();
//   const contentLocale = getContentLocale();
//   const navigate = useNavigate();

//   const smoothScrollToUserTypes = () => {
//     const element = document.getElementById('user-types');
//     if (!element) return;
//     const headerOffset = 72;
//     const target = element.getBoundingClientRect().top + window.scrollY - headerOffset;
//     const start = window.scrollY;
//     const distance = target - start;
//     const duration = 900;
//     let startTime: number | null = null;
//     const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
//     const animation = (currentTime: number) => {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const progress = Math.min(timeElapsed / duration, 1);
//       const ease = easeInOutCubic(progress);
//       window.scrollTo(0, start + distance * ease);
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//     };
//     requestAnimationFrame(animation);
//   };

//   const lang = contentLocale in translations.badges ? contentLocale : 'en';

//   return (
//     <section 
//       className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
//       style={{ 
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`
//       }}
//     >
//       <div className="container mx-auto px-4 py-16 text-center text-white relative z-10">
//         {/* Hero Badges */}
//         <div className="flex flex-wrap justify-center gap-2 mb-6">
//           {translations.badges[lang].map((text, i) => (
//             <Badge key={i} variant="secondary" className="bg-white/20 text-white border-white/30">
//               {text}
//             </Badge>
//           ))}
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight mt-8">
//           <span className="block text-white">{translations.headingTop[lang]}</span>
//           <span className="block text-secondary mt-2">{translations.headingBottom[lang]}</span>
//         </h1>

//         <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/80 leading-relaxed">
//           {translations.description[lang]}
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//           <Button 
//             size="lg" 
//             className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark transition-all duration-500 hover:scale-105"
//             onClick={smoothScrollToUserTypes}
//           >
//             <Users className="mr-2 h-5 w-5" />
//             {translations.ctaWorker[lang]}
//           </Button>
//           <Button 
//             size="lg" 
//             variant="secondary" 
//             className="text-lg px-8 py-6 transition-all duration-500 hover:scale-105"
//             onClick={smoothScrollToUserTypes}
//           >
//             <Shield className="mr-2 h-5 w-5" />
//             {translations.ctaProvider[lang]}
//           </Button>
//         </div>

//         {/* Quick Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
//           <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
//             <CardContent className="p-4 text-center">
//               <Heart className="h-8 w-8 text-secondary mx-auto mb-2" />
//               <div className="text-2xl font-bold text-white">50K+</div>
//               <div className="text-sm text-white/80">
//                 {translations.stats.registeredWorkers[lang]}
//               </div>
//             </CardContent>
//           </Card>
          
//           <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
//             <CardContent className="p-4 text-center">
//               <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
//               <div className="text-2xl font-bold text-white">500+</div>
//               <div className="text-sm text-white/80">
//                 {translations.stats.healthCenters[lang]}
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
//             <CardContent className="p-4 text-center">
//               <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
//               <div className="text-2xl font-bold text-white">100%</div>
//               <div className="text-sm text-white/80">
//                 {translations.stats.securePrivate[lang]}
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
//             <CardContent className="p-4 text-center">
//               <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
//               <div className="text-2xl font-bold text-white">24/7</div>
//               <div className="text-sm text-white/80">
//                 {translations.stats.supportAvailable[lang]}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Users, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/kerala-hero-bg.jpg";

const HeroSection = () => {
  const { getContentLocale } = useLanguage();
  const contentLocale = getContentLocale();
  const navigate = useNavigate();

  const smoothScrollToUserTypes = () => {
    const element = document.getElementById('user-types');
    if (!element) return;
    const headerOffset = 72;
    const target = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    const start = window.scrollY;
    const distance = target - start;
    const duration = 900;
    let startTime: number | null = null;
    const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, start + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`
      }}
    >
      <div className="container mx-auto px-4 py-16 text-center text-white relative z-10">
        {/* Hero Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            {contentLocale === 'en' 
              ? 'Government Initiative' 
              : contentLocale === 'hi' 
                ? 'सरकारी पहल' 
                : 'സർക്കാർ സംരംഭം'}
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            {contentLocale === 'en' 
              ? 'Free Registration' 
              : contentLocale === 'hi' 
                ? 'मुफ़्त पंजीकरण' 
                : 'സൗജന്യ രജിസ്ട്രേഷൻ'}
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            {contentLocale === 'en' 
              ? '24/7 Access' 
              : contentLocale === 'hi' 
                ? '24/7 पहुँच' 
                : '24/7 ആക്സസ്'}
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight mt-8">
          {contentLocale === 'en' ? (
            <>
              <span className="block text-white">Kerala Migrant Worker</span>
              <span className="block text-secondary mt-2">Health Record System</span>
            </>
          ) : contentLocale === 'hi' ? (
            <>
              <span className="block text-white">केरल प्रवासी श्रमिक</span>
              <span className="block text-secondary mt-2">स्वास्थ्य रिकॉर्ड सिस्टम</span>
            </>
          ) : (
            <>
              <span className="block text-white">കേരള കുടിയേറ്റ തൊഴിലാളി</span>
              <span className="block text-secondary mt-2">ആരോഗ്യ റെക്കോർഡ് സിസ്റ്റം</span>
            </>
          )}
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/80 leading-relaxed">
          {contentLocale === 'en' 
            ? 'Your health, our priority. Get your unique health ID, access medical records anywhere, and connect with quality healthcare services across Kerala.'
            : contentLocale === 'hi'
              ? 'आपका स्वास्थ्य, हमारी प्राथमिकता। अपनी अनोखी स्वास्थ्य आईडी प्राप्त करें, कहीं से भी मेडिकल रिकॉर्ड्स एक्सेस करें, और केरल भर में गुणवत्तापूर्ण स्वास्थ्य सेवाओं से जुड़ें।'
              : 'നിങ്ങളുടെ ആരോഗ്യം, ഞങ്ങളുടെ മുൻഗണന. നിങ്ങളുടെ അദ്വിതീയ ഹെൽത്ത് ഐഡി നേടുക, എവിടെനിന്നും മെഡിക്കൽ റെക്കോർഡുകൾ ആക്സസ് ചെയ്യുക, കേരളത്തിലുടനീളം ഗുണനിലവാരമുള്ള ആരോഗ്യ സേവനങ്ങളുമായി ബന്ധപ്പെടുക.'
          }
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark transition-all duration-500 hover:scale-105"
            onClick={smoothScrollToUserTypes}
          >
            <Users className="mr-2 h-5 w-5" />
            {contentLocale === 'en' 
              ? 'Worker Registration' 
              : contentLocale === 'hi' 
                ? 'कर्मचारी पंजीकरण' 
                : 'തൊഴിലാളി രജിസ്ട്രേഷൻ'}
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6 transition-all duration-500 hover:scale-105"
            onClick={smoothScrollToUserTypes}
          >
            <Shield className="mr-2 h-5 w-5" />
            {contentLocale === 'en' 
              ? 'Healthcare Provider Login' 
              : contentLocale === 'hi' 
                ? 'स्वास्थ्य प्रदाता लॉगिन' 
                : 'ആരോഗ്യ സേവന ദാതാവ് ലോഗിൻ'}
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Heart className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm text-white/80">
                {contentLocale === 'en' 
                  ? 'Registered Workers' 
                  : contentLocale === 'hi' 
                    ? 'पंजीकृत कर्मचारी' 
                    : 'രജിസ്റ്റർ ചെയ്ത തൊഴിലാളികൾ'}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">
                {contentLocale === 'en' 
                  ? 'Health Centers' 
                  : contentLocale === 'hi' 
                    ? 'स्वास्थ्य केंद्र' 
                    : 'ആരോഗ്യ കേന്ദ്രങ്ങൾ'}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/80">
                {contentLocale === 'en' 
                  ? 'Secure & Private' 
                  : contentLocale === 'hi' 
                    ? 'सुरक्षित और निजी' 
                    : 'സുരക്ഷിതവും സ്വകാര്യവും'}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">
                {contentLocale === 'en' 
                  ? 'Support Available' 
                  : contentLocale === 'hi' 
                    ? 'सहायता उपलब्ध' 
                    : 'പിന്തുണ ലഭ്യം'}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
