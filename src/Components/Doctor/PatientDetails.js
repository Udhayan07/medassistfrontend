import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo from 'C:\\Users\\91936\\OneDrive\\Desktop\\git\\MedicAide\\src\\assets\\Blue, white and green Medical care logo.png';
import './PatientDetails.css';
import image from 'C:\\Users\\91936\\OneDrive\\Desktop\\git\\MedicAide\\src\\assets\\patient.jpg';
import { useNavigate } from 'react-router-dom';

export default function PatientDetails() {
  const navigate = useNavigate();

  const cons = () => {
    navigate('/Consultation');
  }
  const pres = () => {
    navigate('/Prescription');
  }

  const patient = {
    medicalHistory: [
      "Hypertension",
      "Asthma",
    ],
    drugHistory: [
      "Thyroid Tablets [for 3 years]",
      "Insulin Injection",
      "Amlodipine"
    ]
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '60px' }}>
        <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src={logo} className="logo" alt="logo" />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box className="content-container">
        <Box className="patdetpg">
          <div className="title">
            <Typography variant="h4">Patient Details</Typography>
          </div>
          <Box className="text">
            <Typography variant="body1"><b>Name</b>: Edward Hudson</Typography>
            <Typography variant="body1"><b>Age</b>: 32</Typography>
            <Typography variant="body1"><b>Sex</b>: Male</Typography>
            <Typography variant="body1"><b>BMI</b>: 18.5</Typography>
            <Typography variant="h6">Medical History</Typography>
            <ul>
              {patient.medicalHistory.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
            <Typography variant="h6">Drug History</Typography>
            <ul>
              {patient.drugHistory.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
          </Box>
          <img src={image} className="pp" alt="patient" />
        </Box>
        <Box className="reminder">
          <Typography variant="h4">Reminder</Typography>
          <Typography variant="h6">Today's Appointments:</Typography>
          <Typography variant="body1">Udhayan J M</Typography>
          <Typography variant="body1">Manikam</Typography>
          <Typography variant="body1">Kaaliappan</Typography>
        </Box>
        <Box className="stack-buttons">
          <Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }}>
            <Button variant="contained" onClick={cons}>Consultation</Button>
            <Button variant="contained" onClick={pres}>Prescription</Button>
            <Button variant="contained">Reports</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
