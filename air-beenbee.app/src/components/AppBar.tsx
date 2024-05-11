import React, { useState, MouseEvent } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AppBarComponent: React.FC = () => {
  const { authState, setAuthState } = useAuth();
  const navigate = useNavigate();

  const [loginAnchorEl, setLoginAnchorEl] = useState<null | HTMLElement>(null);
  const [registerAnchorEl, setRegisterAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuLoginClick = (event: MouseEvent<HTMLElement>) => {
    setLoginAnchorEl(event.currentTarget);
  };

  const handleMenuRegisterClick = (event: MouseEvent<HTMLElement>) => {
    setRegisterAnchorEl(event.currentTarget);
  };

  const handleMenuLoginClose = () => {
    setLoginAnchorEl(null);
  };

  const handleMenuRegisterClose = () => {
    setRegisterAnchorEl(null);
  };

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, user: null });
    localStorage.removeItem('token');
    navigate('/');
  };

  const navigateToLoginLocataire = () => {
    handleMenuLoginClose();
    navigate('/login/locataire');
  };

  const navigateToLoginProprietaire = () => {
    handleMenuLoginClose();
    navigate('/login/proprietaire');
  };

  const navigateToRegisterLocataire = () => {
    handleMenuRegisterClose();
    navigate('/register/locataire');
  };

  const navigateToRegisterProprietaire = () => {
    handleMenuRegisterClose();
    navigate('/register/proprietaire');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          App Name
        </Typography>
        {authState.isAuthenticated ? (
          <>
            <Typography variant="subtitle1" sx={{ marginRight: 2 }}>
              Hello, {authState.user?.name}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button 
              color="inherit" 
              onClick={handleMenuLoginClick}>Login</Button>
            <Menu
              anchorEl={loginAnchorEl}
              open={Boolean(loginAnchorEl)}
              onClose={handleMenuLoginClose}
            >
              <MenuItem onClick={navigateToLoginLocataire}>Locataire</MenuItem>
              <MenuItem onClick={navigateToLoginProprietaire}>Proprietaire</MenuItem>
            </Menu>
            <Button
              color="inherit"
              onClick={handleMenuRegisterClick}
            >
              Register
            </Button>
            <Menu
              anchorEl={registerAnchorEl}
              open={Boolean(registerAnchorEl)}
              onClose={handleMenuRegisterClose}
            >
              <MenuItem onClick={navigateToRegisterLocataire}>Locataire</MenuItem>
              <MenuItem onClick={navigateToRegisterProprietaire}>Proprietaire</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
