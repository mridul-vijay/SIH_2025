import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import { 
  User, 
  Stethoscope, 
  Settings, 
  ArrowRight,
  FileText,
  Calendar,
  Shield,
  Clock,
  Heart,
  Building
} from "lucide-react";

const LoginRegisterContent = () => {
  const { language } = useLanguage();

  const userTypes = [
    {
      icon: User,
      title: language === 'en' ? "Migrant Worker" : "കുടിയേറ്റ തൊഴിലാളി",
      description: language === 'en' 
        ? "Register and access your health records" 
        : "നിങ്ങളുടെ ആരോഗ്യ റെക്കോർഡുകൾ രജിസ്റ്റർ ചെയ്യുകയും ആക്‌സസ് ചെയ്യുകയും ചെയ്യുക",
      features: [
        { 
          icon: FileText, 
          text: language === 'en' ? "Get Unique Health ID" : "അദ്വിതീയ ആരോഗ്യ ഐഡി നേടുക"
        },
        { 
          icon: Calendar, 
          text: language === 'en' ? "Book Appointments" : "അപ്പോയിന്റ്മെന്റുകൾ ബുക്ക് ചെയ്യുക"
        },
        { 
          icon: Shield, 
          text: language === 'en' ? "Secure Access" : "സുരക്ഷിത ആക്സസ്"
        },
        { 
          icon: Clock, 
          text: language === 'en' ? "24/7 Available" : "24/7 ലഭ്യം"
        }
      ],
      buttonText: language === 'en' ? "Register Now" : "ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക",
      buttonVariant: "default" as const,
      gradient: "from-primary to-primary-light",
      badge: language === 'en' ? "Most Popular" : "ഏറ്റവും ജനപ്രിയം"
    },
    {
      icon: Stethoscope,
      title: language === 'en' ? "Healthcare Provider" : "ആരോഗ്യ സേവന ദാതാവ്",
      description: language === 'en' 
        ? "Manage patient records and consultations" 
        : "രോഗി റെക്കോർഡുകളും കൺസൾട്ടേഷനുകളും നിയന്ത്രിക്കുക",
      features: [
        { 
          icon: Heart, 
          text: language === 'en' ? "Patient Management" : "രോഗി മാനേജ്മെന്റ്"
        },
        { 
          icon: FileText, 
          text: language === 'en' ? "Digital Records" : "ഡിജിറ്റൽ റെക്കോർഡുകൾ"
        },
        { 
          icon: Calendar, 
          text: language === 'en' ? "Appointment System" : "അപ്പോയിന്റ്മെന്റ് സിസ്റ്റം"
        },
        { 
          icon: Shield, 
          text: language === 'en' ? "HIPAA Compliant" : "HIPAA അനുസൃത"
        }
      ],
      buttonText: language === 'en' ? "Provider Login" : "പ്രൊവൈഡർ ലോഗിൻ",
      buttonVariant: "secondary" as const,
      gradient: "from-accent to-accent",
      badge: language === 'en' ? "Professional" : "പ്രൊഫഷണൽ"
    },
    {
      icon: Settings,
      title: language === 'en' ? "Administrator" : "അഡ്മിനിസ്ട്രേറ്റർ",
      description: language === 'en' 
        ? "System management and analytics" 
        : "സിസ്റ്റം മാനേജ്മെന്റും അനലിറ്റിക്സും",
      features: [
        { 
          icon: Building, 
          text: language === 'en' ? "System Management" : "സിസ്റ്റം മാനേജ്മെന്റ്"
        },
        { 
          icon: FileText, 
          text: language === 'en' ? "Generate Reports" : "റിപ്പോർട്ടുകൾ സൃഷ്ടിക്കുക"
        },
        { 
          icon: Shield, 
          text: language === 'en' ? "User Verification" : "ഉപയോക്തൃ പരിശോധന"
        },
        { 
          icon: Settings, 
          text: language === 'en' ? "System Settings" : "സിസ്റ്റം ക്രമീകരണങ്ങൾ"
        }
      ],
      buttonText: language === 'en' ? "Admin Access" : "അഡ്മിൻ ആക്സസ്",
      buttonVariant: "outline" as const,
      gradient: "from-secondary to-secondary",
      badge: language === 'en' ? "Admin" : "അഡ്മിൻ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {language === 'en' ? 'Choose Your Access Type' : 'നിങ്ങളുടെ ആക്സസ് തരം തിരഞ്ഞെടുക്കുക'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Select your role to access the appropriate features and services designed specifically for your needs.'
              : 'നിങ്ങളുടെ ആവശ്യങ്ങൾക്കായി പ്രത്യേകം രൂപകൽപ്പന ചെയ്ത ഉചിതമായ സവിശേഷതകളും സേവനങ്ങളും ആക്സസ് ചെയ്യുന്നതിന് നിങ്ങളുടെ പങ്ക് തിരഞ്ഞെടുക്കുക.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {userTypes.map((userType, index) => {
            const IconComponent = userType.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${userType.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${userType.gradient} text-white`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Badge 
                      variant={index === 0 ? "default" : index === 1 ? "secondary" : "outline"} 
                      className="text-xs"
                    >
                      {userType.badge}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {userType.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {userType.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {userType.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <FeatureIcon className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">
                            {feature.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <Button 
                    variant={userType.buttonVariant} 
                    className="w-full group relative overflow-hidden"
                    size="lg"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>{userType.buttonText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const LoginRegister = () => {
  return (
    <LanguageProvider>
      <LoginRegisterContent />
    </LanguageProvider>
  );
};

export default LoginRegister;