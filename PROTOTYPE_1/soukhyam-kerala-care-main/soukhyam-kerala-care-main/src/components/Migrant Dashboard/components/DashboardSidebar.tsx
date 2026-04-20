import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  User, 
  Bell, 
  AlertCircle,
  QrCode,
  HelpCircle,
  X,
  Stethoscope
} from 'lucide-react';
import { Button } from './ui/button';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', key: 'dashboard' },
  { icon: FileText, label: 'Health Records', key: 'health-records' },
  { icon: Stethoscope, label: 'Doctor Appointment', key: 'appointments' },
  { icon: User, label: 'Profile', key: 'profile' },
  { icon: Bell, label: 'Notifications', key: 'notifications' },
  { icon: AlertCircle, label: 'Emergency Services', key: 'emergency' },
];

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const DashboardSidebar = React.memo(function DashboardSidebar({ activeTab, onTabChange, isOpen, onClose }: DashboardSidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed lg:relative z-50 lg:z-auto
        w-64 lg:w-64 bg-white border-r border-border 
        h-screen flex flex-col shadow-sm
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
      {/* Mobile close button */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-border bg-gov-blue-bg">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gov-blue rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <span className="font-medium text-gov-blue">Menu</span>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="text-gov-blue hover:bg-white">
          <X className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 lg:py-6 space-y-1 overflow-y-auto">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-full justify-start space-x-3 h-12 font-medium text-sm rounded-md ${
              activeTab === item.key 
                ? 'bg-gov-blue-bg text-gov-blue border-r-2 border-gov-blue shadow-sm' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gov-blue'
            }`}
            onClick={() => onTabChange(item.key)}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="truncate text-left">{item.label}</span>
          </Button>
        ))}
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-border space-y-2 lg:space-y-3">
        <div className="text-xs lg:text-sm font-semibold text-gov-blue mb-2">Quick Access</div>
        
        <Button variant="outline" className="w-full justify-start space-x-2 lg:space-x-3 h-9 lg:h-10 text-xs lg:text-sm border-gov-blue-light text-gov-blue hover:bg-gov-blue-bg">
          <QrCode className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
          <span>Show Health ID</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="w-full justify-start space-x-2 lg:space-x-3 h-8 lg:h-9 text-xs lg:text-sm text-gov-blue-light hover:bg-gov-blue-bg hover:text-gov-blue">
          <HelpCircle className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
          <span>Forgot ID?</span>
        </Button>
      </div>

      {/* Satyameva Jayate Footer */}
      <div className="p-4 border-t border-border bg-gradient-to-r from-gov-saffron/10 to-gov-green/10">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto bg-gov-blue rounded-full flex items-center justify-center shadow-md">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-gov-saffron rounded-full"></div>
            </div>
          </div>
          <div className="text-xs">
            <div className="font-bold text-gov-blue text-sm">Satyameva Jayate</div>
            <div className="text-muted-foreground font-medium">Truth Alone Triumphs</div>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
});