import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fc8019",
    },
    text: {
      primary: "#282c3f",
      secondary: "#686b78",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial",
    h6: { fontWeight: 600 },
    body2: { color: "#686b78" },
  },
  shape: {
    borderRadius: 12,
  },
});
