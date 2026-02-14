import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

type Restaurant = {
  id: number;
  name: string;
  image: string;
  offer: string;
  rating: number;
  time: string;
};

type Props = {
  restaurant: Restaurant;
};

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <Card sx={{ minWidth: 265, backgroundColor: "f7f7f7" }}>
      <Box position="relative">
        <CardMedia component="img" height="160" image={restaurant.image} />
        <Typography
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            color: "#f7f7f7",
            fontWeight: 700,
          }}
        >
          {restaurant.offer}
        </Typography>
      </Box>

      <CardContent>
        <Typography fontWeight={600}>{restaurant.name}</Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <StarIcon fontSize="small" color="success" />
          <Typography variant="body2">
            {restaurant.rating} • {restaurant.time}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
