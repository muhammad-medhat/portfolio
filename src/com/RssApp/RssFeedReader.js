// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useMemo, useState } from "react";
import RssItem from "./RssItem";
import { TopicsGroup } from "./TopicsGroup";
import { tagGroups } from "./dt";
import Loader from "../loader/loader";

// move bootstrap import to index.js instead of here

const RSSFeedReader = ({ feedUrl }) => {
  const [feedItems, setFeedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [numArticles, setNumArticles] = useState(0);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  // ✅ API pagination state (this is what you asked for)
  const [apiPage, setApiPage] = useState(1);
  const [apiPerPage, setApiPerPage] = useState(50);
  const [hasMore, setHasMore] = useState(true);

  // ✅ UI pagination state (your current pagination)
  const [uiPage, setUiPage] = useState(1);
  const itemsPerPage = 7;

  // tag selection
  const [selectedTag, setSelectedTag] = useState("all");

  // build URL using state-controlled per_page/page
  const buildApiUrl = (baseUrl, perPage, page) => {
    const url = new URL(baseUrl);
    url.searchParams.set("per_page", String(perPage));
    url.searchParams.set("page", String(page));
    // url.searchParams.set("_ts", String(Date.now())); // cache-bust
    return url.toString();
  };

  // ✅ fetch one API page and append
  useEffect(() => {
    if (!feedUrl) {
      setError("Please provide a valid Dev.to API URL");
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchPage = async () => {
      try {
        setError(null);

        // first load vs load more
        if (apiPage === 1) setLoading(true);
        else setLoadingMore(true);

        const url = buildApiUrl(feedUrl, apiPerPage, apiPage);

        const response = await fetch(url, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        setNumArticles(Array.isArray(data) ? data.length : 0);

        // if returned less than per_page => likely last page
        if (!Array.isArray(data) || data.length < apiPerPage) {
          setHasMore(false);
        }

        const mapped = (Array.isArray(data) ? data : []).map((item) => ({
          id: item.id,
          title: item.title || "No title",
          link: item.url || "#",
          pubDate: item.published_at || "",
          description: item.description || "",
          thumbnail: item.cover_image || null,
          tags: item.tag_list || [],
          author: item.user?.name || "Unknown Author",
          authorAvatar: item.user?.profile_image || null,
          readingTime: item.reading_time_minutes || 0,
          reactions: item.public_reactions_count || 0,
          comments: item.comments_count || 0,
        }));

        // ✅ append + dedupe by id
        setFeedItems((prev) => {
          const combined = [...prev, ...mapped];
          const unique = Array.from(
            new Map(combined.map((a) => [a.id, a])).values(),
          );

          // sort newest first (optional)
          unique.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
          return unique;
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to fetch articles: " + err.message);
          setHasMore(false);
        }
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchPage();
    return () => controller.abort();
  }, [feedUrl, apiPerPage, apiPage]);

  // ✅ whenever feedItems changes, reapply current tag filter
  useEffect(() => {
    // normalize
    const key = (selectedTag || "all").toLowerCase();
    setUiPage(1);

    if (key === "all") {
      setFilteredItems(feedItems);
    } else {
      debugger;
      const filtered = feedItems.filter((item) =>
        item.tags.some((t) =>
          tagGroups[key]?.includes(String(t).toLowerCase().trim()),
        ),
      );
      setFilteredItems(filtered);
    }
  }, [feedItems, selectedTag]);

  // UI pagination calculations (unchanged logic)
  const indexOfLastItem = uiPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = useMemo(
    () => filteredItems.slice(indexOfFirstItem, indexOfLastItem),
    [filteredItems, indexOfFirstItem, indexOfLastItem],
  );

  const totalUiPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleTagChange = (tagKey) => {
    setSelectedTag((tagKey || "all").toLowerCase());
  };

  const loadMoreFromApi = () => {
    if (hasMore && !loadingMore) setApiPage((p) => p + 1);
  };

  const resetAndRefetchAll = () => {
    setFeedItems([]);
    setFilteredItems([]);
    setHasMore(true);
    setApiPage(1);
    setUiPage(1);
  };

  // ---- render ----
  if (loading) return <Loader isInner={true} />;
  if (error) return <div className="text-center py-4 text-danger">{error}</div>;
  const clsSelectedTag = (tag) => {
    return selectedTag.toLowerCase() === tag.toLowerCase()
      ? "bg-primary"
      : "bg-secondary";
  };
  return (
    <>
      {/* ... your header + TopicsGroup ... */}
      <h2 className="inner-title">
        <i className="fa-brands fa-readme"></i>Dev Articles({numArticles})
      </h2>
      {/* 🔽 Tag Selector */}
      <div className="mb-4 text-center">
        <TopicsGroup
          clsSelectedTag={clsSelectedTag}
          handleTagChange={handleTagChange}
        />
      </div>
      <div className="mb-2 text-center">
        <strong>{filteredItems.length}</strong> articles found for "
        {selectedTag.toUpperCase()}"
      </div>

      {/* ✅ API controls (optional UI) */}
      {/* <div className="d-flex gap-2 justify-content-center align-items-center mb-3 flex-wrap">
        <select
          className="form-select"
          style={{ maxWidth: 160 }}
          value={apiPerPage}
          onChange={(e) => {
            setApiPerPage(Number(e.target.value));
            resetAndRefetchAll();
          }}>
          <option value={10}>API per_page: 10</option>
          <option value={30}>API per_page: 30</option>
          <option value={50}>API per_page: 50</option>
          <option value={100}>API per_page: 100</option>
        </select>

        <button
          className="btn btn-outline-success"
          onClick={loadMoreFromApi}
          disabled={!hasMore || loadingMore}>
          {loadingMore
            ? "Loading..."
            : hasMore
              ? "Load more articles"
              : "All loaded"}
        </button>
      </div> */}

      <div className="row rss-feed">
        {currentItems.map((item) => (
          <RssItem item={item} key={item.id || item.link} />
        ))}
      </div>

      {/* your existing UI pagination */}
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          <li className={`page-item ${uiPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setUiPage((p) => Math.max(p - 1, 1))}>
              Previous
            </button>
          </li>

          {Array.from({ length: totalUiPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${uiPage === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setUiPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${uiPage === totalUiPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setUiPage((p) => Math.min(p + 1, totalUiPages))}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default RSSFeedReader;
