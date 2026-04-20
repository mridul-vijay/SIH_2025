import { useState, useCallback, useMemo } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { DashboardSidebar } from './components/DashboardSidebar';
import { ProfilePage } from './components/ProfilePage';
import { 
  UpcomingAppointments, 
  HealthRecords, 
  ProfileSnapshot, 
  EmergencyServices 
} from './components/DashboardCards';

// Dashboard Content Component
function DashboardContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Government Welcome Banner */}
      <div className="mb-6 sm:mb-8">
        <div className="bg-gradient-to-r from-gov-saffron via-yellow-400 to-gov-green rounded-lg p-6 sm:p-8 text-white shadow-lg animate-in slide-in-from-top-6 fade-in-0 duration-700 relative overflow-hidden">
          <div className="absolute inset-0 animate-shimmer"></div>
          <div className="relative z-10">
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl sm:text-3xl font-bold">
                Welcome, Ravi Kumar
              </h1>
              <p className="text-sm sm:text-lg font-medium opacity-95 max-w-2xl">
                Access all government services and information from your unified dashboard. We are committed to serving you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Appointments Card - Left Column */}
        <div className="lg:col-span-2 animate-in slide-in-from-left-6 fade-in-0 duration-500" style={{ animationDelay: '200ms' }}>
          <UpcomingAppointments />
        </div>
        
        {/* Profile Snapshot - Right Column */}
        <div className="animate-in slide-in-from-right-6 fade-in-0 duration-500" style={{ animationDelay: '300ms' }}>
          <ProfileSnapshot />
        </div>
        
        {/* Health Records - Bottom Left */}
        <div className="animate-in slide-in-from-bottom-6 fade-in-0 duration-500" style={{ animationDelay: '400ms' }}>
          <HealthRecords />
        </div>
        
        {/* Emergency Services - Bottom Right */}
        <div className="lg:col-span-2 animate-in slide-in-from-bottom-6 fade-in-0 duration-500" style={{ animationDelay: '500ms' }}>
          <EmergencyServices />
        </div>
      </div>


    </div>
  );
}

// Page wrapper components
function HealthRecordsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gov-blue mb-2">
          Health Records
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          View and manage your complete medical records and documents.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <HealthRecords />
      </div>
    </div>
  );
}

function AppointmentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gov-blue mb-2">
          Doctor Appointments
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Schedule and manage your medical appointments.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <UpcomingAppointments />
      </div>
    </div>
  );
}

function EmergencyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gov-blue mb-2">
          Emergency Services
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Quick access to emergency contacts and medical services.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <EmergencyServices />
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  }, []);

  const handleMenuClick = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const currentContent = useMemo(() => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'profile':
        return <ProfilePage />;
      case 'health-records':
        return <HealthRecordsPage />;
      case 'appointments':
        return <AppointmentsPage />;
      case 'emergency':
        return <EmergencyPage />;
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-semibold text-gov-blue mb-2">
                Page Not Found
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                The requested page could not be found.
              </p>
            </div>
          </div>
        );
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
          isOpen={sidebarOpen}
          onClose={handleSidebarClose}
        />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <DashboardHeader onMenuClick={handleMenuClick} />
          
          {/* Page Content */}
          <main className="flex-1 p-4 sm:p-6">
            {currentContent}
          </main>

          {/* Government Footer */}
          <footer className="bg-gray-50 border-t border-gray-200 px-4 sm:px-6 py-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Government Logo and Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gov-blue rounded-full flex items-center justify-center shadow-md">
                    <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 bg-gov-saffron rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gov-blue text-sm">National Portal</div>
                    <div className="text-xs text-gray-600">Government of India</div>
                    <div className="text-xs text-gov-green font-medium">✓ Secure & Verified</div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-800 mb-2">Quick Links</div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div>Privacy Policy</div>
                    <div>Terms of Service</div>
                    <div>Help & Support</div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right">
                  <div className="text-xs text-gray-600">
                    <div>© 2024 Government of India</div>
                    <div className="mt-1">Ministry of Health & Family Welfare</div>
                    <div className="mt-2 font-medium text-gov-blue">Made with ❤️ for Citizens</div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}