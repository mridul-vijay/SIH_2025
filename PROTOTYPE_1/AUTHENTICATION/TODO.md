# TODO: Implement Doctor Signup System

## Database Setup
- [x] Update `config/db.js` to add TCMCDB and DoctorsDB connections (add `MONGO_TCMC_URI` and `MONGO_DOCTORS_URI` env vars, connect in `connectDB`, add getters `getTcmcConnection` and `getDoctorsConnection`).

## Models
- [x] Create `models/tcmcModel.js`: Schema for TCMCDB with tcmcNumber (4-6 digits, unique), mobileNumber (10 digits), name, collegeDetails, degree, experience (Number), gender (enum).
- [x] Create `models/doctorModel.js`: Schema for DoctorsDB with name, collegeDetails, degree, experience, gender, mobileNumber (unique), doctorId (unique, generated).

## Controllers
- [x] Create `controllers/doctorController.js`: Implement `generateOtp` (check TCMC in TCMCDB, send OTP), `verifyOtp` (verify OTP, fetch TCMC data, create Doctor in DoctorsDB, generate doctorId), `generateDoctorId` function.

## Routes
- [x] Create `routes/doctorRoutes.js`: POST /generate-otp and /verify-otp with validations.

## Middlewares
- [x] Update `middlewares/validation.js`: Add `validateGenerateTcmcOtp` and `validateVerifyTcmcOtp` for TCMC (4-6 digits) and OTP.

## App Integration
- [x] Update `app.js`: Require and mount `/api/doctor` routes.

## Testing
- [ ] Test DB connections and endpoints (e.g., insert sample TCMC data, test OTP flow).
- [ ] Update README.md with new API docs if needed.
