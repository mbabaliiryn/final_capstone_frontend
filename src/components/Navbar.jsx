import React, { useState } from 'react'
import Signout from './auth/Signout'
import {useTransition, animated} from 'react-spring'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
            from: { position: 'absolute', opacity: 0.8 },
            enter: { opacity: 0.8 },
            leave: { opacity: 0.8 },
        })
    const menuTransitions = useTransition(showMenu, null, {
            from: { position: 0, transform: "translateX(-100%)" },
            enter: { opacity: 1, transform: "translateX(0%)" },
            leave: { opacity: 0, transform: "translateX(-100%)" },
        })

    return(
        <div>
            <div>
                <h3>Track it</h3>
            </div>
            <div>
                <i 
                onClick={()=> setShowMenu(!showMenu)}
                ></i>
            </div>
            {
                maskTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                onClick={()=> setShowMenu(false)}
                key={key} 
                style={props}>
                </animated.div>
                )
            }
                        {
                menuTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                key={key} 
                style={props}>
                    <Signout/>
                </animated.div>
                )
            }
        </div>
    )
}

export default Navbar
