import React, { useEffect, useState, useRef } from 'react'
import './Features.scss'
import FeatureImg from './FeatureImg'
import FeatureText from './FeatureText'

const Features = () => {
    let featureUl = useRef(null);

    const [active, setActive] = useState('Simple Bookmarking')

    function selectFeature(e) {
        Array.from(featureUl.children)
            .forEach(li => li.classList.remove('active'))

        e.target.classList.add('active')
        setActive(e.target.textContent)
    }

    return (
        <div className='Features'>
            <h2>Features</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed non voluptatem at dolorum! Aspernatur, impedit? </p>
            <ul ref={el => featureUl = el} className='Features__list' onClick={(e) => { selectFeature(e) }}>
                <li className='active'>Simple Bookmarking</li>
                <li>Speedy Search</li>
                <li>Easy Sharing</li>
            </ul>
            <div className="Features__contentList">
                <div className="Features__contentList--images">
                    <FeatureImg active={active} />
                    <FeatureText active={active} />
                </div>

            </div>
        </div>
    );
}

export default Features;