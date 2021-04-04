import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Gallery() {
    return (
        <>
            <div className="gallery__container">
                <div className="gallery__items">
                    <img src="./images/gallerypic1.png" alt=""/>
                    <img src="./images/gallerypic2.png" alt=""/>
                    <img src="./images/gallerypic3.png" alt=""/>
                    <img src="./images/gallerypic4.png" alt=""/>
                    <img src="./images/gallerypic5.png" alt=""/>
                    <img src="./images/gallerypic6.png" alt=""/>
                    <img src="./images/gallerypic7.png" alt=""/>
                    <img src="./images/gallerypic8.png" alt=""/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Gallery;