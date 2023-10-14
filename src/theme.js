import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: "#5C87DC",
    },
    secondary: {
      main: "#74E3CE",
    },
    common: {
      black: "#1A1A1A",
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        input: {
          padding: 15,
        },
      },
    },
    MuiTypography: {
      // variants: [
      //   {
      //     props: { variant: "highlight" },
      //     style: {
      //       fontWeight: 700,
      //       padding: 8,
      //       backgroundColor: "#5C87DC",
      //       color: "white",
      //     },
      //   },
      // ],
      styleOverrides: {
        root: {
          "&.highlight": {
            fontWeight: 700,
            padding: 8,
            backgroundColor: "#5C87DC",
            color: "white",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: "capitalize",
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
  },
});
