import CarouselText from "./CarouselText";

export default function AddCard({ card }) {
  return (
    <>
      <article className="swiper-text-slider">
        <div className="swiper-wrapper swiper-text-slider__text-slider">
          {card.map(props => (
            <CarouselText
              key={props.key}
              cardName={props.name}
              price={props.price}
              sizes={props.sizes}
            />
          ))}
          </div>
      </article>
    </>
  );
}
