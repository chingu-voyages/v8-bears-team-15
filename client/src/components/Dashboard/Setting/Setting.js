import React from 'react';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Setting.css';
import Preferences from '../Preferences/Preferences';
import ProfileHead from '../CV/ProfileHead/ProfileHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Setting extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      preference: true,
      changeProfileClass: false,
      changePrefClass: true,
      showLeftChevron: true,
      showRightChevron: false,
    };
  }

  handlePref(text){
      if(text === 'profile'){
        this.setState({
          preference: false,
          changeProfileClass: true,
          changePrefClass: false,
          showLeftChevron: false,
          showRightChevron: true,
      })}else{
        this.setState({
          preference: true,
          changePrefClass: true,
          changeProfileClass: false,
          showLeftChevron: true,
          showRightChevron: false,
        })
      }
  }


  render(){
    const { preference, 
      changeProfileClass, 
      changePrefClass, 
      showLeftChevron,
      showRightChevron,
    } = this.state;
    return (
      <div className="setting-main">
         <Header />
         <section id="switch">
           <div id="layout">
           <div className="toggler">
              <div id="profile" 
                className={ changeProfileClass ? 'white-head':'green-head' }
              > 
                
                {
                  showLeftChevron ? <FontAwesomeIcon icon="chevron-left"/> : ''
                }
                <span
                 onClick={this.handlePref.bind(this, 'profile')}
                >
                    MY PROFILE CV
                </span>
              </div>
              <div id="preference" className={ changePrefClass ? 'white-head':'green-head' }> 
                 <span
                  onClick={this.handlePref.bind(this,'')}
                 >
                    MY PREFENCES
                 </span>
                 {
                  showRightChevron ? <FontAwesomeIcon icon="chevron-right"/> : ''
                 }
              </div>
            </div>
            {
              preference ? <Preferences /> : <ProfileHead  />
            }
           </div>
         </section>
         <Footer />
      </div>
    );
  }
}

export default Setting;