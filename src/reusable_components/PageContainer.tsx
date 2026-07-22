import { Container, Typography, Box, Divider } from "@mui/material";
import React from "react";

type PageContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function PageContainer({ title, children }: PageContainerProps) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      {/* PAGE TITLE */}
      <Box sx={{ mb: { xs: 2, md: 4 } }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>
      </Box>

      <Divider
        sx={{
          mb: { xs: 2, md: 4 },
          borderColor: "grey.300",
        }}
      />

      {children}
    </Container>
  );
}
