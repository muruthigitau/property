import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-50 bg-orange-500 text-white p-3 rounded shadow-lg hover:bg-orange-600 transition-colors"
          title="Scroll to top"
        >
          <i className="fa fa-arrow-up text-xl" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
}
