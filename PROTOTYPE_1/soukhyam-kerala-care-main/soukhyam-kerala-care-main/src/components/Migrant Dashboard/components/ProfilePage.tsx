import React from 'react';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Shield,
  Edit,
  Camera,
  QrCode,
  Download,
  Eye,
  History,
  Bell,
  Settings,
  LogOut,
  RefreshCw,
  ChevronRight,
  CheckCircle,
  Upload
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import exampleImage from 'figma:asset/0f4cddf18651cfe0f85656ae559b8920918a0856.png';

export const ProfilePage = React.memo(function ProfilePage() {
  return (
    <div className="min-h-screen bg-gov-blue-bg">
      {/* Header with National Health Authority Branding */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gov-blue rounded-lg flex items-center justify-center shadow-md">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gov-saffron rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gov-blue">National Health Authority</h1>
              <p className="text-xs sm:text-sm text-gray-600">Government of India</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 self-start sm:self-auto">
            <Button className="bg-gov-blue hover:bg-gov-blue/90 text-white text-sm px-3 py-2">
              <Edit className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Edit Profile</span>
              <span className="sm:hidden">Edit</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gov-blue p-2">
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Profile Summary Card - Full width on mobile, sidebar on desktop */}
          <div className="lg:col-span-1 order-1 lg:order-none">
            <Card className="bg-white shadow-sm border-gov-blue-light/20">
              <CardContent className="p-4 sm:p-6">
                {/* Profile Picture and Basic Info */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="relative inline-block">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gov-blue rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-2xl mx-auto mb-3 sm:mb-4">
                      RK
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded-full flex items-center justify-center border-2 border-white">
                      <Camera className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">Ravi Kumar Singh</h2>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">Health ID: MH2024789123</p>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                    <Badge className="bg-gov-green text-white text-xs">
                      <Shield className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                      Verified
                    </Badge>
                    <Badge className="bg-gov-blue text-white text-xs">
                      Active Worker
                    </Badge>
                  </div>
                </div>

                {/* Profile Actions */}
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Profile Actions</h3>
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gov-blue hover:bg-gov-blue-bg h-9 sm:h-10 text-sm">
                    <History className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                    View History
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gov-blue hover:bg-gov-blue-bg h-9 sm:h-10 text-sm">
                    <Bell className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gov-blue hover:bg-gov-blue-bg h-9 sm:h-10 text-sm">
                    <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                    Security Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 h-9 sm:h-10 text-sm">
                    <LogOut className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6 order-2 lg:order-none">
            {/* Personal Information */}
            <Card className="bg-white shadow-sm border-gov-blue-light/20">
              <CardHeader className="border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">Full Name:</label>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">Ravi Kumar Singh</p>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">Gender:</label>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">Male</p>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">Date of Birth:</label>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">15th March, 1992</p>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">Age:</label>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">32 years</p>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">Blood Group:</label>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">O+</p>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">Marital Status:</label>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">Married</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Contact Information */}
              <Card className="bg-white shadow-sm border-gov-blue-light/20">
                <CardHeader className="border-b border-gray-100 p-4 sm:p-6">
                  <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Contact Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">Mobile Number:</label>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">+91 98765-43210</p>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">Email Address:</label>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">ravi.singh@gmail.com</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-3 sm:pl-4 bg-red-50 p-3 rounded-r-md">
                    <label className="text-xs sm:text-sm font-medium text-red-700">Emergency Contact:</label>
                    <p className="text-sm sm:text-base font-bold text-red-800 mt-1">+91 87654-32109</p>
                    <p className="text-xs sm:text-sm text-red-600 mt-1">Sunita Singh (Wife)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Address Information */}
              <Card className="bg-white shadow-sm border-gov-blue-light/20">
                <CardHeader className="border-b border-gray-100 p-4 sm:p-6">
                  <CardTitle className="flex items-center space-x-2 text-gov-blue text-base sm:text-lg">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Address Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">Current Address</label>
                    <div className="mt-2 p-3 bg-gov-blue-bg rounded-md">
                      <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                        Room 204, Krishna Building<br />
                        Kandivali West, Mumbai<br />
                        400067<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-600">Permanent Address</label>
                    <div className="mt-2 p-3 bg-gov-blue-bg rounded-md">
                      <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                        Village Rampur, P.O.<br />
                        Rampur<br />
                        District - Sitapur, UP -<br />
                        261001<br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Government Documents */}
            <Card className="bg-white shadow-lg border-2 border-gov-blue-light/30">
              <CardHeader className="border-b-2 border-gov-blue-light/20 p-4 sm:p-6 bg-gradient-to-r from-gov-blue-bg to-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <CardTitle className="flex items-center space-x-3 text-gov-blue text-lg sm:text-xl">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gov-blue rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <span className="block">Government Documents</span>
                      <span className="text-xs sm:text-sm font-normal text-gray-600">Official ID Verification Portal</span>
                    </div>
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-gov-green text-white text-xs px-3 py-1">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      All Verified
                    </Badge>
                    <Button size="sm" className="bg-gov-saffron hover:bg-gov-saffron/90 text-white">
                      <Upload className="w-3 h-3 mr-1" />
                      Upload New
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                {/* Document Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                  <div className="text-center p-3 bg-gov-green-bg rounded-lg border border-gov-green/20">
                    <div className="text-lg sm:text-xl font-bold text-gov-green">4</div>
                    <div className="text-xs sm:text-sm text-gray-600">Verified</div>
                  </div>
                  <div className="text-center p-3 bg-gov-blue-bg rounded-lg border border-gov-blue/20">
                    <div className="text-lg sm:text-xl font-bold text-gov-blue">100%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Complete</div>
                  </div>
                  <div className="text-center p-3 bg-gov-saffron-bg rounded-lg border border-gov-saffron/20">
                    <div className="text-lg sm:text-xl font-bold text-gov-saffron">2024</div>
                    <div className="text-xs sm:text-sm text-gray-600">Updated</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-lg sm:text-xl font-bold text-gray-700">0</div>
                    <div className="text-xs sm:text-sm text-gray-600">Pending</div>
                  </div>
                </div>

                {/* Document Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Aadhaar Card */}
                  <div className="border-2 border-gov-blue-light/30 rounded-xl p-4 sm:p-5 hover:shadow-xl hover:border-gov-blue transition-all duration-300 bg-gradient-to-br from-white to-gov-blue-bg group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gov-blue to-gov-blue-light rounded-lg flex items-center justify-center shadow-md">
                          <div className="text-white font-bold text-lg">🆔</div>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">Aadhaar Card</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Unique Identification Authority</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge className="bg-gov-green text-white text-xs px-2 py-1">
                          <Shield className="w-2 h-2 mr-1" />
                          Verified
                        </Badge>
                        <span className="text-xs text-gray-500">Valid Till: Lifetime</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 p-3 bg-white/80 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Aadhaar Number:</span>
                        <span className="text-sm sm:text-base font-bold text-gray-800 font-mono">**** **** 7890</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Last Updated:</span>
                        <span className="text-xs sm:text-sm text-gray-700">15 Jan 2024</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-2 border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white transition-all duration-200">
                        <Eye className="w-3 h-3 mr-2" />
                        View Document
                      </Button>
                      <Button size="sm" className="flex-1 bg-gov-blue hover:bg-gov-blue/90 text-white">
                        <Download className="w-3 h-3 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>

                  {/* PAN Card */}
                  <div className="border-2 border-gov-blue-light/30 rounded-xl p-4 sm:p-5 hover:shadow-xl hover:border-gov-blue transition-all duration-300 bg-gradient-to-br from-white to-gov-blue-bg group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gov-green to-gov-blue rounded-lg flex items-center justify-center shadow-md">
                          <div className="text-white font-bold text-lg">💳</div>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">PAN Card</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Income Tax Department</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge className="bg-gov-green text-white text-xs px-2 py-1">
                          <Shield className="w-2 h-2 mr-1" />
                          Verified
                        </Badge>
                        <span className="text-xs text-gray-500">Valid Till: Lifetime</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 p-3 bg-white/80 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">PAN Number:</span>
                        <span className="text-sm sm:text-base font-bold text-gray-800 font-mono">ABCDE1234F</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Last Updated:</span>
                        <span className="text-xs sm:text-sm text-gray-700">20 Dec 2023</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-2 border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white transition-all duration-200">
                        <Eye className="w-3 h-3 mr-2" />
                        View Document
                      </Button>
                      <Button size="sm" className="flex-1 bg-gov-blue hover:bg-gov-blue/90 text-white">
                        <Download className="w-3 h-3 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>

                  {/* Voter ID */}
                  <div className="border-2 border-gov-blue-light/30 rounded-xl p-4 sm:p-5 hover:shadow-xl hover:border-gov-blue transition-all duration-300 bg-gradient-to-br from-white to-gov-blue-bg group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gov-saffron to-gov-green rounded-lg flex items-center justify-center shadow-md">
                          <div className="text-white font-bold text-lg">🗳️</div>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">Voter ID</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Election Commission of India</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge className="bg-gov-green text-white text-xs px-2 py-1">
                          <Shield className="w-2 h-2 mr-1" />
                          Verified
                        </Badge>
                        <span className="text-xs text-gray-500">Valid Till: Lifetime</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 p-3 bg-white/80 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">EPIC Number:</span>
                        <span className="text-sm sm:text-base font-bold text-gray-800 font-mono">ABC1234567</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Last Updated:</span>
                        <span className="text-xs sm:text-sm text-gray-700">10 Nov 2023</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-2 border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white transition-all duration-200">
                        <Eye className="w-3 h-3 mr-2" />
                        View Document
                      </Button>
                      <Button size="sm" className="flex-1 bg-gov-blue hover:bg-gov-blue/90 text-white">
                        <Download className="w-3 h-3 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>

                  {/* Health ID QR */}
                  <div className="border-2 border-gov-blue-light/30 rounded-xl p-4 sm:p-5 hover:shadow-xl hover:border-gov-blue transition-all duration-300 bg-gradient-to-br from-white to-gov-blue-bg group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gov-green to-gov-saffron rounded-lg flex items-center justify-center shadow-md">
                          <QrCode className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">Health ID QR</h4>
                          <p className="text-xs sm:text-sm text-gray-600">National Health Authority</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge className="bg-gov-blue text-white text-xs px-2 py-1">
                          <QrCode className="w-2 h-2 mr-1" />
                          Active
                        </Badge>
                        <span className="text-xs text-gray-500">Valid Till: Dec 2025</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 p-3 bg-white/80 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Health ID:</span>
                        <span className="text-sm sm:text-base font-bold text-gray-800 font-mono">MH2024789123</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Generated:</span>
                        <span className="text-xs sm:text-sm text-gray-700">01 Jan 2024</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-2 border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white transition-all duration-200">
                        <QrCode className="w-3 h-3 mr-2" />
                        Show QR Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-gov-blue hover:bg-gov-blue/90 text-white">
                        <Download className="w-3 h-3 mr-2" />
                        Download QR
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-gradient-to-r from-gov-green-bg to-gov-blue-bg rounded-lg border-2 border-gov-green/20">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gov-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gov-green text-sm sm:text-base mb-1">Secure Document Storage</h5>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        All documents are encrypted and stored securely as per Government of India data protection standards. 
                        Your personal information is protected with military-grade security protocols.
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-600">
                        <span>🔒 256-bit Encryption</span>
                        <span>🛡️ ISO 27001 Certified</span>
                        <span>🏛️ Govt. Approved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Government Footer */}
      <footer className="bg-white border-t border-gray-200 mt-6 sm:mt-8 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Government Logo and Info */}
            <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gov-blue rounded-full flex items-center justify-center shadow-md">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gov-saffron rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="font-bold text-gov-blue text-xs sm:text-sm">National Health Authority</div>
                <div className="text-xs text-gray-600">Government of India</div>
                <div className="text-xs text-gov-green font-medium">✓ Secure & Verified Portal</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <div className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Quick Links</div>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="hover:text-gov-blue cursor-pointer">Privacy Policy</div>
                <div className="hover:text-gov-blue cursor-pointer">Terms of Service</div>
                <div className="hover:text-gov-blue cursor-pointer">Help & Support</div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <div className="text-xs text-gray-600">
                <div>© 2024 National Health Authority</div>
                <div className="mt-1">Government of India - All Rights Reserved</div>
                <div className="mt-2 font-medium text-gov-blue">Satyameva Jayate</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});