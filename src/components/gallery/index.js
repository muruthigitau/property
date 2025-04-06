import React from "react";
import Link from "next/link";
import Image from "next/image";

const Gallery = () => {
  // Gallery images data
  const galleryItems = [
    { id: 1, src: "/images/post-1.jpg", delay: "0.25s" },
    { id: 2, src: "/images/post-2.jpg", delay: "0.5s" },
    { id: 3, src: "/images/post-3.jpg", delay: "0.75s" },
    { id: 4, src: "/images/post-1.jpg", delay: "1s" },
    { id: 5, src: "/images/post-2.jpg", delay: "1.25s" },
    { id: 6, src: "/images/post-3.jpg", delay: "1.5s" },
    { id: 7, src: "/images/post-1.jpg", delay: "1.75s" },
    { id: 8, src: "/images/post-2.jpg", delay: "2s" },
  ];

  // About features data
  const aboutFeatures = [
    {
      id: 1,
      icon: "/images/icon-about-1.svg",
      text: "Smart Home Design",
      delay: "0.75s",
    },
    {
      id: 2,
      icon: "/images/icon-about-2.svg",
      text: "Beautiful Scene Around",
      delay: "1s",
    },
    {
      id: 3,
      icon: "/images/icon-about-3.svg",
      text: "Exceptional Lifestyle",
      delay: "1.25s",
    },
    {
      id: 4,
      icon: "/images/icon-about-4.svg",
      text: "Complete 24/7 Security",
      delay: "1.5s",
    },
  ];

  // Text animation data for "Our Photo Gallery"
  const galleryTitleChars = [
    { word: "Our", chars: ["O", "u", "r"] },
    { word: "Photo", chars: ["P", "h", "o", "t", "o"] },
    { word: "Gallery", chars: ["G", "a", "l", "l", "e", "r", "y"] },
  ];

  // Text animation data for "The Leading Real Estate About Market."
  const aboutTitleChars = [
    {
      line: 1,
      words: [
        { word: "The", chars: ["T", "h", "e"] },
        { word: "Leading", chars: ["L", "e", "a", "d", "i", "n", "g"] },
        { word: "Real", chars: ["R", "e", "a", "l"] },
      ],
    },
    {
      line: 2,
      words: [
        { word: "Estate", chars: ["E", "s", "t", "a", "t", "e"] },
        { word: "About", chars: ["A", "b", "o", "u", "t"] },
      ],
    },
    {
      line: 3,
      words: [
        {
          word: "Marketplace.",
          chars: ["M", "a", "r", "k", "e", "t", "p", "l", "a", "c", "e", "."],
        },
      ],
    },
  ];

  return (
    <div className="photo-gallery">
      <div className="container">
        {/* Gallery Section */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3
                className="wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                Gallery
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
                  {galleryTitleChars.map((item, wordIndex) => (
                    <React.Fragment key={wordIndex}>
                      <div className="word" style={{ display: "inline-block" }}>
                        {item.chars.map((char, charIndex) => (
                          <div
                            key={charIndex}
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
                      </div>{" "}
                    </React.Fragment>
                  ))}
                </div>
              </h2>
            </div>
          </div>
        </div>

        {/* Gallery Items */}
        <div className="row project-gallery-items">
          {galleryItems.map((item) => (
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
                <Link href={item.src}>
                  <figure className="image-anime">
                    <Image
                      src={item.src}
                      alt=""
                      width={400}
                      height={300}
                      layout="responsive"
                    />
                  </figure>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
