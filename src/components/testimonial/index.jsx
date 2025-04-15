import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedText from "../common/Animated";

const testimonials = [
  {
    name: "Michael Karanja",
    content:
      "Mytown Karen is the perfect destination for both shopping and dining! The wide variety of stores and eateries cater to all tastes and needs. The family-friendly atmosphere makes it a go-to spot for weekend outings. The staff are always helpful, making every visit enjoyable. I highly recommend it!",
  },
  {
    name: "Nia Mwangi",
    content:
      "I love spending time at Mytown Karen! Whether I’m shopping for the latest fashion or enjoying a meal at the food court, there's always something exciting. It’s well-maintained, and I always feel safe and relaxed while shopping. I’ve found so many great deals here, and I love the variety of options.",
  },
  {
    name: "Juma Mohamed",
    content:
      "Mytown Karen is an amazing place to spend time with family and friends. The mall offers modern amenities, a range of entertainment options, and plenty of shopping choices. I always look forward to the events and promotions. It's the ideal place for a fun day out in Karen.",
  },
  {
    name: "Amina Hassan",
    content:
      "As a frequent visitor, I can confidently say that Mytown Karen is the best place to visit for shopping, dining, and entertainment in the area. The convenience of easy parking and the variety of services offered make it the ultimate destination. The mall always provides a seamless and enjoyable experience.",
  },
];
const Testimonial = () => {
  return (
    <div className="testimonials py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-xl font-semibold">Testimonial</h3>
          <AnimatedText
                    sentence="What our Customers Say"
                    className="text-anime"
                    style={{ fontSize: '24px', color: '#333' }}
                />
       
        </div>

        <div className="testimonial-slider">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg">
                  <div className="testimonial-rating mb-4">
                    <img
                      src="/images/icon-rating.svg"
                      alt="rating"
                      width="100"
                      height="20"
                    />
                  </div>
                  <div className="testimonial-content mb-4 text-center text-gray-600 italic">
                    <p>{item.content}</p>
                  </div>
                  <div className="testimonial-author-info text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      - {item.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
