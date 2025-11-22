import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./com/footer";
import "./assets/sass/main-md.scss";
// import Home from "./pages/Home";
// import About from "./pages/about/";
// import Contact from "./pages/contact";
// // import MyTools from "./pages/MyTools";

// import RSSApp from "./com/RssApp";
// import YoutubeChannelVideos from "./com/youtube/YoutubeChannelVideos";
import Sidebar from "./com/Sidebar";
//lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/about/"));
const Contact = React.lazy(() => import("./pages/contact"));
const RSSApp = React.lazy(() => import("./com/RssApp"));
const YoutubeChannelVideos = React.lazy(() =>
  import("./com/youtube/YoutubeChannelVideos")
);

function App() {
  document.title = "Muhammad Medhat - Wordpress Developer";
  const scrollTop = () => {
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="wrapper">
      <header id="header" className="flex flex-column justify-content-around">
        <Sidebar />
      </header>
      <main id="main" className="main flex flex-column justify-content-between">
        <div className="inner flex flex-column justify-content-between">
          <Routes>
            <Route
              exact
              path={`/`}
              element={
                <React.Suspense
                  fallback={
                    <div className="text-center py-4 spinner">&nbsp;</div>
                  }>
                  <Home scrollTop={scrollTop} />
                </React.Suspense>
              }
            />
            <Route
              path={`/about`}
              element={
                <React.Suspense
                  fallback={
                    <div className="text-center py-4 spinner">&nbsp;</div>
                  }>
                  <About scrollTop={scrollTop} />
                </React.Suspense>
              }
            />
            <Route
              path={`/contact`}
              element={
                <React.Suspense
                  fallback={
                    <div className="text-center py-4 spinner">&nbsp;</div>
                  }>
                  <Contact scrollTop={scrollTop} />
                </React.Suspense>
              }
            />
            {/* <Route
              path={`/tools`}
              element={<MyTools scrollTop={scrollTop} />}
            /> */}
            <Route
              path={`/rss`}
              element={
                <React.Suspense
                  fallback={
                    <div className="text-center py-4 spinner">&nbsp; </div>
                  }>
                  <RSSApp scrollTop={scrollTop} />
                </React.Suspense>
              }
            />
            <Route
              path={`/youtube`}
              element={
                <React.Suspense
                  fallback={<div className="text-center py-4 spinner"></div>}>
                  <YoutubeChannelVideos
                    apiKey={"AIzaSyAyd7uDEf5pKNOJRyhuQI2D2xhpaUm-h8Q"}
                    channelId={"UCiLy-biaIPs3QddeMLIo2bw"}
                    scrollTop={scrollTop}
                  />
                </React.Suspense>
              }
            />
            {/* handle 404 */}
            <Route
              path="*"
              element={
                <React.Suspense
                  fallback={
                    <div className="text-center py-4 spinner">&nbsp;</div>
                  }>
                  <Home scrollTop={scrollTop} />
                </React.Suspense>
              }
            />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
