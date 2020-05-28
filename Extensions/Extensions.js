import React from 'react';
import './Extensions.scss'
import Card from './Card'

const Extensions = () => {
    return (
        <div className='Extensions'>
            <h2>Download the Extensions</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, provident.</p>
            <div className="cardRow">
                <Card browser='Chrome' min={62} align='flex-start' />
                <Card browser='Firefox' min={62} align='center' />
                <Card browser='Opera' min={62} align='flex-end' />
            </div>
        </div>
    );
}

export default Extensions;