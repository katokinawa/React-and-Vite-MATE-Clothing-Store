export default function HeaderModal({ isAttentionForm, handleAttentionForm }) {
  return (
    <div id="header-modal">
      <div className="header-modal">
        <div className="header-modal__wrapper">
          <ul>
            <li className="header-modal__item text-uppercase">
              Новинки коллекции
            </li>
            <li className="header-modal__item text-uppercase">
              Летняя распродажа
            </li>
            <li className="header-modal__item text-uppercase">MATE TRAVEL</li>
            <li className="header-modal__item text-uppercase">
              Вечерняя линия
            </li>
            <li className="header-modal__item text-uppercase">Линия base</li>
            <li className="header-modal__item text-uppercase">Женское</li>
            <li className="header-modal__item text-uppercase">Мужское</li>
            <li className="header-modal__item text-uppercase">
              Скоро в продаже
            </li>
            <li className="header-modal__item text-uppercase">Сертификаты</li>
            <li className="header-modal__item text-uppercase">
              Личный кабинет
            </li>
            <li className="header-modal__item text-uppercase">Магазины</li>
            <li className="header-modal__item text-uppercase">О нас</li>
            <li className="header-modal__item text-uppercase">Покупателям</li>
            <li className="header-modal__item text-uppercase">Отзывы</li>
            <li className="header-modal__item text-uppercase">Контакты</li>
          </ul>
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
            <div className={isAttentionForm ? 'footer__promo-subscription-alert margin-top-10' : 'disabled'}>
              Нажимая на кнопку «Подписаться» Вы соглашаетесь на обработку
              персональных данных и получение новостей, а также подтверждаете,
              что ознакомились с
              <a className="footer__promo-url" href="#">
                политикой конфиденциальности
              </a>
            </div>
          </section>
          <aside className="header-modal__aside">
            <div className="header-modal__title text-uppercase margin-bottom-10">
              Возникли вопросы?
            </div>
            <div className="header-modal__link-wrapper">
              <a
                className="header-modal__link-button text-second-family"
                href="#"
              >
                8 800 088 08 08
              </a>
              <a
                className="header-modal__link-button text-second-family text-uppercase"
                href="#"
              >
                katokinawa@icloud.com
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
