import { User, Mail, Phone, MapPin, Calendar, Shield, Award, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";

const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                My Profile
              </h2>
              <p className="text-lg text-muted-foreground">
                Manage your professional information and account settings
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Overview */}
              <div className="lg:col-span-1">
                <Card className="dashboard-card">
                  <CardHeader className="text-center">
                    <div className="mx-auto h-24 w-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                      PS
                    </div>
                    <CardTitle className="text-xl">Dr. Priya Sharma</CardTitle>
                    <p className="text-muted-foreground">Cardiologist</p>
                    <Badge className="mt-2 bg-success text-success-foreground">Active</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm">Registration: MED-12345</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-4 w-4 text-accent" />
                      <span className="text-sm">15 years experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Last login: Today, 9:30 AM</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-2">
                <Card className="dashboard-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Contact Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                          <div className="flex items-center space-x-3 mt-1">
                            <Mail className="h-4 w-4 text-primary" />
                            <span>priya.sharma@gov.health.in</span>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                          <div className="flex items-center space-x-3 mt-1">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>+91 98765 43210</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Workplace</label>
                          <div className="flex items-center space-x-3 mt-1">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>AIIMS Delhi</span>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Joined</label>
                          <div className="flex items-center space-x-3 mt-1">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>March 15, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-end space-x-4">
                      <Button variant="outline">Edit Profile</Button>
                      <Button className="accent-button bg-primary hover:bg-primary/90">
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Professional Details */}
              <div className="lg:col-span-3">
                <Card className="dashboard-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="h-5 w-5" />
                      <span>Professional Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Specialization</label>
                        <p className="mt-1 font-medium">Cardiology</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Medical License</label>
                        <p className="mt-1 font-medium">MCI-DL-2008-12345</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Department</label>
                        <p className="mt-1 font-medium">Cardiothoracic Surgery</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Years of Experience</label>
                        <p className="mt-1 font-medium">15 years</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Institution</label>
                        <p className="mt-1 font-medium">All India Institute of Medical Sciences</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Access Level</label>
                        <Badge className="mt-1 bg-success text-success-foreground">Senior Consultant</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Profile;