import { Link } from "react-router-dom";
import Breadcrumb from "../hero/breadcrump";

const Contact = () => {
  return (
    <>
     <Breadcrumb image="/images/banner/contact.png" title="Contact Us" />
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
                icon: "/images/icon-location.svg",
                title: "Address",
                detail: "Mytown Mall, Karen, Nairobi, Kenya",
              },
              {
                icon: "/images/icon-contactno.svg",
                title: "Phone",
                detail: "0759089942",
              },
              {
                icon: "/images/icon-email-address.svg",
                title: "Email",
                detail: "info@mytown.co.ke",
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
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.928536664542!2d36.7248863!3d-1.3369743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b6738a846b9%3A0x773dc1925e3c18c7!2sMytown%20Mall%20Karen!5e0!3m2!1sen!2ske!4v1744183918913!5m2!1sen!2ske" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
