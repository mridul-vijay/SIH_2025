// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowLeft, Phone, IdCard, Shield, User, Building, Crown, Users, Clock } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card } from '@/components/ui/card';
// import heroImage from '@/assets/kerala-health-hero.jpg';

// // Role configurations with unique themes
// const roleConfigs = {
//   'migrant-worker': {
//     title: 'Migrant Worker',
//     icon: Users,
//     gradient: 'from-orange-500 to-amber-600',
//     description: 'Access your health records and book medical appointments',
//     illustration: 'Medical worker with construction helmet and health documents',
//   },
//   doctor: {
//     title: 'Doctor',
//     icon: User,
//     gradient: 'from-teal-500 to-cyan-600',
//     description: 'Manage patient records and medical consultations',
//     illustration: 'Professional doctor with stethoscope and digital health dashboard',
//   },
//   admin: {
//     title: 'Admin',
//     icon: Building,
//     gradient: 'from-blue-500 to-indigo-600',
//     description: 'Coordinate healthcare services and manage regional operations',
//     illustration: 'Healthcare administrator with organizational charts and system management',
//   },
//   superadmin: {
//     title: 'SuperAdmin',
//     icon: Crown,
//     gradient: 'from-purple-500 to-pink-600',
//     description: 'Manage system configurations and oversee all operations',
//     illustration: 'System administrator with server management and data analytics',
//   },
// };

// interface KeralaAuthPageProps {
//   selectedRole: keyof typeof roleConfigs;
//   selectedAction: 'signIn' | 'signUp';
//   onBack: () => void;
// }

// interface OTPInputProps {
//   onConfirm: (otp: string) => void;
//   onResend: () => void;
//   countdown: number;
// }

// const OTPInput: React.FC<OTPInputProps> = ({ onConfirm, onResend, countdown }) => {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleOtpChange = (index: number, value: string) => {
//     if (value.length <= 1 && /^\d*$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Auto-focus next input
//       if (value && index < 5) {
//         const nextInput = document.getElementById(`otp-${index + 1}`);
//         nextInput?.focus();
//       }
//     }
//   };

//   const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       const prevInput = document.getElementById(`otp-${index - 1}`);
//       prevInput?.focus();
//     }
//   };

//   const handleConfirm = async () => {
//     const otpString = otp.join('');
//     if (otpString.length === 6) {
//       setIsLoading(true);
//       // Simulate API call
//       setTimeout(() => {
//         onConfirm(otpString);
//         setIsLoading(false);
//       }, 1500);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, height: 0 }}
//       animate={{ opacity: 1, height: 'auto' }}
//       exit={{ opacity: 0, height: 0 }}
//       className="space-y-4"
//     >
//       <div className="text-center">
//         <p className="text-foreground-secondary text-sm mb-4">
//           Enter the 6-digit OTP sent to your registered number
//         </p>
//       </div>

//       <div className="flex gap-2 justify-center">
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             id={`otp-${index}`}
//             type="text"
//             value={digit}
//             onChange={(e) => handleOtpChange(index, e.target.value)}
//             onKeyDown={(e) => handleKeyDown(index, e)}
//             className="w-10 h-10 text-center text-lg font-semibold border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
//             maxLength={1}
//           />
//         ))}
//       </div>

//       <Button
//         onClick={handleConfirm}
//         disabled={otp.join('').length !== 6 || isLoading}
//         className="kerala-btn-primary w-full"
//       >
//         {isLoading ? (
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
//           />
//         ) : (
//           'Confirm'
//         )}
//       </Button>

//       <div className="text-center">
//         {countdown > 0 ? (
//           <p className="text-foreground-secondary text-sm flex items-center justify-center gap-1">
//             <Clock className="w-4 h-4" />
//             Resend OTP in {countdown}s
//           </p>
//         ) : (
//           <button
//             onClick={onResend}
//             className="text-primary hover:text-primary-hover font-medium text-sm transition-colors"
//           >
//             Resend OTP
//           </button>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// const KeralaAuthPage: React.FC<KeralaAuthPageProps> = ({ selectedRole, selectedAction, onBack }) => {
//   const [authMode, setAuthMode] = useState<'signIn' | 'signUp'>(selectedAction);
//   const [signInMethod, setSignInMethod] = useState<'mobile' | 'healthId'>('mobile');
//   const [signUpMethod, setSignUpMethod] = useState<'aadhaar' | 'digilocker'>('aadhaar');
//   const [showOtpInput, setShowOtpInput] = useState(false);
//   const [otpCountdown, setOtpCountdown] = useState(0);
//   const [formData, setFormData] = useState({
//     mobile: '',
//     healthId: '',
//     aadhaar: '',
//   });
//   const [errors, setErrors] = useState({
//     mobile: '',
//     healthId: '',
//     aadhaar: '',
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const roleConfig = roleConfigs[selectedRole];
//   const IconComponent = roleConfig.icon;

//   useEffect(() => {
//     if (otpCountdown > 0) {
//       const timer = setTimeout(() => setOtpCountdown(otpCountdown - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [otpCountdown]);

//   const validateInput = (type: string, value: string): string => {
//     switch (type) {
//       case 'mobile':
//         if (!/^\d{10}$/.test(value)) {
//           return 'Mobile number must be exactly 10 digits';
//         }
//         break;
//       case 'healthId':
//         if (!/^\d{12}$/.test(value)) {
//           return `${selectedRole === 'doctor' ? 'Doctor ID' : 'Health ID'} must be exactly 12 digits`;
//         }
//         break;
//       case 'aadhaar':
//         if (!/^\d{12}$/.test(value)) {
//           return 'Aadhaar number must be exactly 12 digits';
//         }
//         break;
//     }
//     return '';
//   };

//   const handleVerify = async () => {
//     let currentField: string;
//     let currentValue: string;
    
//     if (authMode === 'signIn') {
//       currentField = signInMethod === 'mobile' ? 'mobile' : 'healthId';
//       currentValue = formData[currentField as keyof typeof formData];
//     } else {
//       // Sign up mode
//       if (selectedRole === 'doctor') {
//         currentField = 'mobile';
//         currentValue = formData.mobile;
//       } else {
//         currentField = signUpMethod === 'aadhaar' ? 'aadhaar' : '';
//         currentValue = formData[currentField as keyof typeof formData];
//       }
//     }
//     const error = validateInput(currentField, currentValue);
    
//     setErrors(prev => ({ ...prev, [currentField]: error }));
    
//     if (error) return;

//     setIsLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       setShowOtpInput(true);
//       setOtpCountdown(30);
//       setIsLoading(false);
//     }, 1000);
//   };

//   const handleOtpConfirm = (otp: string) => {
//     console.log('OTP Confirmed:', otp);
//     setShowOtpInput(false);
//     // Handle successful authentication
//   };

//   const handleOtpResend = () => {
//     setOtpCountdown(30);
//     // Simulate resend API call
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="min-h-screen bg-gradient-to-br from-background to-surface-secondary"
//     >
//       {/* Two-panel layout */}
//       <div className="flex min-h-screen">
//         {/* Left Panel - Branding & Illustration */}
//         <motion.div
//           variants={itemVariants}
//           className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
//         >
//           <div className="absolute inset-0 kerala-gradient kerala-animate-gradient opacity-90" />
//           <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
//             {/* Kerala Government Emblem */}
//             <motion.div
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="mb-8"
//             >
//               <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                 <IconComponent className="w-12 h-12" />
//               </div>
//             </motion.div>

//             {/* Project Branding */}
//             <motion.div
//               variants={itemVariants}
//               className="text-center mb-8"
//             >
//               <h1 className="text-4xl font-bold mb-2">Kerala Health Portal</h1>
//               <p className="text-xl text-white/90">Digital Health Initiative</p>
//               <div className="w-24 h-1 bg-white/40 mx-auto mt-4 rounded-full" />
//             </motion.div>

//             {/* Role-specific content */}
//             <motion.div
//               variants={itemVariants}
//               className="text-center mb-8"
//             >
//               <h2 className="text-2xl font-semibold mb-3">{roleConfig.title} Portal</h2>
//               <p className="text-white/80 max-w-md">{roleConfig.description}</p>
//             </motion.div>

//             {/* Hero Illustration */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 6, repeat: Infinity }}
//               className="w-full max-w-lg"
//             >
//               <img
//                 src={heroImage}
//                 alt="Kerala Health Portal"
//                 className="w-full h-auto rounded-2xl shadow-2xl"
//               />
//             </motion.div>

//             {/* Government Footer */}
//             <motion.div
//               variants={itemVariants}
//               className="absolute bottom-8 left-8 right-8 text-center"
//             >
//               <p className="text-white/70 text-sm">
//                 Powered by Kerala Government Health Initiative
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Right Panel - Authentication Form */}
//         <motion.div
//           variants={itemVariants}
//           className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12"
//         >
//           <div className="w-full max-w-md">
//             {/* Back Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={onBack}
//               className="flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors mb-8"
//             >
//               <ArrowLeft className="w-5 h-5" />
//               Back to Role Selection
//             </motion.button>

//             {/* Form Card */}
//             <Card className="kerala-card p-8">
//               <motion.div variants={itemVariants} className="mb-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className={`w-12 h-12 bg-gradient-to-r ${roleConfig.gradient} rounded-xl flex items-center justify-center`}>
//                     <IconComponent className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-foreground">{roleConfig.title}</h2>
//                     <p className="text-foreground-secondary text-sm">Authentication Portal</p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Auth Mode Tabs */}
//               <motion.div variants={itemVariants} className="flex gap-2 mb-8">
//                 <button
//                   onClick={() => setAuthMode('signIn')}
//                   className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
//                     authMode === 'signIn'
//                       ? 'kerala-btn-primary'
//                       : 'bg-surface-secondary text-foreground-secondary hover:bg-border'
//                   }`}
//                 >
//                   Sign In
//                 </button>
//                 <button
//                   onClick={() => setAuthMode('signUp')}
//                   className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
//                     authMode === 'signUp'
//                       ? 'kerala-btn-primary'
//                       : 'bg-surface-secondary text-foreground-secondary hover:bg-border'
//                   }`}
//                 >
//                   Sign Up
//                 </button>
//               </motion.div>

//               <AnimatePresence mode="wait">
//                 {authMode === 'signIn' ? (
//                   <motion.div
//                     key="signin"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     className="space-y-6"
//                   >
//                     {/* Sign In Method Selection */}
//                     <div className="space-y-3">
//                       <button
//                         onClick={() => setSignInMethod('mobile')}
//                         className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
//                           signInMethod === 'mobile'
//                             ? 'border-primary bg-primary/5'
//                             : 'border-border hover:border-primary/50'
//                         }`}
//                       >
//                         <Phone className="w-5 h-5 text-primary" />
//                         <span className="font-medium">Sign in with Mobile Number</span>
//                       </button>
//                       <button
//                         onClick={() => setSignInMethod('healthId')}
//                         className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
//                           signInMethod === 'healthId'
//                             ? 'border-primary bg-primary/5'
//                             : 'border-border hover:border-primary/50'
//                         }`}
//                       >
//                         <IdCard className="w-5 h-5 text-primary" />
//                         <span className="font-medium">
//                           Sign in with {selectedRole === 'doctor' ? 'Doctor ID' : 'Health ID'}
//                         </span>
//                       </button>
//                     </div>

//                     {/* Input Field */}
//                     <div className="space-y-4">
//                       <div>
//                         <Input
//                           type={signInMethod === 'mobile' ? 'tel' : 'text'}
//                           placeholder={signInMethod === 'mobile' ? 'Enter Mobile Number' : `Enter ${selectedRole === 'doctor' ? 'Doctor ID' : 'Health ID'}`}
//                           value={signInMethod === 'mobile' ? formData.mobile : formData.healthId}
//                           onChange={(e) => {
//                             const field = signInMethod === 'mobile' ? 'mobile' : 'healthId';
//                             const value = e.target.value.replace(/\D/g, ''); // Only allow digits
//                             setFormData(prev => ({ ...prev, [field]: value }));
//                             setErrors(prev => ({ ...prev, [field]: '' }));
//                           }}
//                           className={`kerala-input ${errors[signInMethod === 'mobile' ? 'mobile' : 'healthId'] ? 'border-red-500' : ''}`}
//                           maxLength={signInMethod === 'mobile' ? 10 : 12}
//                         />
//                         {errors[signInMethod === 'mobile' ? 'mobile' : 'healthId'] && (
//                           <p className="text-red-500 text-sm mt-1">
//                             {errors[signInMethod === 'mobile' ? 'mobile' : 'healthId']}
//                           </p>
//                         )}
//                       </div>
//                       <Button
//                         onClick={handleVerify}
//                         disabled={isLoading || showOtpInput}
//                         className="kerala-btn-primary w-full"
//                       >
//                         {isLoading ? (
//                           <motion.div
//                             animate={{ rotate: 360 }}
//                             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                             className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                           />
//                         ) : (
//                           'Verify'
//                         )}
//                       </Button>

//                       {/* OTP Input */}
//                       <AnimatePresence>
//                         {showOtpInput && (
//                           <OTPInput
//                             onConfirm={handleOtpConfirm}
//                             onResend={handleOtpResend}
//                             countdown={otpCountdown}
//                           />
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="signup"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     className="space-y-6"
//                   >
//                     {/* Sign Up Content */}
//                     {selectedRole === 'doctor' ? (
//                       // Doctor sign up - only mobile number
//                       <div className="space-y-4">
//                         <div className="p-4 rounded-xl border-2 border-primary bg-primary/5 flex items-center gap-3">
//                           <Phone className="w-5 h-5 text-primary" />
//                           <span className="font-medium">Sign up with Mobile Number</span>
//                         </div>
//                         <div>
//                           <Input
//                             type="tel"
//                             placeholder="Enter Mobile Number"
//                             value={formData.mobile}
//                             onChange={(e) => {
//                               const value = e.target.value.replace(/\D/g, ''); // Only allow digits
//                               setFormData(prev => ({ ...prev, mobile: value }));
//                               setErrors(prev => ({ ...prev, mobile: '' }));
//                             }}
//                             className={`kerala-input ${errors.mobile ? 'border-red-500' : ''}`}
//                             maxLength={10}
//                           />
//                           {errors.mobile && (
//                             <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
//                           )}
//                         </div>
//                         <Button
//                           onClick={handleVerify}
//                           disabled={isLoading || showOtpInput}
//                           className="kerala-btn-primary w-full"
//                         >
//                           {isLoading ? (
//                             <motion.div
//                               animate={{ rotate: 360 }}
//                               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                               className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                             />
//                           ) : (
//                             'Verify Mobile Number'
//                           )}
//                         </Button>

//                         {/* OTP Input */}
//                         <AnimatePresence>
//                           {showOtpInput && (
//                             <OTPInput
//                               onConfirm={handleOtpConfirm}
//                               onResend={handleOtpResend}
//                               countdown={otpCountdown}
//                             />
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     ) : (
//                       // Other roles sign up - Aadhaar and DigiLocker options
//                       <>
//                         {/* Sign Up Method Selection */}
//                         <div className="space-y-3">
//                           <button
//                             onClick={() => setSignUpMethod('aadhaar')}
//                             className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
//                               signUpMethod === 'aadhaar'
//                                 ? 'border-primary bg-primary/5'
//                                 : 'border-border hover:border-primary/50'
//                             }`}
//                           >
//                             <IdCard className="w-5 h-5 text-primary" />
//                             <span className="font-medium">Sign up with Aadhaar</span>
//                           </button>
//                           <button
//                             onClick={() => setSignUpMethod('digilocker')}
//                             className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
//                               signUpMethod === 'digilocker'
//                                 ? 'border-primary bg-primary/5'
//                                 : 'border-border hover:border-primary/50'
//                             }`}
//                           >
//                             <Shield className="w-5 h-5 text-primary" />
//                             <span className="font-medium">Continue with DigiLocker</span>
//                           </button>
//                         </div>

//                         {/* Input Field for Aadhaar */}
//                         {signUpMethod === 'aadhaar' && (
//                           <div className="space-y-4">
//                             <div>
//                               <Input
//                                 type="text"
//                                 placeholder="Enter Aadhaar Number"
//                                 value={formData.aadhaar}
//                                 onChange={(e) => {
//                                   const value = e.target.value.replace(/\D/g, ''); // Only allow digits
//                                   setFormData(prev => ({ ...prev, aadhaar: value }));
//                                   setErrors(prev => ({ ...prev, aadhaar: '' }));
//                                 }}
//                                 className={`kerala-input ${errors.aadhaar ? 'border-red-500' : ''}`}
//                                 maxLength={12}
//                               />
//                               {errors.aadhaar && (
//                                 <p className="text-red-500 text-sm mt-1">{errors.aadhaar}</p>
//                               )}
//                             </div>
//                             <Button
//                               onClick={handleVerify}
//                               disabled={isLoading || showOtpInput}
//                               className="kerala-btn-primary w-full"
//                             >
//                               {isLoading ? (
//                                 <motion.div
//                                   animate={{ rotate: 360 }}
//                                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                                   className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                                 />
//                               ) : (
//                                 'Verify Aadhaar'
//                               )}
//                             </Button>

//                             {/* OTP Input */}
//                             <AnimatePresence>
//                               {showOtpInput && (
//                                 <OTPInput
//                                   onConfirm={handleOtpConfirm}
//                                   onResend={handleOtpResend}
//                                   countdown={otpCountdown}
//                                 />
//                               )}
//                             </AnimatePresence>
//                           </div>
//                         )}

//                         {/* DigiLocker Integration */}
//                         {signUpMethod === 'digilocker' && (
//                           <div className="space-y-4">
//                             <div className="text-center p-8 bg-primary/5 rounded-xl border border-primary/20">
//                               <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
//                               <h3 className="font-semibold text-foreground mb-2">DigiLocker Integration</h3>
//                               <p className="text-foreground-secondary text-sm mb-4">
//                                 Securely access your documents from DigiLocker
//                               </p>
//                               <Button className="kerala-btn-secondary">
//                                 Connect DigiLocker
//                               </Button>
//                             </div>
//                           </div>
//                         )}
//                       </>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </Card>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default KeralaAuthPage;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Phone, IdCard, Shield, User, Building, Crown, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const API_BASE = 'http://localhost:3000';

// Role configurations with unique themes
const roleConfigs = {
  'migrant-worker': {
    title: 'Migrant Worker',
    icon: Users,
    gradient: 'from-orange-500 to-amber-600',
    description: 'Access your health records and book medical appointments',
  },
  doctor: {
    title: 'Doctor',
    icon: User,
    gradient: 'from-teal-500 to-cyan-600',
    description: 'Manage patient records and medical consultations',
  },
  admin: {
    title: 'Admin',
    icon: Building,
    gradient: 'from-blue-500 to-indigo-600',
    description: 'Coordinate healthcare services and manage regional operations',
  },
};

interface KeralaAuthPageProps {
  selectedRole: 'migrant-worker' | 'doctor' | 'admin' | 'superadmin';
  selectedAction: 'signIn' | 'signUp';
  onBack: () => void;
}

interface OTPInputProps {
  onConfirm: (otp: string) => void;
  onResend: () => void;
  countdown: number;
}

const OTPInput: React.FC<OTPInputProps> = ({ onConfirm, onResend, countdown }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 7) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }

      // Auto-confirm when all 8 digits are entered
      if (index === 7 && value && newOtp.every(digit => digit !== '')) {
        const otpString = newOtp.join('');
        console.log('Auto-confirming OTP:', otpString);
        setIsLoading(true);
        setTimeout(() => {
          onConfirm(otpString);
          setIsLoading(false);
        }, 1000);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleConfirm = async () => {
    const otpString = otp.join('');
    console.log('Manual confirm clicked, OTP:', otpString);
    if (otpString.length === 8) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Calling onConfirm with OTP:', otpString);
        onConfirm(otpString);
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="space-y-4"
    >
      <div className="text-center">
        <p className="text-gray-600 text-sm mb-4">
          Enter the 8-digit OTP sent to your registered number
        </p>
      </div>

      <div className="flex gap-2 justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-10 h-10 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            maxLength={1}
          />
        ))}
      </div>

      <Button
        onClick={handleConfirm}
        disabled={otp.join('').length !== 8 || isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
          />
        ) : (
          'Confirm'
        )}
      </Button>

      <div className="text-center">
        {countdown > 0 ? (
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
            <Clock className="w-4 h-4" />
            Resend OTP in {countdown}s
          </p>
        ) : (
          <button
            onClick={onResend}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            Resend OTP
          </button>
        )}
      </div>
    </motion.div>
  );
};

const KeralaAuthPage: React.FC<KeralaAuthPageProps> = ({ selectedRole, selectedAction, onBack }) => {
  const navigate = useNavigate();
  const [signInMethod, setSignInMethod] = useState<'mobile' | 'healthId'>('mobile');
  const [signUpMethod, setSignUpMethod] = useState<'aadhaar' | 'digilocker'>('aadhaar');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(0);
  const [formData, setFormData] = useState({
    mobile: '',
    healthId: '',
    aadhaar: '',
  });
  const [errors, setErrors] = useState({
    mobile: '',
    healthId: '',
    aadhaar: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentIdentifier, setCurrentIdentifier] = useState('');
  const [currentKey, setCurrentKey] = useState('');
  const [currentVerifyEndpoint, setCurrentVerifyEndpoint] = useState('');

  // Type assertion to include 'migrant-worker' in the role type
  const roleConfig = roleConfigs[selectedRole as keyof typeof roleConfigs];
  const IconComponent = roleConfig.icon;

  useEffect(() => {
    if (otpCountdown > 0) {
      const timer = setTimeout(() => setOtpCountdown(otpCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpCountdown]);

  const validateInput = (type: string, value: string): string => {
    switch (type) {
      case 'mobile':
        if (!/^\d{10}$/.test(value)) {
          return 'Mobile number must be exactly 10 digits';
        }
        break;
      case 'healthId':
        if (!/^\d{12}$/.test(value)) {
          return `${selectedRole === 'doctor' ? 'Doctor ID' : 'Health ID'} must be exactly 12 digits`;
        }
        break;
      case 'aadhaar':
        if (!/^\d{12}$/.test(value)) {
          return 'Aadhaar number must be exactly 12 digits';
        }
        break;
    }
    return '';
  };

const handleVerify = async () => {
    // For Migrant Worker and Doctor sign-in, show OTP input but mock verification
    if (selectedAction === 'signIn' && (selectedRole === 'migrant-worker' || selectedRole === 'doctor')) {
      let currentField = 'mobile';
      let currentValue = formData.mobile;
      const error = validateInput(currentField, currentValue);
      setErrors(prev => ({ ...prev, [currentField]: error }));
      if (error) {
        console.log('Validation error:', error);
        return;
      }
      setCurrentIdentifier(formData.mobile);
      setCurrentKey('mobileNumber');
      setCurrentVerifyEndpoint('/api/signin/verify-otp');
      setShowOtpInput(true);
      setOtpCountdown(30);
      return;
    }

    console.log('handleVerify called');
    let currentField: string;
    let currentValue: string;
    
    if (selectedAction === 'signIn') {
      currentField = signInMethod === 'mobile' ? 'mobile' : 'healthId';
      currentValue = formData[currentField as keyof typeof formData];
    } else {
      // Sign up mode
      if (selectedRole === 'doctor') {
        currentField = 'mobile';
        currentValue = formData.mobile;
      } else {
        currentField = signUpMethod === 'aadhaar' ? 'aadhaar' : '';
        currentValue = formData[currentField as keyof typeof formData];
      }
    }
    const error = validateInput(currentField, currentValue);
    
    setErrors(prev => ({ ...prev, [currentField]: error }));
    
    if (error) {
      console.log('Validation error:', error);
      return;
    }

    setIsLoading(true);

    // Set current states for verification
    if (selectedAction === 'signIn') {
      if (signInMethod === 'mobile') {
        setCurrentIdentifier(formData.mobile);
        setCurrentKey('mobileNumber');
        setCurrentVerifyEndpoint('/api/signin/verify-otp');
      } else {
        setCurrentIdentifier(formData.healthId);
        setCurrentKey('healthId');
        setCurrentVerifyEndpoint('/api/signin/health/verify-otp');
      }
    } else {
      // Sign up
      if (selectedRole === 'doctor') {
        setCurrentIdentifier(formData.mobile);
        setCurrentKey('mobileNumber');
        setCurrentVerifyEndpoint('/api/signin/verify-otp');
      } else {
        if (signUpMethod === 'aadhaar') {
          setCurrentIdentifier(formData.aadhaar);
          setCurrentKey('aadhaar');
          setCurrentVerifyEndpoint('/api/aadhar/verify-otp');
        } else {
          // DigiLocker flow not implemented yet
          alert('DigiLocker integration is not implemented yet.');
          setIsLoading(false);
          return;
        }
      }
    }

    try {
      let response;
      if (selectedAction === 'signIn') {
        if (signInMethod === 'mobile') {
          response = await fetch(`/api/signin/generate-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobileNumber: formData.mobile }),
          });
        } else {
          response = await fetch(`/api/signin/health/generate-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ healthId: formData.healthId }),
          });
        }
      } else {
        // Sign up
        if (selectedRole === 'doctor') {
          response = await fetch(`/api/signin/generate-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobileNumber: formData.mobile }),
          });
        } else {
          if (signUpMethod === 'aadhaar') {
            response = await fetch(`/api/aadhar/generate-otp`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ aadhaar: formData.aadhaar }),
            });
          } else {
            // DigiLocker flow not implemented yet
            alert('DigiLocker integration is not implemented yet.');
            setIsLoading(false);
            return;
          }
        }
      }

      const data = await response.json();
      if (!response.ok) {
        alert(data.message || 'Failed to send OTP');
        setIsLoading(false);
        return;
      }

      setShowOtpInput(true);
      setOtpCountdown(30);
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Error sending OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

const handleOtpConfirm = async (otp: string) => {
    // For Migrant Worker and Doctor, mock OTP verification and redirect
    if (selectedRole === 'migrant-worker' || selectedRole === 'doctor') {
      alert('Mock OTP verified successfully!');
      setShowOtpInput(false);
      setIsLoading(false);
      if (selectedRole === 'migrant-worker') {
        navigate('/patient-dashboard', { replace: true });
      } else {
        navigate('/doctor-dashboard', { replace: true });
      }
      return;
    }

    setIsLoading(true);
    try {
      const body = {
        otp,
        [currentKey]: currentIdentifier,
      };
      const response = await fetch(`${API_BASE}${currentVerifyEndpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) {
        alert(data.message || 'OTP verification failed');
        setIsLoading(false);
        return;
      }
      alert('OTP verified successfully!');

      // Store token and user data for sign-in flows
      if (currentVerifyEndpoint.includes('signin')) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      // Navigate to the appropriate dashboard based on role
      let dashboardPath = '';
      switch (selectedRole as 'migrant-worker' | 'doctor' | 'admin' | 'superadmin') {
        case 'migrant-worker':
          dashboardPath = '/patient-dashboard';
          break;
        case 'doctor':
          dashboardPath = '/doctor-dashboard';
          break;
        case 'admin':
          dashboardPath = '/admin-dashboard';
          break;
        case 'superadmin':
          dashboardPath = '/superadmin-dashboard';
          break;
        default:
          dashboardPath = '/';
      }

      setShowOtpInput(false);
      setIsLoading(false);

      // Use React Router navigate with replace to prevent back navigation to OTP page
      setTimeout(() => {
        navigate(dashboardPath, { replace: true });
      }, 500);
    } catch (error) {
      alert('Error verifying OTP. Please try again.');
      setIsLoading(false);
    }
  };

  const handleOtpResend = () => {
    setOtpCountdown(30);
    // Simulate resend API call
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Two-panel layout */}
      <div className="flex min-h-screen">
        {/* Left Panel - Branding & Illustration */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800"
        >
          <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
            {/* Kerala Government Emblem */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <IconComponent className="w-12 h-12" />
              </div>
            </motion.div>

            {/* Project Branding */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-8"
            >
              <h1 className="text-4xl font-bold mb-2">Kerala Health Portal</h1>
              <p className="text-xl text-white/90">Digital Health Initiative</p>
              <div className="w-24 h-1 bg-white/40 mx-auto mt-4 rounded-full" />
            </motion.div>

            {/* Role-specific content */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-semibold mb-3">{roleConfig.title} Portal</h2>
              <p className="text-white/80 max-w-md">{roleConfig.description}</p>
              <div className="mt-4 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                {selectedAction === 'signIn' ? 'Sign In' : 'Sign Up'}
              </div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="w-full max-w-lg"
            >
              <div className="w-full h-64 bg-white/10 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <IconComponent className="w-20 h-20 mx-auto mb-4 text-white/70" />
                  <p className="text-white/60 text-sm">Kerala Health Portal</p>
                </div>
              </div>
            </motion.div>

            {/* Government Footer */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-8 left-8 right-8 text-center"
            >
              <p className="text-white/70 text-sm">
                Powered by Kerala Government Health Initiative
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel - Authentication Form */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12"
        >
          <div className="w-full max-w-md">
            {/* Back Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Role Selection
            </motion.button>

            {/* Form Card */}
            <Card className="p-8 shadow-lg border border-gray-200">
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${roleConfig.gradient} rounded-xl flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{roleConfig.title}</h2>
                    <p className="text-gray-600 text-sm">
                      {selectedAction === 'signIn' ? 'Sign In to your account' : 'Create your account'}
                    </p>
                  </div>
                </div>
              </motion.div>

              <AnimatePresence mode="wait">
                {selectedAction === 'signIn' ? (
                  <motion.div
                    key="signin"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {/* Sign In Method Selection */}
                    <div className="space-y-3">
                      <button
                        onClick={() => setSignInMethod('mobile')}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                          signInMethod === 'mobile'
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Sign in with Mobile Number</span>
                      </button>
                      <button
                        onClick={() => setSignInMethod('healthId')}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                          signInMethod === 'healthId'
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        <IdCard className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">
                          Sign in with {selectedRole === 'doctor' ? 'Doctor ID' : 'Health ID'}
                        </span>
                      </button>
                    </div>

                    {/* Input Field */}
                    <div className="space-y-4">
                      <div>
                        <Input
                          type={signInMethod === 'mobile' ? 'tel' : 'text'}
                          placeholder={signInMethod === 'mobile' ? 'Enter Mobile Number' : `Enter ${selectedRole === 'doctor' ? 'Doctor ID' : 'Health ID'}`}
                          value={signInMethod === 'mobile' ? formData.mobile : formData.healthId}
                          onChange={(e) => {
                            const field = signInMethod === 'mobile' ? 'mobile' : 'healthId';
                            const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                            setFormData(prev => ({ ...prev, [field]: value }));
                            setErrors(prev => ({ ...prev, [field]: '' }));
                          }}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            errors[signInMethod === 'mobile' ? 'mobile' : 'healthId'] ? 'border-red-500' : 'border-gray-300'
                          }`}
                          maxLength={signInMethod === 'mobile' ? 10 : 12}
                        />
                        {errors[signInMethod === 'mobile' ? 'mobile' : 'healthId'] && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors[signInMethod === 'mobile' ? 'mobile' : 'healthId']}
                          </p>
                        )}
                      </div>
                      <Button
                        onClick={handleVerify}
                        disabled={isLoading || showOtpInput}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          'Send OTP'
                        )}
                      </Button>

                      {/* OTP Input */}
                      <AnimatePresence>
                        {showOtpInput && (
                          <OTPInput
                            onConfirm={handleOtpConfirm}
                            onResend={handleOtpResend}
                            countdown={otpCountdown}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {/* Sign Up Content */}
                    {selectedRole === 'doctor' ? (
                      // Doctor sign up - only mobile number
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl border-2 border-blue-500 bg-blue-50 flex items-center gap-3">
                          <Phone className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">Sign up with Mobile Number</span>
                        </div>
                        <div>
                          <Input
                            type="tel"
                            placeholder="Enter Mobile Number"
                            value={formData.mobile}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                              setFormData(prev => ({ ...prev, mobile: value }));
                              setErrors(prev => ({ ...prev, mobile: '' }));
                            }}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                              errors.mobile ? 'border-red-500' : 'border-gray-300'
                            }`}
                            maxLength={10}
                          />
                          {errors.mobile && (
                            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                          )}
                        </div>
                        <Button
                          onClick={handleVerify}
                          disabled={isLoading || showOtpInput}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            'Send OTP'
                          )}
                        </Button>

                        {/* OTP Input */}
                        <AnimatePresence>
                          {showOtpInput && (
                            <OTPInput
                              onConfirm={handleOtpConfirm}
                              onResend={handleOtpResend}
                              countdown={otpCountdown}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Other roles sign up - Aadhaar and DigiLocker options
                      <>
                        {/* Sign Up Method Selection */}
                        <div className="space-y-3">
                          <button
                            onClick={() => setSignUpMethod('aadhaar')}
                            className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                              signUpMethod === 'aadhaar'
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-300 hover:border-blue-300'
                            }`}
                          >
                            <IdCard className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">Sign up with Aadhaar</span>
                          </button>
                          <button
                            onClick={() => setSignUpMethod('digilocker')}
                            className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                              signUpMethod === 'digilocker'
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-300 hover:border-blue-300'
                            }`}
                          >
                            <Shield className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">Continue with DigiLocker</span>
                          </button>
                        </div>

                        {/* Input Field for Aadhaar */}
                        {signUpMethod === 'aadhaar' && (
                          <div className="space-y-4">
                            <div>
                              <Input
                                type="text"
                                placeholder="Enter Aadhaar Number"
                                value={formData.aadhaar}
                                onChange={(e) => {
                                  const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                                  setFormData(prev => ({ ...prev, aadhaar: value }));
                                  setErrors(prev => ({ ...prev, aadhaar: '' }));
                                }}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                  errors.aadhaar ? 'border-red-500' : 'border-gray-300'
                                }`}
                                maxLength={12}
                              />
                              {errors.aadhaar && (
                                <p className="text-red-500 text-sm mt-1">{errors.aadhaar}</p>
                              )}
                            </div>
                            <Button
                              onClick={handleVerify}
                              disabled={isLoading || showOtpInput}
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              {isLoading ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                />
                              ) : (
                                'Send OTP'
                              )}
                            </Button>

                            {/* OTP Input */}
                            <AnimatePresence>
                              {showOtpInput && (
                                <OTPInput
                                  onConfirm={handleOtpConfirm}
                                  onResend={handleOtpResend}
                                  countdown={otpCountdown}
                                />
                              )}
                            </AnimatePresence>
                          </div>
                        )}

                        {/* DigiLocker Integration */}
                        {signUpMethod === 'digilocker' && (
                          <div className="space-y-4">
                            <div className="text-center p-8 bg-blue-50 rounded-xl border border-blue-200">
                              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                              <h3 className="font-semibold text-gray-900 mb-2">DigiLocker Integration</h3>
                              <p className="text-gray-600 text-sm mb-4">
                                Securely access your documents from DigiLocker
                              </p>
                              <Button className="bg-green-600 hover:bg-green-700 text-white">
                                Connect DigiLocker
                              </Button>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default KeralaAuthPage;