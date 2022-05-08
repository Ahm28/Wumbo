import { Box, Container, Grid } from "@mui/material";
import React from "react";
import HeroesLeft from "./HeroesSide/HeroesLeft";
import HeroesRight from "./HeroesSide/HeroesRight";

export default function Heroes() {
  return (
    <Box sx={{ height: "700px" }}>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={6}>
          <Container>
            <HeroesLeft />
          </Container>
        </Grid>
        <Grid item xs={6}>
          <HeroesRight />
        </Grid>
      </Grid>
    </Box>
  );
}
