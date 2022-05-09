import { Container, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box } from "@mui/system";
import React from "react";

export default function MainSection6() {
  return (
    <Box
      sx={{
        background: "url(/assets/layer5.png) no-repeat",
        backgroundSize: "540px 479px",
        py: 8,
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <img src="/assets/group3.png" width="579px" alt="group3" />
          </Grid>
          <Grid item sx={{ display: "flex", alignItems: "center" }} xs={6}>
            <Box>
              <Typography variant="h4" color="#193766">
                Figma Social Feeds is Free For Personal or Commercial Use
              </Typography>
              <Typography variant="subtitle2" color="#697B98" sx={{ py: 3 }}>
                Figma Social Feeds is licensed under CC BY 4.0, which means you
                are free to use template designs for personal or commercial
                purposes with attribution to the template design creator.
              </Typography>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <CheckCircleIcon fontSize="small" sx={{ color: "#1EBD88" }} />
                  <Typography sx={{ ml: 2 }} color="#193766">
                    Design content for products to be sold
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <CheckCircleIcon fontSize="small" sx={{ color: "#1EBD88" }} />
                  <Typography sx={{ ml: 2 }} color="#193766">
                    Design content to offer services
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <CheckCircleIcon fontSize="small" sx={{ color: "#1EBD88" }} />
                  <Typography sx={{ ml: 2 }} color="#193766">
                    Create product that include Social Feeds as features in it
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <CloseOutlinedIcon
                    fontSize="small"
                    sx={{
                      color: "#EF4646",
                      background: "rgba(239, 70, 70, 0.1)",
                      borderRadius: "100%",
                    }}
                  />
                  <Typography sx={{ ml: 2 }} color="#193766">
                    Resell it without making significant changes
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <CloseOutlinedIcon
                    fontSize="small"
                    sx={{
                      color: "#EF4646",
                      background: "rgba(239, 70, 70, 0.1)",
                      borderRadius: "100%",
                    }}
                  />
                  <Typography sx={{ ml: 2 }} color="#193766">
                    Create design generator tool that include Social Feeds
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
