import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './About.css';


class About extends React.Component{
  render(){
    return (
      <form id="about-form">
        <div id="about-layout">
          <div id="about-head" className="about-row">
            <h1>About me</h1>
            <div id="awesome">
              <FontAwesomeIcon  icon="times-circle"/>
            </div>
          </div>
          <div  className="about-row">
            <div className="about-col" id="family">
              <label>First name</label>
              <input type="text" />
            </div>
            <div className="about-col" id="family">
              <label>Last name</label>
              <input type="text" />
            </div>
          </div>
          <div className="about-col">
            <label>Living in</label>
            <input type="text" />
          </div>
          <div className="about-col">
            <label>Introduction <span>Just a few words about me</span></label>
            <textarea id="intro-box" />
          </div>
          <div>
            <label>Professional experience since</label>
          </div>
          <div className="about-row">
            <div>
              <button>SAVE</button>
            </div>
            <div>
              <button>CANCEL</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default About;