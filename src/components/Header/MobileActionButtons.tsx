import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function MobileActionButtons() {
  return (
    <Box display={{ xs: "flex", md: "none" }} gap={1}>
      <IconButton size="small" component={Link} to="/search">
        <SearchIcon />
      </IconButton>
      <IconButton size="small" component={Link} to="/cart">
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  );
}
