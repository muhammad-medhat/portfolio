import React from "react";

export default function RssItem({ item }) {
  console.log(item);
  // Format date as "Month-Year"
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long", // Full month name (e.g., "March")
      year: "numeric", // Full year (e.g., "2025")
    });
  };

  // Truncate description to an excerpt
  const getExcerpt = (text, wordLimit = 20) => {
    const plainText = text.replace(/<[^>]+>/g, "");
    const words = plainText.split(" ");
    if (words.length <= wordLimit) return plainText;
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  return (
    <div className="col">
      <div className="card card-uniform">
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
              title={item.title}
              // data-full-title={item.title} // Custom attribute for tooltip
              className="text-primary">
              {item.title}
            </a>
          </h3>

          <div className="published" title="published">
            {item.pubDate ? formatDate(item.pubDate) : "Unknown date"}
          </div>
          <p className="card-text">{getExcerpt(item.description)}</p>
          <div className="mb-2">
            {item.tags?.length > 0
              ? item.tags.map((tag, i) => (
                  <span key={i} className="badge bg-secondary me-1">
                    {tag}
                  </span>
                ))
              : "No tags"}
          </div>
          {/* <div className="text-muted small mb-2"> */}
          <div className="metadata">
            <span className="reading-time" title="Reading Time">
              : {item.readingTime} min
            </span>
            <span className="reactions" title="Reactions">
              {item.reactions}
            </span>
            <span className="comments" title="Comments">
              {item.comments}
            </span>
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
  );
}
