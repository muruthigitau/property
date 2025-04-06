import Link from "next/link";
import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="footer">
      {/* <!-- Footer Newsletter Start --> */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- Newsletter Box Start --> */}
              <div className="newsletter-box">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    {/* <!-- Section Title Start --> */}
                    <div className="newsletter-title">
                      <h2>Subscribe Our Newsletter</h2>
                      <p>
                        Be the first get all updates and offers from us.
                        Subscribe
                      </p>
                    </div>
                    {/* <!-- Section Title End --> */}
                  </div>

                  <div className="col-lg-6">
                    {/* <!-- Newsletter Form Start --> */}
                    <div className="newsletter-form">
                      <form action="#">
                        <div className="row g-0 align-items-center">
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter email address here"
                            />
                          </div>
                          <div className="col-sm-4">
                            <button type="submit" className="btn-default">
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* <!-- Newsletter Form End --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Newsletter Box End --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer Newsletter End --> */}

      {/* <!-- Mega Footer Start --> */}
      <div className="mega-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* <!-- Footer About Start --> */}
              <div className="footer-about">
                {/* <!-- Footer Logo Start --> */}
                <div className="footer-logo">
                  <img src="images/footer-logo.svg" alt="" />
                </div>
                {/* <!-- Footer Logo End --> */}

                {/* <!-- Footer About Content Start --> */}
                <div className="footer-about-content">
                  <p>Place to be</p>
                </div>
                {/* <!-- Footer About Content End --> */}

                {/* <!-- Footer Social Link Start --> */}
                <div className="footer-social-links">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- Footer Social Link End --> */}
              </div>
              {/* <!-- Footer About End --> */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* <!-- Footer Contact Info Start --> */}
              <div className="footer-contact-info">
                <h3>Contact Info</h3>

                {/* <!-- Footer Contact Info Box Start --> */}
                <div className="footer-contact-box">
                  <div className="footer-info-box">
                    <div className="icon-box">
                      <img src="images/icon-location.svg" alt="" />
                    </div>

                    <p>123, Town, Street no, Cityname, Country 123456</p>
                  </div>

                  <div className="footer-info-box">
                    <div className="icon-box">
                      <img src="images/icon-phone.svg" alt="" />
                    </div>

                    <p>+0 12345 67890</p>
                  </div>

                  <div className="footer-info-box">
                    <div className="icon-box">
                      <img src="images/icon-email.svg" alt="" />
                    </div>

                    <p>info@domainname.com</p>
                  </div>
                </div>
                {/* <!-- Footer Contact Info Box End --> */}
              </div>
              {/* <!-- Footer Contact Info End --> */}
            </div>

            <div className="col-lg-2 col-md-6">
              {/* <!-- Footer Quick Link Starts --> */}
              <div className="footer-quick-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link href="#">Home</Link>
                  </li>
                  <li>
                    <Link href="#">Listing</Link>
                  </li>
                  <li>
                    <Link href="#">Property</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* <!-- Footer Quick Link End --> */}
            </div>

            <div className="col-lg-3">
              {/* <!-- Footer Quick Link Starts --> */}
              <div className="footer-appointment">
                <h3>Appointment</h3>

                <div className="footer-appointment-content">
                  <p>
                    Stay informed with the latest updates and insights.
                    Subscribe to receive exclusive news and offers directly to
                    your inbox.
                  </p>
                  <Link href="#" className="btn-default">
                    Book Appointment
                  </Link>
                </div>
              </div>
              {/* <!-- Footer Quick Link End --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Mega Footer End --> */}
    </footer>
  );
};
export default FooterSection;
