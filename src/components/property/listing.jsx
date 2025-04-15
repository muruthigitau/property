import { Link } from "react-router-dom";
import shopData from "@/data/shopData";

const Listing = () => {
  return (
    <div className="page-property-listing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Property Categories Start */}
            <div className="property-listings">
              <div className="row">
                {shopData.map((category, index) => {
                  const { name, slug, image, tag, description } = category;

                  return (
                    <div className="col-md-4" key={slug}>
                      <div
                        className="property-item wow fadeInUp"
                        data-wow-delay={`${0.25 + index * 0.25}s`}
                        style={{
                          visibility: "visible",
                          animationDelay: `${0.25 + index * 0.25}s`,
                          animationName: "fadeInUp",
                        }}
                      >
                        {/* Category Header */}
                        <div className="property-header">
                          <figure className="image-anime">
                            <img
                              src={image}
                              alt={name}
                              width="400"
                              height="300"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
                          <span className="property-label">{tag}</span>
                        </div>

                        {/* Category Body */}
                        <div className="property-body">
                          <h3>{name}</h3>
                          <p>{description}</p>
                        </div>

                        {/* Footer */}
                        <div className="property-footer">
                          <Link to={`/shop/${slug}`} className="btn-default">
                            View Shops
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Property Categories End */}
          </div>

          {/* Sidebar */}
          {/* <div className="col-lg-4">
            <div className="property-sidebar">
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
                  Our team of experts is ready to assist you with any questions
                  about available shops.
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
                      <img
                        src="/images/agent-2.jpg"
                        alt="Real Estate Expert"
                        width="60"
                        height="60"
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
                        Shop Expert
                      </p>
                      <div
                        className="expert-contact"
                        style={{ fontSize: "13px" }}
                      >
                        <p style={{ margin: "2px 0" }}>
                          <i
                            className="fa fa-phone"
                            style={{ marginRight: "5px" }}
                          ></i>
                          +1 (555) 123-4567
                        </p>
                        <p style={{ margin: "2px 0" }}>
                          <i
                            className="fa fa-envelope"
                            style={{ marginRight: "5px" }}
                          ></i>
                          sarah@shopfinder.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
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
            </div>
          </div> */}
          {/* Sidebar End */}
        </div>
      </div>
    </div>
  );
};

export default Listing;
