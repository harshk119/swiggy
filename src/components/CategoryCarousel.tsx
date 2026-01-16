import { Box, Typography } from "@mui/material";

type Category = {
  title: string;
  image: string;
};

type CategoryCarouselProps = {
  categories: Category[];
};

export default function CategoryCarousel({
  categories,
}: CategoryCarouselProps) {
  return (
    <Box mt={4}>
      <Typography variant="h6" mb={2}>
        What's on your mind?
      </Typography>

      <Box display="flex" gap={4} overflow="auto">
        {categories.map((item) => (
          <Box key={item.title} textAlign="center" minWidth={100}>
            <Box
              component="img"
              src={item.image}
              sx={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Typography mt={1}>{item.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
