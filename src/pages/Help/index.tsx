import Header from "../../components/Header";
import {
  Box,
  Typography,
  Container,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import { faqData } from "../Help/type";
export default function Help() {
  const [activeTab, setActiveTab] = useState<string>("partner-onboarding");
  const [isBgWhite, setIsBgWhite] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setIsBgWhite(true);
      } else {
        setIsBgWhite(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: isBgWhite ? "#fff" : "#37718e",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          transition: "background-color 0.25s ease-out",
        }}
      >
        <Header />
        <Box
          sx={{
            bgcolor: "#37718e",
            color: "#fff",
            py: { xs: 4, md: 8 },
            px: { xs: 2, md: 0 },
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 1,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Help & Support
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ opacity: 0.9, fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              Let's take a step ahead and help you better.
            </Typography>
          </Container>
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            mt: { xs: 2, md: "-40px" },
            mb: 4,
            flex: 1,
            px: { xs: 1, md: 2, sm: 0 },
          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              boxShadow: { xs: 0, md: "0 2px 12px rgba(0,0,0,0.08)" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              minHeight: "60vh",
              borderRadius: { xs: 0, md: 1 },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "280px" },
                bgcolor: "#edf1f7",
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                overflowX: { xs: "auto", md: "visible" },
                whiteSpace: { xs: "nowrap", md: "normal" },
                borderRight: { xs: "none", md: "1px solid #e2e8f0" },
                borderBottom: { xs: "1px solid #e2e8f0", md: "none" },
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {Object.entries(faqData).map(([key, value]) => {
                const isActive = activeTab === key;
                return (
                  <Button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    sx={{
                      justifyContent: "flex-start",
                      textAlign: "left",
                      width: { xs: "auto", md: "100%" },
                      flexShrink: 0,
                      py: { xs: 1.5, md: 3 },
                      px: { xs: 2.5, md: 4 },
                      borderRadius: 0,
                      textTransform: "none",
                      fontWeight: isActive ? 750 : 650,
                      color: isActive ? "#02060c" : "#686b78",
                      bgcolor: isActive ? "#ffffff" : "transparent",
                      borderLeft: {
                        xs: "none",
                        md: isActive
                          ? "4px solid #fc8019"
                          : "4px solid transparent",
                      },
                      borderBottom: {
                        xs: isActive
                          ? "4px solid #fc8019"
                          : "4px solid transparent",
                        md: "none",
                      },
                      "&:hover": {
                        bgcolor: isActive ? "#ffffff" : "rgba(0, 0, 0, 0.04)",
                        color: "#02060c",
                      },
                    }}
                  >
                    {value.title}
                  </Button>
                );
              })}
            </Box>
            <Box sx={{ flex: 1, p: { xs: 2.5, md: 5 } }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                {faqData[activeTab].title}
              </Typography>
              {faqData[activeTab].items.map((item, index) => (
                <Accordion
                  key={index}
                  elevation={0}
                  sx={{
                    borderBottom: "1px solid #e2e8f0",
                    "&:before": { display: "none" },
                    mb: 1,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#686b78" }} />}
                    sx={{
                      px: 0,
                      "& .MuiAccordionSummary-content": {
                        my: 1.5,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#282c3f",
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 0, pb: 2 }}>
                    <Typography
                      sx={{
                        color: "#686b78",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
