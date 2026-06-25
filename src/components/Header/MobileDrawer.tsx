import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import type { MenuItem } from "./type";
import { Link, useLocation } from "react-router-dom";

export default function MobileDrawer({
  items,
  open,
  onClose,
  onSignInClick,
}: {
  items: MenuItem[];
  open: boolean;
  onClose: () => void;
  onSignInClick: () => void;
}) {
  const location = useLocation();

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box width={260} role="presentation">
        <Box px={2} py={2}>
          <Link to="/" style={{ display: "flex" }}>
            <img src="/images/swiggy.png" alt="Swiggy" height={58} />
          </Link>
        </Box>

        <Divider />

        <List>
          {items.map((item, index) => {
            const isActive = location.pathname === item.path;
            const isSignIn = item.text === "Sign In";

            return (
              <ListItem key={index} disablePadding>
                <ListItemButton 
                  component={isSignIn ? "div" : Link} 
                  to={isSignIn ? undefined : (item.path || "/")}
                  onClick={() => {
                    onClose();
                    if (isSignIn) {
                      onSignInClick();
                    }
                  }}
                  sx={{
                    color: isActive ? "#fc8019" : "inherit",
                    "&:hover": {
                      color: "#fc8019",
                    },
                    "& .MuiListItemIcon-root": {
                      color: isActive ? "#fc8019" : "inherit",
                    },
                    "&:hover .MuiListItemIcon-root": {
                      color: "#fc8019",
                    }
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
