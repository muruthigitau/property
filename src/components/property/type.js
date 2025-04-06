import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const PropertyType = () => {
  return (
    <div className="property-types">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">Property Types</h3>
              <h2 className="text-anime">Explore Apartment Types</h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* Property Type Slider Start */}
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="property-type-slider"
            >
              {/* Property Type Slide Start */}
              <SwiperSlide>
                <div className="property-type-item">
                  <div className="icon-box">
                    <img src="images/icon-property-type-1.svg" alt="Houses" />
                  </div>
                  <h3>Houses</h3>
                  <p>22 Properties</p>
                </div>
              </SwiperSlide>
              {/* Property Type Slide End */}

              <SwiperSlide>
                <div className="property-type-item">
                  <div className="icon-box">
                    <img
                      src="images/icon-property-type-2.svg"
                      alt="Apartments"
                    />
                  </div>
                  <h3>Apartments</h3>
                  <p>32 Properties</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="property-type-item">
                  <div className="icon-box">
                    <img src="images/icon-property-type-3.svg" alt="Office" />
                  </div>
                  <h3>Office</h3>
                  <p>42 Properties</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="property-type-item">
                  <div className="icon-box">
                    <img src="images/icon-property-type-4.svg" alt="Townhome" />
                  </div>
                  <h3>Townhome</h3>
                  <p>18 Properties</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="property-type-item">
                  <div className="icon-box">
                    <img src="images/icon-property-type-5.svg" alt="Bungalow" />
                  </div>
                  <h3>Bungalow</h3>
                  <p>40 Properties</p>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Property Type Slider End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
