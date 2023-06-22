import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './AppealForm.css'; // Import the CSS file for styling

const AppealForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [societyName, setSocietyName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [appealDescription, setAppealDescription] = useState('');
  const [documents, setDocuments] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form submission here
    // Reset the form fields after successful submission
    setName('');
    setEmail('');
    setContactNumber('');
    setSocietyName('');
    setRegistrationNumber('');
    setAppealDescription('');
    setDocuments([]);
  };

  const handleDocumentUpload = (event) => {
    const files = Array.from(event.target.files);
    setDocuments(files);
  };

  return (
    <div className="appeal-form-container">
      <form onSubmit={handleSubmit} className="appeal-form">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contact Number"
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Society Name"
          value={societyName}
          onChange={(e) => setSocietyName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Registration Number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Appeal Description"
          multiline
          rows={4}
          value={appealDescription}
          onChange={(e) => setAppealDescription(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <div className="file-upload-container">
          <input type="file" multiple onChange={handleDocumentUpload} />
        </div>
        <div className="submit-button-container">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AppealForm;
