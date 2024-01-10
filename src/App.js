import './styles/app-styles.scss';
import Hero from './components/hero';
import Modal from './components/modal-menu';
import Events from './components/events';
import Lecture from './components/lecture';
import Gallery from './components/gallery';
import Subscription from './components/subscription';
import Footer from './components/footer';
import { useState } from 'react';

function App (){
   const [modalActive, setModalActive] = useState(false);
   return (
      <div className="main">
         <Modal modalActive={modalActive} setModalActive={setModalActive} />
         <div className="mainFlow">
            <Hero modalActive={modalActive} setModalActive={setModalActive} />
            <Events />
            <Lecture />
            <Gallery />
            <Subscription />
            <Footer />
         </div>
      </div>
   );
};

export default App;