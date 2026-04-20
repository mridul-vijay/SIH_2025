import { User, MapPin, Award, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DoctorProfileCard = () => {
  return (
    <Card className="dashboard-card animate-slide-up">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Doctor Profile</h3>
            <p className="text-sm text-muted-foreground font-normal">
              Your professional information
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Doctor Info */}
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
              PS
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h4 className="text-xl font-bold text-foreground">Dr. Priya Sharma</h4>
            <p className="text-primary font-medium">Cardiologist</p>
            <div className="flex items-center space-x-2 mt-1">
              <Badge variant="outline" className="text-xs">
                Reg: MED12345
              </Badge>
              <Badge className="government-badge text-xs">
                Verified
              </Badge>
            </div>
          </div>
        </div>

        {/* Professional Details */}
        <div className="space-y-4 pt-4 border-t border-border">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Apollo Hospitals</p>
                <p className="text-xs text-muted-foreground">Mumbai, Maharashtra</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Award className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">15+ Years Experience</p>
                <p className="text-xs text-muted-foreground">Cardiology Specialist</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">+91 98765 43210</p>
                <p className="text-xs text-muted-foreground">Primary Contact</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">dr.priya@apollo.in</p>
                <p className="text-xs text-muted-foreground">Professional Email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-success/5 rounded-lg">
              <p className="text-2xl font-bold text-success">1,247</p>
              <p className="text-xs text-muted-foreground">Patients Treated</p>
            </div>
            <div className="text-center p-3 bg-accent/5 rounded-lg">
              <p className="text-2xl font-bold text-accent">98.5%</p>
              <p className="text-xs text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorProfileCard;