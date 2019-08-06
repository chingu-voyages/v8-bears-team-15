import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Preferences.css';
import Notifications from '../Notifications/Notifications';
import GeneralPreferences from './../GeneralPreferences/GeneralPreferences';

class Preferences extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      notificationsSelected: false,
      prefsActive: true,
      notificationsActive: false,
    };
  }

  handleDisplay(text){
      if(text === 'general'){
        this.setState({
        notificationsSelected: false,
        prefsActive:true,
        notificationsActive: false,
      })
      }else{
        this.setState({
          notificationsSelected: true,
          prefsActive:false,
          notificationsActive: true,
        })
      }
  }

  render(){
    const { notificationsSelected, prefsActive, notificationsActive } = this.state;
    return (
      <div id="profile-main">
        <div id="profile-message">
          <span>
            <FontAwesomeIcon icon="shield-alt" id="shield"/>
            <span>Your preferences are not visible to employers</span>
          </span>
        </div>
        <div id="profile-toggle">
          <div id="preference-toggle"
           className={ prefsActive ? `col-back` : `` }
          >
            <span
             onClick={this.handleDisplay.bind(this, 'general')}
            >
                GENERAL PREFRENCES
            </span>
          </div>
          <div id="notifications-toggle"
            className={ notificationsActive ? `col-back` : `` }
          >
            <span
             onClick={this.handleDisplay.bind(this, '')}
            >
                PROFILE VISIBILITY & NOTIFICATIONS
            </span>
          </div>
        </div>
        {
          notificationsSelected ? <Notifications /> : <GeneralPreferences />
        }
      </div>
    )
  }
}    


export default Preferences;