import React from 'react';
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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from 'C:\\Users\\91936\\OneDrive\\Desktop\\git\\MedicAide\\src\\assets\\Blue, white and green Medical care logo.png';
import { useNavigate } from 'react-router-dom';
import './Patient.css';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#004d40',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#004d40',
  color: '#fff',
  '&:hover': {
    backgroundColor: alpha('#004d40', 0.8),
  },
  borderRadius: '20px',
  padding: '10px 20px',
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}));

const LogoWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
}));

const PageContent = styled(Box)(({ theme }) => ({
  backgroundColor: '#f0f0f0', // Light gray
  minHeight: '100vh',
  padding: theme.spacing(3),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  width: '80%',
}));

const HeaderTypography = styled(Typography)(({ theme }) => ({
  color: '#004d40',
  marginBottom: theme.spacing(3),
  textAlign: 'center',
}));

export default function Patient() {
  const navigate = useNavigate();
  const next = () => {
    navigate('/Main');
  };
  const Appo = () => {
    navigate('/Appointment');
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
      <MenuItem onClick={next}>Profile</MenuItem>
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
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
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
      <CustomAppBar position="static">
        <CustomToolbar>
          <LogoWrapper>
            <img src={logo} width={60} height={60} alt="logo" />
          </LogoWrapper>
          <Box sx={{ position: 'absolute', right: 0, display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </CustomToolbar>
      </CustomAppBar>
      {renderMobileMenu}
      {renderMenu}
      <PageContent>
        <ContentContainer>
          <HeaderTypography variant="h4">Patient Dashboard</HeaderTypography>
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <Stack spacing={4} direction="row">
              <CustomButton variant="contained" onClick={Appo}>Book Appointment</CustomButton>
              <CustomButton variant="contained">Prescription</CustomButton>
              <CustomButton variant="contained">Reports</CustomButton>
            </Stack>
          </Box>
        </ContentContainer>
      </PageContent>
    </Box>
  );
}
