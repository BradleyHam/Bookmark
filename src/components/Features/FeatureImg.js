import React, { useEffect, useRef } from 'react';
import features1 from '../../images/illustration-features-tab-1.svg'
import features2 from '../../images/illustration-features-tab-2.svg'
import features3 from '../../images/illustration-features-tab-3.svg'
import { gsap } from 'gsap'

const FeatureImg = (props) => {
    let imgRef = useRef(null)

    useEffect(() => {
        gsap.from(imgRef, { x: 200, opacity: 0 })
    }, [props.active])

    function getImage() {
        console.log(props.active)
        if (props.active === 'Simple Bookmarking') {
            return features1
        } else if (props.active === 'Speedy Search') {
            return features2
        } else {
            return features3
        }
    }
    return (
        <img ref={el => imgRef = el} src={getImage()} alt="" />
    );
}

export default FeatureImg;