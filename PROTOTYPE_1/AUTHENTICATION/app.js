const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

console.log('Loaded environment variables:', {
  MONGO_AADHAR_URI: process.env.MONGO_AADHAR_URI,
  MONGO_USERS_URI: process.env.MONGO_USERS_URI,
  MONGO_TCMC_URI: process.env.MONGO_TCMC_URI,
  MONGO_DOCTORS_URI: process.env.MONGO_DOCTORS_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT,
});

const rateLimiter = require('./middlewares/rateLimiter');
const logger = require('./middlewares/logger');
const { connectDB } = require('./config/db');

const app = express();

(async () => {
  // Connect to MongoDB
  await connectDB();

  // Check for required env vars
  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET environment variable must be set');
    // process.exit(1); // Commented for testing
  }

  const aadharRoutes = require('./routes/aadharRoutes');
  const signinRoutes = require('./routes/signinRoutes');
  const doctorRoutes = require('./routes/doctorRoutes');

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(logger);
  app.use(rateLimiter);

  // Routes
  app.use('/api/aadhar', aadharRoutes);
  app.use('/api/signin', signinRoutes);
  app.use('/api/doctor', doctorRoutes);

  // Global error handler
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      error: true,
      message: err.message || 'Internal Server Error',
    });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
