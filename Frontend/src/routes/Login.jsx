import React, { useState } from 'react';
import { TextField, Button, Link } from '@mui/material';
// import ReCAPTCHA from "react-google-recaptcha";
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [mobileEmail, setMobileEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [captchaValue, setCaptchaValue] = useState('');
  // const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  // const handleCaptchaChange = (value) => {
  //   setCaptchaValue(value);
  //   setIsCaptchaValid(true);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!isCaptchaValid) {
  //     alert('Please verify the captcha.');
  //     return;
  //   }
  //   // Process the login here
  //   // Reset the form fields after successful login
  //   setMobileEmail('');
  //   setPassword('');
  //   // setCaptchaValue('');
  //   // setIsCaptchaValid(false);
  // };

  return (
    <div className="login-container">
      <div className="centered-content">
        <h1 className="login-title">Login</h1>
        <form className="login-form" >
          <TextField
            label="Mobile/Email Id"
            value={mobileEmail}
            onChange={(e) => setMobileEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          {/* <div className="captcha-container">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={handleCaptchaChange}
            />
          </div> */}
          <div className = "spacing">
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
          </div>
          <div className="login-links">
            <Link href="./ForgotPass" variant="body2">
              Forgot Password?
            </Link>
            <Link href="./Register" variant="body2">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
