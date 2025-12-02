import { createTheme } from "@mui/material/styles";

// Define the core colors based on the Tezza logo
const BnbColor1 = "#473472";
const BnbColor2 = "#53629E";
const BnbColor3 = "#87BAC3";

const tezzaPalette = {
  // --- Primary Color (The Main Brand Color: Red) ---
  // Used for most components, buttons, etc.
  primary: {
    main: BnbColor1,
    light: "#E25960",
    dark: "#9F1821",

    contrastText: "#FFFFFF",
  },

  // --- Secondary Color (The Accent/Contrast Color: Gold) ---
  // Used for secondary actions, accents, or highlighting.
  secondary: {
    main: BnbColor2,
    light: "#DCC36C",
    dark: "#947D27",
    contrastText: "#1A1A1A",
  },

  background: {
    default: "#ffffff",
    paper: "#f1f1f1ff",
    extra: BnbColor3,
  },

  // --- Text Colors ---
  text: {
    primary: "#1A1A1A",
    secondary: "#D3D3D3",
  },
};

// Create the Material-UI theme
const LightTheme = createTheme({
  palette: tezzaPalette,

  // You can also define typography, shadows, etc., here to complete the theme
  typography: {
    fontFamily: [
      // Example: Use a modern font
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});

export default LightTheme;
