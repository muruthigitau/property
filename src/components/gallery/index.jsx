import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../hero/breadcrump";
import Layout from "../layout";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const galleryItems = [
    { id: 1, src: "/images/about/about-1.jpeg", delay: "0.25s" },
    { id: 2, src: "/images/about/about-2.jpeg", delay: "0.5s" },
    { id: 3, src: "/images/about/about-3.jpeg", delay: "0.75s" },
    { id: 4, src: "/images/about/about-4.jpeg", delay: "1s" },
    { id: 5, src: "/images/about/about-5.jpeg", delay: "1.25s" },
    { id: 6, src: "/images/about/about-6.jpg", delay: "1.5s" },
    { id: 7, src: "/images/about/about-7.jpg", delay: "1.75s" },
    { id: 8, src: "/images/about/about-8.jpeg", delay: "2s" },
    { id: 9, src: "/images/about/about-9.jpg", delay: "2.25s" },
    { id: 10, src: "/images/about/about-10.jpg", delay: "2.5s" },
  ];

  const openModal = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  const showPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Layout>
      <Breadcrumb image="/images/banner/about.png" />

      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-500">Our Gallery</h1>
          </div>

          <div className="row project-gallery-items">
            {galleryItems.map((item, index) => (
              <div key={item.id} className="col-lg-3 col-6">
                <div
                  className="gallery-item wow fadeInUp"
                  data-wow-delay={item.delay}
                  style={{
                    visibility: "visible",
                    animationDelay: item.delay,
                    animationName: "fadeInUp",
                  }}
                >
                  <a onClick={() => openModal(index)} className="cursor-pointer">
                    <figure className="image-anime">
                      <img
                        src={item.src}
                        alt=""
                        width="400"
                        height="300"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </figure>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeIndex !== null && (
  <div
    className="fixed inset-0 z-[9999] w-full bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={closeModal}
  >
    <div
      className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      {/* <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white bg-orange-500 hover:bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md transition-all duration-200"
        title="Close"
      >
        &times;
      </button> */}

      {/* Image */}
      <img
        src={galleryItems[activeIndex].src}
        alt={`Gallery item ${activeIndex + 1}`}
        className="w-full max-h-[80vh] object-contain bg-black rounded-md"
      />

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={showPrev}
          className="text-white bg-orange-500 hover:bg-orange-600 rounded-full w-12 h-12 text-2xl flex items-center justify-center shadow-lg transition-all duration-200"
          title="Previous"
        >
          &#10094;
        </button>

        <button
          onClick={showNext}
          className="text-white bg-orange-500 hover:bg-orange-600 rounded-full w-12 h-12 text-2xl flex items-center justify-center shadow-lg transition-all duration-200"
          title="Next"
        >
          &#10095;
        </button>
      </div>
    </div>
  </div>
)}

    </Layout>
  );
};

export default Gallery;
