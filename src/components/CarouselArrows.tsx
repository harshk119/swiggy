import { IconButton, Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import type { RefObject } from "react";

type Props = {
  scrollRef: RefObject<HTMLDivElement | null>;

  scrollAmount?: number;
};

export default function CarouselArrows({
  scrollRef,
  scrollAmount = 400,
}: Props) {
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <IconButton sx={arrowStyle} onClick={() => scroll("left")}>
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <IconButton sx={arrowStyle} onClick={() => scroll("right")}>
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

const arrowStyle = {
  backgroundColor: "#e9e9eb",
  ml: 1,
  "&:hover": {
    backgroundColor: "#d4d5d9",
  },
};
