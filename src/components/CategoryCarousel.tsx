import { Box, Typography, useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";

import { useRef } from "react";
import CarouselArrows from "./CarouselArrows";

type Category = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  categories: Category[];
};

export default function CategoryCarousel({ categories }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width:900px)");

  return (
    <Box sx={{ backgroundColor: "#f7f7f7" }}>
      <Box maxWidth="lg" mx="auto" px={2} py={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          <Typography fontSize={25} fontWeight={700}>
            What's on your mind?
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
          {categories.map((item) => (
            <Box
              key={item.id}
              minWidth={120}
              textAlign="center"
              sx={{ cursor: "pointer" }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: 200,
                  height: 180,
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
        <Divider sx={{ borderBottomWidth: 2, mt: 4 }} />
      </Box>
    </Box>
  );
}
