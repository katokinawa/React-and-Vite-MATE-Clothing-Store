import { Link } from "react-router-dom";

export default function Header({ isAttention, isModal, setIsModal }) {
  function handleModal() {
    setIsModal((prev) => !prev);
  }

  return (
    <header
      className={
        isModal || isAttention === false
          ? "header no-margin background-f6f5f3 overflow-hidden"
          : "header"
      }
    >
      <div className="header__list-wrapper">
        <div className="header__left">
          <div
            className={isModal ? "header__burger fav-close" : "header__burger"}
            onClick={handleModal}
          ></div>
          <div className="header__logo"></div>
          <nav className="header__nav-left">
            <ul className="header__list-left">
              <li className="header__list-item text-uppercase">base</li>
              <li className="header__list-item text-uppercase">Женское</li>
              <li className="header__list-item text-uppercase">Мужское</li>
              <li className="header__list-item text-uppercase">
                Скоро в продаже
              </li>
              <li className="header__list-item text-uppercase">Сертификат</li>
            </ul>
          </nav>
        </div>
        <div className="header__right">
          <ul className="header__list-right">
            <li className="header__list-item header__favicon-padding fav-search"></li>
            <li><Link className="header__list-item header__favicon-padding fav-account" to={"/signin"}></Link></li>
            <li className="header__list-item header__favicon-padding fav-flag"></li>
            <li className="header__list-item header__favicon-padding fav-bag"></li>
            <li className="header__list-item text-uppercase">Магазины</li>
            <li className="header__list-item text-uppercase">Покупателям</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
