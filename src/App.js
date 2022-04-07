import React from 'react';
// import './App.scss';
import { AppRouter } from './router/Router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import lightBlue from '@mui/material/colors/lightBlue';
import red from '@mui/material/colors/red';
const theme = createTheme({
  palette: {
    primary: red,
    secondary: lightBlue,
  }
});
const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
  );
}

export default App;