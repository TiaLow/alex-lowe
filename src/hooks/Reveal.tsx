import { Box } from "@mui/material";
import { useRevealOnScroll } from "./useRevealOnScroll";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(36px)",

        transitionProperty: "opacity, transform",
        transitionDuration: "1.2s",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)", // very “Massively-like” ease-out

        willChange: "opacity, transform",
      }}
    >
      {children}
    </Box>
  );
}
