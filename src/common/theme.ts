import { createTheme } from "@mui/material";

const breakpoints = {
  values: { xs: 0, sm: 420, md: 760, lg: 1024, xl: 1400 },
};

const colors = {
  primary: "#5c8f22",
};

const theme = createTheme({
  spacing: 4,
  breakpoints,
  palette: {
    primary: { main: colors.primary },
  },
});

export default theme;
