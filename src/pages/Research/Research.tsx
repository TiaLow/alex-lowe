import fossil1 from "../../assets/images/fossil1.jpg";
import ResearchSection from "./components/ResearchSection";
import PageContainer from "../../reusable_components/PageContainer";
import { Link } from "@mui/material";

export default function Research() {
  return (
    <PageContainer title="Research">
      <ResearchSection
        title="Plant community and climates across Miocene in PNW"
        description="The Pacific Northwest (PNW), including the states of WA, OR, and ID, is a Cenozoic paleobotanical treasure trove! In particular, Oligocene to Miocene sites abound and showcase deciduous dominated mixed temperate forests in the midst of global climatic changes and pervasive regional volcanism. For example, a peak period of warmth in the mid Miocene (Miocene Climatic Optimum; MCO) likely represents the most recent time atmospheric CO2 reached levels we expect for our near future. My research reconstructs patterns of regional vegetation and climate across this critical time period, following up on work from the early to mid 1900’s that has seen little re-investigation. While my expertise is in plant macrofossils, I collaborate closely with palynologists and phytolith experts to paint a more comprehensive regional picture of vegetation and climate."
        bullets={[
          "Relevant publications from my PhD dissertation",
          "Relevant publications from my PhD dissertation",
          "Relevant publications from my PhD dissertation",
        ]}
        image={fossil1}
        imageAlt="Fossil leaf and field montage"
      />

      <ResearchSection
        title=""
        description="Early Miocene floras, representing pre-Miocene Climatic Optimum (MCO) environments, are much more rare in the Pacific Northwest than those from the mid Miocene, representing the height of the MCO. I am currently re-investigating the composition of the early Miocene Collawash and Eagle Creek floras to help fill this time gap and provide a pre-warming baseline to compare MCO floras to. "
        bullets={["Link?"]}
        image={fossil1}
        imageAlt="collawash field and fossil picture"
        reverse
      />

      <ResearchSection
        title="Geochronology"
        description={
          <>
            Timing is everything! Poor age control characterizes many of the
            late Paleogene to Neogene fossil floras of the PNW. This hampers
            well-constrained and high-resolution time series analyses, and
            correlations with regional volcanics and tectonics, and global
            climatic events. I work to improve age constraints of these fossil
            floras and their host stratigraphic sections and formations using
            radioisotopic dating of silicic tuffs combined with Bayesian
            stratigraphic age modeling. Much of this work is in close
            collaboration with Dr. Mark Schmitz and others in the{" "}
            <Link
              href="https://www.boisestate.edu/earth-isotope/"
              target="_blank"
            >
              Isotope Geology Laboratory
            </Link>{" "}
            at Boise State University.
          </>
        }
        image={fossil1}
        imageAlt="ash + leaf, and zircon image"
      />

      <ResearchSection
        title="Paleoecology and paleoclimate proxy development and refinement"
        description="I work to refine the application of paleoclimate and paleoecological proxies through modern analog studies. I am also interested in making these methods more accessible, for example, through the publication of protocols and R packages for the Digital Leaf Physiognomy proxy."
        image={fossil1}
        imageAlt="slingshot image"
        reverse
      />

      <ResearchSection
        title="Eocene climate and the Okanagan Highlands floras"
        description="The early Eocene Okanagan Highland floras of north-central Washington and south-central British Columbia showcase upland floras during the Early Eocene Climatic Optimum. Diversification within these early Eocene uplands established some of the earliest plant communities with generic associations similar to modern Northern Hemisphere temperate deciduous forests, and thus represent an important stage in the development of this modern biome. I work to reconstruct these ancient plant communities and the climate they grew in, as  well as their depositional context, using sedimentological, geochemical, and paleoecological tools."
        image={fossil1}
        imageAlt="field work"
        showDivider={false}
      />
    </PageContainer>
  );
}
