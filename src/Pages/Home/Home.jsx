import React from 'react'
import Header from '../../Components/Header/Header'
import './Home.css'
import '../../Components/Styles/CommonStyles.css'
import { MainImg } from '../../Constants/ImagePath/Images'

function Home() {
    return (
        <div className='home-bg dark-bg'>
            <Header />
            <div className="body-div">

                <div className="body-left-div">
                    <div className="body-left-inner-div">
                        <p className='title-p yellow-title without-mg-p mt-1'>Hello,</p>
                        <p className='title-p white-title without-mg-p mt-1'>I am ARJUN RAVI</p>
                        <p className='subtitle-p green-subtitle without-mg-p mt-1'>React Js Developer</p>
                        <p className='lg-p normal-white-p mt-2'>Highly Passionate in Cinematography</p>
                        <button className='btn-normal mt-2'>My Projects</button>
                    </div>
                </div>

                <div className="body-right-div">
                    <div className="body-right-main-img-div">
                        <img src={MainImg} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home