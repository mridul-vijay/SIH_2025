import { Bell, Settings, User, Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Hamburger Menu + Government Logo & Portal Name */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-muted"
            onClick={onMenuToggle}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-light">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Health Professional Dashboard</h1>
              <p className="text-sm text-muted-foreground">Migrant Worker Management System</p>
            </div>
          </div>
          <div className="government-badge">
            Government Portal
          </div>
        </div>

        {/* Quick Access Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="relative hover:bg-muted">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-xs text-accent-foreground flex items-center justify-center">
              3
            </span>
          </Button>
          
          <Button variant="ghost" size="sm" className="hover:bg-muted">
            <Settings className="h-5 w-5" />
          </Button>

          <div className="flex items-center space-x-3 pl-4 border-l border-border">
            <div className="text-right">
              <p className="text-sm font-medium">Dr. Priya Sharma</p>
              <p className="text-xs text-muted-foreground">Cardiologist • Reg: 12345</p>
            </div>
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                PS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;