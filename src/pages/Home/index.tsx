import Header from "../../components/Header/index";

import CategoryCarousel from "../../components/CategoryCarousel";
import { Box, CircularProgress, Typography } from "@mui/material";
import RestaurantCarousel from "../../components/RestaurantCarousel";
import RestaurantGridSection from "../../components/RestaurantGridSection";
import Footer from "../../components/Footer/index";
import { useFetchSwiggyData } from "../../hooks/useFetchSwiggyData";

export default function Home() {
  const { data, isLoading, error } = useFetchSwiggyData();

  return (
    <>
      <Header />
      <Box>
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <Typography color="error">{error}</Typography>
          </Box>
        ) : (
          <>
            <CategoryCarousel categories={data.categories} />
            <RestaurantCarousel
              title="Top restaurant chains in Ahmedabad"
              data={data.restaurants}
            />
            <RestaurantGridSection data={data.restaurants} />
          </>
        )}
        <Footer />
      </Box>
    </>
  );
}
