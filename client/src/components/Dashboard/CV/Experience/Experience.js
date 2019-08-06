import React from 'react';

import './Experience.css';

import { AddExperience } from '../AddExperience/AddExperience';


class Experience extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      closeComponent: false,
    };
  }

  renderThisComponet(){
   
  }

  render(){
    return (
      <div>
        <AddExperience handleClose={this.renderThisComponet.bind(this)} />
        <AddExperience />
      </div>
    )
  }
}

export default Experience;