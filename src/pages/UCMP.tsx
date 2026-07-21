import { Typography, Box, Divider } from "@mui/material";
import PageContainer from "../reusable_components/PageContainer";

export default function UCMPPaleobotany() {
  return (
    <PageContainer title="UCMP Paleobotany">
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: 4,
            md: 8,
          },
          mt: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700, mb: 1 }}>Contact:</Typography>

          <Typography>
            Museum of Paleontology
            <br />
            University of California
            <br />
            1101 Valley Life
            <br />
            Sciences Building Berkeley, CA
            <br />
            94720-4780
            <br />
            Voice: (510) 642-1821
            <br />
            Fax: (510) 642-1822
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700, mb: 1 }}>
            Shipping address:
          </Typography>

          <Typography>
            c/o Alex Lowe, UCMP
            <br />
            1101 Valley Life
            <br />
            Sciences Building Berkeley, CA
            <br />
            94720-4780
          </Typography>
        </Box>
      </Box>

      {/* 1. __________ */}
      <Box sx={{ my: { xs: 2, md: 4 } }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          People
        </Typography>

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
      <Divider
        sx={{
          borderColor: "grey.300",
        }}
      />

      {/* 2. _____________ */}
      <Box sx={{ mb: { xs: 6, md: 10 } }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          History
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>

      {/* 3. ___________ */}
      <Box sx={{ mb: { xs: 6, md: 10 } }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          Collection strengths
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>

      {/* 4. _________ */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          Statement of support/collab and how to visit
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </PageContainer>
  );
}
