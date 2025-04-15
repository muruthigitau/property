import { useState } from "react";
import { Link } from "react-router-dom";
import shopData from "@/data/shopData";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleSubmenu = () => setSubmenuOpen((prev) => !prev);

  return (
    <header className="main-header relative z-50">
      <div className="header-sticky">
        <nav className="py-2">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src="/images/logo/logo.png" alt="Logo" className="h-12" />
            </Link>

            {/* Main Menu */}
            <div className="hidden lg:flex items-center space-x-6 main-menu">
              <ul className="flex space-x-6 text-sm font-medium" id="menu">
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/offer">
                    Offers
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item submenu">
                  <Link className="nav-link" to="/shop">
                    Shopping & Amenities
                  </Link>
                  <ul>
                    {shopData.map((shop) => (
                      <li className="nav-item" key={shop.slug}>
                        <Link className="nav-link" to={`/shop/${shop.slug}`}>
                          {shop.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                </li>
                <li className="highlighted-menu">
                  <Link
                    className="nav-link bg-blue-600 text-white px-3 py-1 rounded text-sm"
                    to="/contact"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                aria-haspopup="true"
                role="button"
                tabIndex="0"
                className="slicknav_btn focus:outline-none p-2 z-50 relative"
              >
                <span className="sr-only">Toggle menu</span>
                {isMobileMenuOpen ? (
                  // X icon
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger icon
                  <div className="space-y-1">
                    <span className="block w-6 h-0.5 bg-current"></span>
                    <span className="block w-6 h-0.5 bg-current"></span>
                    <span className="block w-6 h-0.5 bg-current"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="responsive-menu lg:hidden z-50 relative">
          <div className="slicknav_menu">
            <ul
              className={`slicknav_nav ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
              aria-hidden={!isMobileMenuOpen}
              role="menu"
            >
              <li>
                <Link className="nav-link" to="/" role="menuitem" tabIndex="-1">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/about"
                  role="menuitem"
                  tabIndex="-1"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/offer"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/gallery"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Gallery
                </Link>
              </li>
              <li
                className={`nav-item submenu slicknav_parent ${
                  isSubmenuOpen ? "slicknav_open" : "slicknav_collapsed"
                }`}
              >
                <div
                  role="menuitem"
                  aria-haspopup="true"
                  tabIndex="-1"
                  className="slicknav_item slicknav_row cursor-pointer"
                  onClick={toggleSubmenu}
                >
                  <span className="nav-link flex items-center">
                    Shopping & Amenities{" "}
                    <span className="ml-1">{isSubmenuOpen ? "▾" : "▸"}</span>
                  </span>
                </div>

                {isSubmenuOpen && (
                  <ul
                    role="menu"
                    className="pl-4 mt-1 transition-all duration-300 ease-in-out"
                    aria-hidden="false"
                  >
                    {shopData.map((shop) => (
                      <li className="nav-item" key={shop.slug}>
                        <Link
                          className="nav-link"
                          to={`/shop/${shop.slug}`}
                          tabIndex="-1"
                        >
                          {shop.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  className="nav-link"
                  to="/contact"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Contact us
                </Link>
              </li>
              <li className="highlighted-menu">
                <Link
                  className="nav-link bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  to="/contact"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        />
      )}
    </header>
  );
};

export default Header;
