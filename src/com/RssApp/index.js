import React from "react";

import RSSFeedReader from "./RssFeedReader";
export default function RSSApp() {
  return (
    <div>
      {/* <RSSFeedReader feedUrl="https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed/muhammadmedhat" /> */}
      {/* dev.to API */}
      <RSSFeedReader feedUrl="https://dev.to/api/articles?username=muhammadmedhat" />
    </div>
  );
}
