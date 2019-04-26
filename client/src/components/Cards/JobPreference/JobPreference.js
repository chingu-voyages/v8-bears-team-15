import React from 'react';

import './JobPreference.css';

// const findCard = (props) => {
//   console.log(props)
// }

const JobPreference = (props) => {
  return (
    <div className="jobs-main">
      <span> {props.value}</span>
      <span
      onClick={props.destroyCard}
      // key={props.value}
      >
        X
      </span>   
    </div>
  )
}

export default JobPreference;