import React, { useCallback } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/arthurcard.png';
import img2 from '../images/storyimage3.png';
import img3 from '../images/storyimage1.png';
import img4 from '../images/storyimage2.png';
import ReactPlayer from './ReactPlayer';

function Cards() {
    return (
        <div className='cards'>
            <h1>Welcome To Red Dead Redemption</h1>
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
                            src={img3}
                            text='VIEW THE GALLERY'
                            path='/gallery'
                        />
                        
                        <CardItem
                            src={img4}
                            text='JOURNALIST REVIEWS'
                            path='/reviews'
                        />
                    </ul>
                    <ul className='cards__trailer'>
                        <ReactPlayer 
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;