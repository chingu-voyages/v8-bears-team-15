import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Education.css';


class Education extends React.Component{
  render(){
    return (
      <div id="education-layout">
        <div className="position">
          <FontAwesomeIcon icon="plus-circle" id="plus" />
          <p>Add a position</p>
        </div>
      </div>
    )
  }
}

export default Education;