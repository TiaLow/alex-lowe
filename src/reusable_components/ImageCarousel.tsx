import { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  initialIndex?: number;
  width?: string;
  height?: string;
}

export default function ImageCarousel({
  images,
  width = "100%",
  height = "420px",
}: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const middleStart = images.length;
  const [index, setIndex] = useState(middleStart);

  const next = () => setIndex((p) => p + 1);
  const prev = () => setIndex((p) => p - 1);

  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

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
          left: 10,
          zIndex: 10,
          backgroundColor: "rgba(255,255,255,0.85)",
          "&:hover": { backgroundColor: "white" },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      {/* WINDOW */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* TRACK */}
        <Box
          ref={trackRef}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",

            gap: "12px", // 🔥 important: visible film spacing

            transition: "transform 500ms cubic-bezier(.22,.61,.36,1)",

            // 🔥 shift by real pixel width
            transform: `translateX(calc(50% - ${index * (260 + 12)}px - 130px))`,
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
            const isActive = i === index;

            return (
              <Box
                key={img.src}
                sx={{
                  flex: "0 0 260px", // 🔥 key: fixed visible tiles
                  height: "80%",
                  position: "relative",
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

                    transition:
                      "filter 400ms ease, transform 400ms ease, opacity 400ms ease",

                    // 🔥 focus vs side images
                    filter: isActive
                      ? "grayscale(0%) blur(0px)"
                      : "grayscale(70%) blur(1.2px)",

                    opacity: isActive ? 1 : 0.5,

                    transform: isActive ? "scale(1.05)" : "scale(0.95)",
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
          right: 10,
          zIndex: 10,
          backgroundColor: "rgba(255,255,255,0.85)",
          "&:hover": { backgroundColor: "white" },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}
