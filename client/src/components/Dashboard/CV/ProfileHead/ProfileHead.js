import React from 'react';


import Uploader from '../Upload/Upload';
import Profile from './../Profile/Profile';
import './ProfileHead.css';




class ProfileHead extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      uploader: false,
      profileActive: true,
      uploadActive: false,
    };
  }

  handleResume(text){
      if(text === 'upload'){
        this.setState({
          uploader: true,
          uploadActive: true,
          profileActive: false,
      })}else{
        this.setState({
          uploader: false,
          uploadActive: false,
          profileActive: true,
        })
      }
  }
  render(){
    const { uploader, profileActive, uploadActive } = this.state;
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
          <section id="main-center">
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
        <div id="main-base" className="cv-row">
         <div 
           className={profileActive ? `cv-col` : `cv-col cv-col-blank` }
         >
            <span
             onClick={this.handleResume.bind(this, '')}
            >
                MY PROFILE
            </span>
          </div>
          <div 
          // className="cv-col"
            className={uploadActive ? `cv-col` : `cv-col cv-col-blank` }
          >
            <span
             onClick={this.handleResume.bind(this, 'upload')}
            >
                UPLOAD CV
            </span>
          </div>
         </div>
         {
           uploader ? <Uploader /> : <Profile />
         }
      </div>
    );
  }
}

export default ProfileHead;