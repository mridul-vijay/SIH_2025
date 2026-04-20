import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Star, Award, Activity } from "lucide-react";

const DoctorProfileCard = () => {
  // Get doctor data from localStorage (simulated for now)
  const doctorData = JSON.parse(localStorage.getItem('user') || '{}');
  
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-800">
          <User className="h-5 w-5" />
          Doctor Profile
        </CardTitle>
        <CardDescription className="text-purple-600">
          Your professional information and stats
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-purple-200 flex items-center justify-center">
              <User className="h-8 w-8 text-purple-700" />
            </div>
            <div>
              <h3 className="font-semibold text-purple-900">
                Dr. {doctorData.name || 'John Doe'}
              </h3>
              <p className="text-sm text-purple-600">
                {doctorData.specialty || 'General Physician'}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-purple-800">4.8</span>
                <span className="text-xs text-purple-600">(127 reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-white rounded-lg border border-purple-200">
              <Activity className="h-5 w-5 text-purple-600 mx-auto mb-1" />
              <p className="text-sm font-medium text-purple-800">Patients Treated</p>
              <p className="text-lg font-bold text-purple-900">847</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border border-purple-200">
              <Award className="h-5 w-5 text-purple-600 mx-auto mb-1" />
              <p className="text-sm font-medium text-purple-800">Experience</p>
              <p className="text-lg font-bold text-purple-900">8 Years</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-purple-100 text-purple-800 border-purple-300">
              Cardiology
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 border-purple-300">
              Internal Medicine
            </Badge>
          </div>
          
          <Button size="sm" variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50">
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorProfileCard;