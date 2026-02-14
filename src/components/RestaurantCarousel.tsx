import { Box, Typography, useMediaQuery } from "@mui/material";
import RestaurantCard from "./RestaurantCard";
import { useRef } from "react";
import CarouselArrows from "./CarouselArrows";
import { Divider } from "@mui/material";
type Restaurant = {
  id: number;
  name: string;
  image: string;
  offer: string;
  rating: number;
  time: string;
};

type Props = {
  title: string;
  data: Restaurant[];
};

export default function RestaurantCarousel({ title, data }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width:900px)");
  return (
    <Box sx={{ backgroundColor: "#f7f7f7" }}>
      <Box maxWidth="lg" mx="auto" px={2} py={4}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          <Typography variant="h6" mb={2}>
            {title}
          </Typography>
          {isDesktop && <CarouselArrows scrollRef={scrollRef} />}
        </Box>
        <Box
          ref={scrollRef}
          display="flex"
          gap={5}
          overflow="auto"
          sx={{
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {data.map((res) => (
            <RestaurantCard key={res.id} restaurant={res} />
          ))}
        </Box>
        <Divider sx={{ borderBottomWidth: 2, mt: 8 }} />
      </Box>
    </Box>
  );
}
