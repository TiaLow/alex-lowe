import { Typography, Box, Divider } from "@mui/material";
import PageContainer from "../reusable_components/PageContainer";

export default function UCMPPaleobotany() {
  return (
    <PageContainer title="UCMP Paleobotany">
      <Typography color="text.secondary" sx={{ mt: 2 }}>
        Shipping address:
      </Typography>

      {/* 1. __________ */}
      <Box sx={{ mb: { xs: 6, md: 10 } }}>
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
