import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import fishData from "../assets/fishData";

const AllFishDetails = () => {
  return (
    <Box px={3} py={5}>
      <Typography
        fontWeight={700}
        fontSize={{ lg: "44px", xs: "30px" }}
        mb={4}
        textAlign="center"
      >
        All Fish Species Details
      </Typography>

      {fishData.map((fish) => (
        <Box
          key={fish.id}
          mb={6}
          p={3}
          borderRadius="12px"
          boxShadow="0px 4px 12px rgba(0,0,0,0.1)"
          bgcolor="#fefefe"
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="flex-start"
          >
            <Box
              component="img"
              src={fish.image}
              alt={fish.name}
              sx={{
                width: { xs: "100%", md: "300px" },
                borderRadius: "10px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
              }}
            />
            <Box flex={1}>
              <Typography fontWeight={700} fontSize="28px" mb={1}>
                {fish.name}
              </Typography>
              <Typography fontSize="16px" color="text.secondary" mb={2}>
                {fish.description.slice(0, 150)}...
              </Typography>

              <Link to={`/fish/${fish.id}`} style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#FF2625",
                    "&:hover": { bgcolor: "#e31b1b" },
                    fontWeight: 600,
                    px: 3,
                  }}
                >
                  More About
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default AllFishDetails;
