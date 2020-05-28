import React from 'react';
import googleImg from '../../images/logo-chrome.svg'
import firefoxImg from '../../images/logo-firefox.svg'
import operaImg from '../../images/logo-opera.svg'

const Card = (props) => {
    function getImage() {
        if (props.browser === 'Chrome') {
            return googleImg;
        } else if (props.browser === 'Firefox') {
            return firefoxImg;
        } else {
            return operaImg
        }
    }
    return (
        <div style={{ alignSelf: props.align }} className='Card' >
            <img src={getImage()} alt="" />
            <h3>Add to {props.browser}</h3>
            <p>Minimum Version {props.min}</p>
            <img className='dots' src={require('../../images/bg-dots.svg')} alt="" />
            <button>
                Add & Install Extension
            </button>
        </div>
    );
}

export default Card;