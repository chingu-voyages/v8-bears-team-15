import React from 'react';
import './JobPreference.css';

const JobPreference = (props) => {
  return (
    <div className="jobs-main">
      <span> {props.value}</span>
      <span
      onClick={props.destroyCard}
      >
        X
      </span>   
    </div>
  )
}

export default JobPreference;