import close from '../assets/close-icon.png';
import '../styles/modal-styles.scss';

function Modal ({modalActive, setModalActive}){
   return (
      <div className={modalActive ? 'modal active' : 'modal'} onClick={()=> setModalActive(false)}>
         <div className="modal-grey"></div>
         <div className="modal-menu-container" onClick={(e)=> e.stopPropagation()}>
            <div className="menu-navbar-wrapper">
               <div className="navbar-container">
                  <img src={close} className="close-icon" alt="close-icon" onClick={()=> setModalActive(false)}/>
                  <div className="navbar">
                     <div className="navbar-block">
                        <div className="navbar-item">Галерея</div>
                        <div className="navbar-item">Виставки та<br/> події</div>
                     </div>
                     <div className="navbar-block">
                        <div className="navbar-item">Про Нас</div>
                        <div className="navbar-item">Контакти</div>
                     </div>
                  </div>
               </div>
            </div>
            <hr className="divider" />
            <div className="schedule-wrapper">
               <div className="schedule-container">
                  <div className="schedule-block">
                     <div className="schedule-title">Графік роботи</div>
                     <div className="schedule-item">
                        <span>12:00-20:00</span>
                        середа
                     </div>
                     <div className="schedule-item">
                        <span>12:00-20:00</span>
                        четвер
                     </div>
                     <div className="schedule-item">
                        <span>12:00-20:00</span>
                         п'ятниця
                     </div>
                     <div className="schedule-item">
                        <span>11:00-19:00</span>
                        субота
                     </div>
                     <div className="schedule-item">
                        <span>11:00-19:00</span>
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
         </div>
      </div>
   );
};

export default Modal;