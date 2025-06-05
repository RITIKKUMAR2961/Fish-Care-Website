import React, { useState } from "react";
import { Box, TextField, Typography, Stack } from "@mui/material";
import fishData from "../assets/fishData";
import FishCard from "./FishCard";

const FishList = () => {
  const [search, setSearch] = useState("");
  const filteredFish = fishData.filter(
    (fish) =>
      fish.name.toLowerCase().includes(search.toLowerCase()) ||
      fish.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p="20px" mt="30px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="40px"
        textAlign="center"
      >
        Find Your Favorite Fish Species
      </Typography>

      <TextField
        placeholder="Search fish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          width: { xs: "100%", sm: "400px" },
          mb: 4,
          input: { fontWeight: "600", fontSize: "18px" },
          borderRadius: "40px",
          backgroundColor: "#fff",
        }}
      />

      <Stack
        direction="row"
        flexWrap="wrap"
        gap={3}
        justifyContent="center"
        alignItems="center"
      >
        {filteredFish.length ? (
          filteredFish.map((fish) => <FishCard key={fish.id} fish={fish} />)
        ) : (
          <Typography>No fish found.</Typography>
        )}
      </Stack>
    </Box>
  );
};

export default FishList;
