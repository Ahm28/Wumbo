import { Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Box } from "@mui/system";
import React from "react";

export default function MainSection7() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 16,
      }}
    >
      <Box
        sx={{
          width: "120px",
          height: "41px",
          background: "rgba(59, 130, 246, 0.1)",
          borderRadius: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#3B82F6",
        }}
      >
        Download
      </Box>
      <Typography variant="h4" color="#193766" sx={{ mt: 2 }}>
        Download Figma{" "}
        <span style={{ textDecoration: "underline", color: "#3B82F6" }}>
          Social Feeds
        </span>{" "}
        Now
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ textAlign: "center", width: "500px", my: 3 }}
        color="#697B98"
      >
        Figma Social Feeds is free for everyone, create content for promotion,
        share insights and get creative on the internet.
      </Typography>
      <Box>
        <Button variant="contained" sx={{ px: 3, py: 2 }}>
          <DownloadIcon /> Download Now
        </Button>
        <Button sx={{ ml: 2, px: 3, py: 2 }} variant="outlined">
          See in Action <FacebookOutlinedIcon sx={{ ml: 1 }} />
        </Button>
      </Box>
    </Box>
  );
}
