import { Box, Container } from "@mui/material";
import React from "react";

export default function HeroesRight() {
  return (
    <Box
      component="div"
      sx={{
        background: "url(assets/heroes.png)",
        pt: 12,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <img src="/assets/heroesGroup.png" height="600px" alt="heroes" />
      </Container>
    </Box>
  );
}
