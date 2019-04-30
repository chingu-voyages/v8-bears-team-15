import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'


export default (ComposedComponent) => {
  class Auth extends Component {
    static propTypes = {
      router: PropTypes.object
    } 
    
    componentWillMount() {
      if(!this.props.authenticated) {
        console.log("all props", this.props)
        console.log("failue redirecting")
        this.props.history.push('/login')
      }
    }
 
    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        console.log("failue redirecting")
        this.props.history.push('/login')
      }
}


    render() {
      console.log("to render")
      return (
          <ComposedComponent {...this.props} /> 
      )
    }
  }

  const mapStateToProps = (state) => {
    return { authenticated: state.userState.authenticated }
  }


  return connect(mapStateToProps)(Auth)
}