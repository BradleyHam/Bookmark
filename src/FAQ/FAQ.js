import React from 'react';
import './FAQ.scss'
import Accordian from './Accordian'

const FAQ = () => {
    return (
        <div className='faq'>
            <h2>Frequently asked questions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, veritatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, necessitatibus.</p>

            <Accordian
                title='Question One'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
            <Accordian
                title='Question Two'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
            <Accordian
                title='Question Three'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />


        </div>
    );
}

export default FAQ;