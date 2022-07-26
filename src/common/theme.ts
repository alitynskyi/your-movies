import { createTheme } from "@mui/material";

const breakpoints = {
  values: { xs: 0, sm: 420, md: 760, lg: 1024, xl: 1400 },
};

const colors = {
  primary: "#5c8f22",
};

const defaultTheme = createTheme({
  spacing: 5,
  breakpoints,
});

const theme = createTheme({
  spacing: 5,
  breakpoints,
  palette: {
    primary: { main: colors.primary },
  },
  typography: {
    h4: {
      fontSize: 30,
      fontWeight: 700,
    },
    h5: {
      fontSize: 26,
      fontWeight: 700,
    },
    h6: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.2,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.up("sm")]: {
            paddingRight: defaultTheme.spacing(5),
            paddingLeft: defaultTheme.spacing(5),
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.up("sm")]: {
            padding: 0,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.up("md")]: {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

export default theme;
