import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component,authReducer, ...rest }) => (
        <Route
        {...rest}
        render = {props =>{
             if(!authReducer.authenticated){
                return <Redirect to="/" />
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


PrivateRoute.propTypes = {
    authReducer: PropTypes.shape({
      authenticated: PropTypes.bool,
    }).isRequired,
    component: PropTypes.func.isRequired,
  };

export default connect(mapStateToProps)(PrivateRoute);