const mongoose = require('mongoose');

let aadharConnection;
let usersConnection;
let tcmcConnection;
let doctorsConnection;

const connectDB = async () => {
  try {
    const aadharUri = process.env.MONGO_AADHAR_URI;
    const usersUri =  process.env.MONGO_USERS_URI;  
    const tcmcUri = process.env.MONGO_TCMC_URI;
    const doctorsUri = process.env.MONGO_DOCTORS_URI;

    if (!aadharUri || !usersUri || !tcmcUri || !doctorsUri) {
      throw new Error('MONGO_AADHAR_URI, MONGO_USERS_URI, MONGO_TCMC_URI, and MONGO_DOCTORS_URI environment variables must be set');
    }

    // Connect to AadharDB
    aadharConnection = await mongoose.createConnection(aadharUri);
    
    console.log(' AadharDB connected ');

    // Connect to UsersDB
    usersConnection = await mongoose.createConnection(usersUri);
    console.log(' UsersDB connected');

    // Connect to TCMCDB
    tcmcConnection = await mongoose.createConnection(tcmcUri);
    console.log(' TCMCDB connected');

    // Connect to DoctorsDB
    doctorsConnection = await mongoose.createConnection(doctorsUri);
    console.log(' DoctorsDB connected');
  } catch (err) {
    console.error(' MongoDB connection error:', err.message);
    process.exit(1); // Quit app if DB connection fails
  }
};

// Getter functions to ensure always getting the latest connections
const getAadharConnection = () => aadharConnection;
const getUsersConnection = () => usersConnection;
const getTcmcConnection = () => tcmcConnection;
const getDoctorsConnection = () => doctorsConnection;

module.exports = { connectDB, getAadharConnection, getUsersConnection, getTcmcConnection, getDoctorsConnection };
