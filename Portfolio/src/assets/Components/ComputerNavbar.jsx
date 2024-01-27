import React from 'react'
import "./ComputerNavbar.css"
import { Link } from "react-router-dom"

const ComputerNavbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="logo">
          <Link to="/">   <h2>Muhammad Arif</h2></Link>
        </div>
        <div className="navOptions">
          <Link to="/">Home</Link>
          <Link to="/Project">Projects</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>

    </>
  )
}

export default ComputerNavbar