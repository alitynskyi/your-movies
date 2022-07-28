import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Logo from "../Logo";

import useStyles from "./useStyles";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" bgcolor="primary.main">
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <Box>
            <RouterLink to="/" className={classes.routerLink}>
              <Logo />
            </RouterLink>
          </Box>

          <Box display={{ xs: "none", md: "flex" }}>
            <MenuItem component={RouterLink} to="/films" sx={{ mr: 4 }}>
              <Typography variant="h6" color="common.white">
                Films
              </Typography>
            </MenuItem>

            <MenuItem component={RouterLink} to="/series" sx={{ mr: 4 }}>
              <Typography variant="h6" color="common.white">
                Series
              </Typography>
            </MenuItem>
          </Box>

          <Typography variant="body2" color="common.white">
            <Link
              href="https://developers.themoviedb.org/3"
              target="_blank"
              color="inherit"
              underline="none"
              borderRight="1px solid"
              pr={2}
              mr={2}
            >
              Database API
            </Link>
            © 2022 YourMovies
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
