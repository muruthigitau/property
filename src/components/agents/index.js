import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ✅ Correct import
import "swiper/css";
import "swiper/css/pagination";

// Data for the agents
const data = [
  {
    id: 1,
    name: "Michael Brown",
    role: "( Residential )",
    image: "/images/agent-1.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "( Apartment )",
    image: "/images/agent-2.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "David Wilson",
    role: "( Residential )",
    image: "/images/agent-3.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Jessica Anderson",
    role: "( Offices )",
    image: "/images/agent-4.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const Agents = () => {
  return (
    <div className="our-agents">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">Our Agents</h3>
              <h2 className="text-anime">
                <div
                  className="line"
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="word" style={{ display: "flex" }}>
                    {"Real".split("").map((char, i) => (
                      <div
                        key={`real-${i}`}
                        className="char"
                        style={{ display: "inline-block" }}
                      >
                        {char}
                      </div>
                    ))}
                  </div>
                  <div
                    className="word"
                    style={{ display: "flex", marginLeft: "10px" }}
                  >
                    {"Estate".split("").map((char, i) => (
                      <div
                        key={`estate-${i}`}
                        className="char"
                        style={{ display: "inline-block" }}
                      >
                        {char}
                      </div>
                    ))}
                  </div>
                  <div
                    className="word"
                    style={{ display: "flex", marginLeft: "10px" }}
                  >
                    {"Agents".split("").map((char, i) => (
                      <div
                        key={`agents-${i}`}
                        className="char"
                        style={{ display: "inline-block" }}
                      >
                        {char}
                      </div>
                    ))}
                  </div>
                </div>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* Swiper Start */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
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
          }}
          className="swiper-container"
        >
          {data.map((agent) => (
            <SwiperSlide key={agent.id}>
              <div className="agent-item wow fadeInUp">
                <div className="agent-header">
                  <div className="agent-image">
                    <figure className="image-anime">
                      <img src={agent.image} alt={agent.name} />
                    </figure>
                  </div>
                  <div className="agent-social-links">
                    <ul>
                      <li>
                        <a href={agent.socials.facebook}>
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href={agent.socials.twitter}>
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={agent.socials.instagram}>
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href={agent.socials.linkedin}>
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="agent-body">
                  <h3>{agent.name}</h3>
                  <p>{agent.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Swiper End */}
      </div>
    </div>
  );
};

export default Agents;
