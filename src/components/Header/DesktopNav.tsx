import { Box, Button } from "@mui/material";
import type { MenuItem } from "./type";
import { Link, useLocation } from "react-router-dom";

export default function DesktopNav({
  items,
  onSignInClick,
}: {
  items: MenuItem[];
  onSignInClick: () => void;
}) {
  const location = useLocation();

  return (
    <Box display={{ xs: "none", md: "flex" }} alignItems="center" gap={6}>
      {items.map((item, index) => {
        const isActive = location.pathname === item.path;
        const isSignIn = item.text === "Sign In";

        return (
          <Button
            key={index}
            component={isSignIn ? "button" : Link}
            to={isSignIn ? undefined : (item.path || "/")}
            onClick={isSignIn ? onSignInClick : undefined}
            startIcon={item.icon}
            sx={{
              color: isActive ? "#fc8019" : "#000",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                color: "#fc8019",
              },
            }}
          >
            {item.text}
          </Button>
        );
      })}
    </Box>
  );
}
