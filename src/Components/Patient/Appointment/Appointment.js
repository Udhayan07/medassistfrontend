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
import logo from 'C:\\Users\\91936\\OneDrive\\Desktop\\git\\MedicAide\\src\\assets\\Blue, white and green Medical care logo.png';
import { useNavigate } from 'react-router-dom';
import AppointMain from './AppointMain';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#004d40', // Dark green
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  padding: '12px 12',
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
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
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  maxWidth: '1200px',
  margin: '0 auto',
}));

const HeaderTypography = styled(Typography)(({ theme }) => ({
  color: '#004d40',
  marginBottom: theme.spacing(3),
}));

export default function Appointment() {
  const navigate = useNavigate();
  const next = () => {
    navigate('/Main');
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
          <LogoWrapper>
            <img src={logo} width={60} height={60} alt="logo" />
          </LogoWrapper>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
          <HeaderTypography variant="h4">Book Your Appointment</HeaderTypography>
          <AppointMain />
        </ContentContainer>
      </PageContent>
    </Box>
  );
}
