import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const NotFoundPage: React.FC = () => {
  return (
    <Box
      display="flex"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2">Not found page</Typography>

      <Typography>You may have mistyped the page address.</Typography>

      <Box mt={10}>
        <Button component={RouterLink} to="/" variant="contained">
          Main page
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
