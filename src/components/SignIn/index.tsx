import {
  Drawer,
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
  Divider,
  Collapse,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function SignInDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showReferral, setShowReferral] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");

  const handleModeToggle = () => {
    setMode((prev) => (prev === "login" ? "signup" : "login"));
    setShowReferral(false);
    // Reset fields
    setPhone("");
    setName("");
    setEmail("");
    setReferral("");
  };

  const handleClose = () => {
    onClose();
    // Reset to login screen when closed
    setMode("login");
    setShowReferral(false);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          sx: {
            width: { xs: "100%", sm: "550px" },
            padding: { xs: "32px 24px", sm: "40px" },
            display: "flex",
            flexDirection: "row",
            boxSizing: "border-box",
          },
        },
      }}
    >
      {/* Left Box: Login Content */}
      <Box
        sx={{
          width: { xs: "100%", sm: "330px" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Close Button */}
        <Box display="flex" justifyContent="flex-start" mb={4}>
          <IconButton onClick={handleClose} sx={{ p: 0, color: "#282c3f" }}>
            <CloseIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>

        {/* Header Info */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={4}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: "#282c3f",
                mb: 1,
                letterSpacing: "-0.5px",
              }}
            >
              {mode === "login" ? "Login" : "Sign up"}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#686b78", fontSize: "14px" }}
            >
              or{" "}
              <Box
                component="span"
                onClick={handleModeToggle}
                sx={{
                  color: "#fc8019",
                  cursor: "pointer",
                  fontWeight: 500,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {mode === "login" ? "create an account" : "login to your account"}
              </Box>
            </Typography>
            {/* Black Underline */}
            <Box sx={{ width: "30px", height: "2px", bgcolor: "#000", mt: 2 }} />
          </Box>

          {/* Food Illustration */}
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              bgcolor: "#f9f9f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src="/images/login_wrap.png"
              alt="Login Graphic"
              style={{ width: "80px", height: "80px", objectFit: "contain" }}
            />
          </Box>
        </Box>

        {/* Form Fields */}
        <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
          <Box
            sx={{
              border: "1px solid #d4d5d9",
              borderRadius: 0,
              overflow: "hidden",
              mb: mode === "signup" ? 2 : 3,
            }}
          >
            {/* Phone Number Field (Visible in both modes) */}
            <TextField
              fullWidth
              variant="standard"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              InputProps={{
                disableUnderline: true,
                sx: { px: 2, py: 2, fontSize: "15px", fontWeight: 500 },
              }}
            />

            {mode === "signup" && (
              <>
                <Divider />
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputProps={{
                    disableUnderline: true,
                    sx: { px: 2, py: 2, fontSize: "15px", fontWeight: 500 },
                  }}
                />
                <Divider />
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    disableUnderline: true,
                    sx: { px: 2, py: 2, fontSize: "15px", fontWeight: 500 },
                  }}
                />
              </>
            )}
          </Box>

          {/* Referral Code section (only in Signup mode) */}
          {mode === "signup" && (
            <Box mb={3}>
              {!showReferral ? (
                <Typography
                  onClick={() => setShowReferral(true)}
                  sx={{
                    color: "#5d8ed5",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Have a referral code?
                </Typography>
              ) : (
                <Collapse in={showReferral}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Referral code"
                    value={referral}
                    onChange={(e) => setReferral(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 0,
                        "&.Mui-focused fieldset": {
                          borderColor: "#fc8019",
                        },
                      },
                    }}
                  />
                </Collapse>
              )}
            </Box>
          )}

          {/* Action Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#fc8019",
              color: "#fff",
              borderRadius: 0,
              py: 1.8,
              fontWeight: 700,
              fontSize: "15px",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#e27216",
                boxShadow: "none",
              },
            }}
          >
            {mode === "login" ? "LOGIN" : "CONTINUE"}
          </Button>

          {/* Footer Policy Text */}
          <Typography
            variant="caption"
            display="block"
            sx={{ color: "#7e808c", mt: 1.5, fontSize: "11px", lineHeight: 1.4 }}
          >
            By {mode === "login" ? "clicking on Login" : "creating an account"}, I
            accept the{" "}
            <Box
              component="span"
              sx={{ color: "#282c3f", fontWeight: 600, cursor: "pointer" }}
            >
              Terms & Conditions
            </Box>{" "}
            &{" "}
            <Box
              component="span"
              sx={{ color: "#282c3f", fontWeight: 600, cursor: "pointer" }}
            >
              Privacy Policy
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* Right Box: Empty White Space */}
      <Box sx={{ display: { xs: "none", sm: "block" }, flex: 1 }} />
    </Drawer>
  );
}
