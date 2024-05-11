// components/AppBarComponent.tsx
import React, { useState, MouseEvent } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AppBarComponent: React.FC = () => {
  const { authState, setAuthState } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Menu handling functions
  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, user: null });
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Navigation functions for locataire and proprietaire registration
  const navigateToRegisterLocataire = () => {
    handleMenuClose();
    navigate('/register/locataire');
  };

  const navigateToRegisterProprietaire = () => {
    handleMenuClose();
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
            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
            {/* Register Button with Menu */}
            <Button
              color="inherit"
              onClick={handleMenuClick}
            >
              Register
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
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
