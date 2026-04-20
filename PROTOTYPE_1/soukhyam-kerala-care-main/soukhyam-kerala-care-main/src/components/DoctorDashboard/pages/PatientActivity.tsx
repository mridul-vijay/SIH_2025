import { useState } from "react";
import { Activity, TrendingUp, Users, Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const PatientActivity = () => {
  const [timeFilter, setTimeFilter] = useState("today");

  // Dummy activity data
  const recentActivities = [
    {
      id: 1,
      patientName: "Ahmed Hassan",
      patientId: "MH123456789012",
      activity: "Health Checkup Completed",
      location: "Dubai Health Center",
      timestamp: "2024-01-26 11:30 AM",
      doctor: "Dr. Priya Sharma",
      type: "checkup",
      status: "completed"
    },
    {
      id: 2,
      patientName: "Maria Santos",
      patientId: "MH234567890123",
      activity: "Lab Test Scheduled",
      location: "Abu Dhabi Medical Lab",
      timestamp: "2024-01-26 10:15 AM",
      doctor: "Dr. Ahmed Ali",
      type: "test",
      status: "scheduled"
    },
    {
      id: 3,
      patientName: "John Kumar",
      patientId: "MH345678901234",
      activity: "Medication Updated",
      location: "Sharjah Clinic",
      timestamp: "2024-01-26 09:45 AM",
      doctor: "Dr. Sarah Johnson",
      type: "medication",
      status: "updated"
    },
    {
      id: 4,
      patientName: "Ali Mohammad",
      patientId: "MH456789012345",
      activity: "Emergency Visit",
      location: "Al Ain Hospital",
      timestamp: "2024-01-25 11:20 PM",
      doctor: "Dr. Mohamed Hassan",
      type: "emergency",
      status: "completed"
    },
    {
      id: 5,
      patientName: "Chen Wei",
      patientId: "MH567890123456",
      activity: "Vaccination Administered",
      location: "Dubai Health Center",
      timestamp: "2024-01-25 3:30 PM",
      doctor: "Dr. Priya Sharma",
      type: "vaccination",
      status: "completed"
    }
  ];

  const healthTrends = [
    {
      id: 1,
      patientName: "Ahmed Hassan",
      patientId: "MH123456789012",
      metric: "Blood Pressure",
      trend: "improving",
      currentValue: "128/82",
      previousValue: "135/85",
      changeDate: "2024-01-15"
    },
    {
      id: 2,
      patientName: "Maria Santos",
      patientId: "MH234567890123",
      metric: "Blood Sugar",
      trend: "stable",
      currentValue: "95 mg/dL",
      previousValue: "97 mg/dL",
      changeDate: "2024-01-20"
    },
    {
      id: 3,
      patientName: "John Kumar",
      patientId: "MH345678901234",
      metric: "BMI",
      trend: "declining",
      currentValue: "24.8",
      previousValue: "25.2",
      changeDate: "2024-01-18"
    }
  ];

  const workplaceActivities = [
    {
      id: 1,
      workplace: "Al Mansoor Construction LLC",
      totalWorkers: 45,
      recentCheckups: 12,
      pendingVaccinations: 3,
      healthAlerts: 1,
      lastActivity: "2024-01-26"
    },
    {
      id: 2,
      workplace: "Emirates Steel Industries",
      totalWorkers: 78,
      recentCheckups: 8,
      pendingVaccinations: 5,
      healthAlerts: 0,
      lastActivity: "2024-01-25"
    },
    {
      id: 3,
      workplace: "Dubai Port Authority",
      totalWorkers: 92,
      recentCheckups: 15,
      pendingVaccinations: 7,
      healthAlerts: 2,
      lastActivity: "2024-01-24"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "checkup":
        return <Activity className="h-4 w-4 text-blue-500" />;
      case "test":
        return <Clock className="h-4 w-4 text-orange-500" />;
      case "medication":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "emergency":
        return <Activity className="h-4 w-4 text-red-500" />;
      case "vaccination":
        return <Activity className="h-4 w-4 text-purple-500" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      "completed": "default",
      "scheduled": "secondary",
      "updated": "outline"
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants] || "secondary"}>
        {status}
      </Badge>
    );
  };

  const getTrendIcon = (trend: string) => {
    const color = trend === "improving" ? "text-green-500" : 
                  trend === "declining" ? "text-red-500" : "text-blue-500";
    return <TrendingUp className={`h-4 w-4 ${color}`} />;
  };

  return (
    <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Patient Activity
              </h2>
              <p className="text-lg text-muted-foreground">
                Monitor patient health activities and workplace wellness trends
              </p>
            </div>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-2xl font-bold text-primary">247</p>
                  <p className="text-sm text-muted-foreground">Total Activities</p>
                </div>
                <Activity className="h-8 w-8 text-primary" />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-2xl font-bold text-green-600">89</p>
                  <p className="text-sm text-muted-foreground">Checkups Done</p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-2xl font-bold text-blue-600">23</p>
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-500" />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-2xl font-bold text-red-600">3</p>
                  <p className="text-sm text-muted-foreground">Urgent Cases</p>
                </div>
                <Activity className="h-8 w-8 text-red-500" />
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="recent" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recent">Recent Activities</TabsTrigger>
              <TabsTrigger value="trends">Health Trends</TabsTrigger>
              <TabsTrigger value="workplace">Workplace Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="recent">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" />
                    <span>Recent Patient Activities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            {getActivityIcon(activity.type)}
                            <div>
                              <h4 className="font-semibold">{activity.patientName}</h4>
                              <p className="text-sm text-muted-foreground">ID: {activity.patientId}</p>
                            </div>
                          </div>
                          {getStatusBadge(activity.status)}
                        </div>
                        
                        <div className="mb-3">
                          <p className="font-medium">{activity.activity}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.timestamp}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.doctor}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Health Trends Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {healthTrends.map((trend) => (
                      <div key={trend.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            {getTrendIcon(trend.trend)}
                            <div>
                              <h4 className="font-semibold">{trend.patientName}</h4>
                              <p className="text-sm text-muted-foreground">ID: {trend.patientId}</p>
                            </div>
                          </div>
                          <Badge variant={trend.trend === "improving" ? "default" : 
                                        trend.trend === "declining" ? "destructive" : "secondary"}>
                            {trend.trend}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Metric</p>
                            <p className="font-medium">{trend.metric}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Current</p>
                            <p className="font-medium">{trend.currentValue}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Previous</p>
                            <p className="font-medium">{trend.previousValue}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Last Updated</p>
                            <p className="font-medium">{trend.changeDate}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workplace">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Workplace Health Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workplaceActivities.map((workplace) => (
                      <div key={workplace.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-lg">{workplace.workplace}</h4>
                            <p className="text-sm text-muted-foreground">
                              Last activity: {workplace.lastActivity}
                            </p>
                          </div>
                          <Badge variant="outline">{workplace.totalWorkers} Workers</Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center p-3 bg-muted/20 rounded">
                            <p className="text-2xl font-bold text-green-600">{workplace.recentCheckups}</p>
                            <p className="text-xs text-muted-foreground">Recent Checkups</p>
                          </div>
                          <div className="text-center p-3 bg-muted/20 rounded">
                            <p className="text-2xl font-bold text-blue-600">{workplace.pendingVaccinations}</p>
                            <p className="text-xs text-muted-foreground">Pending Vaccinations</p>
                          </div>
                          <div className="text-center p-3 bg-muted/20 rounded">
                            <p className="text-2xl font-bold text-orange-600">{workplace.healthAlerts}</p>
                            <p className="text-xs text-muted-foreground">Health Alerts</p>
                          </div>
                          <div className="text-center p-3 bg-muted/20 rounded">
                            <p className="text-2xl font-bold text-primary">{workplace.totalWorkers}</p>
                            <p className="text-xs text-muted-foreground">Total Workers</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
    </div>
  );
};

export default PatientActivity;