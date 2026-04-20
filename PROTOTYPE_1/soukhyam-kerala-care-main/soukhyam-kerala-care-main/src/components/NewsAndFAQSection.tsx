// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { CalendarDays, ExternalLink, HelpCircle, Newspaper } from "lucide-react";

// const NewsAndFAQSection = () => {
//   const { language } = useLanguage();
//   const newsItems = [
//     {
//       id: 1,
//       title: "New Health Centers Added in Kochi",
//       titleMl: "കൊച്ചിയിൽ പുതിയ ആരോഗ്യ കേന്ദ്രങ്ങൾ കൂട്ടിച്ചേർത്തു",
//       date: "2024-01-15",
//       category: "Expansion",
//       description: "Five new health centers have been registered in the Kochi district to serve migrant workers better.",
//       descriptionMl: "കുടിയേറ്റ തൊഴിലാളികൾക്ക് മികച്ച സേവനം നൽകുന്നതിനായി കൊച്ചി ജില്ലയിൽ അഞ്ച് പുതിയ ആരോഗ്യ കേന്ദ്രങ്ങൾ രജിസ്റ്റർ ചെയ്തിട്ടുണ്ട്.",
//       isNew: true
//     },
//     {
//       id: 2,
//       title: "Free Health Checkup Drive",
//       titleMl: "സൗജന്യ ആരോഗ്യ പരിശോധന ഡ്രൈവ്",
//       date: "2024-01-10",
//       category: "Campaign",
//       description: "Monthly free health checkup drives scheduled across all districts for registered workers.",
//       descriptionMl: "രജിസ്റ്റർ ചെയ്ത തൊഴിലാളികൾക്കായി എല്ലാ ജില്ലകളിലും മാസിക സൗജന്യ ആരോഗ്യ പരിശോധന ഡ്രൈവുകൾ ഷെഡ്യൂൾ ചെയ്തിട്ടുണ്ട്.",
//       isNew: true
//     },
//     {
//       id: 3,
//       title: "Digital Health ID Integration",
//       titleMl: "ഡിജിറ്റൽ ഹെൽത്ത് ഐഡി ഇന്റഗ്രേഷൻ",
//       date: "2024-01-05",
//       category: "Technology",
//       description: "System now integrates with National Digital Health Mission for seamless healthcare access.",
//       descriptionMl: "തടസ്സമില്ലാത്ത ആരോഗ്യ സേവന ലഭ്യതയ്ക്കായി സിസ്റ്റം ഇപ്പോൾ നാഷണൽ ഡിജിറ്റൽ ഹെൽത്ത് മിഷനുമായി സംയോജിപ്പിച്ചിരിക്കുന്നു.",
//       isNew: false
//     },
//     {
//       id: 4,
//       title: "Mobile App Launch",
//       titleMl: "മൊബൈൽ ആപ്പ് ലോഞ്ച്",
//       date: "2023-12-28",
//       category: "Technology",
//       description: "New mobile application launched for easier access to health records on the go.",
//       descriptionMl: "യാത്രയിൽ ആരോഗ്യ റെക്കോർഡുകളിലേക്ക് എളുപ്പത്തിൽ ആക്സസ് ചെയ്യുന്നതിനായി പുതിയ മൊബൈൽ ആപ്ലിക്കേഷൻ ലോഞ്ച് ചെയ്തു.",
//       isNew: false
//     }
//   ];

//   const faqs = [
//     {
//       question: "How do I register for a health ID?",
//       questionMl: "ഹെൽത്ത് ഐഡിക്കായി എങ്ങനെ രജിസ്റ്റർ ചെയ്യാം?",
//       answer: "Click on 'Worker Registration' button, fill in your basic details, upload required documents (Aadhar/ID proof), and set a secure PIN. You will receive your unique health ID immediately after verification.",
//       answerMl: "'വർക്കർ രജിസ്ട്രേഷൻ' ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുക, നിങ്ങളുടെ അടിസ്ഥാന വിശദാംശങ്ങൾ പൂരിപ്പിക്കുക, ആവശ്യമായ രേഖകൾ (ആധാർ/ഐഡി പ്രൂഫ്) അപ്‌ലോഡ് ചെയ്യുക, ഒപ്പം സുരക്ഷിതമായ പിൻ സജ്ജമാക്കുക. പരിശോധനയ്ക്ക് ശേഷം നിങ്ങൾക്ക് ഉടൻ തന്നെ നിങ്ങളുടെ അദ്വിതീയ ഹെൽത്ത് ഐഡി ലഭിക്കും."
//     },
//     {
//       question: "Is my health data secure and private?",
//       questionMl: "എന്റെ ആരോഗ്യ ഡാറ്റ സുരക്ഷിതവും സ്വകാര്യവുമാണോ?",
//       answer: "Yes, absolutely. We follow strict data protection protocols and comply with government privacy guidelines. Your data is encrypted and only accessible to authorized healthcare providers with your consent.",
//       answerMl: "അതെ, തീർച്ചയായും. ഞങ്ങൾ കർശനമായ ഡാറ്റ സംരക്ഷണ പ്രോട്ടോക്കോളുകൾ പാലിക്കുകയും സർക്കാർ സ്വകാര്യത മാർഗ്ഗനിർദ്ദേശങ്ങൾ പാലിക്കുകയും ചെയ്യുന്നു. നിങ്ങളുടെ ഡാറ്റ എൻക്രിപ്റ്റ് ചെയ്തിരിക്കുന്നു, നിങ്ങളുടെ സമ്മതത്തോടെ മാത്രം അംഗീകൃത ആരോഗ്യ സേവന ദാതാക്കൾക്ക് ലഭ്യമാണ്."
//     },
//     {
//       question: "Can I access my records from any health center?",
//       questionMl: "ഏതെങ്കിലും ആരോഗ്യ കേന്ദ്രത്തിൽ നിന്ന് എന്റെ റെക്കോർഡുകൾ ആക്സസ് ചെയ്യാൻ കഴിയുമോ?",
//       answer: "Yes, your health records are accessible from any registered health center across Kerala using your unique health ID and authentication.",
//       answerMl: "അതെ, നിങ്ങളുടെ അദ്വിതീയ ഹെൽത്ത് ഐഡിയും പ്രാമാണീകരണവും ഉപയോഗിച്ച് കേരളത്തിലുടനീളം രജിസ്റ്റർ ചെയ്ത ഏതെങ്കിലും ആരോഗ്യ കേന്ദ്രത്തിൽ നിന്ന് നിങ്ങളുടെ ആരോഗ്യ റെക്കോർഡുകൾ ആക്സസ് ചെയ്യാം."
//     },
//     {
//       question: "What documents do I need for registration?",
//       questionMl: "രജിസ്ട്രേഷനുള്ള എന്തെല്ലാം രേഖകൾ ആവശ്യമാണ്?",
//       answer: "You need a valid ID proof (Aadhar card preferred), a recent photograph, and your mobile number for OTP verification. Additional documents may be required based on your work permit status.",
//       answerMl: "നിങ്ങൾക്ക് സാധുവായ ഐഡി പ്രൂഫ് (ആധാർ കാർഡ് മുൻഗണന), സമീപകാല ഫോട്ടോ, OTP പരിശോധനയ്ക്കായി നിങ്ങളുടെ മൊബൈൽ നമ്പർ എന്നിവ ആവശ്യമാണ്. നിങ്ങളുടെ വർക്ക് പെർമിറ്റ് സ്റ്റാറ്റസിന്റെ അടിസ്ഥാനത്തിൽ അധിക രേഖകൾ ആവശ്യമായി വന്നേക്കാം."
//     },
//     {
//       question: "Is there any cost for registration or using the system?",
//       questionMl: "രജിസ്ട്രേഷനോ സിസ്റ്റം ഉപയോഗിക്കുന്നതിനോ എന്തെങ്കിലും ചിലവുണ്ടോ?",
//       answer: "No, the registration and basic use of the health record system is completely free for all migrant workers. This is a government initiative to ensure accessible healthcare.",
//       answerMl: "ഇല്ല, എല്ലാ കുടിയേറ്റ തൊഴിലാളികൾക്കും ആരോഗ്യ റെക്കോർഡ് സിസ്റ്റത്തിന്റെ രജിസ്ട്രേഷനും അടിസ്ഥാന ഉപയോഗവും പൂർണ്ണമായും സൗജന്യമാണ്. ആക്സസ് ചെയ്യാവുന്ന ആരോഗ്യ സേവനം ഉറപ്പാക്കുന്നതിനുള്ള സർക്കാർ സംരംഭമാണിത്."
//     },
//     {
//       question: "How can healthcare providers join the system?",
//       questionMl: "ആരോഗ്യ സേവന ദാതാക്കൾക്ക് എങ്ങനെ സിസ്റ്റത്തിൽ ചേരാം?",
//       answer: "Healthcare providers can register through the 'Provider Login' section with proper medical credentials and licensing documents. Verification is done by the health department before access is granted.",
//       answerMl: "ആരോഗ്യ സേവന ദാതാക്കൾക്ക് ശരിയായ മെഡിക്കൽ ക്രെഡൻഷ്യലുകളും ലൈസൻസിംഗ് രേഖകളും ഉപയോഗിച്ച് 'പ്രൊവൈഡർ ലോഗിൻ' വിഭാഗത്തിലൂടെ രജിസ്റ്റർ ചെയ്യാം. ആക്സസ് അനുവദിക്കുന്നതിന് മുമ്പ് ആരോഗ്യ വകുപ്പ് പരിശോധന നടത്തുന്നു."
//     }
//   ];

//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case 'Expansion': return 'bg-primary text-primary-foreground';
//       case 'Campaign': return 'bg-secondary text-secondary-foreground';
//       case 'Technology': return 'bg-accent text-accent-foreground';
//       default: return 'bg-muted text-muted-foreground';
//     }
//   };

//   return (
//     <section className="py-16 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* News & Updates Column */}
//           <div>
//             <div className="flex items-center space-x-3 mb-8">
//               <div className="p-2 bg-primary rounded-lg">
//                 <Newspaper className="h-6 w-6 text-primary-foreground" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-foreground">
//                   {language === 'en' ? 'News & Updates' : 'വാർത്തകളും അപ്ഡേറ്റുകളും'}
//                 </h2>
//               </div>
//             </div>

//             <div className="space-y-6">
//               {newsItems.map((news) => (
//                 <Card key={news.id} className="hover:shadow-md transition-shadow">
//                   <CardHeader className="pb-3">
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-2 mb-2">
//                           <Badge className={getCategoryColor(news.category)}>
//                             {news.category}
//                           </Badge>
//                           {news.isNew && (
//                             <Badge variant="destructive" className="text-xs">
//                               NEW
//                             </Badge>
//                           )}
//                         </div>
//                         <CardTitle className="text-lg leading-tight">
//                           {language === 'en' ? news.title : news.titleMl}
//                         </CardTitle>
//                       </div>
//                       <div className="flex items-center text-sm text-muted-foreground ml-4">
//                         <CalendarDays className="h-4 w-4 mr-1" />
//                         {new Date(news.date).toLocaleDateString()}
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="pt-0">
//                     <CardDescription className="mb-3">
//                       {language === 'en' ? news.description : news.descriptionMl}
//                     </CardDescription>
//                     <Button variant="outline" size="sm" className="w-full">
//                       <span>{language === 'en' ? 'Read More' : 'കൂടുതൽ വായിക്കുക'}</span>
//                       <ExternalLink className="h-4 w-4 ml-2" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             <div className="mt-8 text-center">
//               <Button variant="outline">
//                 {language === 'en' ? 'View All News' : 'എല്ലാ വാർത്തകളും കാണുക'}
//                 <ExternalLink className="h-4 w-4 ml-2" />
//               </Button>
//             </div>
//           </div>

//           {/* FAQs Column */}
//           <div>
//             <div className="flex items-center space-x-3 mb-8">
//               <div className="p-2 bg-accent rounded-lg">
//                 <HelpCircle className="h-6 w-6 text-accent-foreground" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-foreground">
//                   {language === 'en' ? 'Frequently Asked Questions' : 'പതിവ് ചോദ്യങ്ങൾ'}
//                 </h2>
//               </div>
//             </div>

//             <Accordion type="single" collapsible className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <AccordionItem 
//                   key={index} 
//                   value={`item-${index}`}
//                   className="border border-border rounded-lg px-4"
//                 >
//                   <AccordionTrigger className="text-left hover:no-underline py-4">
//                     <div className="font-medium text-foreground">
//                       {language === 'en' ? faq.question : faq.questionMl}
//                     </div>
//                   </AccordionTrigger>
//                   <AccordionContent className="pb-4 pt-0">
//                     <p className="text-muted-foreground">
//                       {language === 'en' ? faq.answer : faq.answerMl}
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>

//             <div className="mt-8 p-6 bg-muted/50 rounded-lg">
//               <h3 className="font-semibold text-foreground mb-2">
//                 {language === 'en' ? 'Need More Help?' : 'കൂടുതൽ സഹായം വേണോ?'}
//               </h3>
//               <div className="space-y-2">
//                 <Button variant="outline" size="sm" className="w-full">
//                   {language === 'en' ? 'Contact Support' : 'പിന്തുണയുമായി ബന്ധപ്പെടുക'}
//                 </Button>
//                 <Button variant="outline" size="sm" className="w-full">
//                   {language === 'en' ? 'Help Center' : 'സഹായ കേന്ദ്രം'}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsAndFAQSection;



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { CalendarDays, ExternalLink, HelpCircle, Newspaper } from "lucide-react";

const NewsAndFAQSection = () => {
  const { language } = useLanguage();

  // Helper function for category translation
  const getCategoryText = (category: string) => {
    const categories = {
      Expansion: {
        en: "Expansion",
        hi: "विस्तार",
        ml: "വ്യാപനം",
      },
      Campaign: {
        en: "Campaign",
        hi: "अभियान",
        ml: "പ്രചരണം",
      },
      Technology: {
        en: "Technology",
        hi: "प्रौद्योगिकी",
        ml: "ടെക്നോളജി",
      },
    };
    return categories[category]?.[language] ?? category;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Expansion': return 'bg-primary text-primary-foreground';
      case 'Campaign': return 'bg-secondary text-secondary-foreground';
      case 'Technology': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  // News items with Hindi added
  const newsItems = [
    {
      id: 1,
      title: "New Health Centers Added in Kochi",
      titleHi: "कोच्चि में नए स्वास्थ्य केंद्र जोड़े गए",
      titleMl: "കൊച്ചിയിൽ പുതിയ ആരോഗ്യ കേന്ദ്രങ്ങൾ കൂട്ടിച്ചേർത്തു",
      date: "2024-01-15",
      category: "Expansion",
      description: "Five new health centers have been registered in the Kochi district to serve migrant workers better.",
      descriptionHi: "कोच्चि जिले में प्रवासी कर्मचारियों की बेहतर सेवा के लिए पांच नए स्वास्थ्य केंद्र पंजीकृत किए गए हैं।",
      descriptionMl: "കുടിയേറ്റ തൊഴിലാളികൾക്ക് മികച്ച സേവനം നൽകുന്നതിനായി കൊച്ചി ജില്ലയിൽ അഞ്ച് പുതിയ ആരോഗ്യ കേന്ദ്രങ്ങൾ രജിസ്റ്റർ ചെയ്തിട്ടുണ്ട്.",
      isNew: true
    },
    {
      id: 2,
      title: "Free Health Checkup Drive",
      titleHi: "मुफ़्त स्वास्थ्य जांच अभियान",
      titleMl: "സൗജന്യ ആരോഗ്യ പരിശോധന ഡ്രൈവ്",
      date: "2024-01-10",
      category: "Campaign",
      description: "Monthly free health checkup drives scheduled across all districts for registered workers.",
      descriptionHi: "पंजीकृत कर्मचारियों के लिए सभी जिलों में मासिक मुफ्त स्वास्थ्य जांच अभियान आयोजित किया जाएगा।",
      descriptionMl: "രജിസ്റ്റർ ചെയ്ത തൊഴിലാളികൾക്കായി എല്ലാ ജില്ലകളിലും മാസിക സൗജന്യ ആരോഗ്യ പരിശോധന ഡ്രൈവുകൾ ഷെഡ്യൂൾ ചെയ്തിട്ടുണ്ട്.",
      isNew: true
    },
    {
      id: 3,
      title: "Digital Health ID Integration",
      titleHi: "डिजिटल हेल्थ आईडी एकीकरण",
      titleMl: "ഡിജിറ്റൽ ഹെൽത്ത് ഐഡി ഇന്റഗ്രേഷൻ",
      date: "2024-01-05",
      category: "Technology",
      description: "System now integrates with National Digital Health Mission for seamless healthcare access.",
      descriptionHi: "प्रणाली अब निर्बाध स्वास्थ्य सेवा पहुंच के लिए राष्ट्रीय डिजिटल हेल्थ मिशन के साथ एकीकृत है।",
      descriptionMl: "തടസ്സമില്ലാത്ത ആരോഗ്യ സേവന ലഭ്യതയ്ക്കായി സിസ്റ്റം ഇപ്പോൾ നാഷണൽ ഡിജിറ്റൽ ഹെൽത്ത് മിഷനുമായി സംയോജിപ്പിച്ചിരിക്കുന്നു.",
      isNew: false
    },
    {
      id: 4,
      title: "Mobile App Launch",
      titleHi: "मोबाइल ऐप लॉन्च",
      titleMl: "മൊബൈൽ ആപ്പ് ലോഞ്ച്",
      date: "2023-12-28",
      category: "Technology",
      description: "New mobile application launched for easier access to health records on the go.",
      descriptionHi: "स्वास्थ्य रिकॉर्ड्स को आसानी से एक्सेस करने के लिए नया मोबाइल ऐप लॉन्च किया गया।",
      descriptionMl: "യാത്രയിൽ ആരോഗ്യ റെക്കോർഡുകളിലേക്ക് എളുപ്പത്തിൽ ആക്സസ് ചെയ്യുന്നതിനായി പുതിയ മൊബൈൽ ആപ്ലിക്കേഷൻ ലോഞ്ച് ചെയ്തു.",
      isNew: false
    }
  ];

  // FAQs with Hindi translations added
  const faqs = [
    {
      question: "How do I register for a health ID?",
      questionHi: "मैं हेल्थ आईडी के लिए कैसे रजिस्टर करूं?",
      questionMl: "ഹെൽത്ത് ഐഡിക്കായി എങ്ങനെ രജിസ്റ്റർ ചെയ്യാം?",
      answer: "Click on 'Worker Registration' button, fill in your basic details, upload required documents (Aadhar/ID proof), and set a secure PIN. You will receive your unique health ID immediately after verification.",
      answerHi: "'वर्कर रजिस्ट्रेशन' बटन पर क्लिक करें, अपनी बुनियादी जानकारी भरें, आवश्यक दस्तावेज़ (आधार/आईडी प्रूफ) अपलोड करें, और एक सुरक्षित पिन सेट करें। सत्यापन के बाद आपको तुरंत आपकी अनोखी हेल्थ आईडी मिलेगी।",
      answerMl: "'വർക്കർ രജിസ്ട്രേഷൻ' ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുക, നിങ്ങളുടെ അടിസ്ഥാന വിശദാംശങ്ങൾ പൂരിപ്പിക്കുക, ആവശ്യമായ രേഖകൾ (ആധാർ/ഐഡി പ്രൂഫ്) അപ്‌ലോഡ് ചെയ്യുക, ഒപ്പം സുരക്ഷിതമായ പിൻ സജ്ജമാക്കുക. പരിശോധനയ്ക്ക് ശേഷം നിങ്ങൾക്ക് ഉടൻ തന്നെ നിങ്ങളുടെ അദ്വിതീയ ഹെൽത്ത് ഐഡി ലഭിക്കും."
    },
    {
      question: "Is my health data secure and private?",
      questionHi: "क्या मेरा स्वास्थ्य डेटा सुरक्षित और निजी है?",
      questionMl: "എന്റെ ആരോഗ്യ ഡാറ്റ സുരക്ഷിതവും സ്വകാര്യവുമാണോ?",
      answer: "Yes, absolutely. We follow strict data protection protocols and comply with government privacy guidelines. Your data is encrypted and only accessible to authorized healthcare providers with your consent.",
      answerHi: "हाँ, बिल्कुल। हम कड़े डेटा सुरक्षा प्रोटोकॉल का पालन करते हैं और सरकारी गोपनीयता दिशानिर्देशों का पालन करते हैं। आपका डेटा एन्क्रिप्टेड है और केवल आपकी सहमति से अधिकृत स्वास्थ्य सेवा प्रदाताओं द्वारा एक्सेस किया जाता है।",
      answerMl: "അതെ, തീർച്ചയായും. ഞങ്ങൾ കർശനമായ ഡാറ്റ സംരക്ഷണ പ്രോട്ടോക്കോളുകൾ പാലിക്കുകയും സർക്കാർ സ്വകാര്യത മാർഗ്ഗനിർദ്ദേശങ്ങൾ പാലിക്കുകയും ചെയ്യുന്നു. നിങ്ങളുടെ ഡാറ്റ എൻക്രിപ്റ്റ് ചെയ്തിരിക്കുന്നു, നിങ്ങളുടെ സമ്മതത്തോടെ മാത്രം അംഗീകൃത ആരോഗ്യ സേവന ദാതാക്കൾക്ക് ലഭ്യമാണ്."
    },
    {
      question: "Can I access my records from any health center?",
      questionHi: "क्या मैं किसी भी स्वास्थ्य केंद्र से अपने रिकॉर्ड्स एक्सेस कर सकता हूँ?",
      questionMl: "ഏതെങ്കിലും ആരോഗ്യ കേന്ദ്രത്തിൽ നിന്ന് എന്റെ റെക്കോർഡുകൾ ആക്സസ് ചെയ്യാൻ കഴിയുമോ?",
      answer: "Yes, your health records are accessible from any registered health center across Kerala using your unique health ID and authentication.",
      answerHi: "हाँ, आपका हेल्थ रिकॉर्ड केरल के किसी भी पंजीकृत स्वास्थ्य केंद्र से आपकी अनोखी हेल्थ आईडी और प्रमाणीकरण का उपयोग करके एक्सेस किया जा सकता है।",
      answerMl: "അതെ, നിങ്ങളുടെ അദ്വിതീയ ഹെൽത്ത് ഐഡിയും പ്രാമാണീകരണവും ഉപയോഗിച്ച് കേരളത്തിലുടനീളം രജിസ്റ്റർ ചെയ്ത ഏതെങ്കിലും ആരോഗ്യ കേന്ദ്രത്തിൽ നിന്ന് നിങ്ങളുടെ ആരോഗ്യ റെക്കോർഡുകൾ ആക്സസ് ചെയ്യാം."
    },
    {
      question: "What documents do I need for registration?",
      questionHi: "रजिस्ट्रेशन के लिए मुझे कौन से दस्तावेज़ चाहिए?",
      questionMl: "രജിസ്ട്രേഷനുള്ള എന്തെല്ലാം രേഖകൾ ആവശ്യമാണ്?",
      answer: "You need a valid ID proof (Aadhar card preferred), a recent photograph, and your mobile number for OTP verification. Additional documents may be required based on your work permit status.",
      answerHi: "आपको एक वैध आईडी प्रूफ (आधार कार्ड प्राथमिकता), एक हालिया तस्वीर, और OTP सत्यापन के लिए अपना मोबाइल नंबर चाहिए। आपके वर्क परमिट स्थिति के आधार पर अतिरिक्त दस्तावेज़ भी आवश्यक हो सकते हैं।",
      answerMl: "നിങ്ങൾക്ക് സാധുവായ ഐഡി പ്രൂഫ് (ആധാർ കാർഡ് മുൻഗണന), സമീപകാല ഫോട്ടോ, OTP പരിശോധനയ്ക്കായി നിങ്ങളുടെ മൊബൈൽ നമ്പർ എന്നിവ ആവശ്യമാണ്. നിങ്ങളുടെ വർക്ക് പെർമിറ്റ് സ്റ്റാറ്റസിന്റെ അടിസ്ഥാനത്തിൽ അധിക രേഖകൾ ആവശ്യമായി വന്നേക്കാം."
    },
    {
      question: "Is there any cost for registration or using the system?",
      questionHi: "रजिस्ट्रेशन या सिस्टम का उपयोग करने के लिए कोई शुल्क है?",
      questionMl: "രജിസ്ട്രേഷനോ സിസ്റ്റം ഉപയോഗിക്കുന്നതിനോ എന്തെങ്കിലും ചിലവുണ്ടോ?",
      answer: "No, the registration and basic use of the health record system is completely free for all migrant workers. This is a government initiative to ensure accessible healthcare.",
      answerHi: "नहीं, सभी प्रवासी कर्मचारियों के लिए स्वास्थ्य रिकॉर्ड सिस्टम का पंजीकरण और बुनियादी उपयोग पूरी तरह से मुफ्त है। यह एक सरकारी पहल है ताकि सुलभ स्वास्थ्य सेवा सुनिश्चित हो सके।",
      answerMl: "ഇല്ല, എല്ലാ കുടിയേറ്റ തൊഴിലാളികൾക്കും ആരോഗ്യ റെക്കോർഡ് സിസ്റ്റത്തിന്റെ രജിസ്ട്രേഷനും അടിസ്ഥാന ഉപയോഗവും പൂർണ്ണമായും സൗജന്യമാണ്. ആക്സസ് ചെയ്യാവുന്ന ആരോഗ്യ സേവനം ഉറപ്പാക്കുന്നതിനുള്ള സർക്കാർ സംരംഭമാണിത്."
    },
    {
      question: "How can healthcare providers join the system?",
      questionHi: "स्वास्थ्य सेवा प्रदाता सिस्टम में कैसे जुड़ सकते हैं?",
      questionMl: "ആരോഗ്യ സേവന ദാതാക്കൾക്ക് എങ്ങനെ സിസ്റ്റത്തിൽ ചേരാം?",
      answer: "Healthcare providers can register through the 'Provider Login' section with proper medical credentials and licensing documents. Verification is done by the health department before access is granted.",
      answerHi: "स्वास्थ्य सेवा प्रदाता उचित मेडिकल प्रमाण पत्र और लाइसेंसिंग दस्तावेज़ के साथ 'प्रोवाइडर लॉगिन' सेक्शन के माध्यम से रजिस्टर कर सकते हैं। एक्सेस प्रदान करने से पहले स्वास्थ्य विभाग द्वारा सत्यापन किया जाता है।",
      answerMl: "ആരോഗ്യ സേവന ദാതാക്കൾക്ക് ശരിയായ മെഡിക്കൽ ക്രെഡൻഷ്യലുകളും ലൈസൻസിംഗ് രേഖകളും ഉപയോഗിച്ച് 'പ്രൊവൈഡർ ലോഗിൻ' വിഭാഗത്തിലൂടെ രജിസ്റ്റർ ചെയ്യാം. ആക്സസ് അനുവദിക്കുന്നതിന് മുമ്പ് ആരോഗ്യ വകുപ്പ് പരിശോധന നടത്തുന്നു."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News & Updates Column */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-primary rounded-lg">
                <Newspaper className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {language === 'en' ? 'News & Updates' : language === 'hi' ? 'समाचार और अपडेट' : 'വാർത്തകളും അപ്ഡേറ്റുകളും'}
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {newsItems.map((news) => (
                <Card key={news.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getCategoryColor(news.category)}>
                            {getCategoryText(news.category)}
                          </Badge>
                          {news.isNew && (
                            <Badge variant="destructive" className="text-xs">
                              {language === 'en' ? 'NEW' : language === 'hi' ? 'नया' : 'പുതിയത്'}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {language === 'en' ? news.title : language === 'hi' ? news.titleHi : news.titleMl}
                        </CardTitle>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground ml-4">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {new Date(news.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : language === 'ml' ? 'ml-IN' : undefined)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-3">
                      {language === 'en' ? news.description : language === 'hi' ? news.descriptionHi : news.descriptionMl}
                    </CardDescription>
                    <Button variant="outline" size="sm" className="w-full">
                      <span>
                        {language === 'en' ? 'Read More' : language === 'hi' ? 'और पढ़ें' : 'കൂടുതൽ വായിക്കുക'}
                      </span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">
                {language === 'en' ? 'View All News' : language === 'hi' ? 'सभी समाचार देखें' : 'എല്ലാ വാർത്തകളും കാണുക'}
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* FAQs Column */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-accent rounded-lg">
                <HelpCircle className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {language === 'en' ? 'Frequently Asked Questions' : language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'പതിവ് ചോദ്യങ്ങൾ'}
                </h2>
              </div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <div className="font-medium text-foreground">
                      {language === 'en' ? faq.question : language === 'hi' ? faq.questionHi : faq.questionMl}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0">
                    <p className="text-muted-foreground">
                      {language === 'en' ? faq.answer : language === 'hi' ? faq.answerHi : faq.answerMl}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'en' ? 'Need More Help?' : language === 'hi' ? 'अधिक सहायता चाहिए?' : 'കൂടുതൽ സഹായം വേണോ?'}
              </h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  {language === 'en' ? 'Contact Support' : language === 'hi' ? 'सहायता से संपर्क करें' : 'പിന്തുണയുമായി ബന്ധപ്പെടുക'}
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  {language === 'en' ? 'Help Center' : language === 'hi' ? 'सहायता केंद्र' : 'സഹായ കേന്ദ്രം'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndFAQSection;
