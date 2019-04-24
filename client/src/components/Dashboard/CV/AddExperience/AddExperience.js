import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AddExperience.css';


class AddExperience extends React.Component{
  render(){
    return (
      <form id="experience-form">
        <div id="experience-layout">
          <div id="experience-head" className="experience-row">
            <div>
              
            </div>
            <div id="bin">
              <FontAwesomeIcon  icon="trash" />
            </div>
          </div>
          <div className="experience-col" >
              <label>Position</label>
              <input type="text" />
            </div>
          <div  className="experience-row">
            <div className="experience-col company" >
              <label>Company</label>
              <input type="text" />
            </div>
            <div className="experience-col company" >
              <label>Location</label>
              <input type="text" />
            </div>
          </div>

          <div  className="experience-row">
            <div className="experience-col" >
              <label>From</label>
              <div className="experience-row from">
                <input type="text" />
                <input type="text" />
              </div>
            </div>
            <div className="experience-col" >
              <label>To</label>
              <div className="experience-row from">
                <input type="text" />
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="about-col">
            <label>Additional Information <span>optional</span></label>
            <textarea id="intro-box" />
          </div>

          <div className="experience-row">
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

export default AddExperience;