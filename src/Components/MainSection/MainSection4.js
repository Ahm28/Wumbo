import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function MainSection4() {
  return (
    <Box
      sx={{
        background: "url(/assets/layer3.png) no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <Container>
        <Box
          sx={{
            height: "1306px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            Preview
          </Box>
          <Box sx={{ color: "#fff", lineHeight: "40px", px: 20, my: 5 }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Social Feeds is a Figma design template, and everyone can use
              Figma!
            </Typography>
          </Box>
          <Box
            sx={{
              width: "950px",
              height: "610px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              boxShadow: "0px 30px 60px rgba(25, 55, 102, 0.25)",
              borderRadius: "30px",
              px: 10,
            }}
          >
            <Box sx={{ display: "flex", height: "70px", alignItems: "center" }}>
              <Box
                sx={{
                  width: "19px",
                  height: "19px",
                  backgroundColor: "#FC1F6F",
                  borderRadius: "50%",
                }}
              ></Box>
              <Box
                sx={{
                  width: "19px",
                  height: "19px",
                  backgroundColor: "#FFCC18",
                  borderRadius: "50%",
                  mx: 1,
                }}
              ></Box>
              <Box
                sx={{
                  width: "19px",
                  height: "19px",
                  backgroundColor: "#1DF359",
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography sx={{ color: "#fff", mx: "auto" }}>Figma</Typography>
            </Box>
            <Box
              sx={{
                width: "928px",
                height: "539px",
              }}
            >
              <iframe
                width="928px"
                height="500px"
                src="https://www.youtube.com/embed/Cx2dkpBxst8?autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: "static",
                  left: "30px",
                  top: "70px",
                  borderRadius: "10px",
                }}
              ></iframe>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{ color: "#fff", textAlign: "center", my: 10, px: 12 }}
              >
                Like the demo above, you can use Social Feeds with ease, just
                need to duplicate the template design you want, design the
                content, and export!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
