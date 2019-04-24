import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import About from '../About/About';
import Skills from '../Skills/Skills';
import AddLanguage from '../Language/Language';
import Experience from '../Experience/Experience';
import * as experienceComps from '../AddExperience/AddExperience';
import AddLinks from '../Links/Links';

import './Profile.css';
import '../Experience/Experience.css';



class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      renderAbout: false,
      renderSkills: false,
      renderLanguage: false,
      renderLinks: false,
      renderExperience: false,
      experienceArray: [],
      stackExperience: false,
    };
  }

  handleEdit(text){
    switch (text) {
      case 'about':
        if(arguments[1] === 'closeProp') {
          this.setState({
            renderAbout: false,
          })
        }else{
          this.setState({
            renderAbout: true,
          })
        }
        break;
      case 'skills':
        if(arguments[1] === 'closeProp') {
          this.setState({
            renderSkills: false,
          })
        }else{
          this.setState({
            renderSkills: true,
          })
        }
        break;
      case 'language':
        if(arguments[1] === 'closeProp') {
          this.setState({
            renderLanguage: false,
          })
        }else{
          this.setState({
            renderLanguage: true,
          })
        }
        break;
      case 'links':
        if(arguments[1] === 'closeProp') {
          this.setState({
            renderLinks: false,
          })
        }else{
          this.setState({
            renderLinks: true,
          })
        }
        break;
      case 'experience':
        if(arguments[1] === 'closeProp') {
          this.setState({
            renderExperience: false,
            experienceArray: []
          })
        }else{
          this.setState({
            renderExperience: true,
            stackExperience: true,
          })
        }
        break;
    
      default:
        break;
    }
  }
  
  closeThis() {
    this.setState({
      experienceArray: [],
      stackExperience: false,
    })
  }

  render(){
    const  { 
      renderAbout, 
      renderSkills,
      renderLanguage,
      renderLinks,
      renderExperience,
      experienceArray,
      stackExperience,
    } = this.state;

    // let freeArray = [];
    return (
       <div id="wrapper">
        <div id="profile-container">
          {/* about section */}
          {
            !renderAbout ? 
            (
            <div>
                <section className="info-row col-1 col-marg">
                  <div id="info" className="info-col">
                    <h2>Profile Name</h2>
                 </div>
                 <div 
                    className="edit info-row"
                    onClick={this.handleEdit.bind(this, 'about')}
                 >
                 <span>EDIT</span>
                 <FontAwesomeIcon icon="highlighter" />
                </div>
              </section>
              <section className="info-col">
                <span>Introduction Message</span>
              </section>
            </div>
            ) : 
            
            <About
              handleClose={this.handleEdit.bind(this, 'about', 'closeProp')}
            />
          }
          <hr className="col-marg hrs" />
          {/* skills section     */}
          {
            !renderSkills ? 
            (
              <section className="info-col col-2 col-marg">
                <div id="info" className="info-row">
                   <div  className="info-row">
                     <h2>Skills</h2>
                     <span id="span-2">My most important professional skills</span>
                    </div>

                    <div 
                      className="edit info-row"
                      onClick={this.handleEdit.bind(this, 'skills')}
                    >
                      <span>EDIT</span>
                     <FontAwesomeIcon icon="highlighter" />
                    </div>
                 </div>
              </section>
            ) : 
            
            <Skills 
              handleClose={this.handleEdit.bind(this, 'skills', 'closeProp')}
            />
          }
          <hr className="col-marg hrs" />
          {/* language section */}
          {
            !renderLanguage ? 
            (
              <section className="info-col col-2 col-marg">
              <div id="info" className="info-row">
                <div  className="info-row">
                  <h2>Language skills</h2>
                  <span id="span-2">My languages & proficiency levels</span>
                </div>
                <div 
                  className="edit info-row"
                  onClick={this.handleEdit.bind(this, 'language')}
                >
                <span>EDIT</span>
                <FontAwesomeIcon icon="highlighter" />
              </div>
              </div>
            </section>
            ) :
            <AddLanguage 
             handleClose={this.handleEdit.bind(this, 'language', 'closeProp')}
            />
          }
          <hr className="col-marg hrs" />
          {/* links section */}
          {
            !renderLinks ? 
            (
            <section className="info-col col-2 col-marg col-4">
              <div id="info" className="info-row">
                <div  className="info-row">
                  <h2>Links</h2>
                  <span id="span-2">My social media & homepage links</span>
                </div>
                <div 
                  className="edit info-row"
                  onClick={this.handleEdit.bind(this, 'links')}
                >
                  <span>EDIT</span>
                  <FontAwesomeIcon icon="highlighter" />
                </div>
              </div>
            </section>
            ) :
            <AddLinks 
              handleClose={this.handleEdit.bind(this, 'links', 'closeProp')}
            />
          }
          <hr className="col-marg hrs" />
          {/* experience section */}
          {
            !renderExperience ?
             (
               <div>
                  <section className="info-col col-2 col-marg col-5">
                   <div id="info" className="info-row experience-section">
                     <div  className="info-row">
                       <h2>Work experience</h2>
                       <span id="span-2">Previous & current positions</span>
                     </div>
                    </div>
                  </section>
                  <section>
                    <div 
                      className="position"
                      onClick={this.handleEdit.bind(this, 'experience')}
                    >
                      <FontAwesomeIcon icon="plus-circle" id="plus" />
                      <p>Add a position</p>
                    </div>
                 </section>
               </div>
             ) :
             
             <div>
             <section className="info-col col-2 col-marg col-5">
              <div id="info" className="info-row experience-section">
                <div  className="info-row">
                  <h2>Work experience</h2>
                  <span id="span-2">Previous & current positions</span>
                </div>
                <div 
                  id="awesome"
                  onClick={this.handleEdit.bind(this, 'experience',  'closeProp')}
                >
                  <FontAwesomeIcon  icon="times-circle"/>
               </div>
               </div>
             </section>
             <section>
               <div className="position">
                 <FontAwesomeIcon icon="plus-circle" id="plus" />
                 <p>Add a position</p>
               </div>
            </section>
            {
              (experienceArray.length === 0 && stackExperience) && 
              experienceArray.push(
              < experienceComps.AddExperience 
                key={experienceArray.length++} 
                closeThis={this.closeThis.bind(this)}
              />
              ) && experienceArray  
            }
          </div>
          }
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