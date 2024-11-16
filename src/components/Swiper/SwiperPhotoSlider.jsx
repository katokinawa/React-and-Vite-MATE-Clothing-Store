import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper/modules";
import "swiper/css";
import CarouselPhoto from "../CarouselPhoto";

export default function SwiperPhotoSlider({ card, secondSwiper, setFirstSwiper }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      grabCursor={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation, Controller]}
      controller={{ control: secondSwiper }}
      onSwiper={setFirstSwiper}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
    >
      {card.map((props) => (
        <SwiperSlide key={props.key}>
          <CarouselPhoto
            isNew={props.isNew}
            imgSrc={props.img_src}
            imgAlt={props.img_alt}
          />
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
}
