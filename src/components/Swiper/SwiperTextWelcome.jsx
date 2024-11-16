// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function SwiperTextWelcome() {
  return (
    <Swiper
      wrapperClass={"swiper__wrapper"}
      spaceBetween={0}
      speed={5000}
      allowTouchMove={false}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
        reverseDirection: true,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        390: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 4,
        },
        624: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 6,
        },
        874: {
          slidesPerView: 7,
        },
        1024: {
          slidesPerView: 8,
        },
        1380: {
          slidesPerView: 11,
        },
        1441: {
          slidesPerView: 8,
        },
        1920: {
          slidesPerView: 10,
        },
      }}
    >
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        Добро пожаловать
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        -`♡´-
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        Добро пожаловать
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        -`♡´-
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        Добро пожаловать
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        -`♡´-
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        Добро пожаловать
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        -`♡´-
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        Добро пожаловать
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        -`♡´-
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        Добро пожаловать
      </SwiperSlide>
      <SwiperSlide className="swiper__text text-second-family text-uppercase">
        -`♡´-
      </SwiperSlide>
    </Swiper>
  );
}
