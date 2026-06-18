import { Container, Typography, Box, Divider } from "@mui/material";

const resources = [
  {
    title: "Links (code, data, and images):",
    items: [
      "Geochron Github",
      "Mascall image FigShare",
      "Mashel image FigShare",
      "Dissertation image FigShare",
      "LMA data",
      "NC data",
      "Paleo assimilation code",
    ],
  },
  {
    title: "R Shiny apps (can leave blank for now)",
    items: ["Flora of the Metasequoia"],
  },
];

export default function Resources() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* HEADER */}
      <Box sx={{ mb: { xs: 5, md: 8 } }}>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Resources
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          Selected code repositories, datasets, figures, and applications.
        </Typography>
      </Box>

      <Divider sx={{ mb: { xs: 5, md: 7 } }} />

      {/* CONTENT */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {resources.map((section, i) => (
          <Box key={i}>
            {/* SECTION TITLE */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              {section.title}
            </Typography>

            {/* LIST */}
            <Box
              component="ul"
              sx={{
                pl: 2,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
              }}
            >
              {section.items.map((item, j) => (
                <Typography
                  key={j}
                  component="li"
                  sx={{
                    color: "text.primary",
                    lineHeight: 1.7,
                    fontSize: "1rem",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "primary.main",
                      cursor: "pointer",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
