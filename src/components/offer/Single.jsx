// src/components/OfferSingle.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import mallOffers from '@/data/mallOffers';
import 'swiper/css';
import 'swiper/css/pagination';

const OfferSingle = ({ offer }) => {
  const otherOffers = mallOffers.filter((o) => o.slug !== offer.slug); 

  return (
    <div className="page-property-single">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row space-x-2 md:space-x-8">
          <div className="lg:w-2/3 w-full">
            {/* Offer Content */}
            <div className="property-single-content">
            {offer.images && (
            <div className="property-photos-slider wow fadeInUp" data-wow-delay="0.25s">
                <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={10}
                className="rounded-lg overflow-hidden"
                >
                {offer.images.map((image, index) => (
                    <SwiperSlide key={index}>
                    <div className="property-photo-item">
                        <figure className="image-anime">
                        <img
                            src={image}
                            alt={`Offer ${index + 1}`}
                            className="w-full h-auto object-cover"
                            style={{ maxHeight: '600px' }}
                        />
                        </figure>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            )}

                          {/* About Offer */}
              <div className="about-property wow fadeInUp mt-6" data-wow-delay="0.75s">
                <div className="property-single-subtitle">
                  <h3 className="text-2xl font-semibold text-gray-800">{offer.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{offer.location}</p>
                </div>
                <div className="about-property-content mt-4">
                  <p className="text-gray-600">{offer.content || 'No additional content available.'}</p>
                  <div className="about-property-cta mt-6 flex flex-col gap-3">
                    <p className="text-lg font-bold text-blue-700">Price: {offer.price}</p>
                    <p className="text-sm font-medium text-gray-600">Type: {offer.type}</p>
                    <Link to={`/shops/${offer.shop}`} className="btn-default w-40">Grab Now!</Link>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="property-meta mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  {offer.details?.map((detail, i) => (
                    <div className="flex items-center gap-2 text-gray-700" key={i}>
                      <i className="fa-solid fa-check-circle text-green-500"></i>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar with Other Offers */}
          <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
            <div className="property-single-sidebar">
              <div className="property-info-box wow fadeInUp" data-wow-delay="0.25s">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Offers</h3>
                <ul className="space-y-4">
                  {otherOffers.map((offer) => (
                    <li key={offer.slug} className="flex items-center space-x-4">
                      <img src={offer.image} alt={offer.name} className="w-16 h-16 object-cover rounded" />
                      <div>
                        <Link to={`/offer/${offer.slug}`} className="text-blue-600 hover:underline font-medium">
                          {offer.name}
                        </Link>
                        <p className="text-sm text-gray-500">{offer.price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSingle;
