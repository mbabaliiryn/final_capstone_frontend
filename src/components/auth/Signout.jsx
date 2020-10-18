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
            onClick={ logOut } className="btn btn-secondary" 
            type="button"
            >Sign Up</button>
        </div>
    )
}

export default Signout
