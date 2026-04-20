import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/DoctorDashboard/Header";
import Sidebar from "@/components/DoctorDashboard/Sidebar";
import Footer from "@/components/DoctorDashboard/Footer";

// Import all doctor dashboard pages
import DashboardHome from "@/components/DoctorDashboard/pages/Index";
import AccessUpload from "@/components/DoctorDashboard/pages/AccessUpload";
import PatientActivity from "@/components/DoctorDashboard/pages/PatientActivity";
import PatientRecord from "@/components/DoctorDashboard/pages/PatientRecord";
import Notifications from "@/components/DoctorDashboard/pages/Notifications";
import Profile from "@/components/DoctorDashboard/pages/Profile";
import RegistrationPage from "@/components/DoctorDashboard/pages/RegistrationPage";
import NotFound from "@/components/DoctorDashboard/pages/NotFound";

const DoctorDashboardMain = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header onMenuToggle={() => setSidebarOpen(true)} />
        
        <div className="flex">
          {/* Sidebar */}
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          {/* Main Content */}
          <main className="flex-1 p-6 md:ml-0">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/access-upload" element={<AccessUpload />} />
                <Route path="/patient-activity" element={<PatientActivity />} />
                <Route path="/patient-record" element={<PatientRecord />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default DoctorDashboardMain;