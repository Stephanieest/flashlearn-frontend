import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./components/ThemeComponents/ThemeProvider";
import { useTheme } from "./components/ThemeComponents/ThemeProvider";
import { theme as lightTheme, darkTheme } from "./Theme";
import Homepage from "./components/HomepageComponents/Homepage"; // Corrected import
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/SignUp";
import WelcomeSection from "./components/Dashboard/WelcomeSection";
import MyDecks from "./components/HomepageComponents/MyDecks";
import DeckView from "./components/DeckView/DeckView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mydecks" element={<MyDecks />} />
          <Route path="/mydecks/:deckId" element={<DeckView />} />
        </Routes>
      </Router>
    </MUIThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
