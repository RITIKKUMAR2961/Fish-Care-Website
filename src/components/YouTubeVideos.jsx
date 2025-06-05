import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Loader from "./Loader";

const YouTubeVideos = ({ videos, fishName }) => {
  if (!videos.length) return <Loader />;

  return (
    <Box mt="50px" p="20px">
      <Typography
        fontWeight={700}
        fontSize={{ lg: "44px", xs: "25px" }}
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {fishName}
        </span>{" "}
        care videos
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={{ xs: 2, sm: 4 }}
        justifyContent="center"
        flexWrap="wrap"
      >
        {videos.slice(0, 4).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", width: "300px" }}
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <Typography color="#000" fontWeight={600} mt="5px">
              {item.video.title.length > 60
                ? `${item.video.title.substring(0, 60)}...`
                : item.video.title}
            </Typography>
            <Typography fontSize="14px" color="#555">
              {item.video.channelName}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default YouTubeVideos;
