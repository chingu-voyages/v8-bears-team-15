import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Language.css';


class EditLanguage extends React.Component{
  render(){
    return (
      <form id="languages-form">
        <div id="languages-layout">
          <div id="about-head" className="languages-row">
            <div className="languages-row" id="left-nav">
              <h1>Language skills</h1>
              <span>My languages & proficiency levels</span>
            </div>
            <div id="awesome">
              <FontAwesomeIcon  icon="times-circle"/>
            </div>
          </div>
          <div className="languages-col">
            <label>add new language</label>
            <input type="text" placeholder="Type a language" />
          </div>
          <div className="languages-row">
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

export default EditLanguage;