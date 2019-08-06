import React from 'react';
import  ReactDOM  from 'react-dom';

import NotificationsModal from './NotificationsModal/NotificationsModal';

const modalRoot = document.getElementById('modal-root');

class NotificationsDropDown extends React.Component {
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
     <NotificationsModal {...this.props} />,
      this.el,
    );
  }
}

export default NotificationsDropDown;