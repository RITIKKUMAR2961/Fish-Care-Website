import React from "react";
import { Box, Stack, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import fishData from "../assets/fishData"; // Adjust path if needed

// Adjust this if your logo is elsewhere
import logo from "../assets/Img/fish.jpg";

const Navbar = () => {
  const defaultFishId = fishData[0]?.id || "goldfish";

  return (
    <Box bgcolor="black" px={4} py={2} boxShadow={3} width="auto">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="Fish Logo"
              style={{
                height: 40,
                width: 40,
                borderRadius: "50%",
                marginRight: 8,
              }}
            />
            <Typography variant="h5" fontWeight={700} color="white">
              FishCare
            </Typography>
          </Link>
        </Stack>

        <Stack direction="row" spacing={4}>
          <MuiLink component={Link} to="/" color="white" underline="none">
            Home
          </MuiLink>

          <MuiLink
            component={Link}
            to="/all-fish"
            color="white"
            underline="none"
          >
            All Fish
          </MuiLink>

          <MuiLink
            component={Link}
            to="/tank-calculator"
            color="white"
            underline="none"
          >
            Tank Calculator
          </MuiLink>

          {/* Optional: Uncomment to directly link to a fish detail */}
          {/* <MuiLink component={Link} to={`/fish/${defaultFishId}`} color="white" underline="none">
            Fish Detail
          </MuiLink> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
