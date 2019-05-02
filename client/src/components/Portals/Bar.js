import React from 'react';
import  ReactDOM  from 'react-dom';

import ProfileModal from '../Portals/ProfileModal/ProfileModal';

const modalRoot = document.getElementById('modal-root');

class DropDownPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

 

  render() {
    return ReactDOM.createPortal(
     <ProfileModal {...this.props} />,
      this.el,
    );
  }
}

export default DropDownPortal;