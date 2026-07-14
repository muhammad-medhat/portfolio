import React from "react";
import { tagGroupKeys } from "./dt";

export const TopicsGroup = ({ clsSelectedTag, handleTagChange }) => {
  return (
    <>
      <label htmlFor="tagSelector" className="me-2 fw-bold fs-4">
        Filter posts by topic
      </label>
      <div className="tags-filter">
        {tagGroupKeys.map((tag, ind) => {
          return (
            <span
              key={ind}
              className={`badge me-2 p-2 ${clsSelectedTag(tag)}`}
              onClick={() => handleTagChange(tag)}
              style={{ cursor: "pointer" }}>
              {tag}
            </span>
          );
        })}
      </div>
    </>
  );
};
