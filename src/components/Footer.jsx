import f from "./Footer.module.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={f.footer}>
      <Link to="/" className={f.link__title}>
        <h2 className={f.footer__title}>
          <img className={f.logo} src={logo} alt="Логотип" />
        </h2>
      </Link>
      <div className={f.footer__container}>
        <div className={f.footer__about}>
          <h3 className={f.footer__list__title}>О нас</h3>
          <p className={f.footer__list__descr}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            consectetur vero dignissimos at maiores quae voluptas, optio,
            blanditiis nobis nostrum amet quasi enim delectus, nisi natus non
            est rem velit!
          </p> 
        </div>
        <div className={f.footer__courses}>
          <h3 className={f.footer__list__title}>Курсы</h3>
          <ul className={f.footer__list}>
            <li className={f.footer__list__item}>
              <Link to="#" className={f.footer__list__link}>
                Lorem
              </Link>
            </li>
            <li className={f.footer__list__item}>
              <Link to="#" className={f.footer__list__link}>
                Lorem
              </Link>
            </li>
            <li className={f.footer__list__item}>
              <Link to="#" className={f.footer__list__link}>
                Lorem
              </Link>
            </li>
            <li className={f.footer__list__item}>
              <Link to="#" className={f.footer__list__link}>
                Lorem
              </Link>
            </li>
            <li className={f.footer__list__item}>
              <Link to="#" className={f.footer__list__link}>
                Lorem
              </Link>
            </li>
            <li className={f.footer__list__item}>
              <Link to="#" className={f.footer__list__link}>
                Lorem
              </Link>
            </li>
          </ul>
        </div>
        <div className={f.footer__time__work}>
          <h3 className={f.footer__list__title}>Время работы</h3>
          <p className={f.footer__list__descr}>
            Пн - Пт с 8.00 до 20.30(Мск GMT +3)
          </p>
          <p className={f.footer__list__descr}>Сб - Вс, праздники - выходной</p>
        </div>
        <div className={f.footer__contacts}>
          <h3 className={f.footer__list__title}>Контакты</h3>
          <ul>
            <li className={f.footer__list__item}>
              <Link to="#" className={f.footer__list__link}>
                +7 (123) 456-78-90
              </Link>
            </li>
            <li className={f.footer__list__item}>
              <Link to="#" className={f.footer__list__link}>
                +7 (987) 654-32-10
              </Link>
            </li>
            <li className={f.footer__list__item}>
              <Link to="#" className={f.footer__list__link}>
                email@example.com
              </Link>
            </li>
            <li className={f.footer__list__item}>
              <Link to="#" className={f.footer__list__link}>
                skype: university.schedule
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={f.footer__copyright}>Schedule University © 2024</p>
    </div>
  );
}

export default Footer;
