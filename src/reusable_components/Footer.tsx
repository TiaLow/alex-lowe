import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <Box component="footer">
      <Divider />

      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Stack
          direction="row"
          spacing={3}
          sx={{ mb: 2, justifyContent: "space-between", alignItems: "center" }}
        >
          <SocialLinks />
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Alex Lowe
          </Typography>

          {/* <Link href="/research" underline="hover">
            Research
          </Link>

          <Link href="/resources" underline="hover">
            Resources
          </Link> */}
        </Stack>
      </Container>
    </Box>
  );
}
