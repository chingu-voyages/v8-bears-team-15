import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Preferences.css';
import Visiblity from '../visibility/Visibility';

// class Profile extends React.Component{
function Preferences(){
    return (
      <div id="profile-main">
        <div id="profile-message">
          <span>
            <FontAwesomeIcon icon="shield-alt" id="shield"/>
            <span>Your preferences are not visible to employers</span>
          </span>
        </div>
        <div id="profile-toggle">
          <div id="preference-toggle">
            <span>
              GENERAL PREFRENCES
            </span>
          </div>
          <div id="notifications-toggle">
            <span>
              PROFILE VISIBILITY & NOTIFICATIONS
            </span>
          </div>
        </div>
        <Visiblity />
      </div>
    )
  }
// }

export default Preferences;