import Header from "../../components/Header/index";

import CategoryCarousel from "../../components/CategoryCarousel";
import { Box } from "@mui/material";
import RestaurantCarousel from "../../components/RestaurantCarousel";
import RestaurantGridSection from "../../components/RestaurantGridSection";
import Footer from "../../components/Footer";
import { categories, restaurants } from "./type";
export default function Home() {
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
