import { Link } from "react-router-dom";

const MainAbout = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Left Image Start */}
            <div className="about-images">
              <div className="about-video">
                <figure
                  className="reveal image-anime"
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                    visibility: "inherit",
                  }}
                >
                  <img
                    src="/images/video-img-2.jpg"
                    alt="Video Thumbnail"
                    style={{ transform: "translate(0px, 0px)" }}
                  />
                </figure>

                <div className="video-play-button">
                  <a
                    href="https://www.youtube.com/watch?v=2JNMGesMC2Y"
                    className="popup-video"
                  >
                    <img src="/images/icon-play.svg" alt="Play Button" />
                  </a>
                </div>
              </div>

              <div className="about-image">
                <figure
                  className="reveal image-anime"
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                    visibility: "inherit",
                  }}
                >
                  <img
                    src="/images/video-img-1.jpg"
                    alt="Secondary Image"
                    style={{ transform: "translate(0px, 0px)" }}
                  />
                </figure>
              </div>
            </div>
            {/* About Left Image End */}
          </div>

          <div className="col-lg-6">
            {/* About Content Start */}
            <div className="about-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3
                  className="wow fadeInUp"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInUp",
                  }}
                >
                  About Mytown Karen
                </h3>
                <h2 className="text-anime">
                  <div
                    className="line"
                    style={{
                      display: "block",
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">Your</span>
                    </div>{" "}
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">Lifestyle</span>
                    </div>{" "}
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">Destination</span>
                    </div>
                  </div>

                  <div
                    className="line"
                    style={{
                      display: "block",
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">In</span>
                    </div>{" "}
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">The</span>
                    </div>
                  </div>

                  <div
                    className="line"
                    style={{
                      display: "block",
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">Heart</span>
                    </div>{" "}
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">of</span>
                    </div>{" "}
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">Karen</span>
                    </div>
                  </div>
                </h2>
              </div>
              {/* Section Title End */}

              {/* About Content Body Start */}
              <div className="about-content-body">
                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Mytown Karen is more than just a shopping destination—it's a
                  vibrant community hub. Whether you're here to shop, dine, or
                  connect, our modern facilities and curated experiences offer
                  something for everyone. Discover a space where convenience,
                  comfort, and creativity meet.
                </p>

                <ul>
                  <li
                    className="wow fadeInUp"
                    data-wow-delay="0.75s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.75s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="icon-box">
                      <img src="/images/icon-about-1.svg" alt="Smart Home" />
                    </div>
                    <span>Diverse Retail & Dining</span>
                  </li>

                  <li
                    className="wow fadeInUp"
                    data-wow-delay="1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "1s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="icon-box">
                      <img
                        src="/images/icon-about-2.svg"
                        alt="Beautiful Scene"
                      />
                    </div>
                    <span>Family-Friendly Atmosphere</span>
                  </li>

                  <li
                    className="wow fadeInUp"
                    data-wow-delay="1.25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "1.25s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="icon-box">
                      <img src="/images/icon-about-3.svg" alt="Lifestyle" />
                    </div>
                    <span>Modern & Comfortable Spaces</span>
                  </li>

                  <li
                    className="wow fadeInUp"
                    data-wow-delay="1.5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "1.5s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="icon-box">
                      <img src="/images/icon-about-4.svg" alt="Security" />
                    </div>
                    <span>Safe & Secure Environment</span>
                  </li>
                </ul>
              </div>
              {/* About Content Body End */}
            </div>
            {/* About Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
