import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Icon from "../../assets/images/elogo.png";
import { Container, MenuItem } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../mui.overrides/theme";
export default function Header() {
  return (
    <AppBar elevation={1} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, flexGrow: 0.3, display: { xs: "none", md: "flex" } }}
          >
            <Image src={Icon} alt="E-commerce logo" />
          </Typography>
          <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <Typography color="secondary" variant="h6">
                home
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography color="secondary" variant="h6">
                shop
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography color="secondary" variant="h6">
                products
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography color="secondary" variant="h6">
                blog
              </Typography>
            </MenuItem>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon color="info" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="secondary"
            >
              <Badge badgeContent={17} color="info">
                <ShoppingCartOutlinedIcon color="secondary" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
