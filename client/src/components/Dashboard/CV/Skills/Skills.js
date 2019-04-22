import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Skills.css';


class Skills extends React.Component{
  render(){
    return (
      <form id="skills-form">
        <div id="skills-layout">
          <div id="about-head" className="skills-row">
            <div className="skills-row" id="left-nav">
              <h1>Skills</h1>
              <span>My most important professional skills</span>
            </div>
            <div id="awesome">
              <FontAwesomeIcon  icon="times-circle"/>
            </div>
          </div>
          <div className="skills-col">
            <label>add new skill</label>
            <input type="text" />
          </div>
        </div>
      </form>
    )
  }
}

export default Skills;