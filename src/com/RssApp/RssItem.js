import React from "react";
import "./RssCard.sass";
// import "./speech-bubble.css";
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
    <div className="col-sm-6 col-md-4 ">
      <div
        className={`card card-uniform rss-item-${index}`}
        style={{
          background: `url(${item?.thumbnail})`,
        }}>
        <div className="info">
          <p className="card-title">{item.title}</p>

          <div className="metadata">
            <div className="meta-top">
              <span className="published">
                {item.pubDate ? formatDate(item.pubDate) : "Unknown date"}
              </span>
              {/* <!--tags--> */}
              <div className="tags mb-2 d-flex flex-wrap gap-1 px-2  mx-3 justify-content-center">
                {item.tags?.length > 0
                  ? item.tags.map((tag, i) => (
                      <span key={i} className="badge bg-secondary ">
                        {tag}
                      </span>
                    ))
                  : "No tags"}
              </div>
            </div>
            <div className="meta-bottom d-flex">
              <span className="reading-time" title="Reading Time">
                {item.readingTime}
              </span>
              <span className="reactions" title="Reactions">
                {item.reactions}
              </span>
              <span className="comments" title="Comments:">
                {item.comments}
              </span>
            </div>
          </div>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm mt-3">
            Read More...↗️
          </a>
        </div>
      </div>
    </div>
  );
}
