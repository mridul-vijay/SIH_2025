import { useState } from "react";
import { Bell, AlertCircle, CheckCircle, Clock, Trash2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


const Notifications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Dummy notifications data
  const notifications = [
    {
      id: 1,
      type: "urgent",
      title: "Emergency Medical Alert",
      message: "Patient Ahmed Hassan (MH123456789012) requires immediate medical attention",
      time: "5 minutes ago",
      read: false,
      priority: "high"
    },
    {
      id: 2,
      type: "appointment",
      title: "Upcoming Appointment Reminder",
      message: "Scheduled appointment with Patient Maria Santos at 2:30 PM today",
      time: "30 minutes ago",
      read: false,
      priority: "medium"
    },
    {
      id: 3,
      type: "system",
      title: "System Maintenance Complete",
      message: "Scheduled maintenance has been completed successfully. All systems operational.",
      time: "2 hours ago",
      read: true,
      priority: "low"
    },
    {
      id: 4,
      type: "update",
      title: "Patient Record Updated",
      message: "Lab results have been uploaded for Patient John Kumar (MH987654321098)",
      time: "4 hours ago",
      read: true,
      priority: "medium"
    },
    {
      id: 5,
      type: "reminder",
      title: "Vaccination Due",
      message: "Patient Ali Mohammad requires COVID-19 booster vaccination",
      time: "1 day ago",
      read: false,
      priority: "medium"
    },
    {
      id: 6,
      type: "alert",
      title: "Insurance Expiry Alert",
      message: "Insurance coverage for 5 patients expiring within 30 days",
      time: "2 days ago",
      read: true,
      priority: "high"
    },
    {
      id: 7,
      type: "info",
      title: "New Health Guidelines Published",
      message: "Updated health and safety guidelines for migrant workers now available",
      time: "3 days ago",
      read: true,
      priority: "low"
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "urgent":
      case "alert":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "appointment":
      case "reminder":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "system":
      case "update":
      case "info":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    const variants = {
      high: "destructive",
      medium: "default",
      low: "secondary"
    } as const;
    
    return (
      <Badge variant={variants[priority as keyof typeof variants] || "secondary"}>
        {priority.toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Notifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with system alerts and patient notifications
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-2xl font-bold text-red-600">3</p>
                  <p className="text-sm text-muted-foreground">Urgent</p>
                </div>
                <AlertCircle className="h-8 w-8 text-red-500" />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-2xl font-bold text-blue-600">2</p>
                  <p className="text-sm text-muted-foreground">Unread</p>
                </div>
                <Bell className="h-8 w-8 text-blue-500" />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-2xl font-bold text-green-600">7</p>
                  <p className="text-sm text-muted-foreground">Total Today</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </CardContent>
            </Card>
          </div>

          {/* Notifications List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>All Notifications</span>
                </div>
                <Button variant="outline" size="sm">
                  Mark All as Read
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`border rounded-lg p-4 transition-colors ${
                      !notification.read ? 'bg-muted/30 border-primary/20' : 'hover:bg-muted/20'
                    }`}
                  >
                    <div className="flex items-start justify-between space-x-4">
                      <div className="flex items-start space-x-3 flex-1">
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {notification.message}
                          </p>
                          <div className="flex items-center space-x-3">
                            <span className="text-xs text-muted-foreground">
                              {notification.time}
                            </span>
                            {getPriorityBadge(notification.priority)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
    </div>
  );
};

export default Notifications;