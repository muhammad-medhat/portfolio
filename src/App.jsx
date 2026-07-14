import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/font-awesome.css";
import "./assets/css/index.css";
import "./assets/css/elements.css";
import "./assets/css/old.css.css";

import { useEffect, useState } from "react";
import MDRoutes from "./com/Routes";
import Footer from "./com/footer/Footer";
import Sidebar from "./com/Sidebar";
import Loader from "./com/loader/loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for ALL images + fonts + assets to load
    const handleLoad = () => {
      setLoading(false);
    };
    // // debugger;
    // document.querySelectorAll("a.image").forEach((el) => {
    //   console.log("a.image element:", el);
    // });

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
      <header id="header" className="">
        <Sidebar />
      </header>
      <main id="main" className="">
        <div className="content-area">
          <MDRoutes />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
