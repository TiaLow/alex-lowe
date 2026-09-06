import fossil1 from "../../assets/images/fossil1.jpg";
import ResearchSection from "./components/ResearchSection";
import PageContainer from "../../reusable_components/PageContainer";
import { Link } from "@mui/material";

export default function Research() {
  return (
    <PageContainer title="Research">
      <ResearchSection
        title="Plant community and climates across the late Cenozoic Miocene in the PNW"
        description="The Pacific Northwest (PNW), including the states of WA, OR, and ID, is a Cenozoic paleobotanical treasure trove! In particular, Oligocene to Miocene sites abound and showcase deciduous dominated mixed temperate forests in the midst of global climatic changes and pervasive regional volcanism. For example, a peak period of warmth in the mid Miocene (Miocene Climatic Optimum; MCO) likely represents the most recent time atmospheric CO2 reached levels we expect for our near future. My research reconstructs patterns of regional vegetation, paleoecology, and climate across this critical time period, following up on work from the early to mid 1900’s that has seen little re-investigation. While my expertise is in plant macrofossils, I collaborate closely with palynologists and phytolith experts to paint a more comprehensive regional picture of vegetation and climate."
        hasPublications
        bullets={[
          "Lowe et al., In Prep, Pacific Northwest plant community and climatic response to global climatic events of the Miocene.",
          "Lowe et al., 2026, Vegetation, climate, and age of the mid-Miocene Mascall flora reinvestigated: Leeward environments of the Cascade Mountains, in Journal of Paleontology",
          "Schiller et al., 2024, Mechanisms of rapid plant community change from the Miocene Succor Creek flora, Oregon and Idaho (USA), in PLOS One",
          "Cham et al., 2025, Estimating carbon assimilation rates from fossil leaves and application to the mid-Miocene Clarkia forest, in American Journal of Botany",
        ]}
      />

      <ResearchSection
        title=""
        description="Early Miocene floras, representing pre-Miocene Climatic Optimum (MCO) environments, are much more rare in the Pacific Northwest than those from the mid Miocene, representing the height of the MCO. I am currently re-investigating the composition of the early Miocene Collawash and Eagle Creek floras to help fill this time gap and provide a pre-warming baseline to compare MCO floras to. "
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
        hasPublications
        bullets={[
          "Lowe et al., 2026, A comprehensive chronostratigraphic framework for Oligocene and Miocene fossil plant sites of the Pacific Northwest (USA) from U-Pb zircon geochronology and Bayesian age modeling, in Geosphere.",
          "Lowe et al., 2026, Vegetation, climate, and age of the mid-Miocene Mascall flora reinvestigated: Leeward environments of the Cascade Mountains, in Journal of Paleontology.",
        ]}
      />

      <ResearchSection
        title="Paleoecology and paleoclimate proxy development and refinement"
        description="I work to refine the application of paleoclimate and paleoecological proxies through modern analog studies and proxy development. I am also interested in making these methods more accessible, for example, through the publication of protocols and R packages for the Digital Leaf Physiognomy proxy."
        hasPublications
        bullets={[
          "Brightly et al., In Prep, Regionally distinct assemblages limit the utility of paleocanopy proxies based on epidermal phytolith morphology.",
          "Bugos et al., In Prep, Plant-insect interactions across secondary succession in temperate deciduous forest (North Carolina, USA): Implications for recognizing disturbance in the fossil record.",
          "Lowe et al., 2025, Links between leaf morphology and ecological strategy across secondary succession in a temperate deciduous forest (North Carolina, USA): implications for the fossil record, in Paleobiology.",
          "Lowe et al., 2025, Global patterns in community-scale leaf mass per area distributions of woody non-monocot angiosperms and their utility in the fossil record, in American Journal of Botany.",
          "Lowe et al., 2024, Reconstructing terrestrial paleoclimate and paleoecology with fossil leaves using Digital Leaf Physiognomy and leaf mass per area, in Journal of Visual Experiments.",
          "Butrim et al., 2024, Leaf mass per area: an investigation into the uses of the ubiquitous functional trait from a paleobotanical perspective, in American Journal of Botany.",
          "Butrim et al., 2024, Dilp: Reconstruct Paleoclimate and Paleoecology with Leaf Physiognomy, R package.",
          "Brightly et al., 2024. Palms of the past: Can morphometric phytolith analysis inform deep time evolution and palaeoecology of Arecaceae?, in Annals of Botany.",
        ]}
        reverse
      />

      <ResearchSection
        title="Eocene climate and vegetation of the western US"
        description="My research interests in Eocene floras include the latest Oligocene Florissant flora of central Colorado, and, in particular, the early Eocene Okanagan Highland floras of north-central Washington and south-central British Columbia. The Okanagan Highland floras showcase upland environments during the Early Eocene Climatic Optimum. Diversification within these early Eocene uplands established some of the earliest plant communities with generic associations similar to modern Northern Hemisphere temperate deciduous forests, and thus represent an important stage in the development of this modern biome. I work to reconstruct these ancient plant communities and the climate they grew in, as  well as their depositional context, using sedimentological, geochemical, and paleoecological tools."
        hasPublications
        bullets={[
          "Lowe et al., 2021, Dynamics of deposition and fossil preservation at the early Eocene Okanagan Highlands of British Columbia, Canada: insights from organic geochemistry, in PALAIOS.",
          "Schlanser et al., 2020, Conifers are a major source of sedimentary leaf wax n-alkanes when dominant on the landscape: Case studies from the Paleogene, in Organic Geochemistry.",
          "West et al., 2020, Paleobotanical proxies for early Eocene climates and ecosystem in northern North America from mid to high latitudes, in Climates of the Past.",
          "Allen et al., 2020, Paleoclimate and paleoecology of the latest Eocene Florissant flora (Central Colorado, USA), in Palaeogeography, Palaeoclimatology, Palaeoecology.",
          "Schlanser et al., 2020, On geologic timescales, plant carbon isotope fractionation responds to precipitation similarly to modern plants and has a small negative correlation with pCO2, in Geochimica et Cosmochimica Acta.",
          "Lowe et al., 2018, Plant community ecology and climate on an upland volcanic landscape during the Early Eocene Climatic Optimum: McAbee Fossil Beds, British Columbia, Canada, in Palaeogeography, Palaeoclimatology, Palaeoecology.",
          "Lowe et al., 2018, Volcaniclastic lithostratigraphy and paleoenvironment of the lower Eocene McAbee fossil beds, Kamloops Group, British Columbia, Canada, in Canadian Journal of Earth Sciences.",
        ]}
      />

      <ResearchSection
        title="Low temperature geochemistry and stable isotope applications"
        description="I have worked with several geochemical tools in a wide range of research contexts. For example, I have applied, alongside several collaborators, stable isotope tools to develop chemostratigraphic age models, and to forensic, archeologic, and plant ecophysiologic applications. In addition I have analyzed organic biomarkers to reconstruct paleovegetation and both depositional and taphonomic processes."
        hasPublications
        bullets={[
          "Lowe et al., 2021, Dynamics of deposition and fossil preservation at the early Eocene Okanagan Highlands of British Columbia, Canada: insights from organic geochemistry, in PALAIOS.",
          "Schlanser et al., 2020, Conifers are a major source of sedimentary leaf wax n-alkanes when dominant on the landscape: Case studies from the Paleogene, in Organic Geochemistry.",
          "Schlanser et al., 2020, On geologic timescales, plant carbon isotope fractionation responds to precipitation similarly to modern plants and has a small negative correlation with pCO2, in Geochimica et Cosmochimica Acta.",
          "Grimm et al., 2017, Forensic utility of a nitrogen and oxygen isotope ratio time series of ammonium nitrate and its isolated ions, in Talanta.",
          "Bataille et al., 2016, Chemostratigraphic age model for the Tornillo Group: A possible link between fluvial stratigraphy and climate, in Palaeogeography, Palaeoclimatology, Palaeoecology.",
        ]}
        reverse
        showDivider={false}
      />
    </PageContainer>
  );
}
