import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Bell, 
  User, 
  LogOut, 
  ChevronLeft,
  Shield,
  Activity,
  UserPlus,
  FolderOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/doctor-dashboard" },
  { icon: FileText, label: "Access & Upload Record", path: "/doctor-dashboard/access-upload" },
  { icon: Activity, label: "Patient Activity", path: "/doctor-dashboard/patient-activity" },
  { icon: FolderOpen, label: "Patient Records", path: "/doctor-dashboard/patient-record" },
  { icon: UserPlus, label: "Registration", path: "/doctor-dashboard/registration" },
  { icon: Bell, label: "Notifications", path: "/doctor-dashboard/notifications" },
  { icon: User, label: "My Profile", path: "/doctor-dashboard/profile" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Clear any authentication data if stored
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
    
    // Navigate to home page
    navigate('/', { replace: true });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={onClose}
        />
      )}
      
      <aside className={cn(
        "fixed md:sticky top-16 h-[calc(100vh-4rem)] bg-card border-r transition-all duration-300 ease-in-out z-50",
        collapsed ? "w-16" : "w-64",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
      {/* Collapse Toggle */}
      <div className="flex items-center justify-center p-4 border-b">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 p-0 hover:bg-muted"
        >
          <ChevronLeft className={cn(
            "h-4 w-4 transition-transform duration-200",
            collapsed && "rotate-180"
          )} />
        </Button>
      </div>

      {/* Navigation Items */}
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item, index) => {
          const isActive = location.pathname === item.path || (item.path === '/doctor-dashboard' && location.pathname === '/doctor-dashboard/');
          return (
            <Button
              key={index}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start h-12 transition-all duration-200",
                collapsed ? "px-3" : "px-4",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90" 
                  : "hover:bg-muted"
              )}
              onClick={() => {
                navigate(item.path);
                onClose?.();
              }}
            >
              <item.icon className={cn(
                "h-5 w-5 flex-shrink-0",
                !collapsed && "mr-3"
              )} />
              {!collapsed && (
                <span className="truncate font-medium">{item.label}</span>
              )}
            </Button>
          );
        })}
      </nav>

      {/* Logout Button at Bottom */}
      <div className="absolute bottom-6 left-4 right-4">
        <Button
          onClick={handleLogout}
          variant="outline"
          className={cn(
            "w-full justify-start h-12 border-destructive/20 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all duration-200",
            collapsed ? "px-3" : "px-4"
          )}
        >
          <LogOut className={cn(
            "h-5 w-5 flex-shrink-0",
            !collapsed && "mr-3"
          )} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </Button>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;