import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedText from "../common/Animated";
import shopData from "@/data/shopData";

// Flatten all shops from categories
const allShops = shopData.flatMap(category =>
  category.shops.map(shop => ({
    ...shop,
    category: category.name,
    image: shop.images?.[0] || category.image, // fallback if no image
  }))
);

const Featured = () => {
  return (
    <div className="featured-property">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title Start */}
            <div className="section-title">
            <h3 className="wow fadeInUp">Our Picks</h3>
            <AnimatedText
                    sentence="Shops You'll Love"
                    className="text-anime"
                    style={{ fontSize: '24px', color: '#333' }}
                />
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* Property Slider Start */}
            <div className="property-slider">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                autoplay={{
                  delay: 1000,
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
                className="swiper"
              >
                {allShops.map((shop) => (
                  <SwiperSlide key={shop.slug} className="swiper-slide">
                    {/* Property Item Start */}
                    <div className="property-item">
                      {/* Property Item Header Start */}
                      <div className="property-header">
                        <figure className="image-anime">
                          <img
                            src={shop.image}
                            alt={shop.title}
                            className="img-fluid !h-[200px] md:!h-[250px] lg:!h-[300px] object-cover"
                            // style={{ height: "00px" }}
                          />
                        </figure>
                      </div>
                      {/* Property Item Header End */}

                      {/* Property Item Body Start */}
                      <div className="property-body">
                        <h3>{shop.title}</h3>
                        <p>{shop.location}</p>

                        <div className="property-meta">
                        <p>
                          {shop?.description?.split(' ').slice(0, 9).join(' ')}{shop?.description?.split(' ').length > 9 && '...'}
                        </p>

                        
                        </div>
                      </div>
                      {/* Property Item Body End */}

                      {/* Property Item Footer Start */}
                      <div className="property-footer">
                      
                        <Link
                          to={`/shops/${shop.slug}`}
                          className="btn-default"
                        >
                          View More
                        </Link>

                        {shop.instaLink && (
                          <a
                            href={shop.instaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:from-pink-600 hover:via-orange-600 hover:to-yellow-600 text-white text-2xl w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
                          >
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        )}


                      </div>
                      {/* Property Item Footer End */}
                    </div>
                    {/* Property Item End */}
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
            {/* Property Slider End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
