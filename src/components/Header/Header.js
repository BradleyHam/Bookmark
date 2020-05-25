import React, { useState } from 'react'
import CompanyLogo from './CompanyLogo'
import './Header.scss'
import { SpringReverse } from 'react-burgers'
import DropdownNav from './DropdownNav'

const Header = () => {
    const [headerActive, setHeaderActive] = useState(true);

    return (
        <div>
            <div className='Header'>
                <CompanyLogo dropdownOpen={headerActive} />
                <SpringReverse lineHeight={3} width={30} onClick={() => { setHeaderActive(!headerActive) }} active={headerActive}
                    color={headerActive ? '#ffffff' : "#222"} />
            </div>
            {headerActive && <DropdownNav headerActive={headerActive} />}
        </div>
    );
}

export default Header;