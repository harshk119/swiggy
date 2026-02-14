import { Box, Typography, Grid, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

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
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
      >
        <Typography fontSize={22} fontWeight={600}>
          For better experience, download the Swiggy app now
        </Typography>

        <Box display="flex" gap={2}>
          <Box
            component="img"
            src="/playstore.png"
            sx={{ height: 48, cursor: "pointer" }}
          />
          <Box
            component="img"
            src="/appstore.png"
            sx={{ height: 48, cursor: "pointer" }}
          />
        </Box>
      </Box>

      {/* MAIN FOOTER */}
      <Box maxWidth="lg" mx="auto" px={2} py={6}>
        <Grid container spacing={6}>
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
            <FooterTitle text="Company" />
            <FooterLink text="About Us" />
            <FooterLink text="Swiggy Corporate" />
            <FooterLink text="Careers" />
            <FooterLink text="Team" />
            <FooterLink text="Swiggy One" />
            <FooterLink text="Instamart" />
            <FooterLink text="Dineout" />
            <FooterLink text="Genie" />
            <FooterLink text="Minis" />
            <FooterLink text="Pyng" />
          </Grid>

          {/* CONTACT */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterTitle text="Contact us" />
            <FooterLink text="Help & Support" />
            <FooterLink text="Partner with us" />
            <FooterLink text="Ride with us" />

            <Box mt={3}>
              <FooterTitle text="Legal" />
              <FooterLink text="Terms & Conditions" />
              <FooterLink text="Cookie Policy" />
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Investor Relations" />
            </Box>
          </Grid>

          {/* AVAILABLE IN */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterTitle text="Available in:" />
            <FooterLink text="Bangalore" />
            <FooterLink text="Gurgaon" />
            <FooterLink text="Hyderabad" />
            <FooterLink text="Delhi" />
            <FooterLink text="Mumbai" />
            <FooterLink text="Pune" />
          </Grid>

          {/* LIFE AT SWIGGY */}
          <Grid size={{ xs: 6, md: 3 }}>
            <FooterTitle text="Life at Swiggy" />
            <FooterLink text="Explore with Swiggy" />
            <FooterLink text="Swiggy News" />
            <FooterLink text="Snackables" />

            <Box mt={3}>
              <FooterTitle text="Social Links" />
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

/* ---------- Small Reusable Footer Pieces ---------- */

function FooterTitle({ text }: { text: string }) {
  return (
    <Typography fontWeight={700} mb={1}>
      {text}
    </Typography>
  );
}

function FooterLink({ text }: { text: string }) {
  return (
    <Typography
      fontSize={14}
      color="#686b78"
      mb={1}
      sx={{ cursor: "pointer", "&:hover": { color: "#000" } }}
    >
      {text}
    </Typography>
  );
}
