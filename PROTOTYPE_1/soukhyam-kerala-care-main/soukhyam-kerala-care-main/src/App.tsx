// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import LoginRegister from "./pages/LoginRegister";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/login" element={<LoginRegister />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="/register/migrant" element={<MigrantRegistrationForm />} />
//           <Route path="/login/provider" element={<ProviderLogin />} />
//           <Route path="/login/admin" element={<AdminLogin />} />
//           <Route path="*" element={<NotFound />} />

//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;



// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Index from "./pages/Index";
// import LoginRegister from "./pages/LoginRegister";
// import NotFound from "./pages/NotFound";

// import MigrantRegistrationForm from "@/pages/auth/MigrantRegistrationForm";
// import ProviderLogin from "@/pages/auth/ProviderLogin";
// import AdminLogin from "@/pages/auth/AdminLogin";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/login" element={<LoginRegister />} />
//           <Route path="/register/migrant" element={<MigrantRegistrationForm />} />
//           <Route path="/login/provider" element={<ProviderLogin />} />
//           <Route path="/login/admin" element={<AdminLogin />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Index from "./pages/Index";
import LoginRegister from "./pages/LoginRegister";
import NotFound from "./pages/NotFound";
import KeralaAuthPage from "@/components/KeralaAuthPage";

// Dashboard Components
import MigrantDashboard from "@/components/Migrant Dashboard/App";
import DoctorDashboard from "./pages/dashboards/DoctorDashboardMain"; // Your custom doctor dashboard
import AdminDashboard from "./pages/dashboards/AdminDashboard";

const queryClient = new QueryClient();

// Wrapper component to provide navigation function
const AuthPageWrapper = ({ selectedRole, selectedAction }: { selectedRole: "migrant-worker" | "doctor" | "admin", selectedAction: "signIn" | "signUp" }) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/');
  };

  return (
    <KeralaAuthPage 
      selectedRole={selectedRole} 
      selectedAction={selectedAction} 
      onBack={handleBack}
    />
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginRegister />} />
          
          {/* Migrant Worker Routes */}
          <Route path="/migrant-worker/signin" element={<AuthPageWrapper selectedRole="migrant-worker" selectedAction="signIn" />} />
          <Route path="/migrant-worker/signup" element={<AuthPageWrapper selectedRole="migrant-worker" selectedAction="signUp" />} />
          
          {/* Doctor/Healthcare Provider Routes */}
          <Route path="/doctor/signin" element={<AuthPageWrapper selectedRole="doctor" selectedAction="signIn" />} />
          <Route path="/doctor/signup" element={<AuthPageWrapper selectedRole="doctor" selectedAction="signUp" />} />
          
          {/* Admin Routes */}
          <Route path="/admin/signin" element={<AuthPageWrapper selectedRole="admin" selectedAction="signIn" />} />
          <Route path="/admin/signup" element={<AuthPageWrapper selectedRole="admin" selectedAction="signUp" />} />
          
          {/* Dashboard Routes */}
          <Route path="/patient-dashboard" element={<MigrantDashboard />} />
          <Route path="/doctor-dashboard/*" element={<DoctorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;