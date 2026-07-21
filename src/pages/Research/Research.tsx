import fossil1 from "../../assets/images/fossil1.jpg";
import ResearchSection from "./components/ResearchSection";
import PageContainer from "../../reusable_components/PageContainer";

export default function Research() {
  return (
    <PageContainer title="Research">
      <ResearchSection
        title="Plant community and climates across Miocene in PNW"
        description="The Pacific Northwest (PNW), including the states of WA, OR, and ID, is a Cenozoic paleobotanical treasure trove! In particular, Oligocene to Miocene sites abound and showcase deciduous dominated mixed temperate forests in the midst of global climatic changes and pervasive regional volcanism. For example, a peak period of warmth in the mid Miocene (Miocene Climatic Optimum; MCO) likely represents the most recent time atmospheric CO2 reached levels we expect for our near future. My research reconstructs patterns of regional vegetation and climate across this critical time period, following up on work from the early to mid 1900’s that has seen little re-investigation. While my expertise is in plant macrofossils, I collaborate closely with palynologists and phytolith experts to paint a more comprehensive regional picture of vegetation and climate."
        bullets={["Link", "Link", "Link"]}
        image={fossil1}
        imageAlt="Fossil image"
      />

      <ResearchSection
        title="Title"
        description="Early Miocene floras, representing pre-Miocene Climatic Optimum (MCO) environments, are much more rare in the Pacific Northwest than those from the mid Miocene, representing the height of the MCO. I am currently re-investigating the composition of the early Miocene Collawash and Eagle Creek floras to help fill this time gap and provide a pre-warming baseline to compare MCO floras to."
        bullets={["Link", "Link", "Link"]}
        image={fossil1}
        imageAlt="Fossil image"
        reverse
      />

      <ResearchSection
        title="Geochronology"
        description="Knowing about time is important for plant sites. Much of the current knowledge is limited. I address it like this."
        bullets={["Link", "Link", "Link"]}
        image={fossil1}
        imageAlt="Fossil image"
      />

      <ResearchSection
        title="Paleoecology and paleoclimate proxy development and refinement"
        description="Description"
        bullets={["Link", "Link", "Link"]}
        image={fossil1}
        imageAlt="Fossil image"
        reverse
      />

      <ResearchSection
        title="Eocene climate and the Okanagan Highlands floras"
        description="Description"
        bullets={["Link", "Link", "Link"]}
        image={fossil1}
        imageAlt="Fossil image"
        showDivider={false}
      />
    </PageContainer>
  );
}
