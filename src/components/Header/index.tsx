import React from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./useStyles";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap flexGrow={1} ml={2}>
            KinoTyt
          </Typography>

          <Box className={classes.inputWrapper}>
            <Box
              display="flex"
              alignItems="center"
              position="absolute"
              height="100%"
              pl={2}
            >
              <SearchIcon />
            </Box>

            <InputBase
              classes={{ input: classes.input }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
