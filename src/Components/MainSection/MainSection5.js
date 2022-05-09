import { Box, Container, Grid, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";

export const MainSection5 = () => {
  return (
    <Box
      sx={{
        background: "url(/assets/layer4.png) no-repeat right",
        backgroundSize: "542px 542px",
        py: 8,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h4" color="#193766">
                Optimized For Posts on{" "}
                <span style={{ textDecoration: "underline" }}>
                  All Social Media
                </span>
                : Facebook, Instagram & Twitter
              </Typography>
              <Typography variant="subtitle2" color="#697B98" sx={{ my: 3 }}>
                The design has an aspect ratio of 1:1 which the majority of
                social media recommends. The image quality is also high (1080 *
                1080), you can further increase the image quality to 2x or more
                so that the design looks sharper.
              </Typography>

              <Box component="div" sx={{ mt: 8 }}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                    boxShadow: "0px 30px 60px rgba(59, 130, 246, 0.25)",
                    backgroundColor: "#3B82F6",
                    borderRadius: "10px",
                    color: "#fff",
                  }}
                >
                  <Typography>Preview For Instagram</Typography>
                  <ChevronRightIcon />
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Typography color="#193766">Preview For Facebook</Typography>
                  <ChevronRightIcon />
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Typography color="#193766">Preview For Twitter</Typography>
                  <ChevronRightIcon />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <img src="/assets/group2.png" width="366px" alt="group2" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
