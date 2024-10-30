function CarouselPhoto({ isNew, imgSrc, imgAlt }) {
  return (
    <div id="slider-photo">
      <div className="swiper-slide swiper-photo-slider__item-photo">
        <img className="swiper-photo-slider__img" src={imgSrc} alt={imgAlt} />
        <p
          className={
            isNew
              ? "swiper-photo-slider__promo-text text-second-family text-uppercase"
              : "disabled"
          }
        >
          новое
        </p>
        <div className="swiper-photo-slider__favorite-icon"></div>
      </div>
    </div>
  );
}

export default CarouselPhoto;
