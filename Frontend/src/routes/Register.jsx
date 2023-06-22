import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const RegistrationForm = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [societyType, setSocietyType] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [panNo, setPanNo] = useState('');
  const [tanNo, setTanNo] = useState('');
  const [authorizedName, setAuthorizedName] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [serviceTaxNo, setServiceTaxNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement the logic for handling the form submission here
    console.log('Registration form submitted');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', width: '100%' }}>
        <Typography marginTop = "20px" variant="h6" align="center" gutterBottom>
          User Registration Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="state-label">Select State (Head Quater)</InputLabel>
              <Select
                labelId="state-label"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <MenuItem value="">-- Select State --</MenuItem>
                {/* Add the list of states */}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="district-label">Select District</InputLabel>
              <Select
                labelId="district-label"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <MenuItem value="">-- Select District --</MenuItem>
                {/* Add the list of districts */}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="society-type-label">Select Type / Class of the Society</InputLabel>
              <Select
                labelId="society-type-label"
                value={societyType}
                onChange={(e) => setSocietyType(e.target.value)}
              >
                <MenuItem value="">-- Select Type --</MenuItem>
                {/* Add the list of society types */}
              </Select>
            </FormControl>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Complete Registered Address (with PIN code)"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <TextField
              label="PAN No."
              value={panNo}
              onChange={(e) => setPanNo(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="TAN No."
              value={tanNo}
              onChange={(e) => setTanNo(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            
            <TextField
              label="Name of MD/Chairman/Vice Chairman/Officers Authorized"
              value={authorizedName}
              onChange={(e) => setAuthorizedName(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="designation-label">Designation</InputLabel>
              <Select
                labelId="designation-label"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              >
                <MenuItem value="">-- Select Designation --</MenuItem>
                {/* Add the list of designations */}
              </Select>
            </FormControl>
            <TextField
              label="Mobile No. of Authorized Officer"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Service Tax No."
              value={serviceTaxNo}
              onChange={(e) => setServiceTaxNo(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              required
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <div style={{marginTop : "20px", marginBottom : "20px"}}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
            Register
            </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
