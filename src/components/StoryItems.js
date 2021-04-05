import React from 'react';
import img1 from "../images/storyimage1.png";
import img2 from "../images/storyimage2.png";
import img3 from "../images/storyimage3.png";
import './StoryItems.css';

function StoryItems() {
    return(
        <div className="story__container">
            <h1>The Story Of Red Dead Redemption II</h1>
            <div className="story__items">
                <div className="story__item__one">
                    <img src={img1} alt="Story Item" />
                    <p>Meet Arthur Morgan, the protagonist of Red Dead Redemption II. Follow Arthur as you experience America in 1899, as the end of the Wild West era begins. Arthur is Dutch Van der Linde's top enforcer. Arthur will go through several adventures, ranging from intense gunfights to hilarious plays. Loving your family and heartbreak from the love of your life. Your actions will dictate how Arthur reacts to the world around him.</p>
                </div>
                <div className="story__item__two">
                <p>The Dutch Van der Linde gang is your family. You never turn your back on your family. After a robbery gone wrong in the town of Blackwater, the gang is on the run. They cross the moutains to run further to the East and away from familiar waters. Follow Dutch's slow fall into insanity and help Arthur try and keep the gang together. It is your family and family is everything.</p>
                    <img src={img2} alt="Story Item" />
                </div>
                <div className="story__item__three">
                    <img src={img3} alt="Story Item" />
                    <p>With hundreds of missions and hours upon hours of gameplay, Red Dead Redemption II is the best open-world experience of this generation. Quests all range from the serious to the silly. With hundreds of reviews all loving Red Dead Redemption II, multiple perfect scores and several awards, this game is a must buy. Help Arthur, save the gang and get ready to experience the end of the Wild West in Red Dead Redemption II</p>
                </div>
            </div>
        </div>
    );
}

export default StoryItems