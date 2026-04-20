const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhone = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

async function sendSms(mobileNumber, message) {
  try {
    const messageInstance = await client.messages.create({
      body: message,
      from: fromPhone,
      to: '+91' + mobileNumber, // Assuming Indian country code, adjust as needed
    });
    console.log('Twilio message sent:', messageInstance.sid);
    return true;
  } catch (error) {
    console.error('Twilio SMS send error:', error);
    return false;
  }
}

async function sendOtp(mobileNumber, otp) {
  const message = `Your OTP code is: ${otp}`;
  return await sendSms(mobileNumber, message);
}

module.exports = {
  sendOtp,
};
