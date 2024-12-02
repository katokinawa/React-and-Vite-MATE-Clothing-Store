import { Swiper, SwiperSlide } from "swiper/react";
import CarouselText from "../CarouselText";
import { Controller } from "swiper/modules";

export default function SwiperTextSlider({ card, firstSwiper, setSecondSwiper }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      grabCursor={true}
      modules={[ Controller ]}
      controller={{ control: firstSwiper }}
      onSwiper={setSecondSwiper}
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
          <CarouselText
            cardName={props.name}
            price={props.price}
            sizes={props.sizes}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
