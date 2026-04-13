import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./com/footer";
import Home from "./pages/Home";
// import { Projects } from "./pages/projects/Projects";
import About from "./pages/about/";
import Contact from "./pages/contact";
import Sidebar from "./com/Sidebar";
import MyTools from "./pages/MyTools";

import "./assets/sass/main-md.scss";
import RSSApp from "./com/RssApp";
import YoutubeChannelVideos from "./com/youtube/YoutubeChannelVideos";
import { useEffect, useState } from "react";
import Loader from "./com/loader/loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for ALL images + fonts + assets to load
    const handleLoad = () => {
      setLoading(false);
    };
    // debugger;
    document.querySelectorAll("a.image").forEach((el) => {
      console.log("a.image element:", el);
    });

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="wrapper">
      <header id="header" className="flex flex-column justify-content-around">
        <Sidebar />
      </header>
      <main id="main" className="main flex flex-column justify-content-between">
        <div className="inner flex flex-column justify-content-between">
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
                  channelId={"UCZOhHnF_pEO0fi3zAC0EZLg"}
                  // channelId={"UCiLy-biaIPs3QddeMLIo2bw"}
                />
              }
            />
            {/* handle 404 */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
