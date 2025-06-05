import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import fishVideo from "../assets/video/2561846-hd_1920_1080_30fps.mp4";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh", // Full page height
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        src={fishVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Foreground Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          px: { xs: 3, md: 8 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing={4} sx={{ width: { xs: "auto", md: "50%" } }}>
          <Typography
            variant="h3"
            fontWeight={700}
            color="white"
            sx={{
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
              lineHeight: 1.2,
            }}
          >
            Welcome to FishCare
          </Typography>
          <Typography
            variant="body1"
            fontSize="18px"
            color="white"
            sx={{
              textShadow: "0 2px 6px rgba(0,0,0,0.6)",
              fontWeight: 500,
              maxWidth: "90%",
            }}
          >
            Discover expert tips, ideal conditions, and compatible companions
            for over 60+ popular aquarium fish species. Create the perfect
            aquatic environment with ease.
          </Typography>
          <Link to="/all-fish" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: "16px",
                borderRadius: "8px",
                width: "fit-content",
                "&:hover": { bgcolor: "#00695C" },
              }}
            >
              Explore All Fish
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroBanner;
