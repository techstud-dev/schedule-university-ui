import '../footer.css'

function Footer() {
    return (
      <div className="footer container">
        <h2 className='footer__title'>(LOGO) Schedule University</h2>
        <div className="footer__container">
          <div className="footer__about">
            <h3 className='footer__list__title'>О нас</h3>
            <p className='footer__list__descr'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consectetur vero dignissimos at maiores quae voluptas, optio, blanditiis nobis nostrum amet quasi enim delectus, nisi natus non est rem velit!</p>
          </div>
          <div className="footer__courses">
            <h3 className='footer__list__title'>Курсы</h3>
            <ul className='footer__list'>
            <li className="footer__list__item">
              <a href="##" className="footer__list__link">
                  Lorem
              </a>
            </li>
            <li className="footer__list__item">
              <a href="##" className="footer__list__link">
                Lorem
              </a>
            </li>
            <li className="footer__list__item">
              <a href="##" className="footer__list__link">
                Lorem
              </a>
            </li>
            <li className="footer__list__item">
              <a href="##" className="footer__list__link">
                Lorem
              </a>
            </li>
            <li className="footer__list__item">
              <a href="##" className="footer__list__link">
                Lorem
              </a>
            </li>
            <li className="footer__list__item">
              <a href="##" className="footer__list__link">
                Lorem
              </a>
            </li>
            </ul>
          </div>
          <div className="footer__time-work">
            <h3 className='footer__list__title'>Время работы</h3>
            <p className='footer__list__descr'>Пн - Пт с 8.00 до 20.30(Мск GMT +3)</p>
            <p className="footer__list__descr">Сб - Вс, праздники - выходной</p>
          </div>
          <div className="footer__contacts">
            <h3 className='footer__list__title'>Контакты</h3>
            <ul>
              <li className="footer__list__item">
                <a href="##" className="footer__list__link">
                  +7 (123) 456-78-90
                </a>
              </li>
              <li className="footer__list__item">
                <a href="##" className="footer__list__link">
                  +7 (987) 654-32-10
                </a>
              </li>
              <li className="footer__list__item">
                <a href="##" className="footer__list__link">
                  email@example.com
                </a>
              </li>
              <li className="footer__list__item">
                <a href="##" className="footer__list__link">
                  skype: university.schedule
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__copyright container">Schedule University © 2024</p>
      </div>
    );
  }
  
  export default Footer;