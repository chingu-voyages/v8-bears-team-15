import React, {Component} from 'react';
import onClickOutside from "react-onclickoutside";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MessagesModal.css'

class MessagesModal extends Component {
  handleClickOutside = evt => {
    // ..handling code goes here...
    console.log("you clicked outside")
    this.props.closeMe();
  };

  render() {
    return this.props.open ? (
      <div>
        <div className="modal-background"  onClick={() => console.log('background clicked')}/>
        <div role="dialog" className="messages-modal-dialog">
          <FontAwesomeIcon icon="sort-up" id="modal-arrow" />
          <div className="modal-content">
              {/* <div id="item-0" className="items">
                
              </div> */}
              <div id="item-1" className="items"
                onClick={() => this.props.onClose('messages')}
              >
                <p>Messages</p>
              </div>
              <div id="item-2" className="items"
                onClick={() => this.props.onClose('status')}
              >
                <p>You have no messages!</p>
              </div>
              <div id="item-3" className="items"
                onClick={() => this.props.onClose('all')}
              >
                <p>VIEW ALL</p>
              </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default onClickOutside(MessagesModal);