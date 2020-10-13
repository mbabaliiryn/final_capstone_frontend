import React from 'react'
import Button from '../components/Button'

const Footer = () => {

    let paths = [
        { path: '/activities', name: 'Home' }, 
        { path: '/create-activity', name: 'Create Activity' },
        { path: '/', name: 'Your Progress' },
        { path: '/', name: 'More' },
    ]
    
    return (
            <div className="footer">
                {
                    paths.map((val, key)=> (
                        <Button key = { key } detail = { val }/>
                    ))
                }
            </div>
        )
}

export default Footer