import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8 }}>
      <Divider />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
          <Link href="/research" underline="hover">
            Research
          </Link>

          <Link href="/resources" underline="hover">
            Resources
          </Link>
        </Stack>

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Alex Lowe
        </Typography>
      </Container>
    </Box>
  );
}
