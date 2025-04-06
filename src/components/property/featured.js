import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const properties = [
  {
    id: 1,
    title: "Equestrian Family Home",
    location: "New York City, CA, USA",
    price: "$150,000",
    type: "Rent",
    image: "images/property-1.jpg",
    amenities: [
      { icon: "images/icon-badroom.svg", text: "6 Bedsroom" },
      { icon: "images/icon-bathroom.svg", text: "3 Bathrooms" },
      { icon: "images/icon-area.svg", text: "720 sq ft" },
      { icon: "images/icon-garage.svg", text: "1 Garages" },
    ],
  },
  {
    id: 2,
    title: "Luxury Family Home",
    location: "New York City, CA, USA",
    price: "$150,000",
    type: "Sell",
    image: "images/property-2.jpg",
    amenities: [
      { icon: "images/icon-badroom.svg", text: "6 Bedsroom" },
      { icon: "images/icon-bathroom.svg", text: "3 Bathrooms" },
      { icon: "images/icon-area.svg", text: "720 sq ft" },
      { icon: "images/icon-garage.svg", text: "1 Garages" },
    ],
  },
  {
    id: 3,
    title: "Equestrian Family Home",
    location: "New York City, CA, USA",
    price: "$150,000",
    type: "Rent",
    image: "images/property-3.jpg",
    amenities: [
      { icon: "images/icon-badroom.svg", text: "6 Bedsroom" },
      { icon: "images/icon-bathroom.svg", text: "3 Bathrooms" },
      { icon: "images/icon-area.svg", text: "720 sq ft" },
      { icon: "images/icon-garage.svg", text: "1 Garages" },
    ],
  },
  {
    id: 4,
    title: "Mountain View Condos",
    location: "New York City, CA, USA",
    price: "$150,000",
    type: "Rent",
    image: "images/property-4.jpg",
    amenities: [
      { icon: "images/icon-badroom.svg", text: "6 Bedsroom" },
      { icon: "images/icon-bathroom.svg", text: "3 Bathrooms" },
      { icon: "images/icon-area.svg", text: "720 sq ft" },
      { icon: "images/icon-garage.svg", text: "1 Garages" },
    ],
  },
];

const Featured = () => {
  return (
    <div class="featured-property">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h3 class="wow fadeInUp">Properties</h3>
              <h2 class="text-anime">Featured Properties</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            {/* <!-- Property Slider Start --> */}
            <div class="property-slider">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                class="swiper"
              >
                {properties.map((property) => (
                  <SwiperSlide key={property.id} class="swiper-slide">
                    {/* <!-- Property Item Start --> */}
                    <div class="property-item">
                      {/* <!-- Property Item Header Start --> */}
                      <div class="property-header">
                        <figure class="image-anime">
                          <img src={property.image} alt="" />
                        </figure>
                        <span class="property-label">{property.type}</span>
                      </div>
                      {/* <!-- Property Item Header End --> */}

                      {/* <!-- Property Item Body Start --> */}
                      <div class="property-body">
                        <h3>{property.title}</h3>
                        <p>{property.location}</p>

                        <div class="property-meta">
                          {property.amenities.map((amenity, index) => (
                            <div class="property-amenity-item" key={index}>
                              <div class="icon-box">
                                <img src={amenity.icon} alt="" />
                              </div>
                              <span>{amenity.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* <!-- Property Item Body End --> */}

                      {/* <!-- Property Item Footer Start --> */}
                      <div class="property-footer">
                        <p class="property-price">{property.price}</p>
                        <Link href="#" class="btn-default">
                          View Property
                        </Link>
                      </div>
                      {/* <!-- Property Item Footer End --> */}
                    </div>
                    {/* <!-- Property Item End --> */}
                  </SwiperSlide>
                ))}
                <div class="swiper-pagination"></div>
              </Swiper>
            </div>
            {/* <!-- Property Slider End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
