import React, { useEffect, useState } from "react";

function YoutubeInfo({ channelId, apiKey }) {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setChannel(data.items[0].snippet);
      });
  }, [channelId]);
  const truncate = (text, length = 50) => {
    if (!text) return "";
    return text.length > length ? text.substring(0, length) + "..." : text;
  };
  return (
    <div className="youtube-info">
      {channel ? (
        <div className="channel-info">
          <img
            src={channel.thumbnails.default.url}
            alt={`${channel.title} profile`}
            className="channel-avatar"
          />
          <h2 className="channel-title">{channel.title}</h2>
          {/* <p className="channel-description">{channel.description}</p> */}
          <p>{truncate(channel.description, 100)}</p>

          {/* YouTube link */}
          <a
            // href={`https://www.youtube.com/channel/${channel.channelId}`}
            href={`https://www.youtube.com/${channel.customUrl}`}
            target="_blank"
            rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </div>
      ) : (
        <p>Loading channel info...</p>
      )}
    </div>
  );
}

export default YoutubeInfo;
