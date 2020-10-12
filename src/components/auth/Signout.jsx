import React from 'react'
import {signOut} from '../../actions/index'
import { useDispatch } from 'react-redux'

const Signout = () => {

const dispatch = useDispatch()

const logOut = () => {
    dispatch(signOut())
}

    return(
        <div>
            <button 
            onClick={ logOut }>Sign Out</button>
        </div>
    )
}

export default Signout
