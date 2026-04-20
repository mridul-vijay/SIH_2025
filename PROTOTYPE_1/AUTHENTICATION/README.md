# Aadhaar OTP Verification Backend

## Project Overview

This project is a complete Node.js + Express + MongoDB backend server for Aadhaar OTP verification. It includes:

- AadharDB: Stores Aadhaar card numbers, mobile numbers, and personal info.
- UsersDB: Stores user data after OTP verification (excludes aadharNumber).
- OTP generation and verification with Twilio SMS.
- Rate limiting and attempt tracking (max 3 attempts, 1-hour block).
- Strong input validations and error handling.
- Modular structure with controllers, routes, models, middlewares, etc.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or newer recommended)
- [MongoDB](https://www.mongodb.com/) account or local instance
- [Twilio](https://www.twilio.com/) account with Programmable SMS enabled

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aadhar-otp-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your MongoDB URI, Twilio credentials, etc.

4. Set up MongoDB:
   - Ensure MongoDB is running locally or use a cloud instance (e.g., MongoDB Atlas).
   - Update `MONGO_URI` in `.env` accordingly.

5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### 1. Generate OTP
- **URL**: `/api/aadhar/generate-otp`
- **Method**: POST
- **Body**:
  ```json
  {
    "aadhaar": "123456789012"
  }
  ```
- **Description**: Checks AadharDB for the aadhaar number, generates OTP, and sends it to the associated mobile number via Twilio.

### 2. Verify OTP
- **URL**: `/api/aadhar/verify-otp`
- **Method**: POST
- **Body**:
  ```json
  {
    "aadhaar": "123456789012",
    "otp": "123456"
  }
  ```
- **Description**: Verifies the OTP, tracks attempts, and if successful, stores user data in UsersDB (excludes aadharNumber).

## Features

- **Databases**:
  - AadharDB: Stores aadhaar numbers, mobile numbers, personal info.
  - UsersDB: Stores user data after verification.

- **Schemas**:
  - Aadhar: aadharNumber (12-digit, unique), mobileNumber (10-digit), name, address, gender (enum), dob.
  - User: name, address, gender (enum), dob, mobileNumber (10-digit).

- **Validations**: Strong input validations for all fields using express-validator.

- **Rate Limiting**: Custom rate limiting for OTP requests and attempt tracking.

- **Security**: OTP hashing with bcrypt, environment variables for sensitive data.

- **Logging**: Error and OTP event logging.

## Environment Variables

Create a `.env` file with the following variables:

- `MONGO_AADHAR_URI`: MongoDB connection string for AadharDB (e.g., mongodb://localhost:27017/aadharDB)
- `MONGO_USERS_URI`: MongoDB connection string for UsersDB (e.g., mongodb://localhost:27017/usersDB)
- `TWILIO_ACCOUNT_SID`: Your Twilio account SID
- `TWILIO_AUTH_TOKEN`: Your Twilio auth token
- `PORT`: Server port (default: 3000)
- `SECRET_KEY`: Secret key for JWT or other purposes (if needed)

## Notes

- Ensure to populate AadharDB with sample data for testing.
- Replace Twilio credentials with your own.
- The server runs on port 3000 by default.
   