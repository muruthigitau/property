import Link from "next/link";

const Copyright = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <div className="footer-copyright-links">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            {/* Footer Copyright Content Start */}
            <div className="footer-copyright">
              <p>Copyright © {currentYear}. All rights reserved.</p>
            </div>
            {/* Footer Copyright Content End */}
          </div>

          <div className="col-md-6">
            {/* Footer Policy Links Start */}
            <div className="footer-policy-links">
              <ul>
                <li>
                  <Link href="#" aria-label="Privacy Policy">
                    Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label="Terms and Conditions">
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
