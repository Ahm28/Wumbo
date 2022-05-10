import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Footer() {
  // const titleFooter = ["PRODUCT", "COMPANY", "GET IN TOUCH"];

  const contentProduct = [
    "Social Feeds",
    "React UI Kit",
    "Stisla Design",
    "More Product",
  ];

  const contentCompany = [
    "About Us",
    "Contact",
    "Privacy Policy",
    "Terms and Services",
    "Help",
  ];

  const contentGet = ["Twitter", "Facebook", "Dribble"];

  return (
    <Box
      sx={{
        background: "url(/assets/footer.png) no-repeat",
        backgroundSize: "100% 100%",
        py: 8,
        height: "400px",
      }}
    >
      <Container>
        <Grid container sx={{ py: 8 }}>
          <Grid item xs={6}>
            <Box>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#C6DBFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
              >
                <img src="/assets/W.png" alt="logo Wumbo" />
              </Box>
              <Typography
                color="#fff"
                sx={{ fontWeight: "bold", fontSize: "20px", my: 3 }}
              >
                Wumbo
              </Typography>
              <Typography color="#697B98">
                Wumbo is a team of creative developers who have an interest in
                design. We create design templates, UI kits and other products
                that make people's work easier and faster.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography color="rgba(255, 255, 255, 0.6)" sx={{ mb: 3 }}>
              PRODUCTS
            </Typography>
            {contentProduct.map((content) => (
              <Typography color="rgba(255, 255, 255, 0.8)" sx={{ my: 2 }}>
                {content}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={2}>
            <Typography color="rgba(255, 255, 255, 0.6)" sx={{ mb: 3 }}>
              COMPANY
            </Typography>
            {contentCompany.map((content) => (
              <Typography color="rgba(255, 255, 255, 0.8)" sx={{ my: 2 }}>
                {content}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={2}>
            <Typography color="rgba(255, 255, 255, 0.6)" sx={{ mb: 3 }}>
              GET IN TOUCH
            </Typography>
            {contentGet.map((content) => (
              <Typography color="rgba(255, 255, 255, 0.8)" sx={{ my: 2 }}>
                {content}
              </Typography>
            ))}
          </Grid>
        </Grid>
        <footer>
          <Box sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)", pt: 5 }}>
            <Typography color="rgba(255, 255, 255, 0.4)" variant="caption">
              COPYRIGHT @ 2022 - DESIGN{" "}
              <a
                href="https://www.figma.com/community/file/1061539222183309028"
                style={{
                  color: "rgba(255, 255, 255, 0.4)",
                  fontWeight: "bold",
                }}
              >
                {" "}
                NAUVAL
              </a>{" "}
              & CODE{" "}
              <a
                href="https://github.com/Ahm28/Wumbo"
                style={{
                  color: "rgba(255, 255, 255, 0.4)",
                  fontWeight: "bold",
                }}
              >
                {" "}
                AHMAD MUGHNI
              </a>
            </Typography>
          </Box>
        </footer>
      </Container>
    </Box>
  );
}
