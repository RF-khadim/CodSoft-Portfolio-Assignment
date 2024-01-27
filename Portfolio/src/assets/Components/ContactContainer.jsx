import "./ContactContainer.css"

import React from 'react'

const ContactContainer = () => {
    return (
        <div className="mainContainer">
            <div className="inputBox">
                <input type="text" placeholder="Write Your Name" />
                <input type="text" placeholder="Wrie Your Email" />
            </div>
            <div className="message">
                <textarea name="Message" cols="40" rows="6">  Your message</textarea>
            </div>
            <div className="btn">
                <a href="">Send</a>
            </div>
        </div >
    )
}

export default ContactContainer