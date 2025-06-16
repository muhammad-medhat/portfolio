import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const YoutubeChannelVideos = ({ apiKey, channelId }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  debugger;

  useEffect(() => {
    const fetchChannelVideos = async () => {
      debugger;
      // Step 1: Get the channel's uploads playlist ID
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
      );
      const channelData = await channelResponse.json();
      const uploadsPlaylistId =
        channelData.items[0].contentDetails.relatedPlaylists.uploads;

      // Step 2: Fetch all videos from the uploads playlist
      let allVideos = [];
      let nextPageToken = "";

      do {
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${apiKey}&pageToken=${nextPageToken}`
        );
        const playlistData = await playlistResponse.json();

        const videoIds = playlistData.items.map(
          (item) => item.snippet.resourceId.videoId
        );
        allVideos = [...allVideos, ...videoIds];

        nextPageToken = playlistData.nextPageToken || "";
      } while (nextPageToken);

      setVideos(allVideos);
      setLoading(false);
    };

    fetchChannelVideos();
  }, [apiKey, channelId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>YouTube Channel Videos</h2>
      <p>Videos from the channel:</p>
      {videos.map((videoId) => (
        <div key={videoId} style={{ marginBottom: "2rem" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="auto"
          />
        </div>
      ))}
    </div>
  );
};

export default YoutubeChannelVideos;
