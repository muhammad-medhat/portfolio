import React, { useEffect, useRef } from "react";
// import HireMe from "../../com/HireMe/HireMe";

export default function About() {
  const widgetRef = useRef(null);
  useEffect(() => {
    if (!widgetRef.current) return;
    if (document.getElementById("pph-widget-script")) return;
    const script = document.createElement("script");
    script.id = "pph-widget-script";
    script.type = "text/javascript";
    const useSSL = window.location.protocol === "https:";
    script.src =
      (useSSL ? "https:" : "http:") +
      "//www.peopleperhour.com/hire/3143609927/55859.js" +
      "?width=245&height=320&orientation=vertical&theme=dark" +
      "&hourlies=1076023%2C1078188&rnd=" +
      Math.floor(Math.random() * 10000);

    // 🔑 Insert script AFTER the div (this is what PPH expects)
    widgetRef.current.after(script);
    debugger;

    return () => {
      // cleanup
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
      script.remove();
    };
  }, []);
  const jobSummary = (
    <>
      <h3 className="inner-title">
        <i className="fa-regular fa-address-card"></i>About Me
      </h3>

      <p className="text-start">
        Hi, I’m Muhammad Medhat, a WordPress Developer with over a decade of
        experience in web development. My journey started in 2007 with ASP.Net
        and C#, later transitioning to PHP and open-source technologies in 2010.
        Since 2020, I’ve focused exclusively on WordPress development, crafting
        custom themes, plugins, and WooCommerce solutions tailored to
        businesses' needs. I’ve worked on diverse projects, from e-commerce
        platforms to corporate websites, ensuring performance, scalability, and
        seamless user experiences. Some of my notable projects include custom
        WooCommerce templates, WordPress plugins, and developing engaging
        content-driven sites.
        <blockquote className="blockquote mt-3">
          Beyond development, I’m passionate about coaching and mentoring
          aspiring freelancers, helping them build careers in web development
          through hands-on guidance. I’ve collaborated with organizations like
          Elhareefa and DEBI to support students in navigating the freelancing
          world. If you’re looking for a skilled WordPress developer to bring
          your project to life—or need guidance on launching your freelancing
          career—I’d love
        </blockquote>
      </p>

      <p className="no-border blockquote">
        Thank you for taking the time to read my about me page. I would love to
        hear more about your project and how I can help you achieve your goals.
        Feel free to get in touch with me anytime!
      </p>
    </>
  );

  return (
    <div className="about__content">
      <div className="about__content__personalWrapper">
        <div className="d-flex">
          <div>
            <p>{jobSummary}</p>

            {/* REQUIRED mount point */}
            <div id="pph-hireme" ref={widgetRef}></div>
            {/* <HireMe /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
