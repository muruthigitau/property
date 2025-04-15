import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero hero-video h-full w-full relative">
      {/* Video Background */}
      <div className="relative inset-0 z-[-1] w-full">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="w-full h-auto object-cover"
        >
          <source src="images/logo/hero-min.mp4" type="video/mp4" />
        </video>
      </div>


      {/* Text Container with Overlay */}
      <div className="absolute bottom-0 w-full z-10">
        <div className="bg-black/40 py-2 md:py-4">
          <div className="container mx-auto text-center">
            <h1 className="text-anime !text-xl md:!text-4xl lg:!text-5xl xl:!text-6xl font-bold">
              <div className="inline-block">
                {"Welcome to Mytown Karen".split("").map((char, idx) => {
                  const getColor = () => {
                    if (idx < 11) return "#ffffff"; // "Welcome to "
                    if (idx >= 11 && idx < 13) return "#092f49"; // "My"
                    if (idx >= 13 && idx < 17) return "#a1cd44"; // "town"
                    return "#ffffff"; // " Karen"
                  };
                  return (
                    <span
                      key={`char-${idx}`}
                      className="wow fadeInUp"
                      data-wow-delay={`${0.1 + idx * 0.05}s`}
                      style={{
                        display: "inline-block",
                        whiteSpace: "pre",
                        color: getColor(),
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  );
                })}
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
