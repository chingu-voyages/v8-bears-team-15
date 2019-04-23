import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Profile.css';
import '../Experience/Experience.css';



class Profile extends React.Component{
  render(){
    return (
       <div id="wrapper">
        <div id="profile-container">
          {/* name section */}
          <section className="info-row col-1 col-marg">
            <div id="info" className="info-col">
              <h2>Profile Name</h2>
            </div>
            <div className="edit info-row">
              <span>EDIT</span>
              <FontAwesomeIcon icon="highlighter" />
            </div>
          </section>
          <section className="info-col">
            <span>Introduction Message</span>
          </section>
          <hr className="col-marg hrs" />
          {/* skills section     */}
          <section className="info-col col-2 col-marg">
            <div id="info" className="info-row">
              <div  className="info-row">
                <h2>Skills</h2>
                <span id="span-2">My most important professional skills</span>
              </div>
              <div className="edit info-row">
              <span>EDIT</span>
              <FontAwesomeIcon icon="highlighter" />
            </div>
            </div>
          </section>
          <hr className="col-marg hrs" />
          {/* language section */}
          <section className="info-col col-2 col-marg">
            <div id="info" className="info-row">
              <div  className="info-row">
                <h2>Language skills</h2>
                <span id="span-2">My languages & proficiency levels</span>
              </div>
              <div className="edit info-row">
              <span>EDIT</span>
              <FontAwesomeIcon icon="highlighter" />
            </div>
            </div>
          </section>
          <hr className="col-marg hrs" />
          {/* links section */}
          <section className="info-col col-2 col-marg col-4">
            <div id="info" className="info-row">
              <div  className="info-row">
                <h2>Links</h2>
                <span id="span-2">My social media & homepage links</span>
              </div>
              <div className="edit info-row">
              <span>EDIT</span>
              <FontAwesomeIcon icon="highlighter" />
            </div>
            </div>
          </section>
          <hr className="col-marg hrs" />
          {/* experience section */}
          <section className="info-col col-2 col-marg col-5">
            <div id="info" className="info-row experience-section">
              <div  className="info-row">
                <h2>Work experience</h2>
                <span id="span-2">Previous & current positions</span>
              </div>
            </div>
          </section>
          <section>
              <div className="position">
              <FontAwesomeIcon icon="plus-circle" id="plus" />
              <p>Add a position</p>
            </div>
          </section>
          {/* education section */}
          <section className="info-col col-2 col-marg col-5">
            <div id="info" className="info-row experience-section">
              <div  className="info-row">
                <h2>Education</h2>
                <span id="span-2">Previous & current positions</span>
              </div>
            </div>
          </section>
          <section>
            <div className="position">
              <FontAwesomeIcon icon="plus-circle" id="plus" />
              <p>Add Education</p>
            </div>
          </section>
        </div>
       </div>
    )
  }
}

export default Profile;