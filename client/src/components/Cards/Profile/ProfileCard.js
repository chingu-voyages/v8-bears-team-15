import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className="profile-card-main">
      <h1 id="listing-head">
        <p>
          Improve the job <br />
          recommendations <br />
          you get from Jobbatical
        </p>
      </h1>
      <hr />
      <p>
        To see a personalized feed oj jobs that <br />
        match your interests and experiences:
      </p>
      <p className="upload">
        <FontAwesomeIcon icon="check-circle" />
        <span>
          Add more details to your profile
        </span>
      </p>
      <p className="upload">
        <span className="fa-stack">
         <FontAwesomeIcon  icon="circle" className="fa-stack"/>
         <span className="fa-stack-1x">2</span>
        </span>
        <span id="upload-span">
          Upload a fresh CV
        </span>
      </p>
      <p className="upload">
        <FontAwesomeIcon icon="check-circle" />
        <span>
          Update your preferences
        </span>
      </p>
    </div>
  )
}


export default ProfileCard;