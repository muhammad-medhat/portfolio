import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import RssItem from "./RssItem";
import { TopicsGroup } from "./TopicsGroup";
import { tagGroups } from "./dt";

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
  const filterByTag = (tagKey) => {
    const relatedTags = tagGroups[tagKey] || [];
    return feedItems.filter((item) =>
      item.tags.some(
        (tag) =>
          relatedTags.includes(tag.toLowerCase().trim()) ||
          tag.toLowerCase().trim() === tagKey
      )
    );
  };

  // Handle tag change
  const handleTagChange = (tagKey) => {
    setSelectedTag(tagKey);
    setCurrentPage(1); // reset to first page
    if (tagKey === "all") {
      setFilteredItems(feedItems);
    } else {
      const filtered = filterByTag(tagKey);
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
  const clsSelectedTag = (tag) => {
    return selectedTag.toLowerCase() === tag.toLowerCase()
      ? "bg-primary"
      : "bg-secondary";
  };

  return (
    <>
      <h2 className="inner-title">
        <i className="fa-brands fa-readme"></i>Dev Articles
      </h2>
      {/* 🔽 Tag Selector */}
      <div className="mb-4 text-center">
        <TopicsGroup
          clsSelectedTag={clsSelectedTag}
          handleTagChange={handleTagChange}
        />
      </div>
      <div className="row rss-feed">
        {currentItems
          ? currentItems.map((item, index) => (
              <RssItem item={item} index={index} key={index} />
            ))
          : filteredItems}
      </div>
      {renderPagination()}
    </>
  );
};

export default RSSFeedReader;
