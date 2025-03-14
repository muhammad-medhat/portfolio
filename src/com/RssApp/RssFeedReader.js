import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RssItem from "./RssItem";

const RSSFeedReader = ({ feedUrl }) => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(feedUrl);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const items = data.map((item) => ({
          title: item.title || "No title",
          link: item.url || "#",
          pubDate: item.published_at || "",
          description: item.description || "",
          thumbnail: item.cover_image || null,
          tags: item.tag_list || item.tags || [],
          author: item.user?.name || "Unknown Author",
          authorAvatar: item.user?.profile_image || null,
          readingTime: item.reading_time_minutes || 0,
          reactions: item.public_reactions_count || 0,
          comments: item.comments_count || 0,
        }));
        setFeedItems(items);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError("Failed to fetch articles: " + err.message);
        setLoading(false);
      }
    };
    if (feedUrl) fetchArticles();
    else {
      setError("Please provide a valid Dev.to API URL");
      setLoading(false);
    }
  }, [feedUrl]);

  if (loading)
    return <div className="text-center py-4">Loading articles...</div>;
  if (error) return <div className="text-center py-4 text-danger">{error}</div>;

  return (
    <div className="container my-4">
      <style>{`
        .card-uniform {
          height: 100%; /* Ensure card fills column height */
          display: flex;
          flex-direction: column;
        }
        .card-img-top, .card-img-placeholder {
          height: 200px; /* Fixed height for image or placeholder */
          object-fit: cover; /* Crop images to fit */
        }
        .card-img-placeholder {
          background-color: #f8f9fa; /* Light gray background */
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6c757d; /* Muted text color */
        }
        .card-body {
          flex-grow: 1; /* Allow body to expand */
          display: flex;
          flex-direction: column;
        }
        .card-text {
          flex-grow: 1; /* Ensure text takes available space */
          margin-bottom: 1rem; /* Consistent spacing */
        }
        .card-meta {
          margin-bottom: 1rem; /* Consistent spacing */
        }
      `}</style>
      <h2 className="mb-4">Dev.to Articles</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {feedItems.map((item, index) => (
          <RssItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RSSFeedReader;
