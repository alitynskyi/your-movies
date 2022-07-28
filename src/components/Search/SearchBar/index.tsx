import React, { useState, useRef, useEffect } from "react";
import { useDebounce, useOnClickOutside } from "usehooks-ts";
import { Link as RouterLink } from "react-router-dom";

import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SearchBarList from "../SearchBarList";

import { useLazyGetMoviesByTypeQuery } from "../../../services/movieService";
import theme from "../../../common/theme";
import useStyles from "./useStyles";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const query = useDebounce(inputValue);

  const inputRef = useRef(null);
  const classes = useStyles();

  const showSearchList = isFocused && query;
  const type = tabValue === 0 ? "movie" : "tv";

  const [trigger, { data: moviesData }] = useLazyGetMoviesByTypeQuery();

  const handleChangeTabValue = (
    event: React.SyntheticEvent,
    newValue: number,
  ) => {
    setTabValue(newValue);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.trim());
  };

  useOnClickOutside(inputRef, () => setIsFocused(false));

  useEffect(() => {
    if (query) {
      trigger({ query, type });
    }
  }, [query, trigger, type]);

  return (
    <Box
      width={isFocused ? 360 : 200}
      sx={{ transition: theme.transitions.create("width") }}
    >
      <FormControl fullWidth ref={inputRef}>
        <Input
          placeholder="Search..."
          value={inputValue}
          onChange={handleChangeInput}
          onFocus={() => setIsFocused(true)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          sx={{ py: 1 }}
          endAdornment={
            inputValue ? (
              <IconButton
                color="inherit"
                size="small"
                onClick={() => setInputValue("")}
              >
                <ClearIcon />
              </IconButton>
            ) : null
          }
        />

        {showSearchList && (
          <Box
            position="absolute"
            width="100%"
            top={50}
            borderRadius="4px"
            bgcolor="primary.light"
          >
            <Box borderBottom="1px solid white">
              <Tabs
                value={tabValue}
                onChange={handleChangeTabValue}
                variant="fullWidth"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Films" />
                <Tab label="Series" />
              </Tabs>
            </Box>

            <Box>
              <SearchBarList movies={moviesData?.results} mediaType={type} />

              {moviesData?.results.length !== 0 && (
                <Box className={classes.watchAllBtn}>
                  <Button
                    component={RouterLink}
                    to={`/search/${query}`}
                    fullWidth
                    color="inherit"
                  >
                    Watch all
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </FormControl>
    </Box>
  );
};

export default SearchBar;