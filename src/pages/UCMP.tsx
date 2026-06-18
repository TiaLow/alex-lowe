import { Container, Typography, Box, Divider } from "@mui/material";
import Reveal from "../hooks/Reveal";

export default function UCMPPaleobotany() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* TITLE */}
      <Reveal>
        <Box sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            UCMP Paleobotany
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Reveal>

      <Divider sx={{ mb: { xs: 5, md: 7 } }} />

      {/* 1. __________ */}
      <Reveal>
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            People
          </Typography>

          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Reveal>

      {/* 2. _____________ */}
      <Reveal>
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            History
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Reveal>

      {/* 3. ___________ */}
      <Reveal>
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Collection strengths
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Reveal>

      {/* 4. _________ */}
      <Reveal>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Statement of support/collab and how to visit
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Reveal>
    </Container>
  );
}
