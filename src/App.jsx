import React from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./components/ThemeComponents/ThemeProvider";
import { useTheme } from "./components/ThemeComponents/ThemeProvider";
import { theme as lightTheme, darkTheme } from "./theme";
import Homepage from "./components/HomePage";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/context/UserContext";

// Wrap the routes with MUI theme provider
function AppContent() {
  const { theme } = useTheme();

  return (
    <MUIThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </MUIThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}
