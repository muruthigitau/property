import Link from "next/link";
import Image from "next/image";

const About = () => {
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
                    alt=""
                    style={{ transform: "translate(0px, 0px)" }}
                  />
                </figure>

                <div className="video-play-button">
                  <Link
                    href="https://www.youtube.com/watch?v=2JNMGesMC2Y"
                    className="popup-video"
                  >
                    <img src="/images/icon-play.svg" alt="" />
                  </Link>
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
                    alt=""
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
                  {["The Leading Real", "Estate About", "Marketplace."].map(
                    (line, i) => (
                      <div
                        key={i}
                        className="line"
                        style={{
                          display: "block",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        {line.split(" ").map((word, j) => (
                          <div
                            key={j}
                            className="word"
                            style={{ display: "inline-block" }}
                          >
                            {word.split("").map((char, k) => (
                              <div
                                key={k}
                                className="char"
                                style={{
                                  display: "inline-block",
                                  opacity: 1,
                                  visibility: "inherit",
                                  transform: "translate(0px, 0px)",
                                }}
                              >
                                {char}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )
                  )}
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
                  {[
                    {
                      icon: "icon-about-1.svg",
                      label: "Smart Home Design",
                      delay: "0.75s",
                    },
                    {
                      icon: "icon-about-2.svg",
                      label: "Beautiful Scene Around",
                      delay: "1s",
                    },
                    {
                      icon: "icon-about-3.svg",
                      label: "Exceptional Lifestyle",
                      delay: "1.25s",
                    },
                    {
                      icon: "icon-about-4.svg",
                      label: "Complete 24/7 Security",
                      delay: "1.5s",
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="wow fadeInUp"
                      data-wow-delay={item.delay}
                      style={{
                        visibility: "visible",
                        animationDelay: item.delay,
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="icon-box">
                        <img src={`/images/${item.icon}`} alt="" />
                      </div>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/about"
                  className="btn-default wow fadeInUp"
                  data-wow-delay="1.75s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1.75s",
                    animationName: "fadeInUp",
                  }}
                >
                  Read More
                </Link>
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

export default About;
