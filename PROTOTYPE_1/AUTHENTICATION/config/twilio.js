import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhone = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !fromPhone) {
  console.error('Twilio credentials or phone number are not set in environment variables');
  // process.exit(1); // Commented out to allow app to run without Twilio
}

const client = twilio(accountSid, authToken);

const sendOtpSMS = async (phone, otp) => {
  console.log('Twilio client:', client);
  console.log('Twilio from phone:', fromPhone);
  console.log('Twilio to phone:', phone);
  if (!client) {
    console.log(`OTP for ${phone}: ${otp}`); // For testing without Twilio
    return;
  }
  try {
    const message = `Your Aadhaar OTP verification code is: ${otp}. It will expire in 5 minutes. Do not share this code with anyone.`;
    await client.messages.create({
      body: message,
      from: fromPhone, // Use phone number from env variable
      to: phone,
    });
  } catch (error) {
    console.log('Twilio error:', error);
    throw new Error('Failed to send OTP SMS: ' + error.message);
  }
};

export { client, sendOtpSMS };
