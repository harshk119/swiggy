// components/Header.tsx
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export default function Header() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <img src="/logo.svg" alt="Swiggy" height={30} />
          <Typography fontWeight={600}>Other</Typography>
        </Box>

        <Box display="flex" gap={4} alignItems="center">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <LocalOfferIcon />
          </IconButton>
          <Typography>Help</Typography>
          <Typography>Sign In</Typography>
          <Typography>Cart</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
