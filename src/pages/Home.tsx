import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import Reveal from "../hooks/Reveal";
import alexPhoto from "../assets/images/hero-image-alex.png";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* HERO */}
      <Reveal>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                letterSpacing: 1,
                mb: 1,
              }}
            >
              Alex Lowe
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Paleobotanist • Researcher • Figure Maker
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.9,
                color: "text.secondary",
                mb: 4,
              }}
            >
              I am a Sr. Museum Scientist in Paleobotany at the University of
              California Museum of Paleontology (UCMP) at UC Berkeley. In this
              role, I manage the paleobotany collections and UCMP lab spaces,
              and both lead and support scientific research. As a paleobotanist,
              I specialize mainly in Cenozoic plant macrofossils but I also
              pursue research interests in plant ecophysiology, geochronology,
              and geochemistry.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.9,
                color: "text.secondary",
                mb: 4,
              }}
            >
              My research focuses on understanding how environmental factors
              shape plant communities and lineages in deep time. The geologic
              record provides a wealth of examples of such interactions,
              providing context to our modern planet, and clues to our future.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
              <Button variant="contained" color="primary">
                View Research
              </Button>

              <Button variant="outlined">Download CV</Button>
            </Stack>
          </Box>

          <Box
            component="img"
            src={alexPhoto}
            alt="Alex Lowe"
            sx={{
              width: "100%",
              aspectRatio: "4 / 5",
              objectFit: "cover",
              border: "1px solid #ddd",
            }}
          />
        </Box>
      </Reveal>

      {/* DIVIDER */}
      <Divider sx={{ my: { xs: 4, md: 6 } }} />

      {/* FUN FACTS */}
      <Reveal>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Fun Facts
          </Typography>

          <List sx={{ listStyleType: "disc", pl: 4 }}>
            <ListItem disablePadding sx={{ display: "list-item" }}>
              Place of birth: Richmond, Virginia
            </ListItem>
            <ListItem disablePadding sx={{ display: "list-item" }}>
              Academic experience: University of Utah (BS), Brandon University
              (M.Sc.), University of Washington (Ph.D.), Smithsonian National
              Museum of Natural History (Postdoc).
            </ListItem>
            <ListItem disablePadding sx={{ display: "list-item" }}>
              Hobbies: Camping, hiking, rock climbing, snowboarding, music (I
              play guitar and bass and )
            </ListItem>
          </List>
        </Box>
      </Reveal>
    </Container>
  );
}
