import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",

    content:
      "MyTown Karen is one of the best malls in Nairobi! The variety of stores and restaurants make it a perfect spot for family outings and shopping. The atmosphere is vibrant, and the staff are friendly. I always look forward to visiting this mall whenever I’m in the area.",
  },
  {
    name: "Jane Smith",

    content:
      "I love shopping at MyTown Karen! From the wide selection of shops to the delicious food court options, there’s something for everyone. It's well-kept, and I appreciate how safe I feel while shopping. I always find great deals and enjoy spending time here.",
  },
  {
    name: "Samuel Kimani",

    content:
      "MyTown Karen is a wonderful place to hang out with friends and family. The mall has modern amenities, and I always feel comfortable. The events held at the mall are a bonus too! Whether it's a weekend stroll or shopping spree, I love coming here.",
  },
  {
    name: "Elizabeth Wangari",

    content:
      "I have been a frequent visitor to MyTown Karen, and every experience has been great. The range of services offered, from entertainment to shopping, makes it the go-to destination in Karen. Plus, the parking is always easy, which makes visits so much more convenient.",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonials py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-xl font-semibold">Testimonial</h3>
          <h2 className="text-3xl font-bold">
            <div className="line">
              {["What", "our", "Customers", "Say"].map((word, index) => (
                <span key={index} className="inline-block mx-1">
                  {word.split("").map((char, i) => (
                    <span key={i} className="inline-block">
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </h2>
        </div>

        <div className="testimonial-slider">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="testimonial-rating mb-4">
                    <Image
                      src="/images/icon-rating.svg"
                      alt="rating"
                      width={100}
                      height={20}
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
