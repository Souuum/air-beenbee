// components/AppBarComponent.tsx
import React from 'react';
import { AppBar as MUIAppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AppBar: React.FC = () => {
  const { authState, setAuthState } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, user: null });
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <MUIAppBar position="static" sx={{ width: '100%', mx: 'auto' }}>
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
            <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
          </>
        )}
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
