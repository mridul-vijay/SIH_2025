import { useState } from "react";
import { ArrowLeft, User, Calendar, MapPin, Phone, Mail, Heart, Activity, AlertCircle, FileText, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";


const PatientRecord = () => {
  const navigate = useNavigate();

  // Dummy patient data
  const patientData = {
    id: "MH123456789012",
    name: "Ahmed Hassan",
    age: 32,
    gender: "Male",
    nationality: "Bangladesh",
    occupation: "Construction Worker",
    employer: "Al Mansoor Construction LLC",
    phone: "+971 50 123 4567",
    email: "ahmed.hassan@email.com",
    emergencyContact: "+880 1712 345678",
    visaStatus: "Valid",
    insuranceStatus: "Active",
    lastCheckup: "2024-01-15",
    bloodGroup: "O+",
    height: "175 cm",
    weight: "68 kg",
    allergies: ["Penicillin", "Peanuts"],
    chronicConditions: ["Hypertension"],
    currentMedications: [
      { name: "Amlodipine", dosage: "5mg", frequency: "Once daily" },
      { name: "Paracetamol", dosage: "500mg", frequency: "As needed" }
    ],
    vaccinations: [
      { name: "COVID-19", date: "2023-12-01", status: "Complete" },
      { name: "Hepatitis B", date: "2023-06-15", status: "Complete" },
      { name: "Tetanus", date: "2023-03-20", status: "Complete" }
    ],
    medicalHistory: [
      {
        date: "2024-01-15",
        type: "Routine Checkup",
        doctor: "Dr. Priya Sharma",
        diagnosis: "General health assessment",
        notes: "Blood pressure slightly elevated. Advised dietary changes."
      },
      {
        date: "2023-11-22",
        type: "Injury Treatment",
        doctor: "Dr. Mohamed Ali",
        diagnosis: "Minor laceration on left hand",
        notes: "Wound cleaned and bandaged. Prescribed antibiotic ointment."
      },
      {
        date: "2023-08-10",
        type: "Health Screening",
        doctor: "Dr. Sarah Johnson",
        diagnosis: "Routine health screening",
        notes: "All parameters within normal limits. Continue current medications."
      }
    ],
    labResults: [
      { test: "Blood Glucose", value: "95 mg/dL", range: "70-100", status: "Normal", date: "2024-01-15" },
      { test: "Blood Pressure", value: "135/85", range: "<120/80", status: "Elevated", date: "2024-01-15" },
      { test: "Cholesterol", value: "185 mg/dL", range: "<200", status: "Normal", date: "2024-01-15" },
      { test: "Hemoglobin", value: "14.2 g/dL", range: "13.8-17.2", status: "Normal", date: "2024-01-15" }
    ]
  };

  return (
    <div className="space-y-6">
          {/* Header with Back Button */}
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Patient Health Record</h1>
              <p className="text-muted-foreground">Complete medical profile and history</p>
            </div>
          </div>

          {/* Patient Basic Info Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{patientData.name}</h2>
                  <p className="text-muted-foreground">ID: {patientData.id}</p>
                </div>
                <Badge variant="outline" className="ml-auto">
                  {patientData.visaStatus}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Age: {patientData.age} years</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{patientData.nationality}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{patientData.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{patientData.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="medical-history">Medical History</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Vital Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span>Vital Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Blood Group</p>
                        <p className="font-semibold">{patientData.bloodGroup}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Height</p>
                        <p className="font-semibold">{patientData.height}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Weight</p>
                        <p className="font-semibold">{patientData.weight}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Last Checkup</p>
                        <p className="font-semibold">{patientData.lastCheckup}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Employment Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Employment Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Occupation</p>
                      <p className="font-semibold">{patientData.occupation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Employer</p>
                      <p className="font-semibold">{patientData.employer}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Insurance Status</p>
                      <Badge variant={patientData.insuranceStatus === 'Active' ? 'default' : 'destructive'}>
                        {patientData.insuranceStatus}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Allergies & Conditions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                      <span>Allergies & Conditions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Known Allergies</p>
                      <div className="flex flex-wrap gap-2">
                        {patientData.allergies.map((allergy, index) => (
                          <Badge key={index} variant="destructive">{allergy}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Chronic Conditions</p>
                      <div className="flex flex-wrap gap-2">
                        {patientData.chronicConditions.map((condition, index) => (
                          <Badge key={index} variant="outline">{condition}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Vaccinations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Vaccination Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {patientData.vaccinations.map((vaccine, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{vaccine.name}</p>
                            <p className="text-sm text-muted-foreground">{vaccine.date}</p>
                          </div>
                          <Badge variant="default">{vaccine.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="medical-history">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Medical History</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patientData.medicalHistory.map((record, index) => (
                      <div key={index} className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">{record.type}</h4>
                            <p className="text-sm text-muted-foreground">{record.date} • {record.doctor}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                        <div>
                          <p className="text-sm"><strong>Diagnosis:</strong> {record.diagnosis}</p>
                          <p className="text-sm"><strong>Notes:</strong> {record.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medications">
              <Card>
                <CardHeader>
                  <CardTitle>Current Medications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patientData.currentMedications.map((medication, index) => (
                      <div key={index} className="flex items-center justify-between border rounded-lg p-4">
                        <div>
                          <h4 className="font-semibold">{medication.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {medication.dosage} • {medication.frequency}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Modify
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lab-results">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" />
                    <span>Latest Lab Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patientData.labResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between border rounded-lg p-4">
                        <div>
                          <h4 className="font-semibold">{result.test}</h4>
                          <p className="text-sm text-muted-foreground">
                            Range: {result.range} • Date: {result.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{result.value}</p>
                          <Badge 
                            variant={result.status === 'Normal' ? 'default' : 'destructive'}
                          >
                            {result.status}
                          </Badge>
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

export default PatientRecord;