import '../styles/lecture-styles.scss';
import PictureThree from '../assets/Picture_three.png';

function Lecture (){
   return(
      <div className='lecture-wrapper'>
         <img src={PictureThree} alt='lecture-pic' />
         <div className='wrapper'>
            <div className='lecture-info-wrapper'>
               <div className='lecture-info-container'>
                  <div className='lecture-date'>
                     <div className='event-type'>ЛЕКЦІЯ</div>
                     <div className='event-date'>26/08/2019 - 11:00</div>
                  </div>
                  <div className='event-text'>Від класицизму до романтизму</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Lecture;