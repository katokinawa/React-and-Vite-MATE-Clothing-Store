function Banner({ banner, bannerMobile }) {
  return (
    <article className="banner">
      <a className="banner__link" href="#">
        <div className="banner__photo-wrapper">
          <picture>
            <source media="(min-width: 768px)" srcSet={banner} />
            <source media="(min-width: 1px)" srcSet={bannerMobile} />
            <img className="banner__photo" src={banner} />
          </picture>
        </div>
      </a>
    </article>
  );
}

export default Banner;
