import React, { Component } from 'react'
import "./Hero2.css"


export class Hero2 extends Component {
    render() {
        return (
            <div className='hero2Container'>
                <div className="Frame">
                    <div className="parent-1">
                        <h1>{this.props.heading}</h1>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero2