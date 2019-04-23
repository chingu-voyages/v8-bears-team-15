import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Experience.css';


class Experience extends React.Component{
  render(){
    return (
      <div className="experience-layout">
        <div className="position">
          <FontAwesomeIcon icon="plus-circle" id="plus" />
          <p>Add a position</p>
        </div>
      </div>
    )
  }
}

export default Experience;