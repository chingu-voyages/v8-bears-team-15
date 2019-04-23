import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Preferences.css';
import Notifications from '../Notifications/Notifications';
import GeneralPreferences from './../GeneralPreferences/GeneralPreferences';

class Preferences extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      notificationsSelected: false
    };
  }

  handleDisplay(text){
      if(text === 'general'){
        console.log("gen clicked")
        this.setState({
        notificationsSelected: false,
      })
      }else{
        console.log("notes clicked")
        this.setState({
          notificationsSelected: true,
        })
      }
  }

  render(){
    const { notificationsSelected } = this.state;
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
            <span
             onClick={this.handleDisplay.bind(this, 'general')}
            >
                GENERAL PREFRENCES
            </span>
          </div>
          <div id="notifications-toggle">
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