import { Clock, User, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const appointments = [
  {
    id: 1,
    patientName: "Patient #MH789012",
    time: "09:30 AM",
    status: "completed",
    type: "Health Checkup"
  },
  {
    id: 2,
    patientName: "Patient #MH456789",
    time: "11:00 AM",
    status: "upcoming",
    type: "Follow-up"
  },
  {
    id: 3,
    patientName: "Patient #MH123456",
    time: "02:15 PM",
    status: "upcoming",
    type: "Vaccination"
  },
  {
    id: 4,
    patientName: "Patient #MH654321",
    time: "04:00 PM",
    status: "no-show",
    type: "Consultation"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-success" />;
    case "upcoming":
      return <Clock className="h-4 w-4 text-accent" />;
    case "no-show":
      return <XCircle className="h-4 w-4 text-destructive" />;
    default:
      return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="status-active">Completed</Badge>;
    case "upcoming":
      return <Badge className="status-pending">Upcoming</Badge>;
    case "no-show":
      return <Badge variant="destructive">No Show</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const AppointmentsCard = () => {
  return (
    <Card className="dashboard-card animate-slide-up">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Clock className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Today's Appointments</h3>
            <p className="text-sm text-muted-foreground font-normal">
              {appointments.length} appointments scheduled
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                {getStatusIcon(appointment.status)}
                <div>
                  <p className="font-medium text-foreground">{appointment.patientName}</p>
                  <p className="text-sm text-muted-foreground">{appointment.type}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium">{appointment.time}</p>
                  {getStatusBadge(appointment.status)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Today's Summary:</span>
            <div className="flex space-x-4">
              <span className="text-success font-medium">1 Completed</span>
              <span className="text-accent font-medium">2 Upcoming</span>
              <span className="text-destructive font-medium">1 No Show</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentsCard;