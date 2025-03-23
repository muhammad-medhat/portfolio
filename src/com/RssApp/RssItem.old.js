import React from "react";
import "./speech-bubble.css";
export default function RssItem({ item, index }) {
  // console.log(item);
  // document.getElementById("speech-bubble").style.display = "none";

  // Format date as "Month-Year"
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      // month: "long", // Full month name (e.g., "March")
      month: "short", // short month name (e.g., "Mar")
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
    <div className="col-sm-12 col-md-4">
      <div className={`card card-uniform rss-item-${index}`}>
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
              className="text-primary"
              onMouseMove={(e) => {
                // debugger;
                const cardTitle = document.querySelector(
                  `.rss-item-${index} .card-title`
                );
                cardTitle.style.whiteSpace = "normal";
                cardTitle.style.overflow = "visible";
                // console.log("item.title", item.title);
              }}>
              {item.title}
            </a>
            <div id={`speech-bubble-${index}`} className="speech-bubble">
              {item.title}
            </div>
          </h3>

          <div className="published" title="published">
            {item.pubDate ? formatDate(item.pubDate) : "Unknown date"}
          </div>
          <p className="card-text">{getExcerpt(item.description)}</p>
          <div className="mb-2 d-flex justify-content-start">
            {item.tags?.length > 0
              ? item.tags.map((tag, i) => (
                  <span key={i} className="badge bg-secondary me-1">
                    {tag}
                  </span>
                ))
              : "No tags"}
          </div>
          <div className="metadata d-flex justify-content-start">
            <span className="reading-time" title="Reading Time">
              {item.readingTime} min
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
