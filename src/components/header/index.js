import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleSubmenu = () => setSubmenuOpen((prev) => !prev);

  return (
    <header className="main-header">
      <div className="header-sticky hide active">
        <nav className="py-2">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            {/* Logo */}
            <Link className="navbar-brand" href="/">
              <img src="/images/logo.svg" alt="Logo" className="h-8" />
            </Link>

            {/* Main Menu */}
            <div className="hidden lg:flex items-center space-x-6 main-menu">
              <ul className="flex space-x-6 text-sm font-medium" id="menu">
                <li>
                  <Link className="nav-link" href="./">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/listing">
                    Listing
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/property">
                    Property
                  </Link>
                </li>
                <li class="nav-item submenu">
                  <Link class="nav-link" href="#">
                    Pages
                  </Link>
                  <ul>
                    <li class="nav-item">
                      <Link class="nav-link" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/blog-single">
                        Blog Single
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/agents">
                        Agents
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/faq">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link className="nav-link" href="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="highlighted-menu">
                  <Link
                    className="nav-link bg-blue-600 text-white px-3 py-1 rounded text-sm"
                    href="/contact"
                  >
                    Book Now
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
                className={`slicknav_btn focus:outline-none ${
                  isMobileMenuOpen ? "slicknav_open" : "slicknav_collapsed"
                }`}
              >
                <span className="sr-only">Open menu</span>
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-current"></span>
                  <span className="block w-6 h-0.5 bg-current"></span>
                  <span className="block w-6 h-0.5 bg-current"></span>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="responsive-menu lg:hidden">
          <div className="slicknav_menu">
            <ul
              className={`slicknav_nav ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
              style={{ display: isMobileMenuOpen ? "block" : "none" }}
              aria-hidden={!isMobileMenuOpen}
              role="menu"
            >
              <li className="submenu slicknav_parent">
                <div
                  role="menuitem"
                  aria-haspopup="true"
                  tabIndex="-1"
                  className="slicknav_item slicknav_row"
                >
                  <Link className="nav-link" href="./" tabIndex="-1">
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  className="nav-link"
                  href="/about"
                  role="menuitem"
                  tabIndex="-1"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  href="/listing"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Listing
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  href="/property"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Property
                </Link>
              </li>

              {/* Submenu Toggle */}
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
                    Pages{" "}
                    <span className="ml-1">{isSubmenuOpen ? "▾" : "▸"}</span>
                  </span>
                </div>

                {isSubmenuOpen && (
                  <ul
                    role="menu"
                    className="pl-4 mt-1 transition-all duration-300 ease-in-out"
                    aria-hidden="false"
                  >
                    <li className="nav-item">
                      <Link className="nav-link" href="/blog" tabIndex="-1">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blog" tabIndex="-1">
                        Blog Single
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/agents" tabIndex="-1">
                        Agents
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/faq" tabIndex="-1">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  className="nav-link"
                  href="/contact"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Contact us
                </Link>
              </li>
              <li className="highlighted-menu">
                <Link
                  className="nav-link"
                  href="#"
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
    </header>
  );
};

export default Header;
