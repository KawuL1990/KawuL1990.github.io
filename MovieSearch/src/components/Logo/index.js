import React from 'react'
import image  from './Logo.png'
import './style.css'

const Logo = ({text}) => {
    return (
        <div className="Logo">
            <img className="LogoImage" src={image} />
            <span className="LogoText">{text}</span>
        </div>
    )
}

export default Logo