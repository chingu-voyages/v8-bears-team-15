import React from 'react';
import Switch from '../../Slider/Switch';

import './Notifications.css'

class Visiblity extends React.Component{
  render(){
    return (
      <div id="visibility-main">
      <div id="column-1">
         <h3>Notifications</h3>
      </div>
        <section>
          <div id="left">
             <span>
               Get personalized job recommendations
             </span>
             <p>
               Check this if you're actively looking for new
               job opportunities and want us to send you 
               recommendations based on your profile
             </p>
          </div>
          <div id="right">
             <Switch />
          </div>
        </section>
        <section>
          <div id="left">
             <span>
               Get personalized job recommendations
             </span>
             <p>
               Check this if you're actively looking for new
               job opportunities and want us to send you 
               recommendations based on your profile
             </p>
          </div>
          <div id="right">
             <Switch />
          </div>
        </section>
        <section>
          <div id="left">
             <span>
               Get personalized job recommendations
             </span>
             <p>
               Check this if you're actively looking for new
               job opportunities and want us to send you 
               recommendations based on your profile
             </p>
          </div>
          <div id="right">
             <Switch />
          </div>
        </section>
        <section>
          <div id="left">
             <span>
               Get personalized job recommendations
             </span>
             <p>
               Check this if you're actively looking for new
               job opportunities and want us to send you 
               recommendations based on your profile
             </p>
          </div>
          <div id="right">
             <Switch />
          </div>
        </section>
      </div>
    )
  }
}

export default Visiblity;