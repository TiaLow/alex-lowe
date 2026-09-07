import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import type { ReactNode } from "react";

type ResearchSectionProps = {
  title: string;
  description: ReactNode;
  hasPublications?: boolean;
  bullets?: ReactNode[];
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  showDivider?: boolean;
};

export default function ResearchSection({
  title,
  description,
  hasPublications,
  bullets,
  image,
  imageAlt,
  reverse = false,
  showDivider = true,
}: ResearchSectionProps) {
  return (
    <>
      <Box
        component="section"
        sx={{
          py: { xs: 1, md: 2 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: reverse ? "row-reverse" : "row",
            },
            alignItems: {
              xs: "center",
              md: "flex-start",
            },
            gap: 6,
          }}
        >
          {/* Text */}
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              {title}
            </Typography>

            <Typography sx={{ mb: 2 }}>{description}</Typography>

            {hasPublications && (
              <Typography sx={{ mb: 2, fontStyle: "italic" }}>
                Relevant publications:
              </Typography>
            )}

            {bullets && (
              <List
                disablePadding
                sx={{
                  listStyleType: "disc",
                  pl: 3,
                }}
              >
                {bullets.map((bullet, i) => (
                  <ListItem
                    key={i}
                    disablePadding
                    sx={{
                      display: "list-item",
                      mb: 0.5,
                    }}
                  >
                    {bullet}
                  </ListItem>
                ))}
              </List>
            )}
          </Box>

          {/* Image */}
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Box
              component="img"
              src={image}
              alt={imageAlt}
              sx={{
                display: "block",
                width: "100%",
                maxWidth: 500,
                ml: reverse ? 0 : "auto",
                borderRadius: 3,
                boxShadow: 4,
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>

      {showDivider && (
        <Divider
          sx={{
            borderColor: "grey.300",
          }}
        />
      )}
    </>
  );
}
