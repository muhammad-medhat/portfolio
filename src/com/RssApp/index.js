import { Helmet } from "react-helmet-async";
import RSSFeedReader from "./RssFeedReader";
function RSSApp() {
  return (
    <div>
      <Helmet>
        <title>
          Muhammad Medhat – Senior WordPress Developer | dev.to RSS Feed
        </title>
        <meta
          name="description"
          content="dev.to articles RSS feed for web development tutorials and WordPress tips."
        />
      </Helmet>
      {/* <RSSFeedReader feedUrl="https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed/muhammadmedhat" /> */}
      {/* dev.to API */}
      <RSSFeedReader feedUrl="https://dev.to/api/articles?username=muhammadmedhat&per_page=100&page=1" />
    </div>
  );
}
export default RSSApp;
