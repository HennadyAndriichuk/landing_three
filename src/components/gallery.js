import '../styles/gallery-styles.scss';
import pictureOne from '../assets/Picture_four.png';
import pictureTwo from '../assets/Picture_five.png';
import pictureThree from '../assets/Picture_six.png';
import pictureFour from '../assets/Picture_seven.png';
import pictureFive from '../assets/Picture_eight.png';
import dots from '../assets/dots.png';

function Gallery (){
   return(
      <div className="gallery-wrapper">
         <div className="gallery-container">
            <div className="gallery-title">Галерея</div>
            <div className="pictures-wrapper">
               <div className="pictures-block-high">
                  <div className="gallery-picture">
                     <img src={pictureOne} alt='gallery-picture' />
                  </div>
                  <div className="gallery-picture-wide">
                     <img src={pictureTwo} alt='gallery-picture' />
                  </div>
                  <div className="gallery-picture-narrow">
                     <img src={pictureFive} alt='gallery-picture' />
                  </div>
               </div>
               <div className="carousel-marker">
                  <img src={dots} alt="dots" />
               </div>
               <div className="pictures-block-low">
                  <div className="gallery-picture-wide">
                     <img src={pictureThree} alt='gallery-picture' />
                  </div>
                  <div className="gallery-picture">
                     <img src={pictureFour} alt='gallery-picture' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Gallery;