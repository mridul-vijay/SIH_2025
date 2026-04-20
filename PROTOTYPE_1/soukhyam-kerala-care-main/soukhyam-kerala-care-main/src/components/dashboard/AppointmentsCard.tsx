import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const AppointmentsCard = () => {
  const upcomingAppointments = [
    {
      patient: "Rajesh Kumar",
      time: "10:30 AM",
      date: "Today",
      type: "Consultation",
      status: "confirmed"
    },
    {
      patient: "Priya Sharma",
      time: "2:15 PM", 
      date: "Today",
      type: "Follow-up",
      status: "pending"
    },
    {
      patient: "Mohammed Ali",
      time: "9:00 AM",
      date: "Tomorrow",
      type: "Check-up",
      status: "confirmed"
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800">
          <Calendar className="h-5 w-5" />
          Appointments
        </CardTitle>
        <CardDescription className="text-green-600">
          Manage your scheduled appointments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-800">Today's Appointments</p>
              <p className="text-2xl font-bold text-green-900">12</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center">
              <Clock className="h-6 w-6 text-green-700" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-green-800">Upcoming</h4>
            {upcomingAppointments.slice(0, 2).map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{appointment.patient}</p>
                    <p className="text-xs text-gray-500">{appointment.time} - {appointment.date}</p>
                  </div>
                </div>
                <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'} className="text-xs">
                  {appointment.status}
                </Badge>
              </div>
            ))}
          </div>
          
          <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
            View All Appointments
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentsCard;