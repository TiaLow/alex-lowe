import { Container, Typography, Box, Divider } from "@mui/material";
import ResearchGrid from "./components/ResearchGrid";
import fossil1 from "../../assets/images/fossil1.jpg";

const researchItems = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
];

export default function Research() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* HEADER */}
      <Box sx={{ mb: { xs: 4, md: 8 } }}>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Research
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          A selection of ongoing and past research projects focused on
          paleobotany, climate reconstruction, and evolutionary plant science.
        </Typography>
      </Box>

      <Divider sx={{ mb: { xs: 4, md: 6 } }} />

      {/* GRID */}
      <ResearchGrid items={researchItems} />
    </Container>
  );
}
