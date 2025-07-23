import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import RssItem from "./RssItem";

const RSSFeedReader = ({ feedUrl }) => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // 🆕 Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  //tag selection
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  // 🧮 Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const tagsList = [
    "All",
    "wordpress",
    "javascript",
    "react",
    "php",
    "css",
    "cli",
    "plugins",
    "vscode",
  ];
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
        setFilteredItems(items);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError("Failed to fetch articles: " + err.message);
        setLoading(false);
      }
    }; // fetchArticles()
    if (feedUrl) fetchArticles();
    else {
      setError("Please provide a valid Dev.to API URL");
      setLoading(false);
    }
  }, [feedUrl]);
  // Extract unique tags
  // const uniqueTags = [
  //   "All",
  //   ...Array.from(
  //     new Set(
  //       feedItems.flatMap((item) =>
  //         item.tags.map((tag) => tag.toLowerCase().trim())
  //       )
  //     )
  //   ),
  // ];
  // console.log("tags", uniqueTags);
  // Handle tag change
  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    debugger;
    setCurrentPage(1); // reset to first page
    if (tag === "All") {
      setFilteredItems(feedItems);
    } else {
      // const filtered = feedItems.filter((item) => item.tags.includes(tag));
      const filtered = feedItems.filter((item) =>
        item.tags.some(
          (t) => t.toLowerCase().trim() === tag.toLowerCase().trim()
        )
      );
      setFilteredItems(filtered);
    }
  };

  // 📦 UI for pagination buttons
  const renderPagination = () => (
    <nav className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            key={i}
            className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}>
          <button
            className="page-link"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
  if (loading)
    return <div className="text-center py-4">Loading articles...</div>;
  if (error) return <div className="text-center py-4 text-danger">{error}</div>;

  return (
    <div className="container">
      <h2 className="inner-title">
        <i className="fa-brands fa-readme"></i>Dev Articles
      </h2>
      {/* 🔽 Tag Selector */}
      <div className="mb-4 text-center">
        <label htmlFor="tagSelector" className="me-2 fw-bold fs-4">
          Filter posts by tag:
        </label>
        <div className="tags-filter">
          {tagsList.map((tag, ind) => {
            return (
              <span
                key={ind}
                className={`badge me-2 p-2 ${
                  selectedTag.toLowerCase() === tag.toLowerCase()
                    ? "bg-primary"
                    : "bg-secondary"
                }`}
                onClick={() => handleTagChange(tag)}
                style={{ cursor: "pointer" }}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className="row rss-feed">
        {currentItems
          ? currentItems.map((item, index) => (
              <RssItem item={item} index={index} key={index} />
            ))
          : filteredItems}
      </div>
      {renderPagination()}
    </div>
  );
};

export default RSSFeedReader;
