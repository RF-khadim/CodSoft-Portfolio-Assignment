import React from 'react'
import "./Footer.css"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMobile, } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footerContainer">
          <div className="left">
            <a href=""> <FaFacebook size={32} style={{ color: " black", }} /></a>
            <a href="">< FaLinkedin size={32} style={{ color: " black " }} />
            </a>
            <a href=""><FaInstagram size={32} style={{ color: " black " }} />
            </a>
            <a href=""><FaGithub size={32} style={{ color: " black " }} /></a>
            <a href=""><FaMobile size={32} style={{ color: " black " }} /></a>

          </div>
          {/* <div className="right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sapiente necessitatibus illum, cupiditate maiores officiis corrupti fuga non dolorum? Tenetur deleniti eveniet exercitationem velit ipsa soluta, voluptates quae facere veniam!</p>

          </div> */}
          <div className="copyright">
            <p>Copyright @2024; Designed By Muhammad Arif </p>
          </div>
        </div>
    </div>
  )
}

export default Footer