import { reviews } from "../info";
import shape from "../../assets/shape-1.png";
import col from "../../assets/testimonials-icon.svg";

import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./reviews.scss";

export const Reviews = () => {
  return (
    <>
      <section className="reviews" id="testimonial">
        <div className="container" data-aos="fade-up">
          <div className="heading">
            <h2>testimonials</h2>
            <p>
              <span>my</span> customers say
            </p>
          </div>
          <Swiper
            className="wrapper"
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {reviews.map((i, key) => {
              return (
                <SwiperSlide className="box" key={key}>
                  <div className="img">
                    <img src={i.img} alt="img" />
                    <img src={col} alt="" className="mark" />
                  </div>
                  <p className="txt">{i.review}</p>
                  <div className="name">
                    <h3>{i.name}</h3>
                    <p>{i.position}</p>
                  </div>
                  <img src={shape} alt="img" className="shape" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};
