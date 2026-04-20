import React from 'react';
import { 
  Calendar, 
  FileText, 
  User, 
  MessageSquare, 
  Download,
  Upload,
  QrCode,
  Clock,
  Phone,
  CheckCircle,
  AlertCircle,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const UpcomingAppointments = React.memo(function UpcomingAppointments() {
  const appointments = [
    {
      date: 'Dec 24, 2024',
      time: '10:00 AM',
      doctor: 'Dr. Sharma',
      type: 'General Checkup',
      status: 'Confirmed',
      statusColor: 'gov-green',
      reminder: true
    },
    {
      date: 'Dec 28, 2024', 
      time: '2:30 PM',
      doctor: 'Dr. Patel',
      type: 'Follow-up',
      status: 'Upcoming',
      statusColor: 'gov-saffron',
      reminder: false
    }
  ];

  return (
    <Card className="h-full border-border shadow-sm bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3 sm:pb-4 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div>
            <CardTitle className="flex items-center space-x-2 text-gray-800 text-base sm:text-lg font-semibold">
              <Calendar className="w-5 h-5 text-gov-blue flex-shrink-0" />
              <span>Upcoming Appointments</span>
            </CardTitle>
          </div>
          <Button size="sm" variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue-bg self-start sm:self-auto text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4">
        {appointments.map((apt, index) => (
          <div key={index} className="p-4 rounded-md border-l-4 border-l-gov-green bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-md hover:scale-105 animate-in slide-in-from-left-4 fade-in-0" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={`text-xs bg-${apt.statusColor} text-white`}>
                    {apt.status}
                  </Badge>
                  {apt.status === 'Confirmed' && (
                    <span className="text-xs text-gov-green font-medium">Advanced</span>
                  )}
                </div>
                <h4 className="font-semibold text-gray-800 text-sm truncate">{apt.type}</h4>
                <p className="text-sm text-gray-600 font-medium truncate">{apt.doctor}</p>
                <p className="text-sm text-gray-500">{apt.date} at {apt.time}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <span className="text-lg">⋯</span>
              </button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
});

export const HealthRecords = React.memo(function HealthRecords() {
  const records = [
    { name: 'Blood Test Report', date: 'Dec 15, 2024', icon: '🩸', status: 'Recent' },
    { name: 'Vaccination Certificate', date: 'Nov 20, 2024', icon: '💉', status: 'Active' },
    { name: 'Medical History', date: 'Oct 05, 2024', icon: '📋', status: 'Archive' }
  ];

  return (
    <Card className="h-full border-border shadow-sm bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3 border-b border-gray-100">
        <CardTitle className="flex items-center space-x-2 text-gray-800 text-base sm:text-lg font-semibold">
          <FileText className="w-5 h-5 text-gov-blue flex-shrink-0" />
          <span>Personal Health Records</span>
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm">Securely store, view, and manage your medical documents</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3 mb-4">
          {records.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:shadow-sm hover:-translate-y-1 animate-in slide-in-from-bottom-2 fade-in-0" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-8 h-8 bg-gov-green rounded-full flex items-center justify-center text-white text-sm">
                  📄
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-800 truncate">{record.name}</p>
                  <p className="text-xs text-gray-600">{record.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="ghost" className="text-gray-600 hover:text-gov-blue p-1">
                  <Download className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-600 hover:text-gov-blue p-1">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});

export const ProfileSnapshot = React.memo(function ProfileSnapshot() {
  return (
    <Card className="h-full border-border shadow-sm bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3 border-b border-gray-100">
        <CardTitle className="flex items-center space-x-2 text-gray-800 text-base sm:text-lg font-semibold">
          <User className="w-5 h-5 text-gov-blue flex-shrink-0" />
          <span>Profile Snapshot</span>
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm">Your national ID and key info</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center space-x-3 mb-4 animate-in slide-in-from-left-4 fade-in-0">
          <div className="w-12 h-12 bg-gov-blue rounded-full flex items-center justify-center text-white font-bold text-lg hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse hover:animate-none">
            RK
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">Ravi Kumar</h3>
            <p className="text-sm text-gray-600 font-medium">Health ID: MH2024789123</p>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-gov-green rounded-full mr-1 animate-pulse"></div>
              <span className="text-xs text-gov-green font-medium animate-in slide-in-from-right-2 fade-in-0" style={{ animationDelay: '200ms' }}>Verified</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm animate-in slide-in-from-right-4 fade-in-0" style={{ animationDelay: '300ms' }}>
            <span className="text-gray-600">Age:</span>
            <span className="text-gray-800 font-semibold">32 years</span>
          </div>
          <div className="flex justify-between text-sm animate-in slide-in-from-right-4 fade-in-0" style={{ animationDelay: '400ms' }}>
            <span className="text-gray-600">Blood Group:</span>
            <span className="text-gray-800 font-semibold">O+</span>
          </div>
          <div className="flex justify-between text-sm animate-in slide-in-from-right-4 fade-in-0" style={{ animationDelay: '500ms' }}>
            <span className="text-gray-600">Location:</span>
            <span className="text-gray-800 font-semibold">Mumbai, MH</span>
          </div>
        </div>

        <Button className="w-full bg-white border border-gov-blue text-gov-blue hover:bg-gov-blue-bg text-sm transition-all duration-300 hover:scale-105 hover:shadow-md animate-in slide-in-from-bottom-4 fade-in-0" style={{ animationDelay: '600ms' }}>
          <QrCode className="w-4 h-4 mr-2 transition-transform duration-300 hover:rotate-12" />
          Show Digital ID
        </Button>
      </CardContent>
    </Card>
  );
});

export const EmergencyServices = React.memo(function EmergencyServices() {
  const emergencyContacts = [
    { service: 'Ambulance', number: '108', icon: '🚑' },
    { service: 'Police', number: '100', icon: '🚔' },
    { service: 'Fire', number: '101', icon: '🚒' },
    { service: 'Women Helpline', number: '1091', icon: '👩' }
  ];

  return (
    <Card className="h-full border-border shadow-sm bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2 text-gray-800 text-base sm:text-lg font-semibold">
              <span className="text-2xl">🆘</span>
              <span>Emergency Services</span>
            </CardTitle>
            <CardDescription className="text-gray-600 text-sm">Quick access to emergency helplines</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="p-3 border border-gray-200 rounded-md hover:bg-red-50 hover:border-red-200 transition-all duration-300 text-center cursor-pointer hover:scale-105 hover:shadow-md animate-in zoom-in-50 fade-in-0" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-2xl mb-1 hover:animate-bounce transition-all duration-300">{contact.icon}</div>
              <div className="font-bold text-lg text-red-600">{contact.number}</div>
              <div className="text-xs text-gray-600 font-medium">{contact.service}</div>
            </div>
          ))}
        </div>
        
        <div className="p-3 bg-red-50 border border-red-200 rounded-md animate-float">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse animate-glow"></div>
            <span className="text-sm font-semibold text-red-700">Emergency Alert System</span>
          </div>
          <p className="text-xs text-red-600">Available 24/7 for immediate assistance</p>
        </div>
      </CardContent>
    </Card>
  );
});