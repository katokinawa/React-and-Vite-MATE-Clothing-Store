import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer({ isAttentionForm, handleAttentionForm }) {
  const [iconIsListOpen, setIconIsListOpen] = useState(null);

  function handleToggleList(blockname) {
    if (iconIsListOpen === blockname) {
      setIconIsListOpen(null);
    } else {
      setIconIsListOpen(blockname);
    }
  }

  return (
    <footer className="footer">
      {/* Промо для мобильной версии */}
      <section className="footer__promo footer__promo-mobile">
        <p className="footer__promo-heading margin-bottom-10 text-uppercase margin-bottom-10">
          скидка 10% на первый заказ
        </p>
        <p className="footer__promo-description-mobile margin-bottom-15">
          А также секретные распродажи, уникальные акции и интересные статьи
          только для подписчиков рассылки
        </p>
        <form className="footer__promo-form" action="" method="post">
          <input
            type="text"
            className="footer__promo-field-mobile margin-bottom-10 mail-input"
            placeholder="ЭЛ. ПОЧТА"
            pattern="/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u"
            onClick={handleAttentionForm}
            required
          />
          <div className="footer__checkbox-wrapper margin-bottom-10">
            <label className="footer__styled-checkbox">
              <input
                type="checkbox"
                className="footer__promo-checkbox"
                id="woman-coll"
                name="woman-coll"
              />
              <span className="footer__checkbox">Женская коллекция</span>
            </label>
            <label className="footer__styled-checkbox">
              <input
                type="checkbox"
                className="footer__promo-checkbox"
                id="man-coll"
                name="man-coll"
              />
              <span className="footer__checkbox">Мужская коллекция</span>
            </label>
          </div>
          <input
            type="submit"
            className="footer__promo-button-mobile text-second-family text-uppercase"
            value="ПОДПИСАТЬСЯ"
          />
        </form>
        <div
          className={
            isAttentionForm
              ? "footer__promo-subscription-alert margin-top-10"
              : "disabled"
          }
        >
          Нажимая на кнопку «Подписаться» Вы соглашаетесь на обработку
          персональных данных и получение новостей, а также подтверждаете, что
          ознакомились с
          <Link className="footer__promo-url" to={"#"}>
            политикой конфиденциальности
          </Link>
        </div>
      </section>

      {/* Лист в футере для десктопной версии */}
      <div className="footer__list-wrapper">
        <ul className="footer__list">
          <li className="footer__list-item margin-bottom-20 text-uppercase">
            О нас
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            MATE
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Устойчивое развитие
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Истории
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Фото и видео
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Работа у нас
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Пресса
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-item margin-bottom-20 text-uppercase">
            Покупателям
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Вопросы и ответы
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Подшив изделий в MATE
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Trade in: обмен вещей
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Программа MATE miles
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Публичная оферта
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Политика конфиденциальности
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Правила акций
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-item margin-bottom-20 text-uppercase">
            Контакты
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Контакты
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Магазины
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            Отзывы
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-item margin-bottom-20 text-uppercase">
            Связаться с нами
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            8 800 888 88 88 <br />
            <span className="text-lowercase">ежедневно с 9:00 до 21:00</span>
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            katokinawa@icloud.com
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            telegram
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            вконтакте
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            youtube
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            pinterest
          </li>
          <li className="footer__list-item margin-bottom-15 text-uppercase"></li>
          <li className="footer__list-item margin-bottom-15 text-uppercase"></li>
          <li className="footer__list-item margin-bottom-15 text-uppercase">
            © Daniil Belogur
          </li>
        </ul>
      </div>

      {/* Лист в футере для мобильной версии */}
      <div className="footer__list-wrapper-mobile">
        <div className="footer__list-block-mobile text-uppercase">
          <p className="padding-bottom-20 padding-top-20">О нас</p>
          <ul className={iconIsListOpen === 'about' ? "footer__list" : "disabled"}>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              MATE
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Устойчивое развитие
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Истории
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Фото и видео
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Работа у нас
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Пресса
            </li>
          </ul>
          <div
            className={
              iconIsListOpen === 'about'
                ? "footer__list-icon"
                : "footer__list-icon footer__list-icon_arrow-top"
            }
            onClick={() => handleToggleList("about")}
          ></div>
        </div>

        <div className="footer__list-block-mobile text-uppercase">
          <p className="padding-bottom-20 padding-top-20">Покупателям</p>
          <ul className={iconIsListOpen === 'customers' ? "footer__list" : "disabled"}>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Вопросы и ответы
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Подшив изделий в MATE
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Trade in: обмен вещей
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Программа MATE miles
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Публичная оферта
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Политика конфиденциальности
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Правила акций
            </li>
          </ul>
          <div
            className={
              iconIsListOpen === 'customers'
                ? "footer__list-icon"
                : "footer__list-icon footer__list-icon_arrow-top"
            }
            onClick={() => handleToggleList("customers")}
          ></div>
        </div>

        <div className="footer__list-block-mobile text-uppercase">
          <p className="padding-bottom-20 padding-top-20">Контакты</p>
          <ul className={iconIsListOpen === 'contacts' ? "footer__list" : "disabled"}>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Контакты
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Магазины
            </li>
            <li className="footer__list-item-mobile margin-bottom-15 text-uppercase">
              Отзывы
            </li>
          </ul>
          <div
            className={
              iconIsListOpen === 'contacts'
                ? "footer__list-icon"
                : "footer__list-icon footer__list-icon_arrow-top"
            }
            onClick={() => handleToggleList("contacts")}
          ></div>
        </div>

        {/* Блоки в футере для мобильной версии*/}
        <div className="footer__list-wrapper-mobile">
          <ul className="footer__list-blocks">
            <li className="footer__list-item-block margin-bottom-15 text-uppercase">
              <Link to="#">telegram</Link>
            </li>
            <li className="footer__list-item-block margin-bottom-15 text-uppercase">
              <Link to={"#"}>вконтакте</Link>
            </li>
            <li className="footer__list-item-block margin-bottom-15 text-uppercase">
              <Link to={"#"}>youtube</Link>
            </li>
            <li className="footer__list-item-block margin-bottom-15 text-uppercase">
              <Link to={"#"}>pinterest</Link>
            </li>
            <li className="footer__list-item-block margin-bottom-15 text-uppercase">
              <Link to={"#"}>shop@mate.ru</Link>
            </li>
            <li className="footer__list-item-block margin-bottom-15 text-uppercase">
              <Link to="tel:88008888888">
                8 800 888 88 88 <br />
                <span className="text-lowercase">
                  ежедневно с 9:00 до 21:00
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Промо для десктопной версии */}
      <section className="footer__promo">
        <p className="footer__promo-heading margin-bottom-15 text-uppercase margin-bottom-10">
          скидка 10% на первый заказ
        </p>
        <p className="footer__promo-description margin-bottom-15">
          А также секретные распродажи, уникальные акции и интересные статьи
          только для подписчиков рассылки
        </p>
        <form
          className="footer__promo-form margin-bottom-10"
          action=""
          method="post"
        >
          <input
            type="text"
            className="footer__promo-field margin-bottom-10 mail-input"
            placeholder="ЭЛ. ПОЧТА"
            pattern="/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u"
            onClick={handleAttentionForm}
            required
          />
          <div className="footer__checkbox-wrapper margin-bottom-10">
            <label className="footer__styled-checkbox">
              <input
                type="checkbox"
                className="footer__promo-checkbox"
                id="woman-coll"
                name="woman-coll"
              />
              <span className="footer__checkbox">Женская коллекция</span>
            </label>
            <label className="footer__styled-checkbox">
              <input
                type="checkbox"
                className="footer__promo-checkbox"
                id="man-coll"
                name="man-coll"
              />
              <span className="footer__checkbox">Мужская коллекция</span>
            </label>
          </div>
          <input
            type="submit"
            className="footer__promo-button text-second-family text-uppercase"
            value="ПОДПИСАТЬСЯ"
          />
        </form>
        <div
          className={
            isAttentionForm ? "footer__promo-subscription-alert" : "disabled"
          }
        >
          Нажимая на кнопку «Подписаться» Вы соглашаетесь на обработку
          персональных данных и получение новостей, а также подтверждаете, что
          ознакомились с
          <Link className="footer__promo-url" to={"#"}>
            политикой конфиденциальности
          </Link>
        </div>
      </section>
    </footer>
  );
}
