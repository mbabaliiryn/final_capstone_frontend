import React from 'react'
import Button from '../components/Button'
import createActivity from '../images/add-stack.png';
import More from '../images/track-it.png';
import progress from '../images/progress.png';
import home from '../images/home.png';

const Footer = () => {

    let paths = [
        { path: '/activities', name: <img className="footer-img" src={home} alt="add-stack" /> , className: 'far-chart-bar'}, 
        { path: '/create-activity', name: <img className="footer-img" src={createActivity} alt="add-stack" />, className: 'fas fa-chart-line fa-1x'  },
        { path: '/informaion', name: <img className="footer-img" src={progress} alt="add-stack" />, className: 'fas fa-chart-pie' },
        { path: '/activities', name:  <img className="footer-img" src={More} alt="add-stack" />, className: 'fas fa-ellipsis-h' },
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