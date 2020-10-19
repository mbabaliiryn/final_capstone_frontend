import React from 'react'
import Button from '../components/Button'


const Footer = () => {

    const paths = [
        { path: '/activities', name: 'Home', className: 'far fa-chart-bar footer-btn' },
        { path: '/create-activity', name: 'Create Activity', className: 'fas fa-chart-line footer-btn' },
        { path: '/information', name: 'Information', className: 'fas fa-chart-pie footer-btn' },
        { path: '/activities', name: 'More', className: 'fas fa-ellipsis-h footer-btn' },
      ];
    
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