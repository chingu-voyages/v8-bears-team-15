import React from 'react';
import ReactDOM from 'react-dom';

class AuthWindow extends React.Component {
  constructor(props){
    super(props);
    this.el = document.createElement('div');
    this.popup = '';
  }

  componentDidMount() {
     this.popup = window.open('http://localhost:3000/login/linkedin', '', 'width=500,height=600,left=200,top=200');
     this.popup.document.body.appendChild(this.el);
     this.el.classList.add("window");
  }

  componentWillUnmount() {
    this.popup.close();
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export default AuthWindow;