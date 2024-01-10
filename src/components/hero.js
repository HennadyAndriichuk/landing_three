import '../styles/hero-styles.scss';
import picture from '../assets/NAMU-one.png';
import burger from '../assets/burger.png';
import arrow from '../assets/arrow.png';

function Hero ({ setModalActive }) {
   return (
      <div className="hero-wrapper">
         <div className="hero-container">
            <div className="hero-content-wrapper">
               <div className="burger-container">
                  <div className="burger" onClick={()=> setModalActive(true)}>
                     <img src={burger} className="burger-icon" alt="burger" />
                  </div>
               </div>
               <div className="hero-title">ХУДОЖНІЙ МУЗЕЙ</div>
               <div className="tickets-events-container">
                  <div className="events-container">
                     <hr/>
                     <div className="events">події</div>
                  </div>
                  <div className="tickets-button-container">
                     <div className="tickets-button">
                        <div className="text-container">квитки</div>
                        <div className="arrow-container">
                           <img src={arrow} alt="arrow" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="hero-image-container">
               <div className="picture-burger" onClick={()=> setModalActive(true)}>
                  <img src={burger} className="burger-icon" alt="burger" />
               </div>
               <img src={picture} alt="piece of art" className="piece-of-art"/>
               <div className="namu">
                  NA<br/>MU
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;