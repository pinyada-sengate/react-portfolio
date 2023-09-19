import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import "./testimonials.css";
import data from "./data";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What my Clients Say</h2>
      <p>
        These are Testimonials from some of my user from my applications on
        Google Play Store.
      </p>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {data.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
