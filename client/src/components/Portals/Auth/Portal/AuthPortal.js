import React from 'react';
import  ReactDOM  from 'react-dom';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AuthModal from '../Modal/AuthModal';
// import { socialSignIn } from '../../../../actions/User/UserActions';


const modalRoot = document.getElementById('modal-root');


class AuthPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
   // setInterval(socialSignIn(), 1000)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      console.log(nextProps)
    }
  }

  render() {
    return ReactDOM.createPortal(
      <AuthModal {...this.props} />,
      this.el,
    );
  }
}

// export default AuthPortal;


const MapStateToProps = (state) => {
  if(state.homeState !== undefined) {
    return {
      popUp: state.homeState.popUpWindow,
    }
  }
}


export default connect(null, MapStateToProps)(AuthPortal);