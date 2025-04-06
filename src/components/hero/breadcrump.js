import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter();

  // Get the current route
  const currentPath = router.asPath.split("/").filter(Boolean); // Split the URL and remove empty parts

  // If no page is present (e.g., home), set it as "Home"
  const currentPage =
    currentPath.length > 0 ? currentPath[currentPath.length - 1] : "home";

  // Capitalize the first letter and replace dashes with spaces (if needed)
  const pageName = currentPage
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div
      className="page-header parallaxie"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 46.6172px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header-box">
              {/* Title with animation */}
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
                    {pageName.split("").map((char, index) => (
                      <div
                        key={index}
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

              {/* Breadcrumb Navigation */}
              <nav className="wow fadeInUp" data-wow-delay="0.25s">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
