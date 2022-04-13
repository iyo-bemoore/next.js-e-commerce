import styles from "./PageTopButtons.module.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge } from "@mui/material";
import { StyledBadge } from "../../mui.overrides/theme";
const PageTopButtons = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <StyledBadge badgeContent={1} color="info">
            my wishlist
          </StyledBadge>
        </li>
        <li>about us</li>
        <li>contact us</li>
        <li>login</li>
      </ul>
    </nav>
  );
};
export default PageTopButtons;
