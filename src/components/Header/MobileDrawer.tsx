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
import { Link } from "react-router-dom";

export default function MobileDrawer({
  items,
  open,
  onClose,
}: {
  items: MenuItem[];
  open: boolean;
  onClose: () => void;
}) {
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
          {items.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={item.path || "/"}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
