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
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import swiggyLogo from "../images/swiggy.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar
          sx={{
            px: { xs: 1, md: 3 },
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
              {/* Menu Icon For Mobile Appaers for xs */}
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

          {/* Desktop */}
          <Box display={{ xs: "none", md: "flex" }} alignItems="center" gap={3}>
            <HeaderItem icon={<SearchIcon />} text="Search" />
            <HeaderItem icon={<LocalOfferIcon />} text="Offers" />
            <HeaderItem icon={<HelpOutlineIcon />} text="Help" />
            <HeaderItem icon={<PersonOutlineIcon />} text="Sign In" />
            <HeaderItem icon={<ShoppingCartIcon />} text="Cart" />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box width={260} role="presentation">
          <Box px={2} py={2}>
            <img src={swiggyLogo} alt="Swiggy" height={58} />{" "}
          </Box>

          <Divider />

          <List>
            <DrawerItem icon={<SearchIcon />} text="Search" />
            <DrawerItem icon={<LocalOfferIcon />} text="Offers" />
            <DrawerItem icon={<HelpOutlineIcon />} text="Help" />
            <DrawerItem icon={<PersonOutlineIcon />} text="Sign In" />
            <DrawerItem icon={<ShoppingCartIcon />} text="Cart" />
          </List>
        </Box>
      </Drawer>
    </>
  );
}

function HeaderItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <Box display="flex" alignItems="center" gap={0.5}>
      {icon}
      <Typography>{text}</Typography>
    </Box>
  );
}

function DrawerItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
