import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./com/footer";
import Home from "./pages/Home";
// import { Projects } from "./pages/projects/Projects";
import About from "./pages/about/";
import Contact from "./pages/contact";
import { Sidebar } from "./com/Sidebar";
import MyTools from "./pages/MyTools";

import "./assets/sass/main-md.scss";
import RSSApp from "./com/RssApp";
import YoutubeChannelVideos from "./com/youtube/YoutubeChannelVideos";

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
            <Route exact path={`/`} element={<Home scrollTop={scrollTop} />} />
            {/* <Route path={`/projects`} element={<Projects scrollTop={scrollTop}/>} /> */}
            <Route path={`/about`} element={<About scrollTop={scrollTop} />} />
            <Route
              path={`/contact`}
              element={<Contact scrollTop={scrollTop} />}
            />
            <Route
              path={`/tools`}
              element={<MyTools scrollTop={scrollTop} />}
            />
            <Route path={`/rss`} element={<RSSApp scrollTop={scrollTop} />} />
            <Route
              path={`/youtube`}
              element={
                <YoutubeChannelVideos
                  apiKey={"AIzaSyAyd7uDEf5pKNOJRyhuQI2D2xhpaUm-h8Q"}
                  channelId={"UCiLy-biaIPs3QddeMLIo2bw"}
                  scrollTop={scrollTop}
                />
              }
            />
            {/* handle 404 */}
            <Route path="*" element={<Home scrollTop={scrollTop} />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
