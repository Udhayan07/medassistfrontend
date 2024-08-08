import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import './MainPage.css';
import logo from 'C:\\Users\\91936\\OneDrive\\Desktop\\git\\MedicAide\\src\\assets\\Blue, white and green Medical care logo.png';
import { useNavigate } from 'react-router-dom';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 24, // Increase font size
  padding: '18px 36px', // Increase padding
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  fontSize: 24, // Increase font size
  padding: '18px 36px', // Increase padding
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const CenteredContainer = styled(Stack)({
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Optional: Adjust height as needed
});

export default function MainPage() {

  const Navigate=useNavigate();
  const next= () =>{
      Navigate("/LoginDoctor")
  }
  const next2= () =>{
      Navigate("/LoginPatient")
  }
  return (
    <body class='main'>
    <CenteredContainer spacing={2} direction="row">
    <div class='logo'>
        <img src={logo} width={100} height={100}></img>
      </div>
      <ColorButton variant="contained" onClick={next}>DOCTOR</ColorButton>
      <BootstrapButton variant="contained" disableRipple onClick={next2}>
        PATIENT
      </BootstrapButton>
    </CenteredContainer>
    </body>
  );
}