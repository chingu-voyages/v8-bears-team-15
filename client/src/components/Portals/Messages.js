import React from 'react';
import  ReactDOM  from 'react-dom';

import MessagesModal from './MessagesModal/MessaagesModal';

const modalRoot = document.getElementById('modal-root');

class MessagesDropDown extends React.Component {
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

  // componentWillReceiveProps(nextProps){
  //   if(this.component !== nextProps.component){
  //     console.log("I recieved")
  //     if(nextProps.component === 'profile'){
  //       this.setState({
  //         renderedChild: <ProfileModal {...this.props} />
  //       })
  //       this.forceUpdate()
  //     }
  //   }
  // }

  render() {
    return ReactDOM.createPortal(
     <MessagesModal {...this.props} />,
      this.el,
    );
  }
}

export default MessagesDropDown;