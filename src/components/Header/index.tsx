import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import type { MenuItem } from "./type";

import HeaderLogo from "./HeaderLogo";
import MobileActionButtons from "./MobileActionButtons";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";

// 1. Move static data outside so it's not recreated on every render
export const defaultMenuItems: MenuItem[] = [
  { icon: <SearchIcon />, text: "Search", path: "/search" },
  { icon: <LocalOfferIcon />, text: "Offers", path: "/offers" },
  { icon: <HelpOutlineIcon />, text: "Help", path: "/help" },
  { icon: <PersonOutlineIcon />, text: "Sign In", path: "/signin" },
  { icon: <ShoppingCartIcon />, text: "Cart", path: "/cart" },
];

// 2. Main Reusable Component
export default function Header({
  menuItems = defaultMenuItems,
}: {
  menuItems?: MenuItem[];
} = {}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar
          sx={{
            px: { xs: 1, md: 15 },
            minHeight: 56,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Left Side: Mobile Menu Button + Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton
              size="small"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <HeaderLogo />
          </Box>

          {/* Right Side Buttons Shown Only for Mobile View */}
          <MobileActionButtons />

          {/* Desktop Navigation */}
          <DesktopNav items={menuItems} />
        </Toolbar>
      </AppBar>

      {/* Slide-out Mobile Navigation */}
      <MobileDrawer
        items={menuItems}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
