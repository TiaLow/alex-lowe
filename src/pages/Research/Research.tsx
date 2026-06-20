import { Container, Typography, Box, Divider } from "@mui/material";
import ResearchGrid from "./components/ResearchGrid";
import fossil1 from "../../assets/images/fossil1.jpg";
import ResearchSection from "./components/ResearchSection";

const researchItems1 = [
  {
    title: "Relevant publications from my PhD dissertation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
  {
    title: "Relevant publications from my PhD dissertation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
  {
    title: "Relevant publications from my PhD dissertation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
  {
    title: "Relevant publications from my PhD dissertation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
];

const researchItems2 = [
  {
    title: "collawash field and fossil picture",
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

const researchItems3 = [
  {
    title: "ash + leaf, and zircon image",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
];

const researchItems4 = [
  {
    title: "slingshot image",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
];

const researchItems5 = [
  {
    title: "field work",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. ",
    image: fossil1,
  },
  {
    title: "field work",
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

        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          Descriptive overview here (A selection of ongoing and past research
          projects focused on paleobotany, climate reconstruction, and
          evolutionary plant science.)
        </Typography>
      </Box>

      <Divider sx={{ mb: { xs: 4, md: 6 } }} />

      {/* GRID */}
      <ResearchSection
        title="Plant community and climates across Miocene in PNW"
        description="The Pacific Northwest (PNW), including the states of WA, OR, and ID, is a Cenozoic paleobotanical treasure trove! In particular, Oligocene to Miocene sites abound and showcase deciduous dominated mixed temperate forests in the midst of global climatic changes and pervasive regional volcanism. For example, a peak period of warmth in the mid Miocene (Miocene Climatic Optimum; MCO) likely represents the most recent time atmospheric CO2 reached levels we expect for our near future. My research reconstructs patterns of regional vegetation and climate across this critical time period, following up on work from the early to mid 1900’s that has seen little re-investigation. While my expertise is in plant macrofossils, I collaborate closely with palynologists and phytolith experts to paint a more comprehensive regional picture of vegetation and climate."
      >
        <ResearchGrid items={researchItems1} />
      </ResearchSection>

      <ResearchSection
        title=""
        description="Early Miocene floras, representing pre-Miocene Climatic Optimum (MCO) environments, are much more rare in the Pacific Northwest than those from the mid Miocene, representing the height of the MCO. I am currently re-investigating the composition of the early Miocene Collawash and Eagle Creek floras to help fill this time gap and provide a pre-warming baseline to compare MCO floras to."
      >
        <ResearchGrid items={researchItems2} />
      </ResearchSection>

      <ResearchSection
        title="Geochronology"
        description="Knowing about time is important for plant sites. Much of the current knowledge is limited. I address it like this."
      >
        <ResearchGrid items={researchItems3} />
      </ResearchSection>

      <ResearchSection
        title="Paleoecology and paleoclimate proxy development and refinement"
        description="Description"
      >
        <ResearchGrid items={researchItems4} />
      </ResearchSection>

      <ResearchSection
        title="Eocene climate and the Okanagan Highlands floras"
        description="Description"
      >
        <ResearchGrid items={researchItems5} />
      </ResearchSection>
    </Container>
  );
}
