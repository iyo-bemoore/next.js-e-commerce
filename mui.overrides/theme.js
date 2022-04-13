import { InputBase, ThemeOptions } from "@mui/material";
import { createTheme, styled, alpha } from "@mui/material/styles";
import { Badge } from "@mui/material";
const themeOptions = {
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "#c96",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "#c96",
          },
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
      dark: "#cc96",
    },
    info: {
      main: "#c96",
      contrastText: "#ffff",
    },
    secondary: {
      main: "#777777",
      light: "#ebebeb",
      dark: "#c96",
    },
    background: {
      default: "#ffffff",
      paper: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: "Manrope",
    h6: {
      fontWeight: 500,
      textTransform: "uppercase",
      fontSize: ".9em",
    },
  },
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -8,
    top: 5,
    padding: "0 4px",
    minWidth: "16px",
    height: "16px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid #ebebeb",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.4, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const theme = createTheme({
  ...themeOptions,
});

export { theme, Search, SearchIconWrapper, StyledInputBase, StyledBadge };
