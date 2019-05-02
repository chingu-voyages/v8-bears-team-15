import React from 'react';
import ReactDOM from 'react-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as userActions from '../../actions/User/UserActions';


class AuthWindow extends React.Component {
  constructor(props){
    super(props);
    this.el = document.createElement('div');
    this.popup = '';
    this.pops = React.createRef();
  }

  componentDidMount() {
     const { provider } = this.props
     this.popup = window.open(`http://localhost:3000/login/${provider}`, '', 'width=500,height=600,left=200,top=200');
     this.popup.document.body.appendChild(this.el);
     this.el.classList.add("window");
     this.el.setAttribute("Ref", `${this.pops}`)
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      console.log("Portal Props", nextProps)
    }
  }


  render() {
     return ReactDOM.createPortal(this.props.children, this.el)
  }
}

// export default AuthWindow;

const MapStateToProps = (state) => {
  return {
    pop: state.homeState.popUpWindow,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...userActions}, dispatch)
  }
}

export default connect(MapStateToProps, mapDispatchToProps)(AuthWindow);