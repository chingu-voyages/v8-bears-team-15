import React, {Component} from 'react';
import onClickOutside from "react-onclickoutside";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NotificationsModal.css'

class NotificationsModal extends Component {
  handleClickOutside = evt => {
    // ..handling code goes here...
    console.log("you clicked outside")
    this.props.closeMe();
  };

  render() {
    return this.props.open ? (
      <div>
        <div className="modal-background"  onClick={() => console.log('background clicked')}/>
        <div role="dialog" className="notifications-modal-dialog">
          <FontAwesomeIcon icon="sort-up" id="modal-arrow" />
          <div className="modal-content">
              {/* <div id="item-0" className="items">
                
              </div> */}
              <div id="item-1" className="items"
                onClick={() => this.props.onClose('notes')}
              >
                <p>Notfications</p>
              </div>
              <div id="item-2" className="items"
                onClick={() => this.props.onClose('status')}
              >
                <p>You have no new notifications</p>
              </div>
              {/* <div id="item-3" className="items"
                onClick={() => this.props.onClose('logout')}
              >
                <p>Log Out</p>
              </div> */}
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default onClickOutside(NotificationsModal);