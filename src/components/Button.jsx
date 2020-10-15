import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ detail }) => {
    return(
        <div className="link-div px-0">
            <button className="link-button w-100 h-100">
                    <Link to={{
                        pathname: `${ detail.path }`
                    }}>
                     { detail.name }
                    </Link>
            </button>
        </div>
    )
}

export default Button
