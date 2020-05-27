import React from 'react'



const DesktopNav = () => {
    return (
        <div className='desktopNav'>
            <nav>
                <ul>
                    <li>features</li>
                    <li>pricing</li>
                    <li>contact</li>
                    <button className='redButton'>Log in</button>
                </ul>
            </nav>
        </div>
    );
}

export default DesktopNav;