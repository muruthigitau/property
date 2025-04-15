import React from "react";
import { Link } from "react-router-dom";

const ShopCategory = ({ category }) => {
  return (
    <div className="page-property-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Category Overview */}
            <div className="property-single-content">
             
              <div class="about-property wow fadeInUp" data-wow-delay="0.75s" >
							<div class="property-single-subtitle">
								<h3>Overview</h3>
							</div>

							<div class="about-property-content">
              <p>{category?.description}</p>
								
							</div>
						</div>

              {/* Shops in Category */}
              <div className="property-listing mt-5">
                <div className="property-single-subtitle">
                  {/* <h3>Shops</h3> */}
                </div>

                {category?.shops?.length > 0 ? (
                  <div className="row">
                    {category.shops.map((shop) => (
                      <div className="col-md-6 col-lg-4 mb-4" key={shop.id}>
                        <div className="property-item wow fadeInUp" data-wow-delay="0.2s">
                          {/* Property Item Header */}
                          <div className="property-header">
                            <figure className="image-anime">
                              <img src={shop.images[0]} alt={shop.title}  className="img-fluid !h-[200px] md:!h-[250px] lg:!h-[300px] object-cover" />
                            </figure>
                          </div>

                          {/* Property Item Body */}
                          <div className="property-body">
                            <h3>{shop.title}</h3>
                            <p>{shop.location}</p>

                            <div className="property-meta">
                            <p>{shop?.description}</p>
                              {/* {shop.features?.slice(0, 4).map((feature, index) => (
                                <div className="property-amenity-item" key={index}>
                                  <span>• {feature}</span>
                                </div>
                              ))} */}
                            </div>
                          </div>

                          {/* Property Item Footer */}
                          <div className="property-footer">
                            <Link to={`/shops/${shop.slug}`} className="btn-default">
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
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3">No shops found in this category.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
