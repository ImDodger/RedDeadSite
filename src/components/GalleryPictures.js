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

function GalleryPictures() {
    return (
        <div className="gallery__container">
            <div class="gallery__items">
                <img src={gallery1} alt="Gallery Picture" />
                <img src={gallery2} alt="Gallery Picture" />
                <img src={gallery3} alt="Gallery Picture" />
                <img src={gallery4} alt="Gallery Picture" />
                <img src={gallery5} alt="Gallery Picture" />
                <img src={gallery6} alt="Gallery Picture" />
                <img src={gallery7} alt="Gallery Picture" />
                <img src={gallery8} alt="Gallery Picture" />
            </div>
        </div>
    );
}

export default GalleryPictures