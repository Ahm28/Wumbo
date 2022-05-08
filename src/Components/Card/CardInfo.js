import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function CardInfo({ icon, title, content }) {
  return (
    <Card
      variant="outined"
      sx={{ maxWidth: "300px", background: "transparent" }}
    >
      <CardContent>
        <Card
          sx={{
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            background: "#193766",
            borderRadius: "6px",
            color: "white",
            boxShadow: "0px 30px 60px rgba(25, 55, 102, 0.25)",
          }}
        >
          {icon}
        </Card>
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 3 }}>
          {title}
        </Typography>
        <Typography variant="subtitle1">{content}</Typography>
      </CardContent>
    </Card>
  );
}
