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
import logo from 'C:\\Users\\91936\\OneDrive\\Desktop\\git\\MedicAide\\src\\assets\\Medic aide.png';
import './LoginPatient.css';
import { useNavigate } from 'react-router-dom';

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
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
});

export default function LoginPatient() {

  const Navigate=useNavigate();
  const Patient=()=>{
    Navigate('/Patient')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      patid: data.get('patid'),
      password: data.get('password'),
    });
  };


  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 2,
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <div className="logo">
            <img src={logo} width={100} height={100} alt="Medic Aide Logo" />
          </div>
          <div class='lg'>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main',ml:20 }}>
          <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ml:19}}>
          Patient
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="patid"
              label="Patient ID"
              name="patid"
              autoComplete="patid"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={Patient}
            >
            Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link href="/SignUpPat" variant="body2">
                {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </div>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        </ThemeProvider>
      );
}
