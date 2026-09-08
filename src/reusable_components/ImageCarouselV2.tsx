import { useEffect, useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export interface CarouselImageV2 {
  src: string;
  caption?: string;
  alt?: string;
}

interface ImageCarouselProps {
  images: CarouselImageV2[];
  aspectRatio?: string | number;
  transitionDuration?: number;
}
// COMMON ASPECT RATIOS
// 1:1	Square	Product images, profile/gallery images, Instagram-style
// 4:3	Slightly wide	Photography, cards, older displays
// 3:2	Wide	Traditional DSLR/mirrorless photography
// 16:9	Widescreen	Websites, video, hero images
// 21:9	Very wide	Cinematic banners, hero sections
// 2:1	Wide	Website banners and promotional images
// 3:4	Portrait	Portrait photography, mobile-oriented content
// 2:3	Portrait	Traditional portrait photography
// 9:16	Tall	Stories, reels, mobile fullscreen
export default function ImageCarouselV2({
  images,
  aspectRatio = "16 / 9",
  transitionDuration = 200,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  if (!images.length) {
    return null;
  }

  const goToSlide = (index: number) => {
    if (index === activeIndex || isTransitioning) {
      return;
    }

    setActiveIndex(index);
    setIsTransitioning(true);

    transitionTimeout.current = setTimeout(() => {
      setDisplayIndex(index);
      setIsTransitioning(false);
    }, transitionDuration);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;

    goToSlide(nextIndex);
  };

  const next = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

    goToSlide(nextIndex);
  };

  const currentImage = images[displayIndex];
  const nextImage = images[activeIndex];

  return (
    <Box sx={{ width: "100%" }}>
      {/* Image frame */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio,
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "grey.100",
        }}
      >
        {/* Current image */}
        <Box
          component="img"
          src={currentImage.src}
          alt={
            currentImage.alt ??
            currentImage.caption ??
            `Image ${displayIndex + 1}`
          }
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Incoming image */}
        {isTransitioning && (
          <Box
            key={`${activeIndex}-${nextImage.src}`}
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              animation: `carouselFadeIn ${transitionDuration}ms ease-in-out forwards`,

              "@keyframes carouselFadeIn": {
                from: {
                  opacity: 0,
                },
                to: {
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              component="img"
              src={nextImage.src}
              alt={
                nextImage.alt ?? nextImage.caption ?? `Image ${activeIndex + 1}`
              }
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Incoming caption */}
            {nextImage.caption && (
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  px: 3,
                  py: 2,
                  color: "white",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
                }}
              >
                <Typography variant="body1">{nextImage.caption}</Typography>
              </Box>
            )}
          </Box>
        )}

        {/* Current caption */}
        {!isTransitioning && currentImage.caption && (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              px: 3,
              py: 2,
              color: "white",
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
            }}
          >
            <Typography variant="body1">{currentImage.caption}</Typography>
          </Box>
        )}

        {/* Previous button */}
        {images.length > 1 && (
          <IconButton
            aria-label="Previous image"
            onClick={previous}
            disabled={isTransitioning}
            sx={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.45)",

              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.65)",
              },

              "&.Mui-disabled": {
                color: "rgba(255, 255, 255, 0.5)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <IconButton
            aria-label="Next image"
            onClick={next}
            disabled={isTransitioning}
            sx={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.45)",

              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.65)",
              },

              "&.Mui-disabled": {
                color: "rgba(255, 255, 255, 0.5)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        )}
      </Box>

      {/* Indicators */}
      {images.length > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mt: 1.5,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              component="button"
              type="button"
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              sx={{
                width: index === activeIndex ? 10 : 8,
                height: index === activeIndex ? 10 : 8,
                padding: 0,
                border: 0,
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor:
                  index === activeIndex ? "primary.main" : "grey.400",
                transition: "all 200ms ease",

                "&:hover": {
                  backgroundColor:
                    index === activeIndex ? "primary.dark" : "grey.600",
                },

                "&:disabled": {
                  cursor: "default",
                },
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
