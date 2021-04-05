import React from 'react';
import '../App.css';
import './GalleryPictures.css'
import gallery1 from '../images/pic1.jpg';
import gallery2 from '../images/pic2.jpg';
import gallery3 from '../images/pic3.jpeg';
import gallery4 from '../images/pic4.jpg';
import gallery5 from '../images/pic5.jpg';
import gallery6 from '../images/pic6.jpeg';
import gallery7 from '../images/pic7.jpg';
import gallery8 from '../images/pic8.png';
import gallery9 from '../images/pic9.jpg';
import gallery10 from '../images/pic10.jpg';
import gallery11 from '../images/pic11.jpeg';
import gallery12 from '../images/pic12.jpg';
import gallery13 from '../images/pic13.jpg';
import gallery14 from '../images/pic14.jpg';
import gallery15 from '../images/pic15.jpg';
import gallery16 from '../images/pic16.jpg';
import gallery17 from '../images/pic17.jpg';
import gallery18 from '../images/pic18.jpg';
import gallery19 from '../images/pic19.jpeg';
import gallery20 from '../images/pic20.jpg';
import gallery21 from '../images/pic21.jpg';
import gallery22 from '../images/pic22.jpeg';
import gallery23 from '../images/pic23.jpg';
import gallery24 from '../images/pic24.jpg';

function GalleryPictures() {
    return (
        <div className="gallery__container">
            <h1>Our Ingame Images</h1>
            <div className="gallery__items">
                <img src={gallery1} alt="Gallery Instance" />
                <img src={gallery2} alt="Gallery Instance" />
                <img src={gallery3} alt="Gallery Instance" />
                <img src={gallery4} alt="Gallery Instance" />
                <img src={gallery5} alt="Gallery Instance" />
                <img src={gallery6} alt="Gallery Instance" />
                <img src={gallery7} alt="Gallery Instance" />
                <img src={gallery8} alt="Gallery Instance" />
                <img src={gallery9} alt="Gallery Instance" />
                <img src={gallery10} alt="Gallery Instance" />
                <img src={gallery11} alt="Gallery Instance" />
                <img src={gallery12} alt="Gallery Instance" />
                <img src={gallery13} alt="Gallery Instance" />
                <img src={gallery14} alt="Gallery Instance" />
                <img src={gallery15} alt="Gallery Instance" />
                <img src={gallery16} alt="Gallery Instance" />
                <img src={gallery17} alt="Gallery Instance" />
                <img src={gallery18} alt="Gallery Instance" />
                <img src={gallery19} alt="Gallery Instance" />
                <img src={gallery20} alt="Gallery Instance" />
                <img src={gallery21} alt="Gallery Instance" />
                <img src={gallery22} alt="Gallery Instance" />
                <img src={gallery23} alt="Gallery Instance" />
                <img src={gallery24} alt="Gallery Instance" />
            </div>
        </div>
    );
}

export default GalleryPictures