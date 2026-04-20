import crypto from 'crypto';
import Tcmc from '../models/tcmcModel.js';
import Doctor from '../models/doctorModel.js';
import { generateOtp, verifyOtp } from '../utils/otp.js';
import { sendOtpSMS } from '../config/twilio.js';

const generateDoctorId = () => {
  const digits = '0123456789';
  let randomDigits = '';
  for (let i = 0; i < 4; i++) {
    randomDigits += digits[crypto.randomInt(0, 10)];
  }
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomAlphanum = '';
  for (let i = 0; i < 4; i++) {
    randomAlphanum += chars[crypto.randomInt(0, 36)];
  }
  return `AKDR-${randomDigits}-${randomAlphanum}`;
};

const generateOtpForDoctor = async (req, res, next) => {
  try {
    const { tcmc } = req.body;

    // Check TCMCDB for tcmc number
    const tcmcRecord = await Tcmc.findOne({ tcmcNumber: tcmc });
    if (!tcmcRecord) {
      return res.status(404).json({
        error: true,
        message: 'TCMC number not found.',
      });
    }

    const result = await generateOtp(tcmc, tcmcRecord.mobileNumber, sendOtpSMS);
    res.json(result);
  } catch (err) {
    if (err.message.includes('blocked') || err.message.includes('limit')) {
      return res.status(429).json({ error: true, message: err.message });
    }
    next(err);
  }
};

const verifyOtpForDoctor = async (req, res, next) => {
  try {
    const { tcmc, otp } = req.body;

    await verifyOtp(tcmc, otp);

    // Retrieve TCMC data and store in DoctorsDB (exclude tcmcNumber)
    const tcmcRecord = await Tcmc.findOne({ tcmcNumber: tcmc });
    if (!tcmcRecord) {
      return res.status(404).json({
        error: true,
        message: 'TCMC record not found.',
      });
    }

    const doctorData = {
      name: tcmcRecord.name,
      collegeDetails: tcmcRecord.collegeDetails,
      degree: tcmcRecord.degree,
      experience: tcmcRecord.experience,
      gender: tcmcRecord.gender,
      mobileNumber: tcmcRecord.mobileNumber,
    };

    const doctor = new Doctor(doctorData);
    await doctor.save();

    // Generate and store Doctor ID
    doctor.doctorId = generateDoctorId();
    await doctor.save();

    res.json({ message: 'OTP verified successfully and doctor data stored.' });
  } catch (err) {
    if (err.message.includes('blocked') || err.message.includes('Invalid') || err.message.includes('not found')) {
      return res.status(400).json({ error: true, message: err.message });
    }
    next(err);
  }
};

export {
  generateOtpForDoctor,
  verifyOtpForDoctor,
};
