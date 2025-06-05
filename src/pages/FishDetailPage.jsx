import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import fishData from "../assets/fishData";
import FishDetail from "../components/FishDetail";
import YouTubeVideos from "../components/YouTubeVideos";
import { fetchYouTubeVideos } from "../utils/fetchData";

const FishDetailPage = () => {
  const { id } = useParams();
  const [fish, setFish] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const selectedFish = fishData.find((f) => f.id === id);
    setFish(selectedFish);

    if (selectedFish) {
      fetchYouTubeVideos(`${selectedFish.name} care`).then(setVideos);
    }
  }, [id]);

  if (!fish) return <Box p={3}>Fish not found</Box>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" }, px: 3 }}>
      <FishDetail fish={fish} />
      <YouTubeVideos videos={videos} fishName={fish.name} />
    </Box>
  );
};

export default FishDetailPage;
