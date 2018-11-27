import React from 'react'
import './style.css'

const Menu = ({children}) => {
    return (
        <div className="Menu">
            {
                children.map(item => item)
            }
        </div>
    )
}

export default Menu