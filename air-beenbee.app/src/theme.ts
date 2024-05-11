import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e1f27ff', // Raisin Black
      contrastText: '#f4c95dff', // Saffron
    },
    secondary: {
      main: '#dd7230ff', // Cocoa Brown
      contrastText: '#e7e393ff', // Flax
    },
    error: {
      main: '#854d27ff', // Russet
    },
    warning: {
      main: '#f4c95dff', // Saffron
    },
    info: {
      main: '#e7e393ff', // Flax
    },
    success: {
      main: '#a4de02', 
    },
  },
  typography: {
    
  },
  components: {

  },
});

export default theme;
