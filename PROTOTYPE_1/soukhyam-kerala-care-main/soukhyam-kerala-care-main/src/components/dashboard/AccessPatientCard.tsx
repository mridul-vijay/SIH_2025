import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus, FileText } from "lucide-react";

const AccessPatientCard = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Users className="h-5 w-5" />
          Access Patient Records
        </CardTitle>
        <CardDescription className="text-blue-600">
          View and manage patient medical records and history
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-800">Total Patients</p>
              <p className="text-2xl font-bold text-blue-900">247</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-700" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Patient
            </Button>
            <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              View All
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccessPatientCard;