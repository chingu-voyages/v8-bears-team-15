import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Links.css';


class EditLinks extends React.Component{
  render(){
    return (
      <form id="links-form">
        <div id="links-layout">
        {/* first section */}
          <div id="about-head" className="links-row">
            <div className="links-row" id="left-nav">
              <h1>Links</h1>
              <span>My social media & homepage links</span>
            </div>
            <div id="awesome">
              <FontAwesomeIcon  icon="times-circle"/>
            </div>
          </div>
          <p id="links-message">
            Add some extra firepower to your profile by providing links to 
            professional and social media profiles.
          </p>
        {/* ends here */}
          <section className="links-col social-section">
            <div className="links-row profile">
              <label className="label">LinkedIn profile</label>
              <input type="text" placeholder="https://www.linkedin.com/in/example" />
            </div>
            <div className="links-row profile">
              <label className="label">Personal Website</label>
              <input type="text" placeholder="http://www.example.com" />
            </div>
            <div className="links-row profile">
              <label className="label">LinkedIn profile</label>
              <input type="text" placeholder="https://www.facebook.com/example" />
            </div>
            <div className="links-row profile">
              <label className="label">Facebook</label>
              <input type="text" placeholder="Type a language" />
            </div>
            <div className="links-row profile">
              <label className="label">Twitter handle</label>
              <input type="text" placeholder="@example" />
            </div>
            <div className="links-row profile">
              <label className="label">Google</label>
              <input type="text" placeholder="https://plus.google.com/+example" />
            </div>
          </section>
          <div className="links-row">
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

export default EditLinks;