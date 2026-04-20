import { useState } from "react";
import { Search, Shield, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";

const AccessPatientCard = () => {
  const [healthId, setHealthId] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleVerifyAndProceed = async () => {
    if (!healthId || healthId.length !== 12) {
      toast({
        title: "Invalid Health ID",
        description: "Please enter a valid 12-digit Migrant Health ID",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setIsDialogOpen(true);
      toast({
        title: "OTP Sent Successfully",
        description: "Verification code sent to patient's registered mobile number",
      });
    }, 1500);
  };

  const handleOtpVerification = async () => {
    if (!otp || otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the complete 6-digit OTP",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      setOtpVerified(true);
      toast({
        title: "OTP Verified Successfully",
        description: "Access granted to patient health records",
      });
    }, 1000);
  };

  const handleAccessRecords = () => {
    setIsDialogOpen(false);
    toast({
      title: "Accessing Patient Records",
      description: "Redirecting to patient health dashboard...",
    });
    // Redirect to patient records page
    window.location.href = "/patient-record";
  };

  return (
    <Card className="primary-action-card animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 text-primary-foreground">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
            <Search className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Access & Update Patient Record</h3>
            <p className="text-primary-foreground/80 text-sm font-normal">
              Secure access to migrant worker health records
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="healthId" className="text-sm font-medium text-primary-foreground/90">
              12-Digit Migrant Health ID
            </label>
            <Input
              id="healthId"
              type="text"
              placeholder="Enter 12-digit ID (e.g., 123456789012)"
              value={healthId}
              onChange={(e) => setHealthId(e.target.value.replace(/\D/g, '').slice(0, 12))}
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-white/40"
              maxLength={12}
            />
            <p className="text-xs text-primary-foreground/70">
              {healthId.length}/12 digits entered
            </p>
          </div>

          <Button
            size="lg"
            className="w-full accent-button text-lg font-semibold h-14 hover:scale-[1.02] transition-transform"
            disabled={healthId.length !== 12 || isLoading}
            onClick={handleVerifyAndProceed}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-accent-foreground border-t-transparent" />
                <span>Sending OTP...</span>
              </div>
            ) : (
              <>
                <Shield className="mr-2 h-5 w-5" />
                Verify & Proceed
              </>
            )}
          </Button>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2">
                  {otpVerified ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <Smartphone className="h-5 w-5 text-primary" />
                  )}
                  <span>
                    {otpVerified ? "OTP Verified Successfully" : "Enter OTP Verification Code"}
                  </span>
                </DialogTitle>
                <DialogDescription className="text-left">
                  {otpVerified 
                    ? "OTP has been verified successfully. You can now access the patient's health records."
                    : "Please enter the 6-digit verification code sent to the patient's registered mobile number."
                  }
                </DialogDescription>
              </DialogHeader>
              
              {!otpVerified ? (
                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <InputOTP
                      maxLength={6}
                      value={otp}
                      onChange={(value) => setOtp(value)}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <p className="text-xs text-muted-foreground">
                      {otp.length}/6 digits entered
                    </p>
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleOtpVerification} 
                      disabled={otp.length !== 6 || isLoading}
                      className="bg-primary"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
                          <span>Verifying...</span>
                        </div>
                      ) : (
                        "Verify OTP"
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Close
                  </Button>
                  <Button onClick={handleAccessRecords} className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Access Patient Records
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
          <Shield className="h-4 w-4" />
          <span>End-to-end encrypted • Government secured</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccessPatientCard;