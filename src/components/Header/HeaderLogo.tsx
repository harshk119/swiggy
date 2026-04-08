import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src="/images/swiggy.png" alt="Swiggy" height={58} />
      </Link>
      <Typography fontWeight={600} fontSize={14}>
        Other
      </Typography>
    </>
  );
}
