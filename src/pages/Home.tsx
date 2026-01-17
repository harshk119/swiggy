import Header from "../components/Header";
import CategoryCarousel from "../components/CategoryCarousel";
import { Box, Container } from "@mui/material";
import RestaurantCarousel from "../components/RestaurantCarousel";
const categories = [
  { title: "Pizzas", image: "/pizza.png" },
  { title: "Burgers", image: "/burger.png" },
  { title: "Cakes", image: "/cake.png" },
  { title: "Biryani", image: "/biryani.png" },
];

const restaurants = [
  {
    id: 1,
    name: "La Pino'z Pizza",
    image: "/restaurant1.jpg",
    offer: "50% OFF UPTO ₹100",
    rating: 4.2,
    time: "30-35 mins",
  },
  {
    id: 2,
    name: "McDonald's",
    image: "/restaurant2.jpg",
    offer: "₹125 OFF",
    rating: 4.5,
    time: "20-25 mins",
  },
  {
    id: 3,
    name: "KFC",
    image: "/restaurant3.jpg",
    offer: "40% OFF",
    rating: 4.3,
    time: "25-30 mins",
  },
];

// Category Image and Logo Remains

export default function App() {
  return (
    <>
      <Header />

      <Box sx={{ mt: 2 }}>
        <Container maxWidth="lg">
          <CategoryCarousel categories={categories} />
          <RestaurantCarousel
            title="Top restaurant chains in Ahmedabad"
            data={restaurants}
          />
        </Container>
      </Box>
    </>
  );
}
