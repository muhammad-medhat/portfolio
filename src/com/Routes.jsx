import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/about";
import Contact from "../pages/contact";
import MyTools from "../pages/MyTools";
import RSSApp from "./RssApp";
import YoutubeChannelVideos from "./youtube/YoutubeChannelVideos";

function MDRoutes() {
  return (
    <Routes>
      <Route exact path={`/`} element={<Home />} />
      {/* <Route path={`/projects`} element={<Projects />} /> */}
      <Route path={`/about`} element={<About />} />
      <Route path={`/contact`} element={<Contact />} />
      <Route path={`/tools`} element={<MyTools />} />
      <Route path={`/rss`} element={<RSSApp />} />
      <Route
        path={`/youtube`}
        element={
          <YoutubeChannelVideos
            apiKey={"AIzaSyAyd7uDEf5pKNOJRyhuQI2D2xhpaUm-h8Q"}
            // channelId={"UCZOhHnF_pEO0fi3zAC0EZLg"}
            channelId={"UCiLy-biaIPs3QddeMLIo2bw"}
          />
        }
      />
      {/* handle 404 */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default MDRoutes;
