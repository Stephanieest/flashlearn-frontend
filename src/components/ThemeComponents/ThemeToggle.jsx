"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { IconButton } from "@mui/material";

export default function ThemeToggle({ compact = false }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{
        position: "relative",
        width: compact ? "40px" : "56px",
        height: compact ? "24px" : "32px",
        borderRadius: compact ? "12px" : "16px",
        bgcolor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.05)",
        p: "4px",
        "&:hover": {
          bgcolor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.15)"
              : "rgba(0,0,0,0.1)",
        },
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: "4px",
          left: "4px",
          width: compact ? "16px" : "24px",
          height: compact ? "16px" : "24px",
          borderRadius: compact ? "8px" : "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#4255ff", // Updated to blue
        }}
        animate={{ x: isDark ? (compact ? 16 : 24) : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-white" /> // Updated text color
        ) : (
          <Sun className="h-4 w-4 text-white" /> // Updated text color
        )}
      </motion.div>
    </IconButton>
  );
}
