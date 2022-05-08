import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";
import React from "react";

export default function HeroesLeft() {
  return (
    <>
      <Container>
        <Box component="div" sx={{ px: 5, color: "#193766" }}>
          <Typography variant="h2">
            Beautiful Design For{" "}
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Social Media
            </span>{" "}
            Content
          </Typography>
          <Typography variant="h6" sx={{ my: 2 }}>
            Figma social media content templates for branding, marketing,
            insights, and more. Free for personal and commercial use!
          </Typography>

          <Box>
            <Button variant="contained" sx={{ px: 3, py: 2 }}>
              <DownloadIcon /> Download Now
            </Button>
            <Button sx={{ ml: 2, px: 3, py: 2 }} variant="outlined">
              <PlayCircleOutlineIcon /> See in Action
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
