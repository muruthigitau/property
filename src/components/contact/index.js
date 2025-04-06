import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div
        className="page-header parallaxie"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center 35.1px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Subpage Header Box Start */}
              <div className="page-header-box">
                <h1 className="text-anime">
                  <div
                    className="line"
                    style={{
                      display: "block",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <div className="word" style={{ display: "inline-block" }}>
                      {"Contact".split("").map((char, index) => (
                        <div
                          key={`contact-${index}`}
                          className="char"
                          style={{
                            display: "inline-block",
                            opacity: 1,
                            visibility: "inherit",
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          {char}
                        </div>
                      ))}
                    </div>
                    <div className="word" style={{ display: "inline-block" }}>
                      {"us".split("").map((char, index) => (
                        <div
                          key={`us-${index}`}
                          className="char"
                          style={{
                            display: "inline-block",
                            opacity: 1,
                            visibility: "inherit",
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          {char}
                        </div>
                      ))}
                    </div>
                  </div>
                </h1>
                <nav
                  className="wow fadeInUp"
                  data-wow-delay="0.25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.25s",
                    animationName: "fadeInUp",
                  }}
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact us
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Subpage Header Box End */}
            </div>
          </div>
        </div>
      </div>

      <div className="contact-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Contact Us</h3>
                <h2 className="text-anime">Contact Details</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              {
                icon: "/images/icon-address.svg",
                title: "Address",
                detail: "131 Martens Place, Alexandra Hills, Australia.",
              },
              {
                icon: "/images/icon-contactno.svg",
                title: "Phone",
                detail: "(+0) 123 456 789\n(+1) 789 456 789",
              },
              {
                icon: "/images/icon-email-address.svg",
                title: "Email",
                detail: "Info@domainname.com\nsales@domainname.com",
              },
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div
                  className="contact-detail-item wow fadeInUp"
                  data-wow-delay={`${(idx + 1) * 0.25}s`}
                >
                  <div className="icon-box">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.detail.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-inquiry-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Get in Touch</h3>
                <h2 className="text-anime">Free to Drop Us a Message</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="contact-form wow fadeInUp" data-wow-delay="0.75s">
                <form
                  id="contactForm"
                  action="#"
                  method="POST"
                  data-toggle="validator"
                >
                  <div className="row">
                    {[
                      { name: "name", type: "text", placeholder: "Name" },
                      { name: "email", type: "email", placeholder: "Email" },
                      { name: "phone", type: "text", placeholder: "Phone" },
                      { name: "subject", type: "text", placeholder: "Subject" },
                    ].map((field, i) => (
                      <div className="form-group col-md-6 mb-4" key={i}>
                        <input
                          type={field.type}
                          name={field.name}
                          className="form-control"
                          id={field.name}
                          placeholder={field.placeholder}
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    ))}

                    <div className="form-group col-md-12 mb-4">
                      <textarea
                        name="msg"
                        className="form-control"
                        id="msg"
                        rows="4"
                        placeholder="Write a Message"
                        required
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn-default">
                        Submit Now
                      </button>
                      <div id="msgSubmit" className="h3 text-left hidden"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="google-location-map">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Google Map</h3>
                <h2 className="text-anime">How to Reach us?</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div
                className="google-map-box wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1116357.3481785401!2d-95.54669749945178!3d39.389498766353576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1707738120250!5m2!1sen!2sin"
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
      </div>
    </>
  );
};

export default Contact;
