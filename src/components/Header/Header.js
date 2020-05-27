import React, { useState } from 'react'
import CompanyLogo from './CompanyLogo'
import './Header.scss'
import { SpringReverse } from 'react-burgers'
import Nav from './Nav'
import DesktopNav from './DesktopNav'

const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);

    return (
        <div>
            <div className={`Header ${headerActive && 'Header__active'}`}>
                <CompanyLogo dropdownOpen={headerActive} />
                <div className="hamburger">
                    <SpringReverse lineHeight={3} width={30} onClick={() => { setHeaderActive(!headerActive) }} active={headerActive}
                        color={headerActive ? '#ffffff' : "#222"} />
                </div>
                <DesktopNav />
            </div>

            {headerActive && <Nav headerActive={headerActive} />}
        </div>
    );
}

export default Header;