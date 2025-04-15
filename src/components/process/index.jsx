import { Link } from "react-router-dom";
import AnimatedText from "../common/Animated";

const Process = () => {
  return (
    <div className="how-it-works">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title"></div>
            <div className="section-title">
              <h3 className="wow fadeInUp">How to Book a Shop</h3>
              <AnimatedText
                sentence="Follow these steps to secure your shop"
                className="text-anime"
                style={{ fontSize: '24px', color: '#333' }}
              />
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div
              className="how-it-work-item wow fadeInUp"
              data-wow-delay="0.25s"
            >
              <div className="icon-box">
                <img src="images/icon-how-1.svg" alt="Step 1" />
              </div>

              <h3>Explore Available Shops</h3>
              <p>
                Browse through our diverse range of shops, restaurants, and office spaces to find the perfect match for your business.
              </p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div
              className="how-it-work-item wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="icon-box">
                <img src="images/icon-how-2.svg" alt="Step 2" />
              </div>

              <h3>Visit and Inspect</h3>
              <p>
                Schedule a visit to the mall, inspect the spaces, and interact with our team to get all your questions answered.
              </p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div
              className="how-it-work-item wow fadeInUp"
              data-wow-delay="0.75s"
            >
              <div className="icon-box">
                <img src="images/icon-how-3.svg" alt="Step 3" />
              </div>

              <h3>Select Your Ideal Space</h3>
              <p>
                Choose the space that best suits your business needs, whether it's a retail shop, office, or restaurant.
              </p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div className="how-it-work-item wow fadeInUp" data-wow-delay="1s">
              <div className="icon-box">
                <img src="images/icon-how-4.svg" alt="Step 4" />
              </div>

              <h3>Complete the Process</h3>
              <p>
                Finalize the lease agreement, submit the necessary documents, and get ready to launch your business at Mytown Karen.
              </p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
