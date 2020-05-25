import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Button from '../Button/Button'


const DropdownNav = (props) => {




    let ul = useRef(null)

    useEffect(() => {

        gsap.from(ul.children, { stagger: .2, scaleY: 0 });



    }, [])

    return (
        <div className={`dropdownBackground ${props.headerActive ? 'active' : ''}`}>
            <div className='dropdownNav'>
                <nav>
                    <ul className='list' ref={el => ul = el}>
                        <li>features</li>
                        <li>pricing</li>
                        <li>contact</li>
                        <Button primary text='log in' />
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default DropdownNav;