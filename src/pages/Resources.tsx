import { Typography, Box } from "@mui/material";
import PageContainer from "../reusable_components/PageContainer";

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
    <PageContainer title="Resources">
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
    </PageContainer>
  );
}
