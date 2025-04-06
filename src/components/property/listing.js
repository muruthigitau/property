import Link from "next/link";
import Image from "next/image";

// Mock data - in a real app, this would come from an API or database
const propertyData = [
  {
    id: 1,
    title: "Cedar Ridge Estates",
    location: "New York City, CA, USA",
    price: "$150,000",
    type: "Rent",
    image: "/images/property-1.jpg",
    bedrooms: 6,
    bathrooms: 3,
    area: 720,
    garages: 1,
  },
  {
    id: 2,
    title: "Willow Creek Manor",
    location: "New York City, CA, USA",
    price: "$150,000",
    type: "Rent",
    image: "/images/property-2.jpg",
    bedrooms: 6,
    bathrooms: 3,
    area: 720,
    garages: 1,
  },
  {
    id: 3,
    title: "Sunset View Apartments",
    location: "New York City, CA, USA",
    price: "$150,000",
    type: "Rent",
    image: "/images/property-3.jpg",
    bedrooms: 6,
    bathrooms: 3,
    area: 720,
    garages: 1,
  },
  {
    id: 4,
    title: "Riverwalk Residences",
    location: "New York City, CA, USA",
    price: "$150,000",
    type: "Rent",
    image: "/images/property-4.jpg",
    bedrooms: 6,
    bathrooms: 3,
    area: 720,
    garages: 1,
  },
  {
    id: 5,
    title: "Mountain View Condos",
    location: "New York City, CA, USA",
    price: "$150,000",
    type: "Rent",
    image: "/images/property-5.jpg",
    bedrooms: 6,
    bathrooms: 3,
    area: 720,
    garages: 1,
  },
  {
    id: 6,
    title: "Beachfront Bungalows",
    location: "New York City, CA, USA",
    price: "$150,000",
    type: "Rent",
    image: "/images/property-6.jpg",
    bedrooms: 6,
    bathrooms: 3,
    area: 720,
    garages: 1,
  },
];

const categories = [
  { id: 1, name: "Houses" },
  { id: 2, name: "Apartments" },
  { id: 3, name: "Office" },
  { id: 4, name: "Townhome" },
  { id: 5, name: "Bungalow" },
];

const Listing = () => {
  return (
    <div className="page-property-listing">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Property Listings Start */}
            <div className="property-listings">
              <div className="row">
                {propertyData.map((property, index) => (
                  <div className="col-md-6" key={property.id}>
                    {/* Property Item Start */}
                    <div
                      className="property-item wow fadeInUp"
                      data-wow-delay={`${0.25 + index * 0.25}s`}
                      style={{
                        visibility: "visible",
                        animationDelay: `${0.25 + index * 0.25}s`,
                        animationName: "fadeInUp",
                      }}
                    >
                      {/* Property Item Header Start */}
                      <div className="property-header">
                        <figure className="image-anime">
                          <Image
                            src={property.image}
                            alt={property.title}
                            width={400}
                            height={300}
                            layout="responsive"
                          />
                        </figure>
                        <span className="property-label">{property.type}</span>
                      </div>
                      {/* Property Item Header End */}

                      {/* Property Item Body Start */}
                      <div className="property-body">
                        <h3>{property.title}</h3>
                        <p>{property.location}</p>

                        <div className="property-meta">
                          <div className="property-amenity-item">
                            <div className="icon-box">
                              <Image
                                src="/images/icon-badroom.svg"
                                alt="Bedroom icon"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span>
                              {property.bedrooms} Bedroom
                              {property.bedrooms !== 1 ? "s" : ""}
                            </span>
                          </div>

                          <div className="property-amenity-item">
                            <div className="icon-box">
                              <Image
                                src="/images/icon-bathroom.svg"
                                alt="Bathroom icon"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span>
                              {property.bathrooms} Bathroom
                              {property.bathrooms !== 1 ? "s" : ""}
                            </span>
                          </div>

                          <div className="property-amenity-item">
                            <div className="icon-box">
                              <Image
                                src="/images/icon-area.svg"
                                alt="Area icon"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span>{property.area} sq ft</span>
                          </div>

                          <div className="property-amenity-item">
                            <div className="icon-box">
                              <Image
                                src="/images/icon-garage.svg"
                                alt="Garage icon"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span>
                              {property.garages} Garage
                              {property.garages !== 1 ? "s" : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Property Item Body End */}

                      {/* Property Item Footer Start */}
                      <div className="property-footer">
                        <p className="property-price">{property.price}</p>
                        <Link
                          href={`/properties/${property.id}`}
                          className="btn-default"
                        >
                          View Property
                        </Link>
                      </div>
                      {/* Property Item Footer Start */}
                    </div>
                    {/* Property Item End */}
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="col-md-12">
                  {/* Post Pagination Start */}
                  <div
                    className="post-pagination wow fadeInUp"
                    data-wow-delay="1.5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "1.5s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <ul className="pagination">
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-arrow-left-long"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">1</Link>
                      </li>
                      <li className="active">
                        <Link href="#">2</Link>
                      </li>
                      <li>
                        <Link href="#">3</Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Post Pagination End */}
                </div>
              </div>
            </div>
            {/* Property Listings End */}
          </div>

          <div className="col-lg-4">
            {/* Property Sidebar Start */}
            <div className="property-sidebar">
              {/* Property Category Box Start */}
              <div
                className="property-category-box wow fadeInUp"
                data-wow-delay="0.25s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.25s",
                  animationName: "fadeInUp",
                }}
              >
                <h3>Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link href={`/categories/${category.id}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Property Category Box End */}

              {/* Need Help? Ask Our Experts Start */}
              <div
                className="expert-help-box wow fadeInUp"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                  marginTop: "30px",
                  padding: "20px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <h3>Need Help? Ask Our Experts</h3>
                <p>
                  Our team of real estate professionals is ready to assist you
                  with any questions.
                </p>

                <div className="experts-list" style={{ marginTop: "20px" }}>
                  <div
                    className="expert-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "15px",
                      padding: "10px",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                    }}
                  >
                    <div
                      className="expert-image"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginRight: "15px",
                      }}
                    >
                      <Image
                        src="/images/agent-2.jpg"
                        alt="Real Estate Expert"
                        width={60}
                        height={60}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="expert-info">
                      <h4 style={{ margin: "0 0 5px 0", fontSize: "16px" }}>
                        Sarah Johnson
                      </h4>
                      <p
                        style={{
                          margin: "0 0 5px 0",
                          color: "#666",
                          fontSize: "14px",
                        }}
                      >
                        Real Estate Agent
                      </p>
                      <div
                        className="expert-contact"
                        style={{ fontSize: "13px" }}
                      >
                        <p style={{ margin: "2px 0" }}>
                          <i
                            className="fa fa-phone"
                            style={{ marginRight: "5px" }}
                          ></i>{" "}
                          +1 (555) 123-4567
                        </p>
                        <p style={{ margin: "2px 0" }}>
                          <i
                            className="fa fa-envelope"
                            style={{ marginRight: "5px" }}
                          ></i>{" "}
                          sarah@realestate.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn-default"
                  style={{
                    display: "block",
                    textAlign: "center",
                    marginTop: "20px",
                    padding: "10px 15px",
                    backgroundColor: "#2b8a3e",
                    color: "white",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "background-color 0.3s",
                  }}
                >
                  Contact All Experts
                </Link>
              </div>
              {/* Need Help? Ask Our Experts End */}
            </div>
            {/* Property Sidebar End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
