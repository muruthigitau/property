import React from 'react';
import { Link } from "react-router-dom";
import AnimatedText from '../common/Animated';

const AboutUs = () => {
  return (
    <div className="about-us bg-[#f6f8ff]">
      <div className="container">
        <div className="row align-items-center"> 
          <div className="col-lg-6">
            {/* About Left Image Start */}
            <div className="about-images">
              <div className="about-video">
                <figure className="reveal image-anime" style={{ transform: 'translate(0px, 0px)', opacity: 1, visibility: 'inherit' }}>
                  <img src="/images/about/about-5.jpeg" alt="" style={{ transform: 'translate(0px, 0px)' }} />
                </figure>

                <div className="video-play-button">
                  <a href="https://www.youtube.com/watch?v=NJ6dqoWEBqA" className="popup-video" target="_blank" rel="noopener noreferrer">
                    <img src="images/icon-play.svg" alt="" />
                  </a>
                </div>
              </div>

              <div className="about-image">
                <figure className="reveal image-anime" style={{ transform: 'translate(0px, 0px)', opacity: 1, visibility: 'inherit' }}>
                  <img src="/images/about/about-1.jpeg" alt="" style={{ transform: 'translate(0px, 0px)' }} />
                </figure>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* About Content Start */}
            <div className="about-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>About Mytown Mall, Karen</h3>

                <AnimatedText
                    sentence="About Mytown Mall"
                    className="text-anime"
                    style={{ fontSize: '24px', color: '#333' }}
                />

              </div>
              {/* Section Title End */}

              {/* About Content Body Start */}
              <div className="about-content-body">
                <p className="wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                  Mytown Mall is more than just a shopping center; it's a place to connect with retailers and the community. The concept merges the refined design of larger malls into compact, accessible spaces that focus on sustainability, scalability, and affordability.
                </p>

                <ul>
                  <li className="wow fadeInUp" data-wow-delay="0.75s" style={{ visibility: 'visible', animationDelay: '0.75s', animationName: 'fadeInUp' }}>
                    <div className="icon-box"><img src="images/icon-about-1.svg" alt="" /></div>
                    <span>One-stop destination for convenience and community</span>
                  </li>

                  <li className="wow fadeInUp" data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInUp' }}>
                    <div className="icon-box"><img src="images/icon-about-2.svg" alt="" /></div>
                    <span>Compact, accessible spaces with refined design</span>
                  </li>

                  <li className="wow fadeInUp" data-wow-delay="1.25s" style={{ visibility: 'visible', animationDelay: '1.25s', animationName: 'fadeInUp' }}>
                    <div className="icon-box"><img src="images/icon-about-3.svg" alt="" /></div>
                    <span>Focus on sustainability, scalability, and affordability</span>
                  </li>

                  <li className="wow fadeInUp" data-wow-delay="1.5s" style={{ visibility: 'visible', animationDelay: '1.5s', animationName: 'fadeInUp' }}>
                    <div className="icon-box"><img src="images/icon-about-4.svg" alt="" /></div>
                    <span>Offering a unique blend of retail and community experiences</span>
                  </li>
                </ul>

                <Link to="/about" className="btn-default wow fadeInUp" data-wow-delay="1.75s" style={{ visibility: 'visible', animationDelay: '1.75s', animationName: 'fadeInUp' }}>Read More</Link>
              </div>
              {/* About Content Body End */}

            </div>
            {/* About Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
