import { Activity, Eye, Upload, FileText, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const recentActivities = [
  {
    id: 1,
    type: "view",
    patientId: "MH789012",
    action: "Viewed patient record",
    time: "2 hours ago",
    icon: Eye
  },
  {
    id: 2,
    type: "upload",
    patientId: "MH456789",
    action: "Uploaded lab results",
    time: "4 hours ago",
    icon: Upload
  },
  {
    id: 3,
    type: "update",
    patientId: "MH123456",
    action: "Updated prescription",
    time: "6 hours ago",
    icon: FileText
  },
  {
    id: 4,
    type: "view",
    patientId: "MH654321",
    action: "Accessed medical history",
    time: "1 day ago",
    icon: Eye
  },
  {
    id: 5,
    type: "upload",
    patientId: "MH987654",
    action: "Added consultation notes",
    time: "2 days ago",
    icon: Upload
  }
];

const getActionColor = (type: string) => {
  switch (type) {
    case "view":
      return "text-primary bg-primary/10";
    case "upload":
      return "text-success bg-success/10";
    case "update":
      return "text-accent bg-accent/10";
    default:
      return "text-muted-foreground bg-muted";
  }
};

const RecentActivityCard = () => {
  return (
    <Card className="dashboard-card animate-slide-up">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
            <Activity className="h-5 w-5 text-success" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Recent Patient Activity</h3>
            <p className="text-sm text-muted-foreground font-normal">
              Your recent patient interactions
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer group"
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${getActionColor(activity.type)}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">
                  Patient ID: {activity.patientId}
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{activity.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <Button variant="outline" className="w-full hover:bg-muted">
            <Activity className="mr-2 h-4 w-4" />
            View All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;