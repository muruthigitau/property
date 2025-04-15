import React from 'react';
import AnimatedText from '../common/Animated';

const CEOtestimonials = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 order-lg-2">
            {/* CEO Image on Right */}
            <div className="need-help-img">
              <figure className="reveal image-anime" style={{ transform: "translate(0px, 0px)", opacity: 1, visibility: "inherit" }}>
                <img 
                  src="/images/about/chair.jpeg" 
                  alt="Mwenda Thuranira - Developer"
                  style={{ transform: "translate(0px, 0px)" }}  
                  className="ceo-image rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                />
              </figure>
            </div>
          </div>

          <div className="col-lg-8 order-lg-1">
            {/* CEO Testimonial Content on Left */}
            <div className="ceo-content">
              <div className="section-title">
                {/* Animated Title */}
                <h3 className="wow fadeInUp text-4xl font-semibold text-gray-800" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                  Welcome Message
                </h3>

                {/* Animated Title for "Message from Mwenda Thuranira, Chairman" */}
                <AnimatedText
                    sentence="Welcome to Mytown Mall"
                    className="text-anime"
                    style={{ fontSize: '24px', color: '#333' }}
                />
                <div className="why-choose-us-body wow fadeInUp" data-wow-delay="0.25s" style={{ visibility: "visible", animationDelay: "0.25s", animationName: "fadeInUp" }}>
               
                <p>Welcome to Mytown Mall, Karen — your one-stop destination where convenience meets community. We’re proud to bring you a vibrant space where all your needs are met under one roof, without the hassle.</p>
                <p>The Mytown Mall concept is more than just a shopping center — it’s a journey of connecting retailers and the community. Our vision was to merge the refined design and experience of larger malls into compact, accessible spaces, built with sustainability, scalability, and affordability in mind.</p>
                <p>Karen has been a true success story, and it only strengthens our belief in this model. We’re excited to continue expanding this concept across Kenya, creating thriving hubs that serve both businesses and the communities they call home.</p>
                <p><strong> Mwenda Thuranira - Developer<br></br> Karibu Mytown Mall — where your town meets your lifestyle.</strong></p>
                </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOtestimonials;
