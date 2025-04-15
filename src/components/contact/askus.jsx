import { Link } from "react-router-dom";

const AskUs = () => {
  return (
    <div className="infobar-cta">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Infobar Box Start --> */}
            <div className="infobar-box">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  {/* <!-- Infobar Content Start --> */}
                  <div className="cta-content">
                    <h2 className="text-anime">
                      Limited Spaces Available! Book Your Spot Now.
                    </h2>
                    <p className="wow fadeInUp">
                      Hurry up! There are limited spaces remaining. Secure your
                      booking today before they are all taken.
                    </p>
                  </div>
                  {/* <!-- Infobar Content End --> */}
                </div>

                <div className="col-lg-5">
                  {/* <!-- CTA Button Start --> */}
                  <div className="cta-button">
                    <a
                      href="tel:+254777123456"
                      className="btn-default btn-border"
                    >
                      <i className="fa-solid fa-phone-volume"></i> +254 759 089 942
                    </a>
                    <Link to="/contact" className="btn-default">
                      Book Now
                    </Link>
                  </div>
                  {/* <!-- CTA Button End --> */}
                </div>
              </div>
            </div>
            {/* <!-- Infobar Box End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskUs;
