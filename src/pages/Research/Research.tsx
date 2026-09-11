import ResearchSection from "./components/ResearchSection";
import PageContainer from "../../reusable_components/PageContainer";
import { Box, Link, Typography } from "@mui/material";
import ImageCarouselV2 from "../../reusable_components/ImageCarouselV2";
import {
  earlyMioceneImages,
  geochronImages,
  miocenePNWPics,
  okanaganPics,
  proxiesPics,
} from "./CarouselImages";

export default function Research() {
  return (
    <PageContainer title="Research">
      <ResearchSection
        title="Plant community and climates across the late Cenozoic Miocene in the PNW"
        description="The Pacific Northwest (PNW), including the states of WA, OR, and ID, is a Cenozoic paleobotanical treasure trove! In particular, Oligocene to Miocene sites abound and showcase deciduous dominated mixed temperate forests in the midst of global climatic changes and pervasive regional volcanism. For example, a peak period of warmth in the mid Miocene (Miocene Climatic Optimum; MCO) likely represents the most recent time atmospheric CO2 reached levels we expect for our near future. My research reconstructs patterns of regional vegetation, paleoecology, and climate across this critical time period, following up on work from the early to mid 1900’s that has seen little re-investigation. While my expertise is in plant macrofossils, I collaborate closely with palynologists and phytolith experts to paint a more comprehensive regional picture of vegetation and climate."
        hasPublications
        bullets={[
          <>
            <Typography variant="body2">
              Lowe et al., In Prep, Pacific Northwest plant community and
              climatic response to global climatic events of the Miocene.
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Lowe et al., 2026, Vegetation, climate, and age of the mid-Miocene
              Mascall flora reinvestigated: Leeward environments of the Cascade
              Mountains, in{" "}
              <Link
                target="blank"
                href="https://www.cambridge.org/core/journals/journal-of-paleontology/article/vegetation-climate-and-age-of-the-midmiocene-mascall-flora-reinvestigated-leeward-environments-of-the-cascade-mountains/9A587C8FBB74AB59BAF9ED220AF7457D"
              >
                Journal of Paleontology.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Schiller et al., 2024, Mechanisms of rapid plant community change
              from the Miocene Succor Creek flora, Oregon and Idaho (USA), in{" "}
              <Link
                target="_blank"
                href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0312104"
              >
                PLOS One.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Cham et al., 2025, Estimating carbon assimilation rates from
              fossil leaves and application to the mid-Miocene Clarkia forest,
              in{" "}
              <Link
                target="_blank"
                href="https://bsapubs.onlinelibrary.wiley.com/doi/abs/10.1002/ajb2.70082?casa_token=2UZhqyFaiJQAAAAA%3A7xgdcXxQHTgbT_namZJNLALXyJytkNbMlaSuBMBc0PiIp7ktId--8U9I9k1D8KQfk5JRb68AVm_yhRXVcw"
              >
                American Journal of Botany.
              </Link>
            </Typography>
          </>,
        ]}
        imageCarousel={
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          >
            <ImageCarouselV2 images={miocenePNWPics} aspectRatio="3/2" />
          </Box>
        }
      />
      <ResearchSection
        title=""
        description="Early Miocene floras, representing pre-Miocene Climatic Optimum (MCO) environments, are much more rare in the Pacific Northwest than those from the mid Miocene, representing the height of the MCO. I am currently re-investigating the composition of the early Miocene Collawash and Eagle Creek floras to help fill this time gap and provide a pre-warming baseline to compare MCO floras to. "
        reverse
        imageCarousel={
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          >
            <ImageCarouselV2 images={earlyMioceneImages} aspectRatio="1/1" />
          </Box>
        }
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
          <>
            <Typography variant="body2">
              Lowe et al., 2026, A comprehensive chronostratigraphic framework
              for Oligocene and Miocene fossil plant sites of the Pacific
              Northwest (USA) from U-Pb zircon geochronology and Bayesian age
              modeling, in{" "}
              <Link
                target="_blank"
                href="https://pubs.geoscienceworld.org/gsa/geosphere/article/doi/10.1130/GES02934.1/734895/A-comprehensive-chronostratigraphic-framework-for"
              >
                Geosphere.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Lowe et al., 2026, Vegetation, climate, and age of the mid-Miocene
              Mascall flora reinvestigated: Leeward environments of the Cascade
              Mountains, in Journal of Paleontology.
            </Typography>
          </>,
        ]}
        imageCarousel={
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          >
            <ImageCarouselV2 images={geochronImages} aspectRatio="3/2" />
          </Box>
        }
      />

      <ResearchSection
        title="Paleoecology and paleoclimate proxy development and refinement"
        description="I work to refine the application of paleoclimate and paleoecological proxies through modern analog studies and proxy development. I am also interested in making these methods more accessible, for example, through the publication of protocols and R packages for the Digital Leaf Physiognomy proxy."
        hasPublications
        bullets={[
          <>
            <Typography variant="body2">
              Brightly et al., In Prep, Regionally distinct assemblages limit
              the utility of paleocanopy proxies based on epidermal phytolith
              morphology.
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Bugos et al., In Prep, Plant-insect interactions across secondary
              succession in temperate deciduous forest (North Carolina, USA):
              Implications for recognizing disturbance in the fossil record.
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Lowe et al., 2025, Links between leaf morphology and ecological
              strategy across secondary succession in a temperate deciduous
              forest (North Carolina, USA): implications for the fossil record,
              in{" "}
              <Link
                target="_blank"
                href="https://www.cambridge.org/core/journals/paleobiology/article/links-between-leaf-morphology-and-ecological-strategy-across-secondary-succession-in-a-temperate-deciduous-forest-north-carolina-usa-implications-for-the-fossil-record/6155BBD78CB89CE442B7F8A00418AA07"
              >
                Paleobiology.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Lowe et al., 2025, Global patterns in community-scale leaf mass
              per area distributions of woody non-monocot angiosperms and their
              utility in the fossil record, in{" "}
              <Link
                target="_blank"
                href="https://bsapubs.onlinelibrary.wiley.com/doi/abs/10.1002/ajb2.70019?casa_token=tLrHUBaCt1oAAAAA%3AV8P2pXwff-KTKQS2FzjGPSetzCAySflw0jso4hL-8ac2gJe6OATs9mwABsjtHnAO-F1jynXYCzJUHE6rFQ"
              >
                American Journal of Botany.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Lowe et al., 2024, Reconstructing terrestrial paleoclimate and
              paleoecology with fossil leaves using Digital Leaf Physiognomy and
              leaf mass per area, in{" "}
              <Link
                target="_blank"
                href="https://www.jove.com/t/66838/reconstructing-terrestrial-paleoclimate-paleoecology-with-fossil"
              >
                Journal of Visual Experiments.
              </Link>
            </Typography>
          </>,

          <>
            <Typography variant="body2">
              Butrim et al., 2024, Leaf mass per area: an investigation into the
              uses of the ubiquitous functional trait from a paleobotanical
              perspective, in{" "}
              <Link
                target="_blank"
                href="https://bsapubs.onlinelibrary.wiley.com/doi/abs/10.1002/ajb2.16419?casa_token=t9g1o__kPHsAAAAA:8Rb9iUnNF9yxJ5HddkX2gcR0w55IiSVxIsJdO1Hvn8DwhM5bcKwO2KYnhUVaTbwaeY78L6qm1xSUWUziPA"
              >
                American Journal of Botany.
              </Link>
            </Typography>
          </>,

          <>
            <Typography variant="body2">
              Butrim et al., 2024, Dilp: Reconstruct Paleoclimate and
              Paleoecology with Leaf Physiognomy,{" "}
              <Link
                target="_blank"
                href="https://cloud.r-project.org/web/packages/dilp/index.html"
              >
                R package.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Brightly et al., 2024. Palms of the past: Can morphometric
              phytolith analysis inform deep time evolution and palaeoecology of
              Arecaceae?, in{" "}
              <Link
                target="_blank"
                href="https://academic.oup.com/aob/article/134/2/263/7660190"
              >
                Annals of Botany.
              </Link>
            </Typography>
          </>,
        ]}
        reverse
        imageCarousel={
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          >
            <ImageCarouselV2 images={proxiesPics} aspectRatio="3/4" />
          </Box>
        }
      />

      <ResearchSection
        title="Eocene climate and vegetation of the western US"
        description="My research interests in Eocene floras include the latest Oligocene Florissant flora of central Colorado, and, in particular, the early Eocene Okanagan Highland floras of north-central Washington and south-central British Columbia. The Okanagan Highland floras showcase upland environments during the Early Eocene Climatic Optimum. Diversification within these early Eocene uplands established some of the earliest plant communities with generic associations similar to modern Northern Hemisphere temperate deciduous forests, and thus represent an important stage in the development of this modern biome. I work to reconstruct these ancient plant communities and the climate they grew in, as  well as their depositional context, using sedimentological, geochemical, and paleoecological tools."
        hasPublications
        bullets={[
          <>
            <Typography variant="body2">
              Lowe et al., 2021, Dynamics of deposition and fossil preservation
              at the early Eocene Okanagan Highlands of British Columbia,
              Canada: insights from organic geochemistry, in{" "}
              <Link
                target="_blank"
                href="https://pubs.geoscienceworld.org/sepm/palaios/article-abstract/37/5/185/614117/DYNAMICS-OF-DEPOSITION-AND-FOSSIL-PRESERVATION-AT"
              >
                PALAIOS.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Schlanser et al., 2020, Conifers are a major source of sedimentary
              leaf wax n-alkanes when dominant on the landscape: Case studies
              from the Paleogene, in{" "}
              <Link
                target="_blank"
                href="https://www.sciencedirect.com/science/article/abs/pii/S0146638020301042?casa_token=EpNkby_VqO8AAAAA:ElBQ9KMT4RInlawPqqOdJYzsFrz-2h0A6cSkFH8txZnMCKPmB_YwkI4SdzkSVfy4O55MBNmwxxmV"
              >
                Organic Geochemistry.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              West et al., 2020, Paleobotanical proxies for early Eocene
              climates and ecosystem in northern North America from mid to high
              latitudes, in{" "}
              <Link
                target="_blank"
                href="https://cp.copernicus.org/articles/16/1387/2020/cp-16-1387-2020-discussion.html"
              >
                Climates of the Past.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Allen et al., 2020, Paleoclimate and paleoecology of the latest
              Eocene Florissant flora (Central Colorado, USA), in{" "}
              <Link
                target="_blank"
                href="https://www.sciencedirect.com/science/article/abs/pii/S0031018220301231?casa_token=X8YvnB-ex0AAAAAA:cxN_k79SSweC86DsgCsWpNAqZTSGC7WHsdHsGVasUqvue2ZZuR9ecoycpc-Y1kNhxTMKP_NIO2e8"
              >
                Palaeogeography, Palaeoclimatology, Palaeoecology.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Schlanser et al., 2020, On geologic timescales, plant carbon
              isotope fractionation responds to precipitation similarly to
              modern plants and has a small negative correlation with pCO2, in{" "}
              <Link
                target="_blank"
                href="https://www.sciencedirect.com/science/article/abs/pii/S0016703719307318?casa_token=_qKLhXoge_0AAAAA:ANVayPoNk8DcIipgojApeXFV_cF-V0AdCPFt_lC7RnZvth8U_FDjM3r3FABretJArJxZV4AJeOcG"
              >
                Geochimica et Cosmochimica Acta.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Lowe et al., 2018, Plant community ecology and climate on an
              upland volcanic landscape during the Early Eocene Climatic
              Optimum: McAbee Fossil Beds, British Columbia, Canada, in{" "}
              <Link
                target="_blank"
                href="https://www.sciencedirect.com/science/article/abs/pii/S0031018218305601?casa_token=LfXNbb_5AjUAAAAA:zEzYMQaso967po-rspbuMS0UXkyuu-DpyeuoEZ6vfTN3Vuxm6zVDyn2XENBrTdS5VgQ_jEAhF7LJ"
              >
                Palaeogeography, Palaeoclimatology, Palaeoecology.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Lowe et al., 2018, Volcaniclastic lithostratigraphy and
              paleoenvironment of the lower Eocene McAbee fossil beds, Kamloops
              Group, British Columbia, Canada, in{" "}
              <Link
                target="_blank"
                href="https://pubs.geoscienceworld.org/csp/cjes/article-abstract/55/8/923/546411/Volcaniclastic-lithostratigraphy-and"
              >
                Canadian Journal of Earth Sciences.
              </Link>
            </Typography>
          </>,
        ]}
        imageCarousel={
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          >
            <ImageCarouselV2 images={okanaganPics} aspectRatio="4/3" />
          </Box>
        }
      />

      <ResearchSection
        title="Low temperature geochemistry and stable isotope applications"
        description="I have worked with several geochemical tools in a wide range of research contexts. For example, I have applied, alongside several collaborators, stable isotope tools to develop chemostratigraphic age models, and to forensic, archeologic, and plant ecophysiologic applications. In addition I have analyzed organic biomarkers to reconstruct paleovegetation and both depositional and taphonomic processes."
        hasPublications
        bullets={[
          <>
            <Typography variant="body2">
              Lowe et al., 2021, Dynamics of deposition and fossil preservation
              at the early Eocene Okanagan Highlands of British Columbia,
              Canada: insights from organic geochemistry, in{" "}
              <Link
                target="_blank"
                href="https://pubs.geoscienceworld.org/sepm/palaios/article-abstract/37/5/185/614117/DYNAMICS-OF-DEPOSITION-AND-FOSSIL-PRESERVATION-AT"
              >
                PALAIOS.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Schlanser et al., 2020, Conifers are a major source of sedimentary
              leaf wax n-alkanes when dominant on the landscape: Case studies
              from the Paleogene, in{" "}
              <Link
                target="_blank"
                href="https://www.sciencedirect.com/science/article/abs/pii/S0146638020301042?casa_token=EpNkby_VqO8AAAAA:ElBQ9KMT4RInlawPqqOdJYzsFrz-2h0A6cSkFH8txZnMCKPmB_YwkI4SdzkSVfy4O55MBNmwxxmV"
              >
                Organic Geochemistry.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Schlanser et al., 2020, On geologic timescales, plant carbon
              isotope fractionation responds to precipitation similarly to
              modern plants and has a small negative correlation with pCO2, in{" "}
              <Link
                target="_blank"
                href="https://www.sciencedirect.com/science/article/abs/pii/S0016703719307318?casa_token=_qKLhXoge_0AAAAA:ANVayPoNk8DcIipgojApeXFV_cF-V0AdCPFt_lC7RnZvth8U_FDjM3r3FABretJArJxZV4AJeOcG"
              >
                Geochimica et Cosmochimica Acta.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Grimm et al., 2017, Forensic utility of a nitrogen and oxygen
              isotope ratio time series of ammonium nitrate and its isolated
              ions, in{" "}
              <Link
                target="_blank"
                href="https://www.sciencedirect.com/science/article/abs/pii/S0039914017309347?casa_token=PjbX-4NBpWAAAAAA:s4KFcDf2AeOUmCMJzfbW3O8ViuYKcNnd9bb82TyLdUWx6Fhr7fGZofU9RPS9APpjrR20mKREzHNS"
              >
                Talanta.
              </Link>
            </Typography>
          </>,
          <>
            <Typography variant="body2">
              Bataille et al., 2016, Chemostratigraphic age model for the
              Tornillo Group: A possible link between fluvial stratigraphy and
              climate, in{" "}
              <Link
                target="_blank"
                href="https://www.sciencedirect.com/science/article/abs/pii/S0031018216302152?casa_token=0Mtw0Xp_bwoAAAAA:EIpir6PUJeVZrgZdhweh0ilL-0KPDcW3M19mes0Qonp4TjMzoxJPGp7lXkqvuHbieaVqidLsGfzR"
              >
                Palaeogeography, Palaeoclimatology, Palaeoecology.
              </Link>
            </Typography>
          </>,
        ]}
        reverse
        showDivider={false}
      />
    </PageContainer>
  );
}
