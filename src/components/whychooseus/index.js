import Link from "next/link";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div class="why-choose-us">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            {/* <!-- Why Choose us Images Start --> */}
            <div class="why-choose-us-images">
              <div class="why-choose-us-image1">
                <figure class="reveal image-anime">
                  <img src="images/why-us-img-1.jpg" alt="" />
                </figure>
              </div>

              <div class="why-choose-us-image2">
                <figure class="reveal image-anime">
                  <img src="images/why-us-img-2.jpg" alt="" />
                </figure>
              </div>

              <div class="exclusive-agents">
                <h5>10k+ Exclusive Agetns</h5>
                <img src="images/exclusive-agents.png" alt="" />
              </div>
            </div>
            {/* <!-- Why Choose us Images End --> */}
          </div>

          <div class="col-lg-6 order-lg-1">
            {/* <!-- Why Choose us Content Start --> */}
            <div class="why-choose-us-content">
              {/* <!-- Section Title Start --> */}
              <div class="section-title">
                <h3 class="wow fadeInUp">Why CHoose Us</h3>
                <h2 class="text-anime">
                  Let's Find the Right Selling Option for You
                </h2>
              </div>
              {/* <!-- Section Title End --> */}

              <div
                class="why-choose-us-body wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p>
                  We make the process easy with expert guidance and personalized
                  solutions. Our team is dedicated to helping you find the
                  perfect fit, ensuring a seamless and stress-free experience.
                </p>

                <ul>
                  <li>Find Excellent Deals</li>
                  <li>Friendly Host & Fast Support</li>
                  <li>List Your Own Property</li>
                </ul>

                <Link href="#" class="btn-default">
                  Read More
                </Link>
              </div>
            </div>
            {/* <!-- Why Choose us Content End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
