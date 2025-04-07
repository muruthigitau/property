import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import propertyData from "@/data/propertydata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Property = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  const property = propertyData.find((item) => item.slug === slug);

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="page-property-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="property-single-content">
              {/* Property Photos Slider */}
              <div
                className="property-photos-slider wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  className="property-photo-swiper"
                >
                  {property.images.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="property-photo-item">
                        <figure className="image-anime">
                          <Image
                            src={src}
                            alt={`property-${index}`}
                            width={709}
                            height={400}
                          />
                        </figure>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Overview */}
              <div
                className="property-overview wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="property-single-subtitle">
                  <h3>Overview</h3>
                </div>
                <div className="property-overview-box">
                  {[
                    {
                      icon: "icon-bedrooms.svg",
                      label: "Bedrooms",
                      value: property.bedrooms,
                    },
                    {
                      icon: "icon-bathrooms.svg",
                      label: "Bathrooms",
                      value: property.bathrooms,
                    },
                    {
                      icon: "icon-areas.svg",
                      label: "Area",
                      value: property.area,
                    },
                    {
                      icon: "icon-garages.svg",
                      label: "Garages",
                      value: property.garages,
                    },
                    {
                      icon: "icon-built-year.svg",
                      label: "Year Built",
                      value: property.yearBuilt,
                    },
                    {
                      icon: "icon-plot-size.svg",
                      label: "Plot Size",
                      value: property.plotSize,
                    },
                  ].map(({ icon, label, value }, index) => (
                    <div className="property-overview-item" key={index}>
                      <div className="icon-box">
                        <Image
                          src={`/images/${icon}`}
                          alt={label}
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="property-overview-content">
                        <h3>{label}</h3>
                        <p>{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Property */}
              <div
                className="about-property wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <div className="property-single-subtitle">
                  <h3>About This Property</h3>
                </div>
                <div className="about-property-content">
                  <p>{property.description}</p>
                  <div className="about-property-cta">
                    <Link href="/contact" className="btn-default btn-border">
                      Contact us
                    </Link>
                    <Link
                      href={`tel:${property.phone}`}
                      className="btn-default"
                    >
                      <i className="fa-solid fa-phone-volume"></i>{" "}
                      {property.phone}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Features & Amenities */}
              <div
                className="property-amenities wow fadeInUp"
                data-wow-delay="1s"
              >
                <div className="property-single-subtitle">
                  <h3>Features & Amenities</h3>
                </div>
                <div className="property-amenities-box">
                  <ul>
                    {property.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map Location */}
              <div
                className="property-map-location wow fadeInUp"
                data-wow-delay="1.25s"
              >
                <div className="property-single-subtitle">
                  <h3>Map Location</h3>
                </div>
                <div className="property-map-iframe">
                  <iframe
                    src={property.mapEmbedUrl}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="porperty-single-sidebar">
              {/* Other Details */}
              <div
                className="property-info-box wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <h3>Other Details</h3>
                <div className="property-info-lists">
                  {[
                    {
                      icon: "icon-property-location.svg",
                      value: property.location,
                      alt: "Location",
                    },
                    {
                      icon: "icon-property-phone.svg",
                      value: property.phone,
                      alt: "Phone",
                    },
                    {
                      icon: "icon-property-price.svg",
                      value: property.price,
                      alt: "Price",
                    },
                  ].map(({ icon, value, alt }, index) => (
                    <div className="property-info-item" key={index}>
                      <div className="icon-box">
                        <Image
                          src={`/images/${icon}`}
                          alt={alt}
                          width={24}
                          height={24}
                        />
                      </div>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <div
                className="property-inquiry-box wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <h3>Send Inquiry</h3>
                <div className="property-inquiry-form">
                  <form id="contactForm" action="#" method="POST">
                    <div className="row">
                      {["Name", "Email", "Phone"].map((placeholder, index) => (
                        <div className="form-group col-md-12 mb-3" key={index}>
                          <input
                            type={placeholder === "Email" ? "email" : "text"}
                            name={placeholder.toLowerCase()}
                            className="form-control"
                            placeholder={placeholder}
                            required
                          />
                        </div>
                      ))}
                      <div className="form-group col-md-12 mb-3">
                        <textarea
                          name="msg"
                          className="form-control"
                          rows="4"
                          placeholder="Write a Message"
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn-default">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
