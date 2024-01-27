import React, { useState } from 'react'
import "./MobileNavbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const MobileNavbar = () => {
  const [click, setClick] = useState(false);
  const hadnleClick = () => setClick(!click);
  return (
    <div>
      <div className='container'>
        <div className="MobileNav">
          <div className="Logo"><h2>Muhammad Arif</h2></div>
          <div className="hamburger" onClick={hadnleClick}>
            {click ? (<FaTimes size={20} />) : (<FaBars size={20} />)}
          </div>
        </div>
      </div>
      {
        click &&
      <div className={click ? "slide active" : "slide"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/project">Projects</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>

        </ul>
      </div>
      }

    </div>
  )
}

export default MobileNavbar