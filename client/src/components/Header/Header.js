import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Jobbatical from '../../images/jobbatical_logo_blue.svg'
import './Header.css';

import { signOut } from '../../actions/User/UserActions';
import DropDownPortal from '../Portals/Bar';
import { history } from '../../App';
import NotificationsDropDown from './../Portals/Notifications';
import MessagesDropDown from './../Portals/Messages';


class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showProfilePortal: false,
      showNotificationsPortal: null,
      showMessagesPortal: null,
    };
  }

  handleProfileModal(){
    console.log("avatar clicked")
    this.setState(
      {
        showProfilePortal: true,
      }
    )
  }

  handleMessages(){
    this.setState(
      {
        showMessagesPortal: true,
      }
    )
  }

  handleNotifcations(){
    this.setState(
      {
        showNotificationsPortal: true,
      }
    )
  }

  render() {
    const { showProfilePortal, showNotificationsPortal, showMessagesPortal } = this.state;
    return (
      <div className="header-main">
        <div className="left">
          <div className="brand">
            <img src={Jobbatical} alt="brand-logo" />
          </div>
          <div className="search-bar">
            <FontAwesomeIcon icon="search" id="icon" />
            <input type="text-area" 
             placeholder="Search job title,Keyword or location..."
            />
          </div>
        </div>
        <div className="right">
           <nav className="header-nav">
             <li>
               <Link to="/jobs">EXPLORE JOBS</Link>
             </li>
             <li>
               <a href="https://fakelink">MY SAVED JOBS</a>
             </li>
             <li>
               <a href="https://fakelink">MY APPLICATIONS</a>
             </li>
           </nav>
           <div className="right-icons">
           <div onClick={this.handleNotifcations.bind(this)} >
             <FontAwesomeIcon icon="bell" className="notifications" />
             <NotificationsDropDown
              open={showNotificationsPortal}
              closeMe={
                () => {
                  this.setState({
                    showNotificationsPortal: false
                  })
                }
              }
              onClose={(text) =>
                {
                  this.setState({
                    showNotificationsPortal: false
                  })
                  setTimeout(()=> {
                    if(text === 'notes' || text === 'status'){
                      history.push('/jobs')
                    }
                  }, 
                  500)
                }
              }
            />
            </div>
             <div onClick={this.handleMessages.bind(this)} >
               <FontAwesomeIcon icon="comment" className="notifications" />
             </div>
             <MessagesDropDown
              open={showMessagesPortal}
              closeMe={
                () => {
                  this.setState({
                    showMessagesPortal: false
                  })
                }
              }
              onClose={(text) =>
                {
                  this.setState({
                    showMessagesPortal: false
                  })
                  setTimeout(()=> {
                    if(text === 'messages' || text === 'status' || text === 'all'){
                      history.push('/setting')
                    }
                  }, 500)
                }
              }
            />
             <FontAwesomeIcon icon="user-circle" id="avatar" />
             
             <div onClick={this.handleProfileModal.bind(this)} >
               <FontAwesomeIcon icon="chevron-down" id="downshift" />
             </div>
            <DropDownPortal
              open={showProfilePortal}
              closeMe={
                () => {
                  this.setState({
                    showProfilePortal: false
                  })
                }
              }
              onClose={(text) =>
                {
                  this.setState({
                    showProfilePortal: false
                  })
                  setTimeout(()=> {
                    if(text === 'profile' || text === 'preference'){
                      history.push('/setting')
                    }else{
                      signOut();
                      history.push('/')
                    }
                  }, 500)
                }
              }
            />
           </div>
        </div>
      </div>
    )
  }
}

export default Header;