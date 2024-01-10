import facebook from '../assets/facebook-logo.png';
import instagram from '../assets/instagram-logo.png';
import arrow from '../assets/arrow-up.png';
import '../styles/footer-styles.scss';

function Footer () {
   return (
      <div className="footer-wrapper">
         <div className="info-contacts-wrapper">
            <div className='info-contacts-container'>
               <div className="social-wrapper">
                  <div className='title-socials-container'>
                     <div className='footer-title'>NA<br/>MU</div>
                     <div className='socials'>
                        <img src={facebook} alt='facebook-logo' />
                        <img src={instagram} alt='instagram-logo' />
                     </div>
                  </div>
                  <div className='schedule-contacts-wrapper'>
                     <div className="schedule-wrapper">
                        <div className="schedule-container">
                           <div className="schedule-block">
                              <div className="schedule-title">Графік роботи</div>
                              <div className="schedule-item">
                                 <span>12:00-20:00</span><br/>
                                 середа
                              </div>
                              <div className="schedule-item">
                                 <span>12:00-20:00</span><br/>
                                 четвер
                              </div>
                              <div className="schedule-item">
                                 <span>12:00-20:00</span><br/>
                                 п'ятниця
                              </div>
                              <div className="schedule-item">
                                 <span>11:00-19:00</span><br/>
                                 субота
                              </div>
                              <div className="schedule-item">
                                 <span>11:00-19:00</span><br/>
                                 неділя
                              </div>
                           </div>
                           <div className="schedule-block">
                              <div className="schedule-item">
                                 <span>Вихідні:</span> понеділок, вівторок
                                 Каса припиняє роботу за 1 годину
                                 до закриття музею
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='contacts-container'>
                        <div className='contacts-title'>Контакти:</div>
                        <div className='contacts-block'>
                           вул. М. Грушевського, 6; Київ, 01001
                           тел. +38 (044) 278-13-57
                           факс +38 (044) 278-74-54
                           e-mail: info@namu.kiev.ua
                        </div>
                     </div>
                  </div>
               </div>
               <div className="up-circle">
                  <img src={arrow} alt='arrow' />
               </div>
            </div>
            <hr className='divider' />
            <div className='navbar-container'>
               <div className="navbar">
                  <div className="navbar-block">
                     <div className="navbar-item">Галерея</div>
                     <div className="navbar-item">Виставки та події</div>
                  </div>
                  <div className="navbar-block">
                     <div className="navbar-item">Про Нас</div>
                     <div className="navbar-item">Контакти</div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="copyright-container">
            <div className="copyright">Copyright © 2019. All Rights Reserved.</div>
            <div className="design">Designed by Zhyriada Marina</div>
         </div>
      </div>
   );
};

export default Footer;