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
import SocialLinks from "../reusable_components/SocialLinks";
import alexPhoto from "../assets/images/hero-image-alex.png";
import img1 from "../assets/images/img_ex_1.jpg";
import img2 from "../assets/images/img_ex_2.jpg";
import img3 from "../assets/images/img_ex_3.jpg";
import img4 from "../assets/images/img_ex_4.jpg";
import img5 from "../assets/images/img_ex_5.jpg";
import img6 from "../assets/images/img_ex_6.jpg";

import ImageCarousel, {
  type CarouselImage,
} from "../reusable_components/ImageCarousel";

const emailParts = {
  user: "loweaj",
  domain: "berkeley.edu",
};

const EmailLink = () => {
  const email = `${emailParts.user}@${emailParts.domain}`;

  return <Link href={`mailto:${email}`}>{email}</Link>;
};

export default function Home() {
  const personalImages: CarouselImage[] = [
    {
      src: img1,
      alt: "Example image 1",
    },
    {
      src: img2,
      alt: "Example image 2",
    },
    {
      src: img3,
      alt: "Example image 3",
    },
    {
      src: img4,
      alt: "Example image 4",
    },
    {
      src: img5,
      alt: "Example image 5",
    },
    {
      src: img6,
      alt: "Example image 6",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
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
            variant="body1"
            sx={{
              lineHeight: 1.9,
              color: "text.secondary",
              mb: 4,
            }}
          >
            I am a Sr. Museum Scientist in Paleobotany at the University of
            California Museum of Paleontology (UCMP) at UC Berkeley. In this
            role, I manage the paleobotany collections and UCMP lab spaces, and
            both lead and support scientific research. As a paleobotanist, I
            specialize mainly in Cenozoic plant macrofossils but I also pursue
            research interests in plant ecophysiology, geochronology, and
            geochemistry.
          </Typography>

          <Typography
            variant="body1"
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
              <Button variant="contained">View Research</Button>

              <Button variant="outlined">Download CV</Button>
            </Stack>

            <SocialLinks />
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

      {/* DIVIDER */}
      <Divider sx={{ my: { xs: 4, md: 6 } }} />

      {/* FUN FACTS */}
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
            Hobbies: Camping, hiking, rock climbing, snowboarding, music (I play
            guitar and bass and )
          </ListItem>
        </List>
      </Box>

      {/* FUN IMAGE CAROUSEL */}

      <ImageCarousel images={personalImages} />
    </Container>
  );
}
