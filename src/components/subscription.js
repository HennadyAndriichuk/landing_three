import '../styles/subscription-styles.scss';
import pictureOne from '../assets/Picture_nine.png';
import arrow from '../assets/arrow.png';

function Subscription () {
   return (
      <div className="subscription-wrapper">
         <img src={pictureOne} alt='subscribe' />
         <div className='subscription-container'>
            <div className='subscribe'>
               <div className='title'>Підписка</div>
               <div className='subscribe-text'>Бути в курсі всіх актуальних подій та останніх новин.</div>
            </div>
            <div className='subscribe-input-container'>
               <div className='subscribe-input'>
                  <div className='input-text'>Email</div>
               </div>
               <div className='input-arrow'>
                     <div className='arrow'>
                        <img src={arrow} alt='arrow' />
                     </div>
                  </div>
            </div>
         </div>
      </div>
   );
};

export default Subscription;