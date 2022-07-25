import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <Box component="footer" bgcolor="primary.main">
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" color="common.white">
            KinoTyt
          </Typography>

          <Box display="flex">
            <Button color="inherit">Movies</Button>
            <Button color="inherit">Series</Button>
          </Box>

          <Typography variant="body1" color="common.white">
            © 2022 Kinotyt
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
