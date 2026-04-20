// import { LanguageProvider } from "@/contexts/LanguageContext";
// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
// import UserTypeSection from "@/components/UserTypeSection";
// import NewsAndFAQSection from "@/components/NewsAndFAQSection";
// import Footer from "@/components/Footer";

// const Index = () => {
//   return (
//     <LanguageProvider>
//       <div className="min-h-screen bg-background">
//         <Header />
//         <main>
//           <HeroSection />
//           <UserTypeSection />
//           <NewsAndFAQSection />
//         </main>
//         <Footer />
//       </div>
//     </LanguageProvider>
//   );
// };

// export default Index;


// import { useState } from "react";
// import UserTypeSection from "@/components/UserTypeSection";
// import KeralaAuthPage from "@/components/KeralaAuthPage";
// import { LanguageProvider } from "@/contexts/LanguageContext";

// type Role = "migrant-worker" | "doctor" | "admin";
// type Action = "signIn" | "signUp";

// const Index = () => {
//   const [showAuthForm, setShowAuthForm] = useState(false);
//   const [selectedRole, setSelectedRole] = useState<Role>('migrant-worker');
//   const [selectedAction, setSelectedAction] = useState<Action>('signIn');

//   const handleRoleSelect = (role: Role, action: Action) => {
//     console.log('Role selected:', role, 'Action:', action); // Debug log
//     setSelectedRole(role);
//     setSelectedAction(action);
//     setShowAuthForm(true);
//   };

//   const handleBack = () => {
//     console.log('Going back to role selection'); // Debug log
//     setShowAuthForm(false);
//   };

//   // If auth form is shown, render only the auth page
//   if (showAuthForm) {
//     return (
//       <LanguageProvider>
//         <KeralaAuthPage
//           selectedRole={selectedRole}
//           selectedAction={selectedAction}
//           onBack={handleBack}
//         />
//       </LanguageProvider>
//     );
//   }

//   // Otherwise, render the main page with role selection
//   return (
//     <LanguageProvider>
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//         {/* Header Section */}
//         <header className="bg-white shadow-sm border-b">
//           <div className="container mx-auto px-4 py-6">
//             <div className="text-center">
//               <h1 className="text-4xl font-bold text-gray-900 mb-2">Kerala Health Portal</h1>
//               <p className="text-gray-600 text-lg">Digital Health Initiative for Better Healthcare Access</p>
//             </div>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main>
//           <UserTypeSection onRoleSelect={handleRoleSelect} />
//         </main>

//         {/* Footer */}
//         <footer className="bg-gray-900 text-white py-8 mt-16">
//           <div className="container mx-auto px-4 text-center">
//             <p className="text-gray-400">
//               © 2024 Kerala Government Health Initiative. All rights reserved.
//             </p>
//           </div>
//         </footer>
//       </div>
//     </LanguageProvider>
//   );
// };

// export default Index;


import { useNavigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import UserTypeSection from "@/components/UserTypeSection";
import NewsAndFAQSection from "@/components/NewsAndFAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: string, action: 'signIn' | 'signUp') => {
    console.log('Role selected:', role, 'Action:', action); // Debug log
    
    // Navigate to the appropriate route based on role and action
    const actionPath = action === 'signIn' ? 'signin' : 'signup';
    navigate(`/${role}/${actionPath}`);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* User Type Selection Section */}
        <UserTypeSection onRoleSelect={handleRoleSelect} />
        
        {/* News and FAQ Section */}
        <NewsAndFAQSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;