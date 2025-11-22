import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./youtube.css";
function YoutubeChannelVideos({ apiKey, channelId }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChannelVideos = async () => {
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
        console.log("playlistData", playlistData);
        const videoItems = playlistData.items.map((item) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title || "xxx",
          description: item.snippet.description,
        }));
        const videoIds = playlistData.items.map(
          (item) => item.snippet.resourceId.videoId
        );
        // allVideos = [...allVideos, ...videoIds];
        allVideos = [...allVideos, ...videoItems];

        nextPageToken = playlistData.nextPageToken || "";
      } while (nextPageToken);

      setVideos(allVideos);
      setLoading(false);
    };

    fetchChannelVideos();
  }, [apiKey, channelId]);

  if (loading) return <div className="text-center py-4 spinner">&nbsp;</div>;
  console.log("videos...", videos);
  return (
    <div className="container">
      <div className="video-grid">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <div className="video-container">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.id}`}
                controls
              />
            </div>
            <div className="video-meta">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <button
                className="btn btn-youtube"
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${video.id}`,
                    "_blank"
                  )
                }>
                <i className="fa-brands fa-youtube"></i>&nbsp; Watch on
                YouTube...
              </button>
              {/* suggestions social share... */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YoutubeChannelVideos;
