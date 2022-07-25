import { makeStyles } from "@mui/styles";
import { Theme, alpha } from "@mui/material";

export default makeStyles<Theme>((theme) => ({
  inputWrapper: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  input: {
    color: theme.palette.common.white,
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create("width"),
    width: 150,
    "&:focus": {
      width: 250,
    },
  },
}));
