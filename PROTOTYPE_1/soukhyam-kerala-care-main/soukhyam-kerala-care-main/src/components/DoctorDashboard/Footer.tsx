import { Shield, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 border-t bg-card/50">
      <div className="container py-8 px-6">
        <div className="flex items-center justify-center space-x-6">
          {/* Government Emblem */}
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-light">
              <Shield className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground">Government of India</p>
              <p className="text-xs text-muted-foreground">Migrant Worker Health Portal</p>
            </div>
          </div>
          
          <div className="h-8 w-px bg-border" />
          
          {/* Additional Info */}
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Globe className="h-4 w-4" />
            <span>Secure • Encrypted • Government Verified</span>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Ministry of Health & Family Welfare. All rights reserved. | 
            <span className="ml-1 text-primary">National Health Mission</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;