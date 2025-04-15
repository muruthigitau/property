import { Link } from "react-router-dom";
import AnimatedText from "../common/Animated";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            {/* Why Choose us Images Start */}
            <div className="why-choose-us-images">
              <div className="why-choose-us-image1">
                <figure className="reveal image-anime" style={{ transform: "translate(0px, 0px)", opacity: 1, visibility: "inherit" }}>
                  <img src="/images/about/about-6.jpg" alt="" style={{ transform: "translate(0px, 0px)" }} />
                </figure>
              </div>

              <div className="why-choose-us-image2">
                <figure className="reveal image-anime" style={{ transform: "translate(0px, 0px)", opacity: 1, visibility: "inherit" }}>
                  <img src="/images/about/about-8.jpeg" alt="" style={{ transform: "translate(0px, 0px)" }} />
                </figure>
              </div>

              {/* <div className="exclusive-agents"> */}
                {/* <h5>10+ Shops</h5> */}
                {/* <img src="/images/exclusive-agents.png" alt="" /> */}
              {/* </div> */}
            </div>
            {/* Why Choose us Images End */}
          </div>

          <div className="col-lg-6 order-lg-1">
            {/* Why Choose us Content Start */}
            <div className="why-choose-us-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>Why Choose Mytown Karen</h3>

                <AnimatedText sentence={"Why We Stand Out"} />
              </div>
              {/* Section Title End */}

              <div className="why-choose-us-body wow fadeInUp" data-wow-delay="0.25s" style={{ visibility: "visible", animationDelay: "0.25s", animationName: "fadeInUp" }}>
                <p>Mytown Karen offers a unique blend of exclusive properties, friendly hosts, and seamless services designed to enhance your experience. Whether you're looking for a getaway or a new home, we make the process easier for you.</p>

                <ul>
                  <li>Prime Mall Locations in High Traffic Areas</li>
                  <li>Personalized Assistance from Local Experts</li>
                  <li>Wide Variety of Retail and Dining Options</li>
                  <li>State-of-the-Art Facilities & Amenities</li>
                  <li>Family-Friendly Environment</li>
                  <li>Ample & Free Parking</li>
                </ul>

                <Link to="/about" className="btn-default">Read More</Link>
              </div>
            </div>
            {/* Why Choose us Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
