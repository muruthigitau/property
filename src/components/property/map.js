import Link from "next/link";
import Image from "next/image";

const PropertyMap = () => {
  return (
    <div class="property-by-city">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h3 class="wow fadeInUp">Location</h3>
              <h2 class="text-anime">Properties by Cities</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6">
            {/* <!-- Location Item Start --> */}
            <div class="location-item wow fadeInUp" data-wow-delay="0.25s">
              {/* <!-- Location Image Start --> */}
              <div class="location-image">
                <figure>
                  <img src="images/city-1.jpg" alt="" />
                </figure>
              </div>
              {/* <!-- Location Image End --> */}

              {/* <!-- Location Content Start --> */}
              <div class="location-content">
                <div class="location-header">
                  <h3>Surabaya</h3>
                  <p>22 Properties</p>
                </div>

                <div class="location-footer">
                  <Link href="#" class="btn-default">
                    See More
                  </Link>
                </div>
              </div>
              {/* <!-- Location Content End --> */}
            </div>
            {/* <!-- Location Item End --> */}
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <!-- Location Item Start --> */}
            <div class="location-item wow fadeInUp" data-wow-delay="0.5s">
              {/* <!-- Location Image Start --> */}
              <div class="location-image">
                <figure>
                  <img src="images/city-2.jpg" alt="" />
                </figure>
              </div>
              {/* <!-- Location Image End --> */}

              {/* <!-- Location Content Start --> */}
              <div class="location-content">
                <div class="location-header">
                  <h3>Jakarta</h3>
                  <p>22 Properties</p>
                </div>

                <div class="location-footer">
                  <Link href="#" class="btn-default">
                    See More
                  </Link>
                </div>
              </div>
              {/* <!-- Location Content End --> */}
            </div>
            {/* <!-- Location Item End --> */}
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <!-- Location Item Start --> */}
            <div class="location-item wow fadeInUp" data-wow-delay="0.75s">
              {/* <!-- Location Image Start --> */}
              <div class="location-image">
                <figure>
                  <img src="images/city-3.jpg" alt="" />
                </figure>
              </div>
              {/* <!-- Location Image End --> */}

              {/* <!-- Location Content Start --> */}
              <div class="location-content">
                <div class="location-header">
                  <h3>Medan</h3>
                  <p>22 Properties</p>
                </div>

                <div class="location-footer">
                  <Link href="#" class="btn-default">
                    See More
                  </Link>
                </div>
              </div>
              {/* <!-- Location Content End --> */}
            </div>
            {/* <!-- Location Item End --> */}
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <!-- Location Item Start --> */}
            <div class="location-item wow fadeInUp" data-wow-delay="1s">
              {/* <!-- Location Image Start --> */}
              <div class="location-image">
                <figure>
                  <img src="images/city-4.jpg" alt="" />
                </figure>
              </div>
              {/* <!-- Location Image End --> */}

              {/* <!-- Location Content Start --> */}
              <div class="location-content">
                <div class="location-header">
                  <h3>Bandung</h3>
                  <p>22 Properties</p>
                </div>

                <div class="location-footer">
                  <Link href="#" class="btn-default">
                    See More
                  </Link>
                </div>
              </div>
              {/* <!-- Location Content End --> */}
            </div>
            {/* <!-- Location Item End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyMap;
