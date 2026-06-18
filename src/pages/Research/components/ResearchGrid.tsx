import { Box } from "@mui/material";
import ResearchCard from "./ResearchCard";
import Reveal from "../../../hooks/Reveal";

type ResearchItem = {
  title: string;
  description: string;
  image: string;
};

export default function ResearchGrid({ items }: { items: ResearchItem[] }) {
  return (
    <Reveal>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: { xs: 4, md: 6 },
        }}
      >
        {items.map((item, index) => (
          <ResearchCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </Box>
    </Reveal>
  );
}
