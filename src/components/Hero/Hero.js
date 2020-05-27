import React from 'react';
import './Hero.scss'
import heroImg from '../../images/illustration-hero.svg'


const Hero = () => {
    return (
        <div className="Hero">
            <div className="Hero__textSide">
                <h1>A Simple Bookmark manager</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, asperiores.</p>
                <div className="Hero__buttonRow">
                    <button className="Hero__blueButton">get it on chrome</button>
                    <button className="Hero__greyButton">get it on firefox</button>
                </div>
            </div>
            <div className="Hero__imgSide">
                <img src={heroImg} alt="" />
            </div>


        </div>
    );
}

export default Hero;