import React from 'react';
import { Link } from "react-router-dom";
import AnimatedText from '../common/Animated';
import shopData from '@/data/shopData';

const Category = () => {
  return (
    <div className="property-by-city bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">Shopping & Amenities</h3> {/* Updated title */}
              <AnimatedText
                    sentence="Explore Our Shops"
                    className="text-anime"
                    style={{ fontSize: '24px', color: '#333' }}
                />
              <p className="wow fadeInUp" data-wow-delay="0.15s">
                Discover a wide variety of shopping options and amenities that cater to your every need. From grocery stores and supermarkets to fashion boutiques, cafes, and wellness centers, find the perfect spaces to enhance your lifestyle.
              </p> {/* Updated description */}
            </div>
          </div>
        </div>
   
          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {shopData?.map((category, idx) => (
            <div className="location-item wow fadeInUp" data-wow-delay={`${0.25 * (idx + 1)}s`} key={category.slug}>
              <div className="location-image">
                <figure>
                  <img src={category.imageMin} alt={category.name} />
                </figure>
              </div>
              <div className="location-content">
                <div className="location-header">
                  <h3>{category.name}</h3>
                  {/* <p>{category.shops.length} Shops</p> Show the number of shops */}
                </div>
                <div className="location-footer">
                  <Link className="btn-default" to={`/shop/${category.slug}`}>
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
