import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  Divider,
  List,
  ListItem,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SocialLinks from "../../reusable_components/SocialLinks";
import alexPhoto from "../../assets/images/Alex_tshirt_FRONT.png";
import ImageCarouselV2 from "../../reusable_components/ImageCarouselV2";
import { personalImages } from "./CarouselImages";

const emailParts = {
  user: "loweaj",
  domain: "berkeley.edu",
};

const EmailLink = () => {
  const email = `${emailParts.user}@${emailParts.domain}`;

  return <Link href={`mailto:${email}`}>{email}</Link>;
};

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      {/* HERO */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
        }}
      >
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
              }}
            >
              Alex Lowe
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "text.secondary", ml: 2, alignSelf: "end" }}
            >
              PhD
            </Typography>
          </Box>

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
            sx={{
              lineHeight: 1.9,
              color: "text.secondary",
              mb: 4,
            }}
          >
            I am a Sr. Museum Scientist in Paleobotany at the University of
            California Museum of Paleontology (
            <Link href="https://ucmp.berkeley.edu/" target="_blank">
              UCMP
            </Link>
            ) at UC Berkeley. In this role, I manage the paleobotany collections
            and UCMP lab spaces, and both lead and support scientific research.
            As a paleobotanist, I specialize mainly in Cenozoic plant
            macrofossils but I also pursue research interests in plant
            ecophysiology, geochronology, and geochemistry.
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.9,
              color: "text.secondary",
              mb: 2,
            }}
          >
            My research focuses on understanding how environmental factors shape
            plant communities and lineages in deep time. The geologic record
            provides a wealth of examples of such interactions, providing
            context to our modern planet, and clues to our future.
          </Typography>

          <EmailLink />

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            sx={{
              mt: 4,
              width: "100%",
              justifyContent: "space-between",
              alignItems: {
                xs: "flex-start",
                sm: "center",
              },
            }}
          >
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
            >
              <Button variant="contained" component={RouterLink} to="/research">
                View Research
              </Button>

              <Button variant="outlined">Download CV</Button>
            </Stack>

            <SocialLinks />
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Box
            component="img"
            src={alexPhoto}
            alt="Alex Lowe"
            sx={{
              width: "100%",
              aspectRatio: "4 / 5",
            }}
          />
          <Typography
            sx={{
              fontSize: ".8rem",
              fontStyle: "italic",
            }}
          >
            Original art by Caroline Strömberg
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: { xs: 4, md: 6 } }} />

      {/* FUN FACTS */}
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          At a Glance
        </Typography>

        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <b>Place of birth</b>: Richmond, Virginia
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <b>Academic experience</b>: University of Utah (BS), Brandon
            University (M.Sc.), University of Washington (Ph.D.), Smithsonian
            National Museum of Natural History (Postdoc)
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            First generation Bachelor’s degree
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <b>Hobbies</b>: Camping, hiking, rock climbing, cycling,
            snowboarding, plant walks, music (I play guitar and bass, most
            recently for the Seattle band{" "}
            <Link
              href="https://open.spotify.com/artist/0ISnuIbW4Dhz1T13yRyrNF"
              target="_blank"
            >
              Shelbyville
            </Link>
            )
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <b>Words to live by</b>: “Of the Seven Dwarfs, the only one who
            shaved was Dopey. That should tell us something about the wisdom of
            shaving.” (Tom Robbins, Skinny Legs and All)
          </ListItem>
        </List>
      </Box>

      <Box
        sx={{
          width: {
            xs: "100%",
            sm: 400,
            md: 500,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <ImageCarouselV2 images={personalImages} aspectRatio="4/3" />
      </Box>
    </Container>
  );
}
