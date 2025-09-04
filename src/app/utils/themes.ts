import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#c48d4c", // Solace brown
    },
    secondary: {
      main: "#4a8069", // Solace green
    },
    background: {
      default: "#d5e5db", // Light green background
      paper: "#ffffff", // White card background
    },
    neutral: {
      100: "#f9fafb", // Even row background
      200: "#f3f4f6", // Odd row background
      300: "#dbeafe", // Hover color
      400: "#E0F2FE", // Default chip background
      500: "#f0e97a", // Warning chip background
      600: "#B91C1C", // Warning chip text
      700: "#0369A1", // Default chip text
    },
  },
  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontFamily: "Cormorant Garamond, serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundImage: "linear-gradient(to right, #5f9a7d, #c5a77b)",
          "&:hover": {
            backgroundImage: "linear-gradient(to right, #5f9a7d, #c5a77b)",
          },
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    };
  }

  interface PaletteOptions {
    neutral?: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
    };
  }
}
