import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ detail }) => {
    return(
        <div>
            <button>
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