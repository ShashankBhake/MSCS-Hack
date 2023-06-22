import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import './ForgotPass.css'; // Import the CSS file for styling

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement the logic for handling the forgot password request here
    console.log('Forgot password form submitted');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        marginTop: '-100px', // Adjust the margin-top value as needed
      }}
    >
      <Box
        sx={{
          width: 300,
          padding: 3,
          textAlign: 'center',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <div className = "spacing">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default ForgotPasswordPage;
