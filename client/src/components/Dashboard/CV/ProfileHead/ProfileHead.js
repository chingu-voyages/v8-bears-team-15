import React from 'react';

import './ProfileHead.css';
import Uploader from '../Upload/Upload';
import ResumeBuilder from './../Resume/ResumeBuilder';
import About from '../About/About';

class ProfileHead extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      uploader: true
    };
  }

  handleResume(text){
      if(text === 'upload'){
        // change to false
        this.setState({
          uploader: true,
      })
        this.setState({
          uploader: false,
        })
      }
  }
  render(){
    const { uploader } = this.state;
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
         <div className="cv-col">
            <span
             onClick={this.handleResume.bind(this, '')}
            >
                MY PROFILE
            </span>
          </div>
          <div className="cv-col">
            <span
             onClick={this.handleResume.bind(this, 'upload')}
            >
                UPLOAD CV
            </span>
          </div>
         </div>
         {/* {
           uploader ? <Uploader /> : <ResumeBuilder />
         } */}
         <About />
      </div>
    );
  }
}

export default ProfileHead;