import { Link } from "react-router-dom";

const Copyright = () => {

  return (
    <div className="footer-copyright-links">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            {/* Footer Copyright Content Start */}
            <div className="footer-copyright">
            <p>
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved. | Designed with ❤️ by 
              <a href="https://softleek.com/" target="_blank" rel="noopener noreferrer">
              </a> 
              {" "}
              <a href="https://mslabdesigns.com/" target="_blank" rel="noopener noreferrer">
                Mslabdesigns
              </a>
            </p>

            </div>
            {/* Footer Copyright Content End */}
          </div>

          <div className="col-md-6">
            {/* Footer Policy Links Start */}
            <div className="footer-policy-links">
              <ul>
                <li>
                  <Link to="/" aria-label="Privacy Policy">
                    Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    aria-label="Terms and Conditions"
                  >
                    Terms & Condition
                  </Link>
                </li>
              </ul>
            </div>
            {/* Footer Policy Links End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
