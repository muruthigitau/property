import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ image, title }) => {
  const location = useLocation();

  // State to determine if the component is mounted
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true when the component is mounted on the client side
    setIsClient(true);
  }, []);

  // If not client, return null to avoid rendering on the server
  if (!isClient) {
    return null;
  }

  // Get the current route
  const currentPath = location.pathname.split("/").filter(Boolean); // Split the URL and remove empty parts

  // If no page is present (e.g., home), set it as "Home"
  const currentPage =
    currentPath.length > 0 ? currentPath[currentPath.length - 1] : "home";

  // Capitalize the first letter and replace dashes with spaces (if needed)
  const pageName =
    title || currentPage
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  // Use a default image if not passed as a prop
  const backgroundImage = image || "/images/hero.jpg";

  return (
    <div className="relative">
      {/* Display the image directly */}
      <img
        src={backgroundImage}
        alt={pageName}
        className="w-full h-full object-cover !max-w-7xl !mx-auto" // Image width full screen and height fit, max-width 7xl, center horizontally
      />

      {/* <div className="w-full text-gray-800 p-6">
        <h1 className="text-center text-3xl font-semibold">{pageName}</h1>
      </div> */}
    </div>
  );
};

export default Breadcrumb;
