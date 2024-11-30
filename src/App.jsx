import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Attention from "./components/Attention";
import cardForSlider from "./components/card";
import HeaderModal from "./components/HeaderModal";
import SwiperTextWelcome from "./components/Swiper/SwiperTextWelcome";
import SwiperPhotoSlider from "./components/Swiper/SwiperPhotoSlider";
import SwiperTextSlider from "./components/Swiper/SwiperTextSlider";
// import mainBanner from "./img/banners/main_banner.jpg";
import mainBannerTwo from "./img/banners/main_banner.webp"
import secondMainBanner from "./img/banners/main_banner_2.jpg";
import mainBannerMobile from "./img/banners/main_banner_mobile.jpg";
import secondMainBannerMobile from "./img/banners/main_banner_2_mobile.jpg";
import { useState } from "react";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [isAttention, setIsAttention] = useState(true);
  const [isAttentionForm, setIsAttentionForm] = useState(false);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  function handleAttentionForm() {
    setIsAttentionForm(true);
  }
  return (
    <>
      <div className={isModal ? "page overflow-hidden" : "page"}>
        {isModal && (
          <HeaderModal
            isAttentionForm={isAttentionForm}
            handleAttentionForm={handleAttentionForm}
          />
        )}
        {!isModal && (
          <Attention
            isAttention={isAttention}
            setIsAttention={setIsAttention}
          />
        )}
        <Header
          isAttention={isAttention}
          isModal={isModal}
          setIsModal={setIsModal}
        />
        <main className="main">
          <Banner banner={mainBannerTwo} bannerMobile={mainBannerMobile} bannerOne={true} />
          <SwiperTextWelcome />
          <SwiperPhotoSlider card={cardForSlider} secondSwiper={secondSwiper} setFirstSwiper={setFirstSwiper} />
          <SwiperTextSlider card={cardForSlider} firstSwiper={firstSwiper} setSecondSwiper={setSecondSwiper} />
          <Banner
            banner={secondMainBanner}
            bannerMobile={secondMainBannerMobile}
          />
          <SwiperTextWelcome />
          <Footer
            isAttentionForm={isAttentionForm}
            handleAttentionForm={handleAttentionForm}
          />
        </main>
      </div>
    </>
  );
}

export default App;
