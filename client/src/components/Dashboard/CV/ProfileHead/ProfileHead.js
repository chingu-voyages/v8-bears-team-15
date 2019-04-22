import React from 'react';

import './ProfileHead.css';

class ProfileHead extends React.Component{
  render(){
    return (
      <div className="cv-main">
        <div id="main-layout">
          <section id="upload-message">
             <p>
               Drag your profile(png or jpeg,max 10MB) 
               or <a href="http://fakelink">click to browse</a>.
               This picture will be visible to employers, so choose one
               that is a good representation of you!
             </p>
          </section>
          <section id="main-base">
             <div>
               <h4>Your profile is <span>29%</span> complete</h4>
             </div>
             <div id="line-row">
               <hr />
               <hr />
             </div>
             <p>
               This is your profile that will represent you when you apply 
               for jobs on Jobbatical. By submitting an application, you 
               will make your profile visible to the company you’re applying to. 
               Note that changes made here will also affect previously submitted 
               applications. 
             </p>
         </section>
        </div>
      </div>
    );
  }
}

export default ProfileHead;