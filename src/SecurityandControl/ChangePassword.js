// ChangePassword.js
import React, { useState } from "react";
import Header from "../Header/header";
import { sendOTPToEmail, verifyOTP, changePassword, authenticateWithFingerprint } from "./authentication.js";
import FingerPrint from "./Fingerprint.jpg"
import "./ChangePassword.css"; // Import the CSS file

function ChangePassword() {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityPin, setSecurityPin] = useState(''); // Added security pin state
  const [status, setStatus] = useState('');
  const [fingerprintAuthenticated, setFingerprintAuthenticated] = useState(false);

  const handleSendOTP = async () => {
    if (email && oldPassword && securityPin) { // Check if security pin is provided
      try {
        // Authenticate with fingerprint
        const isFingerprintAuthenticated = await authenticateWithFingerprint();
        if (isFingerprintAuthenticated) {
          // Send OTP to the provided email
          await sendOTPToEmail(email, oldPassword);
          setOtpSent(true);
          setStatus('OTP sent to your email. Please check and enter it below.');
        } else {
          setStatus('Fingerprint authentication failed.');
        }
      } catch (error) {
        setStatus('Failed to send OTP. Please check your email, password, and security pin.');
      }
    } else {
      setStatus('Please enter your email, old password, and security pin.');
    }
  };

  const handleChangePassword = async () => {
    if (otpSent && otp && password === confirmPassword && securityPin) { // Check if security pin is provided
      try {
        // Verify OTP and change the password
        await verifyOTP(email, otp);
        await changePassword(email, password);
        setStatus('Password changed successfully.');
      } catch (error) {
        setStatus('Failed to change password. Please try again.');
      }
    } else {
      setStatus('Please enter OTP, make sure passwords match, and provide a security pin.');
    }
  };

  return (
    <>
      <div className='changepassword'>
        <Header />
        <div className='container'>
          <h1 className='heading'>Change Password</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input'
          />
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className='input'
          />
          {!otpSent && (
            <button onClick={handleSendOTP} className='button'>
              Send OTP
            </button>
          )}
          {otpSent && (
            <>
              <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className='input'
              />
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='input'
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='input'
              />
              <button onClick={handleChangePassword} className='button'>
                Change Password
              </button>
            
            </>
            
          )}
          <h1 className="row">Fingerprint</h1>
          <img className='Fingerprint' src={FingerPrint} style={{ width: "50px", height: "50px" }} alt=""/>
          <p className='status'>{status}</p>
          {otpSent && !fingerprintAuthenticated && (
            <p className='status'>Authenticate with fingerprint to proceed.</p>
          )}

          <h1 className="row">Security Pin</h1>
          <input
            type="text"
            placeholder="Security Pin"
            value={securityPin}
            onChange={(e) => setSecurityPin(e.target.value)}
            className='input'
          />
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
