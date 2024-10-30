import CarouselPhoto from "./CarouselPhoto";
import CarouselText from "./CarouselText";

function AddCard({ card }) {
  return (
    <>
      <article className="swiper-photo-slider">
        <div className="swiper-wrapper swiper-photo-slider__photo-slider">
          {card.map((props) => {
            <CarouselPhoto
              key={props.key}
              isNew={props.isNew}
              imgSrc={props.img_src}
              imgAlt={props.img_alt}
            />;
          })}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </article>
      <article className="swiper-text-slider">
        <div className="swiper-wrapper swiper-text-slider__text-slider">
          {card.map((props) => {
            <CarouselText
              key={props.key}
              cardName={props.name}
              price={props.price}
              sizes={props.sizes}
            />;
          })}
        </div>
      </article>
    </>
  );
}

export default AddCard;
