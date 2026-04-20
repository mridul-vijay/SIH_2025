import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Settings, 
  Users, 
  Building, 
  FileText, 
  Bell, 
  BarChart3,
  Activity,
  Shield,
  User,
  MessageSquare,
  AlertTriangle,
  TrendingUp,
  Calendar
} from "lucide-react";

const AdminDashboard = () => {
  const { getContentLocale } = useLanguage();
  const contentLocale = getContentLocale();

  const t = (en: string, hi: string, ml: string) => {
    if (contentLocale === "hi") return hi;
    if (contentLocale === "ml") return ml;
    return en;
  };

  const [systemStats] = useState({
    totalUsers: 2847,
    activeUsers: 1253,
    totalHospitals: 45,
    totalDoctors: 234,
    monthlyGrowth: "+12%"
  });

  const [recentRegistrations] = useState([
    {
      id: 1,
      name: "Dr. Arjun Menon",
      type: "Doctor",
      hospital: t("Kochi Medical Center", "कोच्चि मेडिकल सेंटर", "കൊച്ചി മെഡിക്കൽ സെന്റർ"),
      status: "pending",
      registeredAt: "2 hours ago"
    },
    {
      id: 2,
      name: "Priya Sharma",
      type: "Patient",
      location: t("Thiruvananthapuram", "तिरुवनंतपुरम", "തിരുവനന്തപുരം"),
      status: "approved",
      registeredAt: "4 hours ago"
    },
    {
      id: 3,
      name: "Regional Hospital Calicut",
      type: "Hospital",
      location: t("Calicut", "कालीकट", "കാലിക്കറ്റ്"),
      status: "pending",
      registeredAt: "1 day ago"
    }
  ]);

  const [systemAlerts] = useState([
    {
      id: 1,
      type: "warning",
      title: t("High Server Load", "हाई सर्वर लोड", "ഉയർന്ന സർവർ ലോഡ്"),
      message: t("Server usage at 85%. Monitor closely.", "सर्वर उपयोग 85% पर। बारीकी से निगरानी करें।", "സർവർ ഉപയോഗം 85% ൽ. സൂക്ഷ്മമായി നിരീക്ഷിക്കുക."),
      time: "15 mins ago"
    },
    {
      id: 2,
      type: "info",
      title: t("System Update Available", "सिस्टम अपडेट उपलब्ध", "സിസ്റ്റം അപ്‌ഡേറ്റ് ലഭ്യമാണ്"),
      message: t("New security patches ready for deployment.", "तैनाती के लिए नए सुरक्षा पैच तैयार।", "വിന്യാസത്തിനായി പുതിയ സുരക്ഷാ പാച്ചുകൾ തയ്യാർ."),
      time: "2 hours ago"
    }
  ]);

  const [hospitalStats] = useState([
    {
      name: t("Government Medical College Kochi", "गवर्नमेंट मेडिकल कॉलेज कोच्चि", "ഗവൺമെന്റ് മെഡിക്കൽ കോളേജ് കൊച്ചി"),
      patients: 156,
      doctors: 23,
      utilization: "87%",
      status: "active"
    },
    {
      name: t("Trivandrum Medical College", "त्रिवेंद्रम मेडिकल कॉलेज", "തിരുവനന്തപുരം മെഡിക്കൽ കോളേജ്"),
      patients: 203,
      doctors: 31,
      utilization: "92%", 
      status: "active"
    },
    {
      name: t("Calicut Medical College", "कालीकट मेडिकल कॉलेज", "കാലിക്കറ്റ് മെഡിക്കൽ കോളേജ്"),
      patients: 134,
      doctors: 19,
      utilization: "76%",
      status: "active"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-600 text-white rounded-lg">
                <Settings className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {t("Admin Dashboard", "एडमिन डैशबोर्ड", "അഡ്മിൻ ഡാഷ്ബോർഡ്")}
                </h1>
                <p className="text-gray-600">
                  {t("System Overview & Management", "सिस्टम अवलोकन और प्रबंधन", "സിസ്റ്റം ഓവർവ്യൂ & മാനേജ്മെന്റ്")}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                5
              </Button>
              <Button variant="outline" size="sm">
                <Shield className="h-4 w-4 mr-2" />
                {t("Security", "सुरक्षा", "സുരക്ഷ")}
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
        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t("Total Users", "कुल उपयोगकर्ता", "ആകെ ഉപയോക്താക്കൾ")}
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {systemStats.activeUsers.toLocaleString()} {t("active", "सक्रिय", "സജീവം")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t("Hospitals", "अस्पताल", "ആശുപത്രികൾ")}
              </CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalHospitals}</div>
              <p className="text-xs text-muted-foreground">
                {t("Registered facilities", "पंजीकृत सुविधाएं", "രജിസ്റ്റർ ചെയ്ത സൗകര്യങ്ങൾ")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t("Doctors", "डॉक्टर", "ഡോക്ടർമാർ")}
              </CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalDoctors}</div>
              <p className="text-xs text-muted-foreground">
                {t("Verified professionals", "सत्यापित पेशेवर", "സ്ഥിരീകരിച്ച പ്രൊഫഷണലുകൾ")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t("Growth", "वृद्धि", "വളർച്ച")}
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{systemStats.monthlyGrowth}</div>
              <p className="text-xs text-muted-foreground">
                {t("This month", "इस महीने", "ഈ മാസം")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t("System Health", "सिस्टम स्वास्थ्य", "സിസ്റ്റം ആരോഗ്യം")}
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">98.5%</div>
              <p className="text-xs text-muted-foreground">
                {t("Uptime", "अपटाइम", "അപ്ടൈം")}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Registrations */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  {t("Recent Registrations", "हाल के पंजीकरण", "സമീപകാല രജിസ്ട്രേഷനുകൾ")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRegistrations.map((registration) => (
                    <div key={registration.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                          {registration.type === 'Doctor' ? <User className="h-4 w-4" /> : 
                           registration.type === 'Hospital' ? <Building className="h-4 w-4" /> :
                           <Users className="h-4 w-4" />}
                        </div>
                        <div>
                          <h4 className="font-semibold">{registration.name}</h4>
                          <p className="text-sm text-gray-600">
                            {registration.type} • {registration.hospital || registration.location}
                          </p>
                          <p className="text-xs text-gray-500">{registration.registeredAt}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={registration.status === 'approved' ? 'default' : 'secondary'}>
                          {registration.status === 'approved' ? 
                            t("Approved", "अनुमोदित", "അനുമോദിത") : 
                            t("Pending", "लंबित", "തീർപ്പാക്കാത്ത")
                          }
                        </Badge>
                        {registration.status === 'pending' && (
                          <Button size="sm">
                            {t("Review", "समीक्षा", "അവലോകനം")}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hospital Performance */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  {t("Hospital Performance", "अस्पताल प्रदर्शन", "ആശുപത്രി പ്രകടനം")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hospitalStats.map((hospital, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{hospital.name}</h4>
                        <Badge variant="default">{hospital.status}</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">{t("Patients", "मरीज़", "രോഗികൾ")}</p>
                          <p className="font-semibold">{hospital.patients}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">{t("Doctors", "डॉक्टर", "ഡോക്ടർമാർ")}</p>
                          <p className="font-semibold">{hospital.doctors}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">{t("Utilization", "उपयोग", "ഉപയോഗം")}</p>
                          <p className="font-semibold">{hospital.utilization}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Alerts & Quick Actions */}
          <div className="space-y-6">
            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  {t("System Alerts", "सिस्टम अलर्ट", "സിസ്റ്റം അലർട്ടുകൾ")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className="p-3 border rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className={`h-4 w-4 mt-1 ${alert.type === 'warning' ? 'text-orange-500' : 'text-blue-500'}`} />
                        <div className="flex-1">
                          <h5 className="font-medium text-sm">{alert.title}</h5>
                          <p className="text-xs text-gray-600 mt-1">{alert.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                        </div>
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
                  <Users className="h-4 w-4 mb-1" />
                  <span className="text-xs">{t("User Management", "उपयोगकर्ता प्रबंधन", "ഉപയോക്തൃ മാനേജ്മെന്റ്")}</span>
                </Button>
                <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center">
                  <Building className="h-4 w-4 mb-1" />
                  <span className="text-xs">{t("Hospitals", "अस्पताल", "ആശുപത്രികൾ")}</span>
                </Button>
                <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center">
                  <BarChart3 className="h-4 w-4 mb-1" />
                  <span className="text-xs">{t("Reports", "रिपोर्ट", "റിപ്പോർട്ടുകൾ")}</span>
                </Button>
                <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center">
                  <Settings className="h-4 w-4 mb-1" />
                  <span className="text-xs">{t("Settings", "सेटिंग्स", "ക്രമീകരണങ്ങൾ")}</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;