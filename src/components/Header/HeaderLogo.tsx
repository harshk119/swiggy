import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src="/images/swiggy.png" alt="Swiggy" height={80} width={"auto"} />
      </Link>
      <Typography fontWeight={600} fontSize={14}>
        Other
      </Typography>
    </>
  );
}
