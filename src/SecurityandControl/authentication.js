

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const users = {
  "studentganesh001@gmail.com": {
    password: "password123",
    otp: "",
  },
};

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Simulated function to send an email with OTP
const sendEmail = (email, otp) => {
  console.log(`Email sent to ${email}. OTP: ${otp}`);
  // In a real scenario, you would use a proper email sending library or service here
};

export const sendOTPToEmail = async (email, oldPassword) => {
  await delay(1000);

  const user = users[email];

  if (user && user.password === oldPassword) {
    const otp = generateOTP();
    // Simulate sending an email with OTP
    sendEmail(email, otp);
    users[email].otp = otp;
  } else {
    throw new Error("Invalid email or old password");
  }
};

export async function authenticateWithFingerprint() {
  try {
    // Implement fingerprint authentication using the appropriate library or API
    // ...

    // Assuming the fingerprint authentication is successful
    return true;
  } catch (error) {
    // Handle any errors during fingerprint authentication
    console.error("Fingerprint authentication failed:", error);
    return false;
  }
};

export const verifyOTP = async (email, otp) => {
  await delay(1000);

  const user = users[email];

  if (user && user.otp === otp) {
    console.log("OTP verified successfully");
    // Automatically change OTP after successful verification
    user.otp = generateOTP();
  } else {
    throw new Error("Invalid OTP");
  }
};

export const changePassword = async (email, newPassword) => {
  await delay(1000);

  const user = users[email];

  if (user) {
    // Update the password in the user database
    user.password = newPassword;
    console.log("Password changed successfully");
  } else {
    throw new Error("User not found");
  }
};
