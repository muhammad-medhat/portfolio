import React from "react";

import RSSFeedReader from "./RssFeedReader";
export default function RSSApp() {
  return (
    <div>
      <h2>latest articles</h2>
      {/* Example with a CORS-enabled feed */}
      {/* <RSSFeedReader feedUrl="https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed/muhammadmedhat" /> */}
      <RSSFeedReader feedUrl="https://dev.to/api/articles?username=muhammadmedhat" />
    </div>
  );
}
