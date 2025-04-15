import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ShopSingle = ({ shop }) => {
  return (
    <div className="page-property-single">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row space-x-2 md:space-x-8">
          <div className="lg:w-2/3 w-full">
            {/* Shop Single Content */}
            <div className="property-single-content">
              {/* Shop Photos Slider */}
              <div className="property-photos-slider wow fadeInUp" data-wow-delay="0.25s">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  spaceBetween={10}
                  className="rounded-lg overflow-hidden"
                >
                  {shop.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="property-photo-item">
                        <figure className="image-anime">
                          <img src={image} alt={`Shop ${index + 1}`} className="w-full h-auto object-cover" />
                        </figure>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* About Shop */}
              <div className="about-property wow fadeInUp" data-wow-delay="0.75s">
                <div className="property-single-subtitle">
                  <h3 className="text-2xl font-semibold text-gray-800">About This Shop</h3>
                </div>
                <div className="about-property-content">
                  <p className="text-gray-600">{shop.content}</p>
                  <div className="about-property-cta mt-4 flex flex-col md:flex-row items-center gap-4">
                    <a href="#" className="btn-default btn-border py-2 px-6 border-2 rounded-lg text-gray-800 hover:bg-gray-200">Contact us</a>
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
                    {/* <a href={`tel:${shop.phone}`} className="btn-default py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-2 block">
                      <i className="fa-solid fa-phone-volume mr-2"></i> {shop.phone}
                    </a> */}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
            {/* Shop Sidebar */}
            <div className="property-single-sidebar">
              {/* <div className="property-info-box wow fadeInUp" data-wow-delay="0.25s">
                <h3 className="text-xl font-semibold text-gray-800">Other Details</h3>
                <div className="property-info-lists mt-4"> */}
                  {/* <div className="property-info-item flex items-center space-x-4 mb-4">
                    <div className="icon-box">
                      <img src="/images/icon-property-location.svg" alt="Location" className="w-6 h-6" />
                    </div>
                    <p className="text-gray-600">{shop.location}</p>
                  </div> */}
                  {/* <div className="property-info-item flex items-center space-x-4">
                    <div className="icon-box">
                      <img src="/images/icon-property-phone.svg" alt="Phone" className="w-6 h-6" />
                    </div>
                    <p className="text-gray-600">{shop.phone}</p>
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
                  </div> */}
                {/* </div>
              </div> */}

              {/* Shop Amenities */}
              <div className="property-amenities wow fadeInUp" data-wow-delay="1s">
                <div className="property-single-subtitle">
                  <h3 className="text-xl font-semibold text-gray-800">Features &amp; Amenities</h3>
                </div>
                <div className="text-xl mt-4">
                  <ul className="flex flex-col gap-y-2">
                    {shop.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                        <i className="fa-solid fa-check-circle text-green-500"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSingle;
