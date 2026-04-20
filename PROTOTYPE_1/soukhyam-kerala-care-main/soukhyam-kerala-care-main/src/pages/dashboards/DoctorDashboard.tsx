import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Stethoscope, 
  Calendar, 
  Users, 
  FileText, 
  Bell, 
  Clock,
  Activity,
  Heart,
  User,
  Phone,
  MessageSquare,
  AlertTriangle
} from "lucide-react";

const DoctorDashboard = () => {
  const { getContentLocale } = useLanguage();
  const contentLocale = getContentLocale();

  const t = (en: string, hi: string, ml: string) => {
    if (contentLocale === "hi") return hi;
    if (contentLocale === "ml") return ml;
    return en;
  };

  const [todayStats] = useState({
    totalPatients: 12,
    completedConsultations: 8,
    pendingConsultations: 4,
    emergencyCases: 1
  });

  const [upcomingAppointments] = useState([
    {
      id: 1,
      patient: "Arjun Menon",
      time: "10:00 AM",
      type: "Follow-up",
      condition: t("Hypertension", "उच्च रक्तचाप", "ഹൈപ്പർടെൻഷൻ"),
      priority: "normal",
      healthId: "KL-123456789"
    },
    {
      id: 2,
      patient: "Priya Sharma",
      time: "10:30 AM", 
      type: "New Patient",
      condition: t("Chest Pain", "सीने में दर्द", "നെഞ്ചുവേദന"),
      priority: "urgent",
      healthId: "KL-987654321"
    },
    {
      id: 3,
      patient: "Rajesh Kumar",
      time: "11:00 AM",
      type: "Routine Checkup",
      condition: t("Diabetes", "मधुमेह", "പ്രമേഹം"),
      priority: "normal",
      healthId: "KL-456789123"
    }
  ]);

  const [recentPatients] = useState([
    {
      id: 1,
      name: "Arjun Menon",
      lastVisit: "2 days ago",
      condition: t("Hypertension", "उच्च रक्तचाप", "ഹൈപ്പർടെൻഷൻ"),
      status: "stable",
      healthId: "KL-123456789"
    },
    {
      id: 2,
      name: "Meera Nair",
      lastVisit: "1 week ago",
      condition: t("Migraine", "माइग्रेन", "മൈഗ്രെയിൻ"),
      status: "improving",
      healthId: "KL-234567890"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 text-white rounded-lg">
                <Stethoscope className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {t("Doctor Dashboard", "डॉक्टर डैशबोर्ड", "ഡോക്ടർ ഡാഷ്ബോർഡ്")}
                </h1>
                <p className="text-gray-600">
                  {t("Good morning, Dr. Priya!", "सुप्रभात, डॉ. प्रिया!", "സുപ്രഭാതം, ഡോ. പ്രിയ!")}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                3
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                {t("Messages", "संदेश", "സന്ദേശങ്ങൾ")}
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                {t("Profile", "प्रोफ़ाइल", "പ്രൊഫൈൽ")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t("Today's Patients", "आज के मरीज़", "ഇന്നത്തെ രോഗികൾ")}
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayStats.totalPatients}</div>
              <p className="text-xs text-muted-foreground">
                {t("Scheduled appointments", "निर्धारित अपॉइंटमेंट", "ഷെഡ്യൂൾ ചെയ്ത അപ്പോയിന്റ്മെന്റുകൾ")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t("Completed", "पूर्ण", "പൂർത്തീകരിച്ചത്")}
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{todayStats.completedConsultations}</div>
              <p className="text-xs text-muted-foreground">
                {t("Consultations done", "परामर्श पूर्ण", "പൂർത്തിയാക്കിയ കൺസൾട്ടേഷനുകൾ")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t("Pending", "लंबित", "തീർപ്പാക്കാത്ത")}
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{todayStats.pendingConsultations}</div>
              <p className="text-xs text-muted-foreground">
                {t("Awaiting consultation", "परामर्श की प्रतीक्षा", "കൺസൾട്ടേഷനായി കാത്തിരിക്കുന്നു")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t("Emergency", "आपातकाल", "അടിയന്തിര")}
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{todayStats.emergencyCases}</div>
              <p className="text-xs text-muted-foreground">
                {t("Critical cases", "गंभीर मामले", "ഗുരുതരമായ കേസുകൾ")}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Appointments */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {t("Today's Appointments", "आज के अपॉइंटमेंट", "ഇന്നത്തെ അപ്പോയിന്റ്മെന്റുകൾ")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                          <User className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold">{appointment.patient}</h4>
                            <Badge variant={appointment.priority === 'urgent' ? 'destructive' : 'secondary'}>
                              {appointment.priority === 'urgent' ? 
                                t("Urgent", "तत्काल", "അടിയന്തിര") : 
                                t("Normal", "सामान्य", "സാധാരണ")
                              }
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{appointment.type} - {appointment.condition}</p>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {appointment.time}
                          </div>
                          <p className="text-xs text-gray-400">ID: {appointment.healthId}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-1" />
                          {t("Records", "रिकॉर्ड", "റെക്കോർഡുകൾ")}
                        </Button>
                        <Button size="sm">
                          {t("Start", "शुरू करें", "ആരംഭിക്കുക")}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Patients & Quick Actions */}
          <div className="space-y-6">
            {/* Recent Patients */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  {t("Recent Patients", "हाल के मरीज़", "സമീപകാല രോഗികൾ")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-sm">{patient.name}</h5>
                          <p className="text-xs text-gray-600">{patient.condition}</p>
                          <p className="text-xs text-gray-400">
                            {t("Last visit:", "अंतिम यात्रा:", "അവസാന സന്ദർശനം:")} {patient.lastVisit}
                          </p>
                          <p className="text-xs text-gray-400">ID: {patient.healthId}</p>
                        </div>
                        <Badge variant={patient.status === 'stable' ? 'default' : 'secondary'}>
                          {patient.status === 'stable' ? 
                            t("Stable", "स्थिर", "സ്ഥിരം") : 
                            t("Improving", "सुधार", "മെച്ചപ്പെടുന്നു")
                          }
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {t("Quick Actions", "त्वरित क्रियाएं", "ദ്രുത പ്രവർത്തനങ്ങൾ")}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center">
                  <FileText className="h-4 w-4 mb-1" />
                  <span className="text-xs">{t("Patient Records", "रोगी रिकॉर्ड", "രോഗി റെക്കോർഡുകൾ")}</span>
                </Button>
                <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center">
                  <Calendar className="h-4 w-4 mb-1" />
                  <span className="text-xs">{t("Schedule", "कार्यक्रम", "ഷെഡ്യൂൾ")}</span>
                </Button>
                <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center">
                  <Phone className="h-4 w-4 mb-1" />
                  <span className="text-xs">{t("Emergency", "आपातकाल", "അടിയന്തിര")}</span>
                </Button>
                <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center">
                  <MessageSquare className="h-4 w-4 mb-1" />
                  <span className="text-xs">{t("Messages", "संदेश", "സന്ദേശങ്ങൾ")}</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;