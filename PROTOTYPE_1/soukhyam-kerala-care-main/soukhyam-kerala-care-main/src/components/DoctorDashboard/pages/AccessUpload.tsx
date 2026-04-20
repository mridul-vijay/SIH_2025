// import { useState } from "react";
// import { Upload, Search, FileText, User, Calendar, CheckCircle, AlertCircle, Clock, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// const AccessUpload = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Dummy records data
//   const recentUploads = [
//     {
//       id: 1,
//       patientName: "Ahmed Hassan",
//       patientId: "MH123456789012",
//       documentType: "Lab Results",
//       uploadDate: "2024-01-26",
//       uploadTime: "10:30 AM",
//       doctor: "Dr. Priya Sharma",
//       status: "Completed",
//       fileSize: "2.4 MB"
//     },
//     {
//       id: 2,
//       patientName: "Maria Santos",
//       patientId: "MH234567890123",
//       documentType: "X-Ray Report",
//       uploadDate: "2024-01-25",
//       uploadTime: "3:45 PM",
//       doctor: "Dr. Ahmed Ali",
//       status: "Processing",
//       fileSize: "5.1 MB"
//     },
//     {
//       id: 3,
//       patientName: "John Kumar",
//       patientId: "MH345678901234",
//       documentType: "Vaccination Record",
//       uploadDate: "2024-01-25",
//       uploadTime: "11:20 AM",
//       doctor: "Dr. Sarah Johnson",
//       status: "Completed",
//       fileSize: "1.2 MB"
//     },
//     {
//       id: 4,
//       patientName: "Ali Mohammad",
//       patientId: "MH456789012345",
//       documentType: "Medical Certificate",
//       uploadDate: "2024-01-24",
//       uploadTime: "2:15 PM",
//       doctor: "Dr. Priya Sharma",
//       status: "Under Review",
//       fileSize: "0.8 MB"
//     }
//   ];

//   const accessHistory = [
//     {
//       id: 1,
//       patientName: "Ahmed Hassan",
//       patientId: "MH123456789012",
//       accessDate: "2024-01-26",
//       accessTime: "11:45 AM",
//       doctor: "Dr. Priya Sharma",
//       action: "Viewed Medical History",
//       duration: "15 minutes"
//     },
//     {
//       id: 2,
//       patientName: "Maria Santos",
//       patientId: "MH234567890123",
//       accessDate: "2024-01-26",
//       accessTime: "9:30 AM",
//       doctor: "Dr. Ahmed Ali",
//       action: "Updated Lab Results",
//       duration: "8 minutes"
//     },
//     {
//       id: 3,
//       patientName: "John Kumar",
//       patientId: "MH345678901234",
//       accessDate: "2024-01-25",
//       accessTime: "4:20 PM",
//       doctor: "Dr. Sarah Johnson",
//       action: "Added Prescription",
//       duration: "12 minutes"
//     },
//     {
//       id: 4,
//       patientName: "Ali Mohammad",
//       patientId: "MH456789012345",
//       accessDate: "2024-01-25",
//       accessTime: "1:45 PM",
//       doctor: "Dr. Priya Sharma",
//       action: "Viewed Patient Profile",
//       duration: "6 minutes"
//     }
//   ];

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "Completed":
//         return <CheckCircle className="h-4 w-4 text-green-500" />;
//       case "Processing":
//         return <Clock className="h-4 w-4 text-blue-500" />;
//       case "Under Review":
//         return <AlertCircle className="h-4 w-4 text-orange-500" />;
//       default:
//         return <FileText className="h-4 w-4 text-gray-500" />;
//     }
//   };

//   const getStatusBadge = (status: string) => {
//     const variants = {
//       "Completed": "default",
//       "Processing": "secondary",
//       "Under Review": "outline"
//     } as const;
    
//     return (
//       <Badge variant={variants[status as keyof typeof variants] || "secondary"}>
//         {status}
//       </Badge>
//     );
//   };

//   return (
//     <div className="space-y-6">
//           {/* Header */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-foreground mb-2">
//               Access & Upload Records
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Manage patient records, upload documents, and track access history
//             </p>
//           </div>

//           {/* Quick Access Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             <Card className="primary-action-card">
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-3 text-primary-foreground">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
//                     <Upload className="h-5 w-5" />
//                   </div>
//                   <span>Quick Upload</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-2">
//                   <Input
//                     placeholder="Enter Patient ID"
//                     className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
//                   />
//                 </div>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button className="w-full accent-button">
//                       <Upload className="mr-2 h-4 w-4" />
//                       Upload Document
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Upload Medical Document</DialogTitle>
//                       <DialogDescription>
//                         Select the type of document and upload the file
//                       </DialogDescription>
//                     </DialogHeader>
//                     <div className="space-y-4">
//                       <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
//                         <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
//                         <p className="text-sm text-muted-foreground">
//                           Drag and drop files here or click to browse
//                         </p>
//                       </div>
//                       <div className="flex justify-end space-x-2">
//                         <Button variant="outline">Cancel</Button>
//                         <Button>Upload</Button>
//                       </div>
//                     </div>
//                   </DialogContent>
//                 </Dialog>
//               </CardContent>
//             </Card>

//             <Card className="dashboard-card">
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
//                     <Search className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>Quick Search</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <Input
//                   placeholder="Search by Patient ID or Name"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <Button className="w-full" variant="outline">
//                   <Search className="mr-2 h-4 w-4" />
//                   Search Records
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//             <Card>
//               <CardContent className="flex items-center justify-between p-6">
//                 <div>
//                   <p className="text-2xl font-bold text-primary">124</p>
//                   <p className="text-sm text-muted-foreground">Total Uploads</p>
//                 </div>
//                 <Upload className="h-8 w-8 text-primary" />
//               </CardContent>
//             </Card>
            
//             <Card>
//               <CardContent className="flex items-center justify-between p-6">
//                 <div>
//                   <p className="text-2xl font-bold text-green-600">89</p>
//                   <p className="text-sm text-muted-foreground">Completed</p>
//                 </div>
//                 <CheckCircle className="h-8 w-8 text-green-500" />
//               </CardContent>
//             </Card>
            
//             <Card>
//               <CardContent className="flex items-center justify-between p-6">
//                 <div>
//                   <p className="text-2xl font-bold text-blue-600">23</p>
//                   <p className="text-sm text-muted-foreground">Processing</p>
//                 </div>
//                 <Clock className="h-8 w-8 text-blue-500" />
//               </CardContent>
//             </Card>
            
//             <Card>
//               <CardContent className="flex items-center justify-between p-6">
//                 <div>
//                   <p className="text-2xl font-bold text-orange-600">12</p>
//                   <p className="text-sm text-muted-foreground">Under Review</p>
//                 </div>
//                 <AlertCircle className="h-8 w-8 text-orange-500" />
//               </CardContent>
//             </Card>
//           </div>

//           {/* Main Content Tabs */}
//           <Tabs defaultValue="uploads" className="space-y-6">
//             <TabsList className="grid w-full grid-cols-2">
//               <TabsTrigger value="uploads">Recent Uploads</TabsTrigger>
//               <TabsTrigger value="access">Access History</TabsTrigger>
//             </TabsList>

//             <TabsContent value="uploads">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-2">
//                     <FileText className="h-5 w-5" />
//                     <span>Recent Document Uploads</span>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {recentUploads.map((upload) => (
//                       <div key={upload.id} className="border rounded-lg p-4">
//                         <div className="flex items-center justify-between mb-3">
//                           <div className="flex items-center space-x-3">
//                             {getStatusIcon(upload.status)}
//                             <div>
//                               <h4 className="font-semibold">{upload.patientName}</h4>
//                               <p className="text-sm text-muted-foreground">ID: {upload.patientId}</p>
//                             </div>
//                           </div>
//                           {getStatusBadge(upload.status)}
//                         </div>
                        
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                           <div>
//                             <p className="text-muted-foreground">Document Type</p>
//                             <p className="font-medium">{upload.documentType}</p>
//                           </div>
//                           <div>
//                             <p className="text-muted-foreground">Upload Date</p>
//                             <p className="font-medium">{upload.uploadDate}</p>
//                           </div>
//                           <div>
//                             <p className="text-muted-foreground">Doctor</p>
//                             <p className="font-medium">{upload.doctor}</p>
//                           </div>
//                           <div>
//                             <p className="text-muted-foreground">File Size</p>
//                             <p className="font-medium">{upload.fileSize}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="access">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-2">
//                     <User className="h-5 w-5" />
//                     <span>Patient Record Access History</span>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {accessHistory.map((access) => (
//                       <div key={access.id} className="border rounded-lg p-4">
//                         <div className="flex items-center justify-between mb-3">
//                           <div className="flex items-center space-x-3">
//                             <User className="h-5 w-5 text-primary" />
//                             <div>
//                               <h4 className="font-semibold">{access.patientName}</h4>
//                               <p className="text-sm text-muted-foreground">ID: {access.patientId}</p>
//                             </div>
//                           </div>
//                           <Badge variant="outline">{access.duration}</Badge>
//                         </div>
                        
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                           <div>
//                             <p className="text-muted-foreground">Action</p>
//                             <p className="font-medium">{access.action}</p>
//                           </div>
//                           <div>
//                             <p className="text-muted-foreground">Date</p>
//                             <p className="font-medium">{access.accessDate}</p>
//                           </div>
//                           <div>
//                             <p className="text-muted-foreground">Time</p>
//                             <p className="font-medium">{access.accessTime}</p>
//                           </div>
//                           <div>
//   // Dummy records data
//   const recentUploads = [
//     {
//       id: 1,
//       patientName: "Ahmed Hassan",
//       patientId: "MH123456789012",
//       documentType: "Lab Results",
//       uploadDate: "2024-01-26",
//       uploadTime: "10:30 AM",
//       doctor: "Dr. Priya Sharma",
//       status: "Completed",
//       fileSize: "2.4 MB"
//     },
//     {
//       id: 2,
//       patientName: "Fatima Al-Zahra",
//       patientId: "MH987654321098",
//       documentType: "X-Ray Report",
//       uploadDate: "2024-01-26",
//       uploadTime: "09:15 AM",
//       doctor: "Dr. Rajesh Kumar",
//       status: "Processing",
//       fileSize: "5.1 MB"
//     },
//     {
//       id: 3,
//       patientName: "Mohammed Ali",
//       patientId: "MH456789123456",
//       documentType: "Prescription",
//       uploadDate: "2024-01-25",
//       uploadTime: "04:45 PM",
//       doctor: "Dr. Priya Sharma",
//       status: "Completed",
//       fileSize: "1.2 MB"
//     }
//   ];

//   const patientRecords = [
//     {
//       id: 1,
//       patientName: "Ahmed Hassan",
//       patientId: "MH123456789012",
//       age: 28,
//       location: "Kochi",
//       lastVisit: "2024-01-20",
//       condition: "Diabetes",
//       documents: 8,
//       status: "Active"
//     },
//     {
//       id: 2,
//       patientName: "Fatima Al-Zahra",
//       patientId: "MH987654321098",
//       age: 35,
//       location: "Trivandrum",
//       lastVisit: "2024-01-18",
//       condition: "Hypertension",
//       documents: 12,
//       status: "Active"
//     },
//     {
//       id: 3,
//       patientName: "Mohammed Ali",
//       patientId: "MH456789123456",
//       age: 42,
//       location: "Calicut",
//       lastVisit: "2024-01-15",
//       condition: "Asthma",
//       documents: 6,
//       status: "Follow-up Required"
//     }
//   ];

//   const filteredRecords = patientRecords.filter(record =>
//     record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     record.patientId.includes(searchTerm)
//   );

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "Completed": return "bg-green-100 text-green-800 border-green-200";
//       case "Processing": return "bg-yellow-100 text-yellow-800 border-yellow-200";
//       case "Active": return "bg-blue-100 text-blue-800 border-blue-200";
//       case "Follow-up Required": return "bg-orange-100 text-orange-800 border-orange-200";
//       default: return "bg-gray-100 text-gray-800 border-gray-200";
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-foreground">Access & Upload</h1>
//           <p className="text-muted-foreground mt-1">Manage patient records and document uploads</p>
//         </div>
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button className="bg-primary hover:bg-primary/90">
//               <Upload className="h-4 w-4 mr-2" />
//               Upload Document
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-md">
//             <DialogHeader>
//               <DialogTitle>Upload New Document</DialogTitle>
//               <DialogDescription>
//                 Select a file to upload for patient records
//               </DialogDescription>
//             </DialogHeader>
//             <div className="space-y-4">
//               <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
//                 <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
//                 <p className="text-sm text-muted-foreground">
//                   Drag and drop files here, or click to browse
//                 </p>
//               </div>
//               <Button className="w-full">Upload File</Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* Search Bar */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <Search className="h-5 w-5" />
//             Search Patient Records
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="flex gap-4">
//             <div className="flex-1">
//               <Input
//                 placeholder="Search by patient name or ID..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="h-10"
//               />
//             </div>
//             <Button variant="outline">
//               <Search className="h-4 w-4 mr-2" />
//               Search
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Main Content Tabs */}
//       <Tabs defaultValue="uploads" className="space-y-6">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="uploads">Recent Uploads</TabsTrigger>
//           <TabsTrigger value="records">Patient Records</TabsTrigger>
//         </TabsList>

//         <TabsContent value="uploads" className="space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <FileText className="h-5 w-5" />
//                 Recent Document Uploads
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {recentUploads.map((upload) => (
//                   <div key={upload.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
//                     <div className="flex items-start gap-4">
//                       <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
//                         <FileText className="h-5 w-5 text-primary" />
//                       </div>
//                       <div className="space-y-1">
//                         <div className="flex items-center gap-2">
//                           <h3 className="font-semibold text-foreground">{upload.patientName}</h3>
//                           <Badge variant="outline" className="text-xs">
//                             {upload.patientId}
//                           </Badge>
//                         </div>
//                         <p className="text-sm text-muted-foreground">{upload.documentType}</p>
//                         <div className="flex items-center gap-4 text-xs text-muted-foreground">
//                           <span className="flex items-center gap-1">
//                             <Calendar className="h-3 w-3" />
//                             {upload.uploadDate}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <Clock className="h-3 w-3" />
//                             {upload.uploadTime}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <User className="h-3 w-3" />
//                             {upload.doctor}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="text-right">
//                         <Badge className={getStatusColor(upload.status)}>
//                           {upload.status}
//                         </Badge>
//                         <p className="text-xs text-muted-foreground mt-1">{upload.fileSize}</p>
//                       </div>
//                       <Button variant="outline" size="sm">
//                         View
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="records" className="space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <User className="h-5 w-5" />
//                 Patient Records ({filteredRecords.length})
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid gap-4">
//                 {filteredRecords.map((record) => (
//                   <div key={record.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
//                     <div className="flex items-start gap-4">
//                       <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
//                         <User className="h-6 w-6 text-primary" />
//                       </div>
//                       <div className="space-y-1">
//                         <div className="flex items-center gap-2">
//                           <h3 className="font-semibold text-foreground">{record.patientName}</h3>
//                           <Badge variant="outline" className="text-xs">
//                             {record.patientId}
//                           </Badge>
//                         </div>
//                         <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                           <span>Age: {record.age}</span>
//                           <span className="flex items-center gap-1">
//                             <MapPin className="h-3 w-3" />
//                             {record.location}
//                           </span>
//                           <span>Last Visit: {record.lastVisit}</span>
//                         </div>
//                         <p className="text-sm text-foreground font-medium">{record.condition}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="text-right space-y-1">
//                         <Badge className={getStatusColor(record.status)}>
//                           {record.status}
//                         </Badge>
//                         <p className="text-xs text-muted-foreground">
//                           {record.documents} documents
//                         </p>
//                       </div>
//                       <Button variant="outline" size="sm">
//                         Access Records
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default AccessUpload;

import { useState } from "react";
import { Upload, Search, FileText, User, Calendar, CheckCircle, AlertCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const AccessUpload = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Recent uploads data
  const recentUploads = [
    {
      id: 1,
      patientName: "Ahmed Hassan",
      patientId: "MH123456789012",
      documentType: "Lab Results",
      uploadDate: "2024-01-26",
      uploadTime: "10:30 AM",
      doctor: "Dr. Priya Sharma",
      status: "Completed",
      fileSize: "2.4 MB"
    },
    {
      id: 2,
      patientName: "Fatima Al-Zahra",
      patientId: "MH987654321098",
      documentType: "X-Ray Report",
      uploadDate: "2024-01-26",
      uploadTime: "09:15 AM",
      doctor: "Dr. Rajesh Kumar",
      status: "Processing",
      fileSize: "5.1 MB"
    },
    {
      id: 3,
      patientName: "Mohammed Ali",
      patientId: "MH456789123456",
      documentType: "Prescription",
      uploadDate: "2024-01-25",
      uploadTime: "04:45 PM",
      doctor: "Dr. Priya Sharma",
      status: "Completed",
      fileSize: "1.2 MB"
    },
    {
      id: 4,
      patientName: "Ali Mohammad",
      patientId: "MH456789012345",
      documentType: "Medical Certificate",
      uploadDate: "2024-01-24",
      uploadTime: "2:15 PM",
      doctor: "Dr. Sarah Johnson",
      status: "Under Review",
      fileSize: "0.8 MB"
    }
  ];

  // Patient records data
  const patientRecords = [
    {
      id: 1,
      patientName: "Ahmed Hassan",
      patientId: "MH123456789012",
      age: 28,
      location: "Kochi",
      lastVisit: "2024-01-20",
      condition: "Diabetes",
      documents: 8,
      status: "Active"
    },
    {
      id: 2,
      patientName: "Fatima Al-Zahra",
      patientId: "MH987654321098",
      age: 35,
      location: "Trivandrum",
      lastVisit: "2024-01-18",
      condition: "Hypertension",
      documents: 12,
      status: "Active"
    },
    {
      id: 3,
      patientName: "Mohammed Ali",
      patientId: "MH456789123456",
      age: 42,
      location: "Calicut",
      lastVisit: "2024-01-15",
      condition: "Asthma",
      documents: 6,
      status: "Follow-up Required"
    }
  ];

  // Access history data
  const accessHistory = [
    {
      id: 1,
      patientName: "Ahmed Hassan",
      patientId: "MH123456789012",
      accessDate: "2024-01-26",
      accessTime: "11:45 AM",
      doctor: "Dr. Priya Sharma",
      action: "Viewed Medical History",
      duration: "15 minutes"
    },
    {
      id: 2,
      patientName: "Fatima Al-Zahra",
      patientId: "MH987654321098",
      accessDate: "2024-01-26",
      accessTime: "9:30 AM",
      doctor: "Dr. Ahmed Ali",
      action: "Updated Lab Results",
      duration: "8 minutes"
    },
    {
      id: 3,
      patientName: "Mohammed Ali",
      patientId: "MH456789123456",
      accessDate: "2024-01-25",
      accessTime: "4:20 PM",
      doctor: "Dr. Sarah Johnson",
      action: "Added Prescription",
      duration: "12 minutes"
    }
  ];

  const filteredRecords = patientRecords.filter(record =>
    record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.patientId.includes(searchTerm)
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Processing":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "Under Review":
        return <AlertCircle className="h-4 w-4 text-orange-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": 
        return "bg-green-100 text-green-800 border-green-200";
      case "Processing": 
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Under Review":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Active": 
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Follow-up Required": 
        return "bg-orange-100 text-orange-800 border-orange-200";
      default: 
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Access & Upload</h1>
          <p className="text-muted-foreground mt-1">Manage patient records and document uploads</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload New Document</DialogTitle>
              <DialogDescription>
                Select a file to upload for patient records
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop files here, or click to browse
                </p>
              </div>
              <Button className="w-full">Upload File</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Upload Card */}
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <Upload className="h-5 w-5" />
              </div>
              <span>Quick Upload</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Enter Patient ID"
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Upload className="mr-2 h-4 w-4" />
              Upload Document
            </Button>
          </CardContent>
        </Card>

        {/* Quick Search Card */}
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <span>Quick Search</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Search by Patient ID or Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="w-full" variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Search Records
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-2xl font-bold text-primary">124</p>
              <p className="text-sm text-muted-foreground">Total Uploads</p>
            </div>
            <Upload className="h-8 w-8 text-primary" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-2xl font-bold text-green-600">89</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-2xl font-bold text-blue-600">23</p>
              <p className="text-sm text-muted-foreground">Processing</p>
            </div>
            <Clock className="h-8 w-8 text-blue-500" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-2xl font-bold text-orange-600">12</p>
              <p className="text-sm text-muted-foreground">Under Review</p>
            </div>
            <AlertCircle className="h-8 w-8 text-orange-500" />
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="uploads" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="uploads">Recent Uploads</TabsTrigger>
          <TabsTrigger value="records">Patient Records</TabsTrigger>
          <TabsTrigger value="access">Access History</TabsTrigger>
        </TabsList>

        {/* Recent Uploads Tab */}
        <TabsContent value="uploads">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Document Uploads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUploads.map((upload) => (
                  <div key={upload.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {getStatusIcon(upload.status)}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{upload.patientName}</h3>
                          <Badge variant="outline" className="text-xs">
                            {upload.patientId}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{upload.documentType}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {upload.uploadDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {upload.uploadTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {upload.doctor}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <Badge className={getStatusColor(upload.status)}>
                          {upload.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{upload.fileSize}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patient Records Tab */}
        <TabsContent value="records">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Patient Records ({filteredRecords.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {filteredRecords.map((record) => (
                  <div key={record.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{record.patientName}</h3>
                          <Badge variant="outline" className="text-xs">
                            {record.patientId}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Age: {record.age}</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {record.location}
                          </span>
                          <span>Last Visit: {record.lastVisit}</span>
                        </div>
                        <p className="text-sm text-foreground font-medium">{record.condition}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right space-y-1">
                        <Badge className={getStatusColor(record.status)}>
                          {record.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          {record.documents} documents
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Access Records
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Access History Tab */}
        <TabsContent value="access">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Patient Access History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accessHistory.map((access) => (
                  <div key={access.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-semibold">{access.patientName}</h4>
                          <p className="text-sm text-muted-foreground">ID: {access.patientId}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{access.duration}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Action</p>
                        <p className="font-medium">{access.action}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">{access.accessDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Time</p>
                        <p className="font-medium">{access.accessTime}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Doctor</p>
                        <p className="font-medium">{access.doctor}</p>
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

export default AccessUpload;