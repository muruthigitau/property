import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Initialize Swiper modules
SwiperCore.use([Pagination, Autoplay]);

// Data holding image paths for client logos
const data = [
  { id: 1, src: "/images/client-1.png", alt: "Client 1" },
  { id: 2, src: "/images/client-2.png", alt: "Client 2" },
  { id: 3, src: "/images/client-3.png", alt: "Client 3" },
  { id: 4, src: "/images/client-4.png", alt: "Client 4" },
  { id: 5, src: "/images/client-1.png", alt: "Client 5" },
  { id: 6, src: "/images/client-2.png", alt: "Client 6" },
];

const Partners = () => {
  return (
    <div className="our-partners">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h3
                className="wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                Clients
              </h3>
              <h2 className="text-anime">
                <div
                  className="line"
                  style={{
                    display: "block",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <div className="word" style={{ display: "inline-block" }}>
                    <div className="char" style={{ display: "inline-block" }}>
                      O
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      u
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      r
                    </div>
                  </div>
                  <div className="word" style={{ display: "inline-block" }}>
                    <div className="char" style={{ display: "inline-block" }}>
                      V
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      a
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      l
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      u
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      a
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      b
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      l
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      e
                    </div>
                  </div>
                  <div className="word" style={{ display: "inline-block" }}>
                    <div className="char" style={{ display: "inline-block" }}>
                      C
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      l
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      i
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      e
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      n
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      t
                    </div>
                    <div className="char" style={{ display: "inline-block" }}>
                      s
                    </div>
                  </div>
                </div>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* Swiper Start */}
        <div className="row">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="swiper-container"
          >
            {data.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="client-logo wow fadeInUp">
                  <figure>
                    <img
                      src={client.src}
                      alt={client.alt}
                      width={150}
                      height={150}
                    />
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Swiper End */}
      </div>
    </div>
  );
};

export default Partners;
