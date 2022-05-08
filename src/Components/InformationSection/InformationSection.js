import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const InformationSection = ({ title, content }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          position: "static",
          width: "20px",
          height: "15px",
          background: "#3B82F6",
          mr: "10px",
          mt: "5px",
        }}
      ></Box>
      <Typography variant="subtitle1" sx={{ color: "#193766" }}>
        <span style={{ color: "#3B82F6", fontWeight: "bolder" }}>{title}:</span>{" "}
        {content}
      </Typography>
    </Box>
  );
};
