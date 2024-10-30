import AddCard from "./components/AddCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Attention from "./components/Attention";
import CarouselWelcome from "./components/CarouselWelcome";
import cardForSlider from "./components/card";
import HeaderModal from "./components/HeaderModal";
import mainBanner from './img/banners/main_banner.jpg'
import secondMainBanner from './img/banners/main_banner_2.jpg'
import mainBannerMobile from './img/banners/main_banner_mobile.jpg'
import secondMainBannerMobile from './img/banners/main_banner_2_mobile.jpg'
import { useState } from "react";

function App() {
  const [isModal, setIsModal] = useState(false)
  const [isAttention, setIsAttention] = useState(true)
  const [isAttentionForm, setIsAttentionForm] = useState(false)
  function handleAttentionForm() {
    setIsAttentionForm(true)
  }

  return (
    <>
      <div className={isModal ? "page overflow-hidden" : "page"}>
        {isModal && <HeaderModal isAttentionForm={isAttentionForm} handleAttentionForm={handleAttentionForm} />}
        {!isModal && <Attention isAttention={isAttention} setIsAttention={setIsAttention} />}
        <Header isAttention={isAttention} isModal={isModal} setIsModal={setIsModal} />
        <main className="main">
          <Banner banner={mainBanner} bannerMobile={mainBannerMobile} />
          <CarouselWelcome />
          <AddCard card={cardForSlider} />
          <Banner banner={secondMainBanner} bannerMobile={secondMainBannerMobile} />
          <CarouselWelcome />
          <Footer isAttentionForm={isAttentionForm} handleAttentionForm={handleAttentionForm} />
        </main>
      </div>
    </>
  );
}

export default App;
