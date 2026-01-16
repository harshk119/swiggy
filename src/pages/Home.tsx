import Header from "../components/Header";
import CategoryCarousel from "../components/CategoryCarousel";
import { Box, Container } from "@mui/material";

const categories = [
  { title: "Pizzas", image: "/pizza.png" },
  { title: "Burgers", image: "/burger.png" },
  { title: "Cakes", image: "/cake.png" },
  { title: "Biryani", image: "/biryani.png" },
];

// Category Image and Logo Remains

export default function App() {
  return (
    <>
      <Header />

      <Box sx={{ mt: 2 }}>
        <Container maxWidth="lg">
          <CategoryCarousel categories={categories} />
        </Container>
      </Box>
    </>
  );
}
