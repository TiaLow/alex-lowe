import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ResearchCard({ title, description, image }: Props) {
  return (
    <Box
      sx={{
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* IMAGE */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: { xs: 220, md: 280 },
          objectFit: "cover",
          transition: "transform 0.6s ease",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      />

      {/* TEXT */}
      <Box sx={{ pt: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
