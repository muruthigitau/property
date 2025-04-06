import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero hero-video">
      <div className="hero-section">
        {/* Video Start */}
        <div className="hero-bg-video">
          <video autoPlay muted loop id="myVideo">
            <source src="images/hero.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Video End */}

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="hero-content">
                <div className="section-title">
                  <h3
                    className="wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Welcome to Jivux
                  </h3>

                  <h1 className="text-anime">
                    <div
                      className="line"
                      style={{
                        display: "block",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <div className="word" style={{ display: "inline-block" }}>
                        {"Invest Today in".split("").map((char, idx) => (
                          <div
                            key={`line1-char-${idx}`}
                            className="char"
                            style={{
                              display: "inline-block",
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="line"
                      style={{
                        display: "block",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <div className="word" style={{ display: "inline-block" }}>
                        {"Your Dream Home".split("").map((char, idx) => (
                          <div
                            key={`line2-char-${idx}`}
                            className="char"
                            style={{
                              display: "inline-block",
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </div>
                        ))}
                      </div>
                    </div>
                  </h1>
                </div>

                <div
                  className="hero-content-body wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  <p>
                    Duis ultricies, tortor a accumsan fermentum, purus diam
                    mollis velit, eu bibendum ipsum erat quis leo. Vestibulum
                    finibus, leo dapibus feugiat rutrum, augue lacus rhoncus
                    velit, vel scelerisque odio est.
                  </p>
                </div>

                <div
                  className="hero-content-footer wow fadeInUp"
                  data-wow-delay="0.75s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.75s",
                    animationName: "fadeInUp",
                  }}
                >
                  <a href="#" className="btn-default">
                    View Property
                  </a>
                  <a href="#" className="btn-default btn-border">
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Search Form Start */}
      <div className="hero-search-form-section">
        <div className="container">
          <div
            className="hero-search-form wow fadeInUp"
            data-wow-delay="1s"
            style={{
              visibility: "visible",
              animationDelay: "1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="search-heading">
              <h4>Search Property</h4>
            </div>

            <form action="#" method="get">
              <div className="row">
                <div className="col-lg-2 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter keywords"
                  />
                </div>

                <div className="col-lg-2 col-md-6">
                  <select className="form-control">
                    <option value="">Sell or Rent</option>
                    <option>Sell</option>
                    <option>Rent</option>
                  </select>
                </div>

                <div className="col-lg-2 col-md-6">
                  <select className="form-control">
                    <option value="">Property Type</option>
                    <option>Apartment</option>
                    <option>Office</option>
                  </select>
                </div>

                <div className="col-lg-2 col-md-6">
                  <select className="form-control">
                    <option value="">Location</option>
                    <option>Surat</option>
                    <option>Banglore</option>
                  </select>
                </div>

                <div className="col-lg-2 col-md-6">
                  <select className="form-control">
                    <option value="">Amenities</option>
                    <option>Swimming Pool</option>
                    <option>Playarea</option>
                  </select>
                </div>

                <div className="col-lg-2 col-md-6">
                  <button type="submit" className="btn-default">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Hero Search Form End */}
    </div>
  );
};

export default Hero;
