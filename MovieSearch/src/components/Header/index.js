import React from 'react'
import './style.css'

const Header = ({ children }) => {
    return (
        <div className="Header">
            {
                children.map(child => child)
            }
        </div>
    )
}
export default Header