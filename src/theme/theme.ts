import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Massively-style red
      main: "#c62828",
    },

    secondary: {
      main: "#666666",
    },

    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },

    text: {
      primary: "#212121",
      secondary: "#666666",
    },
  },

  typography: {
    fontFamily: '"Source Sans 3", sans-serif',

    h1: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 900,
      fontSize: "4rem",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },

    h2: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 700,
      fontSize: "2.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },

    h3: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.03em",
    },

    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.9,
    },

    button: {
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    },
  },

  shape: {
    borderRadius: 0,
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#212121",
          borderBottom: "1px solid #e0e0e0",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        },

        outlined: {
          borderWidth: "2px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #e0e0e0",
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: "3rem",
          paddingBottom: "3rem",
        },
      },
    },
  },
});

export default theme;
