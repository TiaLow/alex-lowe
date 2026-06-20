import { Box, Typography } from "@mui/material";

type ResearchSectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ResearchSection({
  title,
  description,
  children,
}: ResearchSectionProps) {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
        }}
      >
        {title}
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          maxWidth: 900,
          mb: 4,
        }}
      >
        {description}
      </Typography>

      {children}
    </Box>
  );
}
