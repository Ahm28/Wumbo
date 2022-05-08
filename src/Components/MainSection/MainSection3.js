import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { InformationSection } from "../InformationSection/InformationSection";

export const MainSection3 = () => {
  return (
    <Box
      sx={{
        background: "url(/assets/layer2.png) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <img src="/assets/group 9.png" alt="section2" height="600px" />
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h4" sx={{ color: "#193766" }}>
                Design Templates Are Highly Customizable,{" "}
                <span style={{ textDecoration: "underine" }}>
                  it's easy to use!
                </span>
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#697B98", my: 3 }}>
                All design templates are ready to use, meaning you only need to
                focus on content or if necessary, adjust some properties such as
                color, font, font size and other properties to match your brand.
              </Typography>
              <Box>
                <InformationSection
                  title="Font Family"
                  content="use your favorite font in the design template you choose. Figma has dozens of fonts, don't worry about font!"
                />
              </Box>
              <Box sx={{ my: 2 }}>
                <InformationSection
                  title="Colors"
                  content="adjust the color of the template design with the brand you have. Set a solid color or gradient, both of which are easy to customize."
                />
              </Box>
              <Box>
                <InformationSection
                  title="Much More"
                  content="set more properties to suit your desires, all the designs own proportions optimized for social media."
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
