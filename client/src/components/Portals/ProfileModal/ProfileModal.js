import React, {Component} from 'react';
import onClickOutside from "react-onclickoutside";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileModal.css'

class ProfileModal extends Component {
  
  handleClickOutside = evt => {
    // ..handling code goes here...
    console.log("you clicked outside")
    this.props.closeMe();
  };

  render() {
    return this.props.open ? (
      <div>
        <div className="modal-background"  onClick={() => console.log('background clicked')}/>
        <div role="dialog" className="profile-modal-dialog">
          <FontAwesomeIcon icon="sort-up" id="modal-arrow" />
          <div className="modal-content">
              <div id="item-1" className="items"
                onClick={() => this.props.onClose('profile')}
              >
                <p>My Profile</p>
              </div>
              <div id="item-2" className="items"
                onClick={() => this.props.onClose('preference')}
              >
                <p>My Preferences</p>
              </div>
              <div id="item-3" className="items"
                onClick={() => this.props.onClose('logout')}
              >
                <p>Log Out</p>
              </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default onClickOutside(ProfileModal);