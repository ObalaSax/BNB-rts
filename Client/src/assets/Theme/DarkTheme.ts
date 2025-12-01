import { createTheme } from "@mui/material/styles";

const tezzaRed = "#D4212D";
const tezzaGold = "#C5A133";

const DarkTheme = createTheme({
  // --- **CRITICAL: Set the theme mode to 'dark'** ---
  palette: {
    mode: "dark",

    primary: {
      main: tezzaRed,
      light: "#E25960",
      dark: "#9F1821",
      contrastText: "#FFFFFF",
    },

    // --- Secondary Color ---
    secondary: {
      main: tezzaGold,
      light: "#DCC36C",
      dark: "#947D27",
      contrastText: "#000000",
    },

    background: {
      default: "#121212",
      paper: "#1D1D1D",
    },

    // --- Text Colors (Adjusted for dark mode) ---
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },

    divider: "rgba(255, 255, 255, 0.12)",
  },

  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  },
});

export default DarkTheme;
