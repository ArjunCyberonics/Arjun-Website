import * as React from 'react';
import './Header.css'
import '../../Components/Styles/CommonStyles.css'
import logo from '../../Assets/Images/Logo/user-dp.png'

function Header() {

    return (
        <div className="header-main">
            <div className="header-left-div">
                {/* <img src={logo} alt="" /> */}
            </div>
            <div className="header-middle-div">
                <ul>
                    <li className='nav-text'>Home</li>
                    <li className='nav-text'>About</li>
                    <li className='nav-text'>Service</li>
                    <li className='nav-text'>Projects</li>
                    <li className='nav-text'>Image Gallery</li>
                    <li className='nav-text'>Contact</li>
                </ul>
            </div>
            <div className="header-right-div">
                <button className='btn-normal'>Resume</button>
            </div>
        </div>
    );
}

export default Header