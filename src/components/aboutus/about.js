import Link from "next/link";
import Image from "next/image";

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
                  About Jivux
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
                      <span className="char">The</span>
                    </div>{" "}
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">Leading</span>
                    </div>{" "}
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">Real</span>
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
                      <span className="char">Estate</span>
                    </div>{" "}
                    <div className="word" style={{ display: "inline-block" }}>
                      <span className="char">About</span>
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
                      <span className="char">Marketplace.</span>
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
                  Duis pulvinar metus elit, ut aliquam est sollicitudin finibus.
                  Integer lobortis est interdum. Suspendisse nunc est, varius
                  quis fringilla ac, commodo a ante. Praesent non elit cursus,
                  aliquam sapien quis, dictum tortor.
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
                    <span>Smart Home Design</span>
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
                    <span>Beautiful Scene Around</span>
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
                    <span>Exceptional Lifestyle</span>
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
                    <span>Complete 24/7 Security</span>
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
