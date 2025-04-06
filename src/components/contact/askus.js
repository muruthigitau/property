import Link from "next/link";
import Image from "next/image";

const AskUs = () => {
  return (
    <div class="infobar-cta">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/* <!-- Infobar Box Start --> */}
            <div class="infobar-box">
              <div class="row align-items-center">
                <div class="col-lg-7">
                  {/* <!-- Infobar Content Start --> */}
                  <div class="cta-content">
                    <h2 class="text-anime">Need Help? Talk to Our Expert.</h2>
                    <p class="wow fadeInUp">
                      Contact us for assistance with your property search or any
                      inquiries.
                    </p>
                  </div>
                  {/* <!-- Infobar Content End --> */}
                </div>

                <div class="col-lg-5">
                  {/* <!-- CTA Button Start --> */}
                  <div class="cta-button">
                    <a href="#" class="btn-default btn-border">
                      <i class="fa-solid fa-phone-volume"></i> +123 456 789
                    </a>
                    <a href="#" class="btn-default">
                      Contact Now
                    </a>
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
