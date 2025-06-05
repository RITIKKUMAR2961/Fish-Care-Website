export const fetchYouTubeVideos = async (query) => {
  const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${encodeURIComponent(query)}`;
  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": " 044d6fdda2mshc9a56de717c72f8p1b8b61jsn3f1f8e383ab4",  // <-- Replace with your key
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.contents || [];
  } catch (error) {
    console.error("YouTube API error:", error);
    return [];
  }
};
