import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import CodeIcon from "@mui/icons-material/Code";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import CardInfo from "../Card/CardInfo";

export default function MainSection() {
  return (
    <>
      <Container>
        <Box component="div" sx={{ py: "100px" }}>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ color: "#193766", width: "560px", mx: "auto" }}
          >
            Figma Social Feeds is designed for everyone. Use for whatever you
            want, it’s completely free!
          </Typography>
        </Box>

        <Box component="div">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CardInfo
                icon={<ArchitectureIcon fontSize="large" color="inherit" />}
                title="For Designer"
                content="Busy designers want to share insights, such as tips, tricks or other types of insights. Focus on content not on design."
              />
            </Grid>
            <Grid item xs={4}>
              <CardInfo
                icon={<CodeIcon fontSize="large" color="inherit" />}
                title="For Coder"
                content="Coders who want to share snippets, tools, or tips and tricks. No design skills required: just duplicate, edit and export!"
              />
            </Grid>
            <Grid item xs={4}>
              <CardInfo
                icon={<VolumeMuteIcon fontSize="large" color="inherit" />}
                title="For Marketer"
                content="Promote the product in an elegant and attractive way to get more attention from potential customers. Just duplicate and export!"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
