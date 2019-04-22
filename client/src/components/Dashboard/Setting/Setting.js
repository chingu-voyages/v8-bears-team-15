import React from 'react';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Setting.css';
import Preferences from '../Preferences/Preferences';
import ProfileHead from '../CV/ProfileHead/ProfileHead';

class Setting extends React.Component{
  render(){
    return (
      <div className="setting-main">
         <Header />
         <section id="switch">
           <div id="layout">
           <div className="toggler">
              <div id="profile"> 
                <span>
                    MY PROFILE CV
                </span>
              </div>
              <div id="preference"> 
                 <span>
                    MY PREFENCES
                 </span>
              </div>
            </div>
            {/* <Preferences /> */}
            <ProfileHead />
           </div>
         </section>
       

         <Footer />
      </div>
    );
  }
}

export default Setting;