import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  width?: string;
  height?: string;
}

export default function ImageCarousel({
  images,
  width = "100%",
  height = "420px",
}: ImageCarouselProps) {
  const CARD_WIDTH = 420;
  const GAP = 18;

  const middleStart = images.length;

  const [index, setIndex] = useState(middleStart);

  const extendedImages = [...images, ...images, ...images];

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  const offset = index * (CARD_WIDTH + GAP);

  return (
    <Box
      sx={{
        width,
        height,

        position: "relative",

        overflow: "hidden",

        display: "flex",
        alignItems: "center",
      }}
    >
      {/* LEFT */}
      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          left: 12,
          zIndex: 20,

          bgcolor: "rgba(255,255,255,.9)",

          "&:hover": {
            bgcolor: "white",
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      {/* VIEWPORT */}
      <Box
        sx={{
          width: "100%",
          height: "100%",

          overflow: "hidden",
        }}
      >
        {/* TRACK */}
        <Box
          sx={{
            height: "100%",

            display: "flex",
            alignItems: "center",

            gap: `${GAP}px`,

            transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px - ${offset}px))`,

            transition: "transform 500ms cubic-bezier(.22,.61,.36,1)",

            willChange: "transform",
          }}
          onTransitionEnd={() => {
            if (index >= images.length * 2) {
              setIndex(images.length);
            }

            if (index <= 0) {
              setIndex(images.length);
            }
          }}
        >
          {extendedImages.map((img, i) => {
            const active = i === index;

            return (
              <Box
                key={`${img.src}-${i}`}
                sx={{
                  flex: `0 0 ${CARD_WIDTH}px`,

                  height: "80%",

                  borderRadius: 3,

                  overflow: "hidden",

                  position: "relative",

                  zIndex: active ? 10 : 1,

                  opacity: active ? 1 : 0.45,

                  filter: active ? "none" : "grayscale(70%)",

                  transform: active ? "scale(1.05)" : "scale(.9)",

                  boxShadow: active
                    ? "0 20px 45px rgba(0,0,0,.3)"
                    : "0 8px 20px rgba(0,0,0,.15)",

                  transition: "all 400ms ease",
                }}
              >
                <Box
                  component="img"
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  sx={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",

                    display: "block",
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* RIGHT */}
      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          right: 12,
          zIndex: 20,

          bgcolor: "rgba(255,255,255,.9)",

          "&:hover": {
            bgcolor: "white",
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}
