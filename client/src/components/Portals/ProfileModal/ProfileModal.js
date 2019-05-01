import React, {Component} from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileModal.css'

class ProfileModal extends Component {
  render() {
    return this.props.open ? (
      <div>
        <div className="modal-background"  onClick={() => console.log('background clicked')}/>
        <div role="dialog" className="modal-dialog">
          {/* <header>
            <span>{this.props.header}</span>
            <button
              onClick={() => this.props.onClose()}
              type="button"
              aria-label="close"
            >
              CLOSE
            </button>
          </header> */}
          <FontAwesomeIcon icon="sort-up" id="modal-arrow" />
          <div className="modal-content">
              {/* <div id="item-0" className="items">
                
              </div> */}
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

export default ProfileModal;