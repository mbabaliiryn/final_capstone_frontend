import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component,authReducer, ...rest }) => (
        <Route
        {...rest}
        render = {props =>{
             if(!authReducer.authenticated){
                return <Redirect to="/signin" />
            }else{
                return <Component {...props} />
            }
          }
        }
        />
    )

const mapStateToProps = (state) =>({
    authReducer:state.authReducer
})

export default connect(mapStateToProps)(PrivateRoute);