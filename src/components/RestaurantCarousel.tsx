import { Box, Typography } from "@mui/material";
import RestaurantCard from "./RestaurantCard";

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
  return (
    <Box mt={6}>
      <Typography variant="h6" mb={2}>
        {title}
      </Typography>

      <Box display="flex" gap={3} overflow="auto">
        {data.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </Box>
    </Box>
  );
}
