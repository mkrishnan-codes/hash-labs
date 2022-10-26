import React from "react";
// import './App.scss';
import { AppRouter } from "./router/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import lightBlue from "@mui/material/colors/lightBlue";
import deepOrange from "@mui/material/colors/deepOrange";
const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: deepOrange,
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
