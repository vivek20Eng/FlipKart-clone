import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff", 
    },
    secondary: {
      main: "#f0f5ff", 
    },
    text: {
      primary: "#333",
      secondary: "#777", 
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", 
    h1: {
      fontSize: "2rem",
      color: green[700],
    },
    h2: {
      fontSize: "1.5rem", 
      color: green[600],
    },
    body1: {
      fontSize: "1rem",
      color: "#333", 
    },
    button: {
      fontSize: "0.875rem", 
      textTransform: "none", 
    },
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
