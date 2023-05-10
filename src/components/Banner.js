import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import profileImg from "../assets/img/profile-img.jpeg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          {/* <Col xs={12} md={6} xl={7}> */}
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <div className="d-flex  align-items-center">
                    <img
                      src={profileImg}
                      alt="Muhammad Medhat"
                      style={{
                        width: "100px",
                        height: "100px",
                        marginRight: "1rem",
                        borderRadius: "50%",
                      }}
                    />
                    <h2>{`Hi! I'm Muhammad Medhat`} </h2>
                  </div>
                  <div className="d-flex justify-content-center align-content-center">
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "JavaScript Web Developer", "Wordpress Developer", "Search Engine Optimization" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </div>

                  <p>
                    Hi there! I am a web developer with expertise in JavaScript,
                    React, WordPress, and PHP. I have a passion for creating
                    beautiful and functional websites that provide a seamless
                    user experience. With several years of experience under my
                    belt, I have developed a deep understanding of web
                    development best practices and stay up-to-date with the
                    latest technologies and trends. Whether it's building a
                    custom WordPress site or creating a dynamic web application
                    with React, I am dedicated to delivering high-quality work
                    that exceeds expectations. When I'm not coding, you can find
                    me exploring new hiking trails or catching up on the latest
                    tech news.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};
