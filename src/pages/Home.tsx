import Header from "../components/Header";
import CategoryCarousel from "../components/CategoryCarousel";
import { Box } from "@mui/material";
import pizzaLogo from "../images/Pizzas.png";
import burgerLogo from "../images/Burgers.png";
import cakeLogo from "../images/Cakes.png";
import vadapavLogo from "../images/VadaPav.png";
import rollsLogo from "../images/Rolls.png";
import biryaniLogo from "../images/Biryani.png";
import samosaLogo from "../images/Samosa.png";
import teaLogo from "../images/Tea.png";
import momosLogo from "../images/Momos.png";
import shakeLogo from "../images/Shake.png";
import RestaurantCarousel from "../components/RestaurantCarousel";
import MacD from "../images/MacD.png";
import KFC from "../images/KFC.png";
import Subway from "../images/Subway.png";
import Lapinoz from "../images/Lapinoz.png";
import RestaurantGridSection from "../components/RestaurantGridSection";
import Footer from "../components/Footer";
const categories = [
  { id: 1, title: "Pizzas", image: pizzaLogo },
  { id: 2, title: "Burgers", image: burgerLogo },
  { id: 3, title: "Cakes", image: cakeLogo },
  { id: 4, title: "Vada Pav", image: vadapavLogo },
  { id: 5, title: "Rolls", image: rollsLogo },
  { id: 6, title: "Biryani", image: biryaniLogo },
  { id: 7, title: "Samosa", image: samosaLogo },
  { id: 8, title: "Tea", image: teaLogo },
  { id: 9, title: "Momos", image: momosLogo },
  { id: 10, title: "Shake", image: shakeLogo },
];

const restaurants = [
  {
    id: 1,
    name: "La Pino'z Pizza",
    image: Lapinoz,
    offer: "50% OFF UPTO ₹100",
    rating: 4.2,
    time: "30-35 mins",
  },
  {
    id: 2,
    name: "McDonald's",
    image: MacD,
    offer: "₹125 OFF",
    rating: 4.5,
    time: "20-25 mins",
  },
  {
    id: 3,
    name: "KFC",
    image: KFC,
    offer: "40% OFF",
    rating: 4.3,
    time: "25-30 mins",
  },
  {
    id: 4,
    name: "Subway",
    image: Subway,
    offer: "30% OFF",
    rating: 4.3,
    time: "25-30 mins",
  },
  {
    id: 5,
    name: "Subway",
    image: Subway,
    offer: "40% OFF",
    rating: 4.3,
    time: "25-30 mins",
  },
  {
    id: 6,
    name: "Subway",
    image: Subway,
    offer: "40% OFF",
    rating: 4.3,
    time: "25-30 mins",
  },
  {
    id: 7,
    name: "Subway",
    image: Subway,
    offer: "40% OFF",
    rating: 4.3,
    time: "25-30 mins",
  },
  {
    id: 8,
    name: "Subway",
    image: Subway,
    offer: "40% OFF",
    rating: 4.3,
    time: "25-30 mins",
  },
  {
    id: 9,
    name: "Subway",
    image: Subway,
    offer: "40% OFF",
    rating: 4.3,
    time: "25-30 mins",
  },
  {
    id: 10,
    name: "Subway",
    image: Subway,
    offer: "40% OFF",
    rating: 4.3,
    time: "25-30 mins",
  },
  {
    id: 11,
    name: "Subway",
    image: Subway,
    offer: "40% OFF",
    rating: 4.3,
    time: "25-30 mins",
  },
  {
    id: 12,
    name: "Subway",
    image: Subway,
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

      <Box>
        <CategoryCarousel categories={categories} />
        <RestaurantCarousel
          title="Top restaurant chains in Ahmedabad"
          data={restaurants}
        />
        <RestaurantGridSection data={restaurants}></RestaurantGridSection>
        <Footer></Footer>
      </Box>
    </>
  );
}
