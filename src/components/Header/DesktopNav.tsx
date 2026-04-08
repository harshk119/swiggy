import { Box, Button } from "@mui/material";
import type { MenuItem } from "./type";
import { Link } from "react-router-dom";

export default function DesktopNav({ items }: { items: MenuItem[] }) {
  return (
    <Box display={{ xs: "none", md: "flex" }} alignItems="center" gap={6}>
      {items.map((item, index) => (
        <Button
          key={index}
          component={Link}
          to={item.path || "/"}
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
  );
}
