import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'

const FeatureText = (props) => {
    let textBlock = useRef(null)

    useEffect(() => {
        gsap.from(textBlock.children, { x: -100, stagger: '.2', opacity: 0 })
    }, [props.active])

    return (
        <div ref={el => textBlock = el} className='FeatureText'>
            <h2>Bookmark in one click</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, doloribus? Culpa, magnam. Lorem ipsum dolor sit,?</p>
        </div>
    );
}

export default FeatureText;