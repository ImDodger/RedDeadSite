import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/storyimage2.png';
import img2 from '../images/storyimage3.png';
import img3 from '../images/image3.jpg';
import img4 from '../images/pic5.jpg';

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={img1}
                            text='MEET ARTHUR MORGAN'
                            path='/story'
                        />
                        <CardItem
                            src={img2}
                            text='A TALE LIKE NO OTHER'
                            path='/story'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src=''
                            text='TRAILER'
                            path=''
                        />
                        <CardItem
                            src={img3}
                            text='GALLERY'
                            path='/gallery'
                        />
                        <CardItem
                            src={img4}
                            text='PURCHASE'
                            path=''
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;