import { Box, Typography, Grid, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import type{ FooterHeadingProps, FooterLinkItemProps } from "./type";
import { Link } from "react-router-dom";

// Custom re-usable component for non-link headings
export function FooterHeading({ children }: FooterHeadingProps) {
  return (
    <Typography fontWeight={700} mb={1}>
      {children}
    </Typography>
  );
}

// Custom re-usable component for links
export function FooterLinkItem({ children, href = "#" }: FooterLinkItemProps) {
  return (
    <Typography
      component={Link}
      to={href || "#"}
      fontSize={14}
      color="#686b78"
      mb={1}
      display="block"
      sx={{ 
        textDecoration: "none",
        cursor: "pointer", 
        "&:hover": { color: "#000" } 
      }}
    >
      {children}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#f7f7f7" }}>
      {/* DOWNLOAD APP STRIP */}
      <Box
        maxWidth="lg"
        mx="auto"
        px={2}
        py={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
      >
        <Typography fontSize={22} fontWeight={600}>
          For better experience, download the Swiggy app now
        </Typography>

        <Box display="flex" gap={2}>
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
            <Box
              component="img"
              src="/images/play_store.png"
              sx={{ height: 58, cursor: "pointer",borderRadius:1 }}
            />
          </a>
          <a href="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
            <Box
              component="img"
              src="/images/app_store.png"
              sx={{ height: 58, cursor: "pointer",borderRadius:1 }}
            />
          </a>
        </Box>  
      </Box>

      {/* MAIN FOOTER */}
      <Box
        sx={{ paddingLeft: { xs: 1, md: 15 }, paddingRight: { xs: 1, md: 15 } }}
        mx="auto"
        px={2}
        py={6}
      >
        <Grid container spacing={4}>
          {/* LOGO SECTION */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography fontSize={28} fontWeight={700} color="#fc8019">
              Swiggy
            </Typography>
            <Typography mt={1} color="#686b78">
              © 2026 Swiggy Limited
            </Typography>
          </Grid>

          {/* COMPANY */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterHeading>Company</FooterHeading>
            <FooterLinkItem>About Us</FooterLinkItem>
            <FooterLinkItem>Swiggy Corporate</FooterLinkItem>
            <FooterLinkItem>Careers</FooterLinkItem>
            <FooterLinkItem>Team</FooterLinkItem>
            <FooterLinkItem>Swiggy One</FooterLinkItem>
            <FooterLinkItem>Instamart</FooterLinkItem>
            <FooterLinkItem>Dineout</FooterLinkItem>
            <FooterLinkItem>Genie</FooterLinkItem>
            <FooterLinkItem>Minis</FooterLinkItem>
            <FooterLinkItem>Pyng</FooterLinkItem>
          </Grid>

          {/* CONTACT */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterHeading>Contact us</FooterHeading>
            <FooterLinkItem>Help & Support</FooterLinkItem>
            <FooterLinkItem>Partner with us</FooterLinkItem>
            <FooterLinkItem>Ride with us</FooterLinkItem>

            <Box mt={3}>
              <FooterHeading>Legal</FooterHeading>
              <FooterLinkItem>Terms & Conditions</FooterLinkItem>
              <FooterLinkItem>Cookie Policy</FooterLinkItem>
              <FooterLinkItem>Privacy Policy</FooterLinkItem>
              <FooterLinkItem>Investor Relations</FooterLinkItem>
            </Box>
          </Grid>

          {/* AVAILABLE IN */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterHeading>Available in:</FooterHeading>
            <FooterLinkItem>Bangalore</FooterLinkItem>
            <FooterLinkItem>Gurgaon</FooterLinkItem>
            <FooterLinkItem>Hyderabad</FooterLinkItem>
            <FooterLinkItem>Delhi</FooterLinkItem>
            <FooterLinkItem>Mumbai</FooterLinkItem>
            <FooterLinkItem>Pune</FooterLinkItem>
          </Grid>

          {/* LIFE AT SWIGGY */}
          <Grid size={{ xs: 6, md: 3 }}>
            <FooterHeading>Life at Swiggy</FooterHeading>
            <FooterLinkItem>Explore with Swiggy</FooterLinkItem>
            <FooterLinkItem>Swiggy News</FooterLinkItem>
            <FooterLinkItem>Snackables</FooterLinkItem>

            <Box mt={3}>
              <FooterHeading>Social Links</FooterHeading>
              <Box display="flex" gap={1}>
                <IconButton size="small">
                  <LinkedInIcon />
                </IconButton>
                <IconButton size="small">
                  <InstagramIcon />
                </IconButton>
                <IconButton size="small">
                  <FacebookIcon />
                </IconButton>
                <IconButton size="small">
                  <PinterestIcon />
                </IconButton>
                <IconButton size="small">
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
