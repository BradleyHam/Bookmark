import React, { useState, useRef, useEffect } from 'react';
import Chevron from './Chevron'
import ChevronUp from './ChevronUp'


const Accordian = (props) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState(0)
    let ref = useRef(null)

    useEffect(() => {
        console.log(ref.scrollHeight)
    }, [])

    function toggleAccordian() {
        setHeight(height === 0 ? ref.scrollHeight : 0)
        setActive(!active)
    }

    return (
        <div className='Accordian'>
            <button onClick={toggleAccordian}>{props.title}
                {active ? <ChevronUp /> : <Chevron />}
            </button>

            <p className='answer' ref={el => ref = el} style={{ height: `${height}px`, overflow: 'hidden' }}>{props.content}</p>
        </div>
    );
}

export default Accordian;