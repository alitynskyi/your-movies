import React, { useState } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MovieDetailsTabCast from "../MovieDetailsTabCast";
import MovieDetailsTabReviews from "../MovieDetailsTabReviews";

interface MovieDetailsTabsProps {
  type: "movie" | "tv";
  movieId: string;
}

const MovieDetailsTabs: React.FC<MovieDetailsTabsProps> = ({
  movieId,
  type,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Cast" />
          <Tab label="Reviews" />
        </Tabs>
      </Box>

      {value === 0 && <MovieDetailsTabCast type={type} movieId={movieId} />}

      {value === 1 && <MovieDetailsTabReviews type={type} movieId={movieId} />}
    </Box>
  );
};

export default MovieDetailsTabs;
