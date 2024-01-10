import '../styles/events-styles.scss';
import PictureOne from '../assets/Picture_one.png';
import PictureTwo from '../assets/Picture_two.png';
import Point from '../assets/Point.png';

function Events (){
   return(
      <div className="events-wrapper">
         <div className='events-container'>
            <div className='events-title'>Актуальні події</div>
            <div className='events-items-container'>
               <div className='events-item'>
                  <div className='item-picture'>
                     <img src={PictureOne} alt="sea-picture"></img>
                  </div>
                  <div className='item-info-container'>
                     <div className='item-date'>
                        <div className='event-type'>ВИСТАВКА</div>
                        <div className='event-date'>26.08-29.11.2019</div>
                     </div>
                     <div className='item-title'>
                        <div className='title'>Йду і повертаюсь</div>
                        <img src={Point} alt='point'/>
                     </div>
                     <div className='item-text'>Національний Художній Музей України презентує унікальну частину колекції Градобанку - українське мистецтво другої половини 1980-1995 років.</div>
                  </div>
               </div>
               <div className='events-item'>
                  <div className='item-picture'>
                     <img src={PictureTwo} alt="sea-picture"></img>
                  </div>
                  <div className='item-info-container'>
                     <div className='item-date'>
                        <div className='event-type'>ВИСТАВКА</div>
                        <div className='event-date'>26.08-29.11.2019</div>
                     </div>
                     <div className='item-title'>
                        <div className='title'>І спогади і мрії</div>
                        <img src={Point} alt='point'/>
                     </div>
                     <div className='item-text'>Національний художній музей України до 100 річчя від дня народження   видатної української художниці  Тетяни Яблонської  відкриває ретроспективну ювілейну виставку «І спогади і мрії».</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Events;