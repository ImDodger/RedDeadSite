import React from 'react';
import img1 from "../images/starrating.png";
import './ReviewsSection.css';

function ReviewsSection() {
    return(
        <div className="reviews__container">
            <div className="reviews__items">
                <div className="reviews__item__one">
                    <h2>Red Dead Redemption 2 is likely to go down as the best game of the generation</h2>
                    <h3>- GameSpace</h3>
                    <img src={img1} alt="Review Rating" />
                </div>
                <div className="reviews__item__two">
                    <h2>A meticulously polished open-world ode to the outlaw era</h2>
                    <h3>- IGN</h3>
                    <img src={img1} alt="Review Rating" />
                </div>
                <div className="reviews__item__three">
                    <h2>When the credits roll, you'll have created enough incredible memories to fill ten lesser games</h2>
                    <h3>- GamesRadar</h3>
                    <img src={img1} alt="Review Rating" />
                </div>
            </div>
        </div>
    );
}

export default ReviewsSection