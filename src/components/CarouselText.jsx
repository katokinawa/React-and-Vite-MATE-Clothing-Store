function CarouselText({ cardName, price, sizes }) {
  const regexPriceWithSpaces = /\B(?=(\d{3})+(?!\d))/g;

  function formatNumberWithSpaces(number) {
    if (typeof number !== "number" || isNaN(number)) {
      return "Неверный формат числа";
    }
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(regexPriceWithSpaces, " ");
    return parts.join(".");
  }

  return (
    <div id="slider-text">
      <div className="swiper-slide swiper-photo-slider__item-text">
        <h3 className="swiper-photo-slider__heading text-second-family text-uppercase">{cardName}</h3>
        <p className="swiper-photo-slider__price-text text-second-family">{formatNumberWithSpaces(price) + " ₽"}</p>
        <div className="swiper-photo-slider__sizes-wrapper">
          <p className="swiper-photo-slider__sizes-text text-uppercase">{sizes}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselText;
