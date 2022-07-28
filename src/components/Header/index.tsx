import React, { useState, MouseEvent } from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

import useStyles from "./useStyles";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Box mr={12} display={{ xs: "none", md: "flex" }}>
            <RouterLink to="/" className={classes.routerLink}>
              <Logo size="large" />
            </RouterLink>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem component={RouterLink} to="/films">
                Films
              </MenuItem>

              <MenuItem component={RouterLink} to="/series">
                Series
              </MenuItem>
            </Menu>
          </Box>

          <Box flexGrow={1} display={{ xs: "flex", md: "none" }}>
            <RouterLink to="/" className={classes.routerLink}>
              <Logo size="large" />
            </RouterLink>
          </Box>

          <Box flexGrow={1} display={{ xs: "none", md: "flex" }}>
            <MenuItem component={RouterLink} to="/films" sx={{ mr: 4 }}>
              <Typography variant="h6">Films</Typography>
            </MenuItem>

            <MenuItem component={RouterLink} to="/series">
              <Typography variant="h6">Series</Typography>
            </MenuItem>
          </Box>

          <SearchBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
