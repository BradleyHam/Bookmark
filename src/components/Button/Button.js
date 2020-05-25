import React from 'react';
import './Button.scss'

const Button = (props) => {
    return (
        <button className={`${props.primary ? 'primaryButton' : 'secondaryButton'}`}>
            {props.text}
        </button>);
}

export default Button;