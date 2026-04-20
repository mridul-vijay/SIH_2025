// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { 
//   User, 
//   Stethoscope, 
//   Settings, 
//   ArrowRight,
//   FileText,
//   Calendar,
//   Shield,
//   Clock,
//   Heart,
//   Building,
//   LogIn,
//   UserPlus
// } from "lucide-react";

// const UserTypeSection = () => {
//   const { getContentLocale } = useLanguage();
//   const contentLocale = getContentLocale();
//   const navigate = useNavigate();
  
//   const userTypes = [
//     {
//       icon: User,
//       title: contentLocale === 'en' ? "Migrant Worker" : "കുടിയേറ്റ തൊഴിലാളി",
//       description: contentLocale === 'en' ? "Register and access your health records" : "നിങ്ങളുടെ ആരോഗ്യ റെക്കോർഡുകൾ രജിസ്റ്റർ ചെയ്യുകയും ആക്‌സസ് ചെയ്യുകയും ചെയ്യുക",
//       features: [
//         { icon: FileText, text: contentLocale === 'en' ? "Get Unique Health ID" : "അദ്വിതീയ ആരോഗ്യ ഐഡി നേടുക" },
//         { icon: Calendar, text: contentLocale === 'en' ? "Book Appointments" : "അപ്പോയിന്റ്മെന്റുകൾ ബുക്ക് ചെയ്യുക" },
//         { icon: Shield, text: contentLocale === 'en' ? "Secure Access" : "സുരക്ഷിത ആക്സസ്" },
//         { icon: Clock, text: contentLocale === 'en' ? "24/7 Available" : "24/7 ലഭ്യം" }
//       ],
//       buttonText: contentLocale === 'en' ? "Register Now" : "ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക",
//       bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
//       backBgColor: "bg-gradient-to-br from-emerald-600 to-emerald-700",
//       iconBg: "bg-emerald-600",
//       buttonBg: "bg-emerald-600 hover:bg-emerald-700",
//       borderColor: "border-emerald-200 hover:border-emerald-300",
//       badge: contentLocale === 'en' ? "Most Popular" : "ഏറ്റവും ജനപ്രിയം",
//       badgeColor: "bg-emerald-100 text-emerald-800"
//     },
//     {
//       icon: Stethoscope,
//       title: contentLocale === 'en' ? "Healthcare Provider" : "ആരോഗ്യ സേവന ദാതാവ്",
//       description: contentLocale === 'en' ? "Manage patient records and consultations" : "രോഗി റെക്കോർഡുകളും കൺസൾട്ടേഷനുകളും നിയന്ത്രിക്കുക",
//       features: [
//         { icon: Heart, text: contentLocale === 'en' ? "Patient Management" : "രോഗി മാനേജ്മെന്റ്" },
//         { icon: FileText, text: contentLocale === 'en' ? "Digital Records" : "ഡിജിറ്റൽ റെക്കോർഡുകൾ" },
//         { icon: Calendar, text: contentLocale === 'en' ? "Appointment System" : "അപ്പോയിന്റ്മെന്റ് സിസ്റ്റം" },
//         { icon: Shield, text: contentLocale === 'en' ? "HIPAA Compliant" : "HIPAA അനുസൃത" }
//       ],
//       buttonText: contentLocale === 'en' ? "Provider Login" : "പ്രൊവൈഡർ ലോഗിൻ",
//       bgColor: "bg-gradient-to-br from-blue-50 to-sky-100",
//       backBgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
//       iconBg: "bg-blue-600",
//       buttonBg: "bg-blue-600 hover:bg-blue-700",
//       borderColor: "border-blue-200 hover:border-blue-300",
//       badge: contentLocale === 'en' ? "Professional" : "പ്രൊഫഷണൽ",
//       badgeColor: "bg-blue-100 text-blue-800"
//     },
//     {
//       icon: Settings,
//       title: contentLocale === 'en' ? "Administrator" : "അഡ്മിനിസ്ട്രേറ്റർ",
//       description: contentLocale === 'en' ? "System management and analytics" : "സിസ്റ്റം മാനേജ്മെന്റും അനലിറ്റിക്സും",
//       features: [
//         { icon: Building, text: contentLocale === 'en' ? "System Management" : "സിസ്റ്റം മാനേജ്മെന്റ്" },
//         { icon: FileText, text: contentLocale === 'en' ? "Generate Reports" : "റിപ്പോർട്ടുകൾ സൃഷ്ടിക്കുക" },
//         { icon: Shield, text: contentLocale === 'en' ? "User Verification" : "ഉപയോക്തൃ പരിശോധന" },
//         { icon: Settings, text: contentLocale === 'en' ? "System Settings" : "സിസ്റ്റം ക്രമീകരണങ്ങൾ" }
//       ],
//       buttonText: contentLocale === 'en' ? "Admin Access" : "അഡ്മിൻ ആക്സസ്",
//       bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
//       backBgColor: "bg-gradient-to-br from-amber-600 to-amber-700",
//       iconBg: "bg-amber-600",
//       buttonBg: "bg-amber-600 hover:bg-amber-700",
//       borderColor: "border-amber-200 hover:border-amber-300",
//       badge: contentLocale === 'en' ? "Admin" : "അഡ്മിൻ",
//       badgeColor: "bg-amber-100 text-amber-800"
//     }
//   ];

//   return (
//     <section id="user-types" className="py-16 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
//             {contentLocale === 'en' ? 'Choose Your Access Type' : 'നിങ്ങളുടെ ആക്സസ് തരം തിരഞ്ഞെടുക്കുക'}
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             {contentLocale === 'en' 
//               ? 'Select your role to access the appropriate features and services designed specifically for your needs.'
//               : 'നിങ്ങളുടെ ആവശ്യങ്ങൾക്കായി പ്രത്യേകം രൂപകൽപ്പന ചെയ്ത ഉചിതമായ സവിശേഷതകളും സേവനങ്ങളും ആക്സസ് ചെയ്യുന്നതിന് നിങ്ങളുടെ പങ്ക് തിരഞ്ഞെടുക്കുക.'
//             }
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {userTypes.map((userType, index) => {
//             const IconComponent = userType.icon;
//             return (
//               <div key={index} className="perspective-1000 h-80">
//                 <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180 group">
//                   {/* Front Side */}
//                   <Card className={`absolute inset-0 backface-hidden border-2 ${userType.borderColor} ${userType.bgColor} shadow-lg`}>
//                     <CardHeader className="relative">
//                       <div className="flex items-center justify-between mb-4">
//                         <div className={`p-3 rounded-lg ${userType.iconBg} text-white shadow-lg`}>
//                           <IconComponent className="h-8 w-8" />
//                         </div>
//                         <Badge className={`text-xs font-semibold ${userType.badgeColor} border-0`}>
//                           {userType.badge}
//                         </Badge>
//                       </div>
                      
//                       <CardTitle className="text-xl font-bold text-gray-800 mb-2">
//                         {userType.title}
//                       </CardTitle>
//                       <CardDescription className="text-gray-600 font-medium">
//                         {userType.description}
//                       </CardDescription>
//                     </CardHeader>

//                     <CardContent className="relative">
//                       <ul className="space-y-3">
//                         {userType.features.map((feature, featureIndex) => {
//                           const FeatureIcon = feature.icon;
//                           return (
//                             <li key={featureIndex} className="flex items-center space-x-3">
//                               <FeatureIcon className="h-5 w-5 text-gray-700 flex-shrink-0" />
//                               <span className="text-sm font-medium text-gray-700">
//                                 {feature.text}
//                               </span>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </CardContent>
//                   </Card>

//                   {/* Back Side */}
//                   <Card className={`absolute inset-0 backface-hidden rotate-y-180 ${userType.backBgColor} border-2 border-white/20 shadow-xl`}>
//                     <div className="flex flex-col items-center justify-center h-full text-white p-8">
//                       <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6 cursor-pointer hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
//                            onClick={() => navigate('/login')}>
//                         <div className="text-center">
//                           <div className="flex justify-center space-x-2 mb-2">
//                             <LogIn className="h-6 w-6" />
//                             <UserPlus className="h-6 w-6" />
//                           </div>
//                           <div className="text-sm font-semibold">
//                             {contentLocale === 'en' ? 'Login' : 'ലോഗിൻ'}
//                             <br />
//                             {contentLocale === 'en' ? 'Register' : 'രജിസ്റ്റർ'}
//                           </div>
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-bold mb-2 text-center">
//                         {userType.title}
//                       </h3>
//                       <p className="text-white/90 text-center text-sm">
//                         {contentLocale === 'en' ? 'Click to get started' : 'ആരംഭിക്കാൻ ക്ലിക്കുചെയ്യുക'}
//                       </p>
//                     </div>
//                   </Card>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UserTypeSection;



// // -----------------------------------------------

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { 
//   User, 
//   Stethoscope, 
//   Settings, 
//   ArrowRight,
//   FileText,
//   Calendar,
//   Shield,
//   Clock,
//   Heart,
//   Building,
//   LogIn,
//   UserPlus
// } from "lucide-react";

// const UserTypeSection = () => {
//   const { getContentLocale } = useLanguage();
//   const contentLocale = getContentLocale();
//   const navigate = useNavigate();

//   // Helper to choose content based on locale
//   const t = (en: string, hi: string, ml: string) => {
//     if (contentLocale === "hi") return hi;
//     if (contentLocale === "ml") return ml;
//     return en;
//   };

//   const userTypes = [
//     {
//       icon: User,
//       title: t("Migrant Worker", "माइग्रेंट वर्कर", "കുടിയേറ്റ തൊഴിലാളി"),
//       description: t(
//         "Register and access your health records",
//         "अपना स्वास्थ्य रिकॉर्ड पंजीकृत करें और एक्सेस करें",
//         "നിങ്ങളുടെ ആരോഗ്യ റെക്കോർഡുകൾ രജിസ്റ്റർ ചെയ്യുകയും ആക്‌സസ് ചെയ്യുകയും ചെയ്യുക"
//       ),
//       features: [
//         { icon: FileText, text: t("Get Unique Health ID", "यूनिक हेल्थ आईडी प्राप्त करें", "അദ്വിതീയ ആരോഗ്യ ഐഡി നേടുക") },
//         { icon: Calendar, text: t("Book Appointments", "अपॉइंटमेंट बुक करें", "അപ്പോയിന്റ്മെന്റുകൾ ബുക്ക് ചെയ്യുക") },
//         { icon: Shield, text: t("Secure Access", "सुरक्षित पहुँच", "സുരക്ഷിത ആക്സസ്") },
//         { icon: Clock, text: t("24/7 Available", "24/7 उपलब्ध", "24/7 ലഭ്യം") }
//       ],
//       buttonText: t("Register Now", "अभी पंजीकरण करें", "ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക"),
//       bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
//       backBgColor: "bg-gradient-to-br from-emerald-600 to-emerald-700",
//       iconBg: "bg-emerald-600",
//       buttonBg: "bg-emerald-600 hover:bg-emerald-700",
//       borderColor: "border-emerald-200 hover:border-emerald-300",
//       badge: t("Most Popular", "सबसे लोकप्रिय", "ഏറ്റവും ജനപ്രിയം"),
//       badgeColor: "bg-emerald-100 text-emerald-800"
//     },
//     {
//       icon: Stethoscope,
//       title: t("Healthcare Provider", "स्वास्थ्य सेवा प्रदाता", "ആരോഗ്യ സേവന ദാതാവ്"),
//       description: t(
//         "Manage patient records and consultations",
//         "रोगी रिकॉर्ड और परामर्श प्रबंधित करें",
//         "രോഗി റെക്കോർഡുകളും കൺസൾട്ടേഷനുകളും നിയന്ത്രിക്കുക"
//       ),
//       features: [
//         { icon: Heart, text: t("Patient Management", "रोगी प्रबंधन", "രോഗി മാനേജ്മെന്റ്") },
//         { icon: FileText, text: t("Digital Records", "डिजिटल रिकॉर्ड", "ഡിജിറ്റൽ റെക്കോർഡുകൾ") },
//         { icon: Calendar, text: t("Appointment System", "अपॉइंटमेंट सिस्टम", "അപ്പോയിന്റ്മെന്റ് സിസ്റ്റം") },
//         { icon: Shield, text: t("HIPAA Compliant", "HIPAA अनुपालक", "HIPAA അനുസൃത") }
//       ],
//       buttonText: t("Provider Login", "प्रदाता लॉगिन", "പ്രൊവൈഡർ ലോഗിൻ"),
//       bgColor: "bg-gradient-to-br from-blue-50 to-sky-100",
//       backBgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
//       iconBg: "bg-blue-600",
//       buttonBg: "bg-blue-600 hover:bg-blue-700",
//       borderColor: "border-blue-200 hover:border-blue-300",
//       badge: t("Professional", "पेशेवर", "പ്രൊഫഷണൽ"),
//       badgeColor: "bg-blue-100 text-blue-800"
//     },
//     {
//       icon: Settings,
//       title: t("Administrator", "प्रशासक", "അഡ്മിനിസ്ട്രേറ്റർ"),
//       description: t(
//         "System management and analytics",
//         "सिस्टम प्रबंधन और विश्लेषण",
//         "സിസ്റ്റം മാനേജ്മെന്റും അനലിറ്റിക്സും"
//       ),
//       features: [
//         { icon: Building, text: t("System Management", "सिस्टम प्रबंधन", "സിസ്റ്റം മാനേജ്മെന്റ്") },
//         { icon: FileText, text: t("Generate Reports", "रिपोर्ट बनाएं", "റിപ്പോർട്ടുകൾ സൃഷ്ടിക്കുക") },
//         { icon: Shield, text: t("User Verification", "उपयोगकर्ता सत्यापन", "ഉപയോക്തൃ പരിശോധന") },
//         { icon: Settings, text: t("System Settings", "सिस्टम सेटिंग्स", "സിസ്റ്റം ക്രമീകരണങ്ങൾ") }
//       ],
//       buttonText: t("Admin Access", "व्यवस्थापक पहुँच", "അഡ്മിൻ ആക്സസ്"),
//       bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
//       backBgColor: "bg-gradient-to-br from-amber-600 to-amber-700",
//       iconBg: "bg-amber-600",
//       buttonBg: "bg-amber-600 hover:bg-amber-700",
//       borderColor: "border-amber-200 hover:border-amber-300",
//       badge: t("Admin", "व्यवस्थापक", "അഡ്മിൻ"),
//       badgeColor: "bg-amber-100 text-amber-800"
//     }
//   ];

//   return (
//     <section id="user-types" className="py-16 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
//             {t("Choose Your Access Type", "अपना एक्सेस प्रकार चुनें", "നിങ്ങളുടെ ആക്സസ് തരം തിരഞ്ഞെടുക്കുക")}
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             {t(
//               "Select your role to access the appropriate features and services designed specifically for your needs.",
//               "अपनी भूमिका चुनें ताकि आप अपनी आवश्यकताओं के लिए विशेष रूप से डिज़ाइन की गई सुविधाओं और सेवाओं का उपयोग कर सकें।",
//               "നിങ്ങളുടെ ആവശ്യങ്ങൾക്കായി പ്രത്യേകം രൂപകൽപ്പന ചെയ്ത ഉചിതമായ സവിശേഷതകളും സേവനങ്ങളും ആക്സസ് ചെയ്യുന്നതിന് നിങ്ങളുടെ പങ്ക് തിരഞ്ഞെടുക്കുക."
//             )}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {userTypes.map((userType, index) => {
//             const IconComponent = userType.icon;
//             return (
//               <div key={index} className="perspective-1000 h-80">
//                 <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180 group">
//                   {/* Front Side */}
//                   <Card className={`absolute inset-0 backface-hidden border-2 ${userType.borderColor} ${userType.bgColor} shadow-lg`}>
//                     <CardHeader className="relative">
//                       <div className="flex items-center justify-between mb-4">
//                         <div className={`p-3 rounded-lg ${userType.iconBg} text-white shadow-lg`}>
//                           <IconComponent className="h-8 w-8" />
//                         </div>
//                         <Badge className={`text-xs font-semibold ${userType.badgeColor} border-0`}>
//                           {userType.badge}
//                         </Badge>
//                       </div>
                      
//                       <CardTitle className="text-xl font-bold text-gray-800 mb-2">
//                         {userType.title}
//                       </CardTitle>
//                       <CardDescription className="text-gray-600 font-medium">
//                         {userType.description}
//                       </CardDescription>
//                     </CardHeader>

//                     <CardContent className="relative">
//                       <ul className="space-y-3">
//                         {userType.features.map((feature, featureIndex) => {
//                           const FeatureIcon = feature.icon;
//                           return (
//                             <li key={featureIndex} className="flex items-center space-x-3">
//                               <FeatureIcon className="h-5 w-5 text-gray-700 flex-shrink-0" />
//                               <span className="text-sm font-medium text-gray-700">
//                                 {feature.text}
//                               </span>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </CardContent>
//                   </Card>

//                   {/* Back Side */}
//                   <Card className={`absolute inset-0 backface-hidden rotate-y-180 ${userType.backBgColor} border-2 border-white/20 shadow-xl`}>
//                     <div className="flex flex-col items-center justify-center h-full text-white p-8">
//                       <div
//                         className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6 cursor-pointer hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
//                         onClick={() => navigate('/login')}
//                       >
//                         <div className="text-center">
//                           <div className="flex justify-center space-x-2 mb-2">
//                             <LogIn className="h-6 w-6" />
//                             <UserPlus className="h-6 w-6" />
//                           </div>
//                           <div className="text-sm font-semibold">
//                             {t("Login", "लॉगिन", "ലോഗിൻ")}
//                             <br />
//                             {t("Register", "रजिस्टर", "രജിസ്റ്റർ")}
//                           </div>
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-bold mb-2 text-center">
//                         {userType.title}
//                       </h3>
//                       <p className="text-white/90 text-center text-sm">
//                         {t("Click to get started", "शुरू करने के लिए क्लिक करें", "ആരംഭിക്കാൻ ക്ലിക്കുചെയ്യുക")}
//                       </p>
//                     </div>
//                   </Card>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UserTypeSection;


// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "@/contexts/LanguageContext";
// import {
//   User,
//   Stethoscope,
//   Settings,
//   FileText,
//   Calendar,
//   Shield,
//   Clock,
//   Heart,
//   Building,
//   LogIn,
//   UserPlus
// } from "lucide-react";

// const UserTypeSection = () => {
//   const { getContentLocale } = useLanguage();
//   const contentLocale = getContentLocale();
//   const navigate = useNavigate();

//   const t = (en: string, hi: string, ml: string) => {
//     if (contentLocale === "hi") return hi;
//     if (contentLocale === "ml") return ml;
//     return en;
//   };

//   const userTypes = [
//     {
//       icon: User,
//       role: "migrant",
//       title: t("Migrant Worker", "माइग्रेंट वर्कर", "കുടിയേറ്റ തൊഴിലാളി"),
//       description: t(
//         "Register and access your health records",
//         "अपना स्वास्थ्य रिकॉर्ड पंजीकृत करें और एक्सेस करें",
//         "നിങ്ങളുടെ ആരോഗ്യ റെക്കോർഡുകൾ രജിസ്റ്റർ ചെയ്യുകയും ആക്‌സസ് ചെയ്യുകയും ചെയ്യുക"
//       ),
//       features: [
//         { icon: FileText, text: t("Get Unique Health ID", "यूनिक हेल्थ आईडी प्राप्त करें", "അദ്വിതീയ ആരോഗ്യ ഐഡി നേടുക") },
//         { icon: Calendar, text: t("Book Appointments", "अपॉइंटमेंट बुक करें", "അപ്പോയിന്റ്മെന്റുകൾ ബുക്ക് ചെയ്യുക") },
//         { icon: Shield, text: t("Secure Access", "सुरक्षित पहुँच", "സുരക്ഷിത ആക്സസ്") },
//         { icon: Clock, text: t("24/7 Available", "24/7 उपलब्ध", "24/7 ലഭ്യം") }
//       ],
//       bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
//       backBgColor: "bg-gradient-to-br from-emerald-600 to-emerald-700",
//       iconBg: "bg-emerald-600",
//       borderColor: "border-emerald-200 hover:border-emerald-300",
//       badge: t("Most Popular", "सबसे लोकप्रिय", "ഏറ്റവും ജനപ്രിയം"),
//       badgeColor: "bg-emerald-100 text-emerald-800"
//     },
//     {
//       icon: Stethoscope,
//       role: "provider",
//       title: t("Healthcare Provider", "स्वास्थ्य सेवा प्रदाता", "ആരോഗ്യ സേവന ദാതാവ്"),
//       description: t(
//         "Manage patient records and consultations",
//         "रोगी रिकॉर्ड और परामर्श प्रबंधित करें",
//         "രോഗി റെക്കോർഡുകളും കൺസൾട്ടേഷനുകളും നിയന്ത്രിക്കുക"
//       ),
//       features: [
//         { icon: Heart, text: t("Patient Management", "रोगी प्रबंधन", "രോഗി മാനേജ്മെന്റ്") },
//         { icon: FileText, text: t("Digital Records", "डिजिटल रिकॉर्ड", "ഡിജിറ്റൽ റെക്കോർഡുകൾ") },
//         { icon: Calendar, text: t("Appointment System", "अपॉइंटमेंट सिस्टम", "അപ്പോയിന്റ്മെന്റ് സിസ്റ്റം") },
//         { icon: Shield, text: t("HIPAA Compliant", "HIPAA अनुपालक", "HIPAA അനുസൃത") }
//       ],
//       bgColor: "bg-gradient-to-br from-blue-50 to-sky-100",
//       backBgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
//       iconBg: "bg-blue-600",
//       borderColor: "border-blue-200 hover:border-blue-300",
//       badge: t("Professional", "पेशेवर", "പ്രൊഫഷണൽ"),
//       badgeColor: "bg-blue-100 text-blue-800"
//     },
//     {
//       icon: Settings,
//       role: "admin",
//       title: t("Administrator", "प्रशासक", "അഡ്മിനിസ്ട്രേറ്റർ"),
//       description: t(
//         "System management and analytics",
//         "सिस्टम प्रबंधन और विश्लेषण",
//         "സിസ്റ്റം മാനേജ്മെന്റും അനലിറ്റിക്സും"
//       ),
//       features: [
//         { icon: Building, text: t("System Management", "सिस्टम प्रबंधन", "സിസ്റ്റം മാനേജ്മെന്റ്") },
//         { icon: FileText, text: t("Generate Reports", "रिपोर्ट बनाएं", "റിപ്പോർട്ടുകൾ സൃഷ്ടിക്കുക") },
//         { icon: Shield, text: t("User Verification", "उपयोगकर्ता सत्यापन", "ഉപയോക്തൃ പരിശോധന") },
//         { icon: Settings, text: t("System Settings", "सिस्टम सेटिंग्स", "സിസ്റ്റം ക്രമീകരണങ്ങൾ") }
//       ],
//       bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
//       backBgColor: "bg-gradient-to-br from-amber-600 to-amber-700",
//       iconBg: "bg-amber-600",
//       borderColor: "border-amber-200 hover:border-amber-300",
//       badge: t("Admin", "व्यवस्थापक", "അഡ്മിൻ"),
//       badgeColor: "bg-amber-100 text-amber-800"
//     }
//   ];

//   const handleCardClick = (role: string) => {
//     switch (role) {
//       case "migrant":
//         navigate("/register/migrant");
//         break;
//       case "provider":
//         navigate("/login/provider");
//         break;
//       case "admin":
//         navigate("/login/admin");
//         break;
//       default:
//         navigate("/");
//     }
//   };

//   return (
//     <section id="user-types" className="py-16 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
//             {t("Choose Your Access Type", "अपना एक्सेस प्रकार चुनें", "നിങ്ങളുടെ ആക്സസ് തരം തിരഞ്ഞെടുക്കുക")}
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             {t(
//               "Select your role to access the appropriate features and services designed specifically for your needs.",
//               "अपनी भूमिका चुनें ताकि आप अपनी आवश्यकताओं के लिए विशेष रूप से डिज़ाइन की गई सुविधाओं और सेवाओं का उपयोग कर सकें।",
//               "നിങ്ങളുടെ ആവശ്യങ്ങൾക്കായി പ്രത്യേകം രൂപകൽപ്പന ചെയ്ത ഉചിതമായ സവിശേഷതകളും സേവനങ്ങളും ആക്സസ് ചെയ്യുന്നതിന് നിങ്ങളുടെ പങ്ക് തിരഞ്ഞെടുക്കുക."
//             )}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {userTypes.map((userType, index) => {
//             const IconComponent = userType.icon;
//             return (
//               <div key={index} className="perspective-1000 h-80">
//                 <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180 group">
//                   {/* Front Side */}
//                   <Card className={`absolute inset-0 backface-hidden border-2 ${userType.borderColor} ${userType.bgColor} shadow-lg`}>
//                     <CardHeader className="relative">
//                       <div className="flex items-center justify-between mb-4">
//                         <div className={`p-3 rounded-lg ${userType.iconBg} text-white shadow-lg`}>
//                           <IconComponent className="h-8 w-8" />
//                         </div>
//                         <Badge className={`text-xs font-semibold ${userType.badgeColor} border-0`}>
//                           {userType.badge}
//                         </Badge>
//                       </div>

//                       <CardTitle className="text-xl font-bold text-gray-800 mb-2">
//                         {userType.title}
//                       </CardTitle>
//                       <CardDescription className="text-gray-600 font-medium">
//                         {userType.description}
//                       </CardDescription>
//                     </CardHeader>

//                     <CardContent className="relative">
//                       <ul className="space-y-3">
//                         {userType.features.map((feature, featureIndex) => {
//                           const FeatureIcon = feature.icon;
//                           return (
//                             <li key={featureIndex} className="flex items-center space-x-3">
//                               <FeatureIcon className="h-5 w-5 text-gray-700 flex-shrink-0" />
//                               <span className="text-sm font-medium text-gray-700">
//                                 {feature.text}
//                               </span>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </CardContent>
//                   </Card>

//                   {/* Back Side */}
//                   <Card className={`absolute inset-0 backface-hidden rotate-y-180 ${userType.backBgColor} border-2 border-white/20 shadow-xl`}>
//                     <div className="flex flex-col items-center justify-center h-full text-white p-8">
//                       <div
//                         className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6 cursor-pointer hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
//                         onClick={() => handleCardClick(userType.role)}
//                       >
//                         <div className="text-center">
//                           <div className="flex justify-center space-x-2 mb-2">
//                             <LogIn className="h-6 w-6" />
//                             <UserPlus className="h-6 w-6" />
//                           </div>
//                           <div className="text-sm font-semibold">
//                             {t("Login", "लॉगिन", "ലോഗിൻ")}
//                             <br />
//                             {t("Register", "रजिस्टर", "രജിസ്റ്റർ")}
//                           </div>
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-bold mb-2 text-center">
//                         {userType.title}
//                       </h3>
//                       <p className="text-white/90 text-center text-sm">
//                         {t("Click to get started", "शुरू करने के लिए क्लिक करें", "ആരംഭിക്കാൻ ക്ലിക്കുചെയ്യുക")}
//                       </p>
//                     </div>
//                   </Card>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UserTypeSection;



// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { useLanguage } from "@/contexts/LanguageContext";
// import {
//   User,
//   Stethoscope,
//   Settings,
//   FileText,
//   Calendar,
//   Shield,
//   Clock,
//   Heart,
//   Building,
//   LogIn,
//   UserPlus
// } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  User,
  Stethoscope,
  Settings,
  FileText,
  Calendar,
  Shield,
  Clock,
  Heart,
  Building,
  LogIn,
  UserPlus
} from "lucide-react";

interface UserTypeSectionProps {
  onRoleSelect: (role: string, action: 'signIn' | 'signUp') => void;
}

const UserTypeSection = ({ onRoleSelect }: UserTypeSectionProps) => {
  const { getContentLocale } = useLanguage();
  const contentLocale = getContentLocale();

  const t = (en: string, hi: string, ml: string) => {
    if (contentLocale === "hi") return hi;
    if (contentLocale === "ml") return ml;
    return en;
  };

  const userTypes = [
    {
      icon: User,
      role: "migrant-worker",
      title: t("Migrant Worker", "माइग्रेंट वर्कर", "കുടിയേറ്റ തൊഴിലാളി"),
      description: t(
        "Register and access your health records",
        "अपना स्वास्थ्य रिकॉर्ड पंजीकृत करें और एक्सेस करें",
        "നിങ്ങളുടെ ആരോഗ്യ റെക്കോർഡുകൾ രജിസ്റ്റർ ചെയ്യുകയും ആക്‌സസ് ചെയ്യുകയും ചെയ്യുക"
      ),
      features: [
        { icon: FileText, text: t("Get Unique Health ID", "यूनिक हेल्थ आईडी प्राप्त करें", "അദ്വിതീയ ആരോഗ്യ ഐഡി നേടുക") },
        { icon: Calendar, text: t("Book Appointments", "अपॉइंटमेंट बुक करें", "അപ്പോയിന്റ്മെന്റുകൾ ബുക്ക് ചെയ്യുക") },
        { icon: Shield, text: t("Secure Access", "सुरक्षित पहुँच", "സുരക്ഷിത ആക്സസ്") },
        { icon: Clock, text: t("24/7 Available", "24/7 उपलब्ध", "24/7 ലഭ്യം") }
      ],
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
      backBgColor: "bg-gradient-to-br from-emerald-600 to-emerald-700",
      iconBg: "bg-emerald-600",
      borderColor: "border-emerald-200 hover:border-emerald-300",
      badge: t("Most Popular", "सबसे लोकप्रिय", "ഏറ്റവും ജനപ്രിയം"),
      badgeColor: "bg-emerald-100 text-emerald-800"
    },
    {
      icon: Stethoscope,
      role: "doctor",
      title: t("Healthcare Provider", "स्वास्थ्य सेवा प्रदाता", "ആരോഗ്യ സേവന ദാതാവ്"),
      description: t(
        "Manage patient records and consultations",
        "रोगी रिकॉर्ड और परामर्श प्रबंधित करें",
        "രോഗി റെക്കോർഡുകളും കൺസൾട്ടേഷനുകളും നിയന്ത്രിക്കുക"
      ),
      features: [
        { icon: Heart, text: t("Patient Management", "रोगी प्रबंधन", "രോഗി മാനേജ്മെന്റ്") },
        { icon: FileText, text: t("Digital Records", "डिजिटल रिकॉर्ड", "ഡിജിറ്റൽ റെക്കോർഡുകൾ") },
        { icon: Calendar, text: t("Appointment System", "अपॉइंटमेंट सिस्टम", "അപ്പോയിന്റ്മെന്റ് സിസ്റ്റം") },
        { icon: Shield, text: t("HIPAA Compliant", "HIPAA अनुपालक", "HIPAA അനുസൃത") }
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-sky-100",
      backBgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      iconBg: "bg-blue-600",
      borderColor: "border-blue-200 hover:border-blue-300",
      badge: t("Professional", "पेशेवर", "പ്രൊഫഷണൽ"),
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      icon: Settings,
      role: "admin",
      title: t("Administrator", "प्रशासक", "അഡ്മിനിസ്ട്രേറ്റർ"),
      description: t(
        "System management and analytics",
        "सिस्टम प्रबंधन और विश्लेषण",
        "സിസ്റ്റം മാനേജ്മെന്റും അനലിറ്റിക്സും"
      ),
      features: [
        { icon: Building, text: t("System Management", "सिस्टम प्रबंधन", "സിസ്റ്റം മാനേജ്മെന്റ്") },
        { icon: FileText, text: t("Generate Reports", "रिपोर्ट बनाएं", "റിപ്പോർട്ടുകൾ സൃഷ്ടിക്കുക") },
        { icon: Shield, text: t("User Verification", "उपयोगकर्ता सत्यापन", "ഉപയോക്തൃ പരിശോധന") },
        { icon: Settings, text: t("System Settings", "सिस्टम सेटिंग्स", "സിസ്റ്റം ക്രമീകരണങ്ങൾ") }
      ],
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
      backBgColor: "bg-gradient-to-br from-amber-600 to-amber-700",
      iconBg: "bg-amber-600",
      borderColor: "border-amber-200 hover:border-amber-300",
      badge: t("Admin", "व्यवस्थापक", "അഡ്മിൻ"),
      badgeColor: "bg-amber-100 text-amber-800"
    }
  ];

  const handleCardClick = (role: string, action: 'signIn' | 'signUp') => {
    onRoleSelect(role, action);
  };

  return (
    <section id="user-types" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t("Choose Your Access Type", "अपना एक्सेस प्रकार चुनें", "നിങ്ങളുടെ ആക്സസ് തരം തിരഞ്ഞെടുക്കുക")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Select your role to access the appropriate features and services designed specifically for your needs.",
              "अपनी भूमिका चुनें ताकि आप अपनी आवश्यकताओं के लिए विशेष रूप से डिज़ाइन की गई सुविधाओं और सेवाओं का उपयोग कर सकें।",
              "നിങ്ങളുടെ ആവശ്യങ്ങൾക്കായി പ്രത്യേകം രൂപകൽപ്പന ചെയ്ത ഉചിതമായ സവിശേഷതകളും സേവനങ്ങളും ആക്സസ് ചെയ്യുന്നതിന് നിങ്ങളുടെ പങ്ക് തിരഞ്ഞെടുക്കുക."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {userTypes.map((userType, index) => {
            const IconComponent = userType.icon;
            return (
              <div key={index} className="perspective-1000 h-80">
                <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180 group">
                  {/* Front Side */}
                  <Card className={`absolute inset-0 backface-hidden border-2 ${userType.borderColor} ${userType.bgColor} shadow-lg`}>
                    <CardHeader className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg ${userType.iconBg} text-white shadow-lg`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <Badge className={`text-xs font-semibold ${userType.badgeColor} border-0`}>
                          {userType.badge}
                        </Badge>
                      </div>

                      <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                        {userType.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 font-medium">
                        {userType.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative">
                      <ul className="space-y-3">
                        {userType.features.map((feature, featureIndex) => {
                          const FeatureIcon = feature.icon;
                          return (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <FeatureIcon className="h-5 w-5 text-gray-700 flex-shrink-0" />
                              <span className="text-sm font-medium text-gray-700">
                                {feature.text}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Back Side */}
                  <Card className={`absolute inset-0 backface-hidden rotate-y-180 ${userType.backBgColor} border-2 border-white/20 shadow-xl`}>
                    <div className="flex flex-col items-center justify-center h-full text-white p-8">
                      <h3 className="text-xl font-bold mb-6 text-center">
                        {userType.title}
                      </h3>
                      
                      {/* Sign In Button */}
                      <div
                        className="w-full mb-4 bg-white/20 hover:bg-white/30 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
                        onClick={() => handleCardClick(userType.role, 'signIn')}
                      >
                        <div className="text-center">
                          <LogIn className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm font-semibold">
                            {t("Sign In", "साइन इन", "സൈൻ ഇൻ")}
                          </div>
                        </div>
                      </div>

                      {/* Sign Up Button */}
                      <div
                        className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
                        onClick={() => handleCardClick(userType.role, 'signUp')}
                      >
                        <div className="text-center">
                          <UserPlus className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm font-semibold">
                            {t("Sign Up", "साइन अप", "സൈൻ അപ്പ്")}
                          </div>
                        </div>
                      </div>

                      <p className="text-white/90 text-center text-xs mt-4">
                        {t("Click to get started", "शुरू करने के लिए क्लिक करें", "ആരംഭിക്കാൻ ക്ലിക്കുചെയ്യുക")}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserTypeSection;