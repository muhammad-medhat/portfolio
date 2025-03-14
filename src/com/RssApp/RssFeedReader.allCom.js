import React, { useState, useEffect } from "react";
// import "./RssFeedReader.css";

const RSSFeedReader = ({ feedUrl }) => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to truncate description to a set number of words
  const getExcerpt = (text, wordLimit = 20) => {
    // Remove HTML tags for clean text
    const plainText = text.replace(/<[^>]+>/g, "");
    const words = plainText.split(" ");
    if (words.length <= wordLimit) return plainText;
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  // Extract thumbnail URL from item (adjust based on your feed's structure)
  const getThumbnail = (item) => {
    // Check common fields for thumbnail URLs
    if (item.thumbnail) return item.thumbnail; // Direct thumbnail field
    if (item.enclosure && item.enclosure.url) return item.enclosure.url; // Enclosure field
    if (item["media:thumbnail"]) return item["media:thumbnail"]; // Media namespace
    return null; // No thumbnail available
  };
  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        // Fetch the RSS feed directly (must support CORS)
        const response = await fetch(feedUrl, {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched JSON:", data); // Debug: Log JSON data

        const items = data.map((item) => ({
          title: item.title || "No title",
          link: item.url || "#",
          pubDate: item.published_at || "",
          description: item.description || "",
          thumbnail: item.cover_image || null,
        }));
        setFeedItems(items);
        setLoading(false);
        setError(null);
      } catch (err) {
        console.error("Fetch or parse error:", err); // Debug: Log error
        setError("Failed to fetch or parse RSS feed: " + err.message);
        setLoading(false);
      }
    };

    if (feedUrl) {
      fetchRSSFeed();
    } else {
      setError("Please provide a valid RSS feed URL");
      setLoading(false);
    }
  }, [feedUrl]);

  if (loading) {
    return <div className="rss-feed-loading">Loading feed...</div>;
  }

  if (error) {
    return <div className="rss-feed-error">{error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4">RSS Feed</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {feedItems.map((item, index) => (
          <div key={index} className="feed-item col">
            <div className="card h-100">
              {item.thumbnail && (
                <img
                  src={item.thumbnail}
                  className="card-img-top"
                  alt={item.title}
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h3 className="card-title">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary">
                    {item.title}
                  </a>
                </h3>
                <div className="text-muted small mb-2">
                  Published:&nbsp;
                  {item.pubDate
                    ? new Date(item.pubDate).toLocaleDateString()
                    : "Unknown date"}
                </div>
                <p className="card-text">{getExcerpt(item.description)}</p>
                <div className="mb-2">
                  <strong>Tags:</strong>
                  {item.tags?.length > 0
                    ? item.tags.map((tag, i) => (
                        <span key={i} className="badge bg-secondary me-1">
                          {tag}
                        </span>
                      ))
                    : "No tags"}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RSSFeedReader;
