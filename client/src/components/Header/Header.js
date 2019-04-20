import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Jobbatical from '../../images/jobbatical_logo_blue.svg'
import './Header.css';

class Header extends Component{
  render() {
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
               <a href="https://fakelink">EXPLORE JOBS</a>
             </li>
             <li>
               <a href="https://fakelink">MY SAVED JOBS</a>
             </li>
             <li>
               <a href="https://fakelink">MY APPLICATIONS</a>
             </li>
           </nav>
           <div className="right-icons">
             <FontAwesomeIcon icon="bell" className="notifications" />
             <FontAwesomeIcon icon="comment" className="notifications" />
             <FontAwesomeIcon icon="user-circle" className="avatar" />
           </div>
        </div>
      </div>
    )
  }
}

export default Header;