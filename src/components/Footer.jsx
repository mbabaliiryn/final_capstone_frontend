import React from 'react'
import Button from '../components/Button'

const Footer = () => {

    let paths = [
        { path: '/activities', name: 'Home' , className: 'far-chart-bar'}, 
        { path: '/create-activity', name: 'Create Activity', className: 'fas fa-chart-line fa-1x'  },
        { path: '/informaion', name: 'Your Progress', className: 'fas fa-chart-pie' },
        { path: '/activities', name: 'More', className: 'fas fa-ellipsis-h' },
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