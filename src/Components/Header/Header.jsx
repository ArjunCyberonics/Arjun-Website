import * as React from 'react';
import './Header.css'
import logo from '../../Assets/Images/Logo/user-dp.png'

function Header() {

    return (
        <div className="header-main">
            <div className="header-left-div">
                <img src={logo} alt="" />
            </div>
            <div className="header-middle-div">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Projects</li>
                    <li>Image Gallery</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="header-right-div">
                <button>Resume</button>
            </div>
        </div>
    );
}

export default Header