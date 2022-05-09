import { Box, Container, Grid } from "@mui/material";
import React from "react";
import HeroesLeft from "./HeroesSide/HeroesLeft";
import HeroesRight from "./HeroesSide/HeroesRight";

export default function Heroes() {
  return (
    <Box sx={{ minHeight: "700px" }}>
      <Grid
        container
        sx={{
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid item xs={6} sx={{ order: { xs: 1, md: 1 } }}>
          <Container>
            <HeroesLeft />
          </Container>
        </Grid>
        <Grid item xs={6} sx={{ order: { xs: 2, md: 2 } }}>
          <HeroesRight />
        </Grid>
      </Grid>
    </Box>
  );
}
