"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  Box,
  CircularProgress as MUICircularProgress,
  Typography,
  useTheme,
} from "@mui/material";

export function CircularProgress({ percentage, label, size = 120 }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          width: size,
          height: size,
        }}
      >
        <MUICircularProgress
          variant="determinate"
          value={100}
          size={size}
          thickness={3.2}
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
          }}
        />
        <MUICircularProgress
          variant="determinate"
          value={percentage}
          size={size}
          thickness={3.2}
          sx={{
            position: "absolute",
            left: 0,
            color: theme.palette.primary.main,
            circle: {
              strokeLinecap: "round",
            },
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: "text.primary",
                fontWeight: "bold",
              }}
            >
              {percentage}%
            </Typography>
          </motion.div>
        </Box>
      </Box>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        style={{ width: "100%", textAlign: "center", marginTop: "16px" }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontWeight: "medium",
          }}
        >
          {label}
        </Typography>
      </motion.div>
    </Box>
  );
}

CircularProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.number,
};