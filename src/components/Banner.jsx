import { Link } from "react-router-dom";

export default function Banner({ banner, bannerMobile, bannerOne }) {
  console.log(bannerOne)
  return (
    <article className="banner">
      <Link className="banner__link" to={"#"}>
        <div className="banner__photo-wrapper">
          <picture>
            <source media="(min-width: 768px)" srcSet={banner} />
            <source media="(min-width: 1px)" srcSet={bannerMobile} />
            <img className={bannerOne ? "banner__photo banner_photo-one" : "banner__photo"} src={banner} />
          </picture>
        </div>
      </Link>
    </article>
  );
}
