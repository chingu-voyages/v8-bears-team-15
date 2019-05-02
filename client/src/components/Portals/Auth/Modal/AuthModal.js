import React, {Component} from 'react';



class AuthModal extends Component {

  componentDidMount() {
    this.popup = window.open(`http://localhost:3000/login/google`, '', 'width=500,height=600,left=200,top=200');
 }

 componentWillReceiveProps(nextProps){
   if(this.props !== nextProps){
     console.log("AUTH MOD", nextProps)
   }
 }

  render() {
    return this.props.open ? (
      <div>
        
      </div>
    ) : null;
  }
}

export default AuthModal;