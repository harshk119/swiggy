import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import swiggyLogo from "../../images/swiggy.png";
import type { MenuItem } from "./type";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { icon: <SearchIcon />, text: "Search" },
    { icon: <LocalOfferIcon />, text: "Offers" },
    { icon: <HelpOutlineIcon />, text: "Help" },
    { icon: <PersonOutlineIcon />, text: "Sign In" },
    { icon: <ShoppingCartIcon />, text: "Cart" },
  ];

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
          {/* Mobile Menu  */}
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton
              size="small"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <img src={swiggyLogo} alt="Swiggy" height={58} />
            <Typography fontWeight={600} fontSize={14}>
              Other
            </Typography>
          </Box>

          {/* Same Here Right Side Buttons Shown Only for Mobile View */}
          <Box display={{ xs: "flex", md: "none" }} gap={1}>
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
            <IconButton size="small">
              <ShoppingCartIcon />
            </IconButton>
          </Box>

          <Box display={{ xs: "none", md: "flex" }} alignItems="center" gap={6}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                startIcon={item.icon}
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box width={260} role="presentation">
          <Box px={2} py={2}>
            <img src={swiggyLogo} alt="Swiggy" height={58} />{" "}
          </Box>

          <Divider />

          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
