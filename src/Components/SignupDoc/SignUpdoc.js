import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignupDoc.css'; // Import your CSS file
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Medic Aide
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#c51162',
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
});

export default function SignUpDoc() {
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    doctorid: '',
    password: '',
  });  //used declare and manage state variables directly within a function component
      
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const { first_name,last_name,email_id,doctor_id,password } = signupData;
    if ( first_name,last_name,email_id,doctor_id,password) {
      try {
        await axios.post('http://localhost:8080/api/signup', signupData);
        alert('User Created');
        next();
      } catch (error) {
        alert('Error creating user');
      }
    } else {
      alert('Please fill all the fields');
    }
  };                                    //The Above code is to establish connection with the API useing axios and post the data in the database
  const Navigate=useNavigate();
    const next = () =>{
        Navigate('/LoginDoctor');
    } //used For navigating from one page to another


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="container">
        <CssBaseline />
        <Box className="box-container">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className="typography-header">
            Doctor Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSignupSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="docid"
                  label="Doctor ID"
                  name="docid"
                  autoComplete="docid"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="submit-button"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/LoginDoctor" variant="body2" className="signin-link">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
