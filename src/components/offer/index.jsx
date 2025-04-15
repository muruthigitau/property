// src/components/MallOffers.js
import mallOffers from '@/data/mallOffers';
import React from 'react';
import { Link } from "react-router-dom";

const MallOffers = () => { 
  return (
    <div className="page-property-listing">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Property Categories Start */}
          <div className="property-listings">
            <div className="row">
      {mallOffers.map((offer, index) => (
        <div className="col-md-6" key={offer.slug}>
          <div
            className="property-item wow fadeInUp"
            data-wow-delay={`${0.25 * (index + 1)}s`}
          >
            <div className="property-header">
              <figure className="image-anime">
              <img
                src={offer.image}
                alt={offer.name}
                className="max-h-[400px] object-cover w-full"
              />

              </figure>
              <span className="property-label">{offer.type}</span>
            </div>

            <div className="property-body">
              <h3>{offer.name}</h3>
              <p>{offer.location}</p>

              <div className="property-meta">
                {offer.details.map((detail, i) => (
                  <div className="property-amenity-item" key={i}>
                    <div className="icon-box">
                      <img src="/images/icon-checkmark.svg" alt="icon" />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="property-footer">
              <p className="property-price">{offer.price}</p>
              <Link to={`/offer/${offer.slug}`} className="btn-default" >
                View Offer
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default MallOffers;
