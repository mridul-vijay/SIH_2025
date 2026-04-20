// import AccessPatientCard from "@/components/dashboard/AccessPatientCard";
// import AppointmentsCard from "@/components/dashboard/AppointmentsCard";
// import DoctorProfileCard from "@/components/dashboard/DoctorProfileCard";

// const Index = () => {
//   return (
//     <div className="space-y-6">
//           {/* Welcome Section */}
//           <div className="mb-8 animate-fade-in">
//             <h2 className="text-3xl font-bold text-foreground mb-2">
//               Welcome, Dr. Priya Sharma
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Manage migrant worker health records securely and efficiently
//             </p>
//           </div>

//           {/* Dashboard Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//             {/* Primary Action Card - Full Width on Large Screens */}
//             <div className="lg:col-span-2">
//               <AccessPatientCard />
//             </div>
            
//             {/* Doctor Profile */}
//             <div className="lg:col-span-1">
//               <DoctorProfileCard />
//             </div>
            
//             {/* Today's Appointments */}
//             <div className="lg:col-span-1">
//               <AppointmentsCard />
//             </div>
//           </div>

//           {/* Quick Stats Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
//             <div className="dashboard-card text-center">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
//                   <span className="text-2xl font-bold text-success">247</span>
//                 </div>
//               </div>
//               <h3 className="font-semibold text-foreground">Total Patients</h3>
//               <p className="text-sm text-muted-foreground">This month</p>
//             </div>
            
//             <div className="dashboard-card text-center">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
//                   <span className="text-2xl font-bold text-accent">18</span>
//                 </div>
//               </div>
//               <h3 className="font-semibold text-foreground">Records Updated</h3>
//               <p className="text-sm text-muted-foreground">Today</p>
//             </div>
            
//             <div className="dashboard-card text-center">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
//                   <span className="text-2xl font-bold text-primary">99.2%</span>
//                 </div>
//               </div>
//               <h3 className="font-semibold text-foreground">System Uptime</h3>
//               <p className="text-sm text-muted-foreground">Last 30 days</p>
//             </div>
//           </div>
//     </div>
//   );
// };

// export default Index;


import AccessPatientCard from "@/components/dashboard/AccessPatientCard";
import AppointmentsCard from "@/components/dashboard/AppointmentsCard";
import DoctorProfileCard from "@/components/dashboard/DoctorProfileCard";

const Index = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-8 opacity-0 animate-in fade-in duration-500">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Welcome, Dr. Priya Sharma
        </h2>
        <p className="text-lg text-muted-foreground">
          Manage migrant worker health records securely and efficiently
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Primary Action Card - Full Width on Large Screens */}
        <div className="lg:col-span-2">
          <AccessPatientCard />
        </div>
        
        {/* Doctor Profile */}
        <div className="lg:col-span-1">
          <DoctorProfileCard />
        </div>
        
        {/* Today's Appointments */}
        <div className="lg:col-span-1">
          <AppointmentsCard />
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transform translate-y-4 animate-in slide-in-from-bottom duration-500">
        <div className="bg-card text-card-foreground rounded-lg border p-6 shadow-sm text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <span className="text-2xl font-bold text-green-600">247</span>
            </div>
          </div>
          <h3 className="font-semibold text-foreground">Total Patients</h3>
          <p className="text-sm text-muted-foreground">This month</p>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg border p-6 shadow-sm text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl font-bold text-blue-600">18</span>
            </div>
          </div>
          <h3 className="font-semibold text-foreground">Records Updated</h3>
          <p className="text-sm text-muted-foreground">Today</p>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg border p-6 shadow-sm text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span className="text-2xl font-bold text-primary">99.2%</span>
            </div>
          </div>
          <h3 className="font-semibold text-foreground">System Uptime</h3>
          <p className="text-sm text-muted-foreground">Last 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Index;