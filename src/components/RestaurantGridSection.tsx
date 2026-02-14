import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
  data: Restaurant[];
};
export default function RestaurantGridSection({ data }: Props) {
  return (
    <Box sx={{ backgroundColor: "#f7f7f7" }}>
      <Box maxWidth="lg" mx="auto" px={2} py={5}>
        <Box mb={1}>
          <Typography fontSize={24} fontWeight={700}>
            Restaurants with online food delivery in Ahmedabad
          </Typography>
        </Box>
        <Box mb={5}>
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ borderRadius: "30px", textTransform: "none" }}
          >
            Sort By
          </Button>
        </Box>

        <Grid container spacing={4}>
          {data.map((res: any) => (
            <Grid key={res.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <RestaurantCard restaurant={res} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider
        sx={{ borderBottomWidth: 1, backgroundColor: "black", mt: 2 }}
      ></Divider>
    </Box>
  );
}
