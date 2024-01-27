import "./Hero.css"
import React from 'react'
// import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <div >
            <div className="bg-image">
                <div className="bgContainer">
                    <div className="intro">
                        <p>Hi, It's Me
                            <br /><span>Muhammad Arif</span>
                            <br />And I'm A Frontend Developer</p>
                        <div className="btnContainer">
                            <button className="btn"  >Resume</button>
                            <button className="btn">LinkedIn</button>
                        </div>

                    </div>
                    <div className="myImage">

                        <div className="box">
                            <div className="content">
                                <img src="MyImage-1.png" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Hero