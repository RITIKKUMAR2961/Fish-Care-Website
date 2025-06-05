import React from "react";
import { Box, Typography, Stack, Chip, IconButton } from "@mui/material";
import { BookmarkBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FishDetail = ({ fish }) => {
  if (!fish) return <Typography>Fish not found.</Typography>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "flex-start",
          gap: 5,
          p: { xs: 2, md: 4 },
          bgcolor: "#fefefe",
          borderRadius: "16px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Box
          component="img"
          src={fish.image}
          alt={fish.name}
          sx={{
            width: { xs: "100%", md: "400px" },
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        />
        <Box flex={1}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Typography fontWeight={700} fontSize={{ xs: "28px", md: "36px" }}>
              {fish.name}
            </Typography>
            <IconButton aria-label="bookmark">
              <BookmarkBorder />
            </IconButton>
          </Stack>

          <Typography fontSize="18px" mb={3} color="text.secondary">
            {fish.description}
          </Typography>

          <Stack direction="row" spacing={2} mb={3} flexWrap="wrap">
            <Chip label={`Ideal Temp: ${fish.idealTemp}`} color="primary" />
            <Chip label={`Tank Size: ${fish.tankSize}`} color="primary" />
          </Stack>

          <Typography fontWeight={600} fontSize="20px" mb={1}>
            Compatible Fish:
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {fish.compatibleFish.map((cf) => {
              const fishId = cf.toLowerCase().replace(/\s+/g, "-");
              return (
                <Chip
                  key={cf}
                  label={cf}
                  variant="outlined"
                  color="secondary"
                  sx={{ mb: 1, cursor: "pointer" }}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
};

export default FishDetail;
