import React from 'react';
import Switch from '../../helpModules/Slider/Switch';

import './Notifications.css'

class Notifications extends React.Component{
  render(){
    return (
      <div id="visibility-main">
      <div id="notfications layout">
      <div id="column-1">
         <h3>Notifications</h3>
      </div>
        <section>
          <div id="left">
             <span>
               Get personalized job recommendations
             </span>
             <p>
             Check this if you’re actively looking for new job opportunities and want us to send you recommendations based on your profile.
             </p>
          </div>
          <div id="right">
             <Switch />
          </div>
        </section>
        <section>
          <div id="left">
             <span>
             Subscribe to Jobbatical news and product updates
             </span>
             <p>
             Check this if you want updates on what's new on Jobbatical and useful content about working abroad.
             </p>
          </div>
          <div id="right">
             <Switch />
          </div>
        </section>
        <section>
          <div id="left">
             <span>
             Subscribe to Jobbatical for Business news and product updates
             </span>
             <p>
             Check this if you want us to send you Jobbatical for Business highlights every once in a while.
             </p>
          </div>
          <div id="right">
             <Switch />
          </div>
        </section>
        <section>
          <div id="left">
             <span>
             Keep profile visible to employers
             </span>
             <p>
             Check this if you want us to share your profile with companies looking for skills like yours.
             </p>
          </div>
          <div id="right">
             <Switch />
          </div>
        </section>
      </div>
      </div>
    )
  }
}

export default Notifications;