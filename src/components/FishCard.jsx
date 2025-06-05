import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const FishCard = ({ fish }) => (
  <Link to={`/fish/${fish.id}`} style={{ textDecoration: "none" }}>
    <Box
      sx={{
        width: { xs: "280px", sm: "320px" },
        bgcolor: "#fff",
        borderTop: "4px solid #FF2625",
        borderRadius: "10px",
        overflow: "hidden",
        mb: 3,
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
          border: "1px solid #FF2625",
        },
      }}
    >
      <img
        src={fish.image}
        alt={fish.name}
        style={{ width: "100%", height: "220px", objectFit: "cover" }}
      />
      <Box p="15px">
        <Typography
          fontWeight={700}
          fontSize={{ xs: "20px", sm: "24px" }}
          color="#000"
        >
          {fish.name}
        </Typography>
        <Typography fontSize="14px" color="#555" mt={1}>
          {fish.description.substring(0, 60)}...
        </Typography>
      </Box>
    </Box>
  </Link>
);

export default FishCard;
