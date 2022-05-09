import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { InformationSection } from "../InformationSection/InformationSection";

export default function MainSection2() {
  return (
    <Box
      sx={{
        background: "url(/assets/layer.png) no-repeat right",
        py: 8,
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h4" sx={{ color: "#193766" }}>
                There are{" "}
                <span style={{ textDecoration: "underline" }}>
                  80+ Pre-Designed
                </span>{" "}
                Templates Ready to Use
              </Typography>
              <Typography variant="subtitle2" color="#697B98" sx={{ my: 3 }}>
                Many design choices make it free for you to make a different
                design every time you post. There are 80+ designs with 10+
                different layouts. Each layout has several designs with the same
                theme, just need to focus on the content!
              </Typography>
              <Box>
                <InformationSection
                  title="Insights"
                  content="create content that contains insights on design, coding, or recommendations for the best tourist attractions."
                />
              </Box>
              <Box sx={{ my: 2 }}>
                <InformationSection
                  title="Promotions"
                  content="get more potential customers by making product or service promotions in a more attractive way."
                />
              </Box>
              <Box>
                <InformationSection
                  title="Much More"
                  content="design more types of content with Social Feeds and increase followers on your social media accounts."
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img src="/assets/group1.png" alt="section1" height="600px" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
