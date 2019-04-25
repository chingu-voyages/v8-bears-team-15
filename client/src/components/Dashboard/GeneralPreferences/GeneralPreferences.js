import React from 'react';
// import { formValueSelector } from 'redux-form';
import Select from 'react-select';

import './GeneralPreferences.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class GeneralPreferences extends React.Component{
  render(){
    return (
      <div id="preferences-main">
        <article>
        <h3>Personal preferences</h3>
        <section id="status">
          <h4>Current job search status</h4>
          <div  className="active-status">
            <h6>Actively looking</h6>
            <p>Looking and applying for jobs, 
              ready to interview
            </p>
          </div>
          <div className="active-status">
            <h6>Open to offers</h6>
            <p>Not looking right now but open 
              if the right opportunity comes along
            </p>
          </div>
          <div className="active-status">
            <h6>Not Open to offers</h6>
            <p>
              Not looking and not interested ina new job
            </p>
          </div>
        </section>
        <section id="availability" className="pr-layout">
          <h3>Availability</h3>
          <p>How fast yu will be able to join if hired</p>
          <div id="wrapper">
            <div id="cover" >
             <FontAwesomeIcon icon="chevron-down" id="select-icon" />
            </div>
            <select name="option" >
              <option defaultValue="" disabled></option>
              <option value="1" >As soon as possible</option>
              <option value="2">1 - 2 months</option>
              <option value="3" >3 - 5 months</option>
              <option value="3" >6+ months</option>
            </select>
          </div>
        </section>
        <section id="location" className="pr-layout upper-layout">
          <h3>Location Preferences</h3>
          <p>
            List countries and/or cities you'd love to
            move to(e.g London, Tokyo, Germany)
          </p>
          <div>
            <input type="text" placeholder="Enter a Location" className="pr-fade" />
          </div>
        </section>
        <section  id="roles" className="pr-layout upper-layout">
          <h3>Job Preferences</h3>
          <p>
            List job titles or keywords that interest you most
            in your job search(e.g developer, system administrator)
          </p>
          <div>
          <input type="text" placeholder="Enter a role" className="pr-fade" />
          </div>
        </section>
        <section id="citizenship" className="pr-layout upper-layout">
          <h3>Citizenship</h3>
          <p>
            The way we can suggest the best relocation & job options
          </p>
          <div>
            <input type="text" 
              placeholder="Enter a country of your citizenship" 
              className="pr-fade"
            />
          </div>
        </section>
        <section id="description" className="pr-layout upper-layout">
          <h3>What are you looking for?</h3>
          <p>
            How would you describe a job or destination you would 
            like to hear more about?
          </p>
          <div id="describe">
            {/* <input type="text" 
              placeholder="Describe what you expect to find on jobbatical" 
            /> */}
            <textarea 
             placeholder="Describe what you expect to find on jobbatical" 
             className="pr-fade"
            />
          </div>
        </section>
        <hr />
        <section id="social-connect" className="pr-layout">
          <div className="connect-box">
            <div >
              <h4>You are not connected to Facebook</h4>
              <p className="pr-fade">
                Connect to be able to log in to your
                jobbatical account with Facebook
              </p>
            </div>
            <div className="connect-button">
              <button>
                <span>CONNECT WITH FACEBOOK</span>
              </button>
            </div>
          </div>
          <div  className="connect-box">
            <div>
              <h4>You are not connected to Google</h4>
              <p className="pr-fade">
                Connect to be able to log in to your
                jobbatical account with Google
              </p>
            </div>
            <div  className="connect-button">
              <button>
                <span>CONNECT WITH GOOGLE</span>
              </button>
            </div>
          </div>
          <div  className="connect-box">
            <div>
              <h4>You are not connected to LinkedIn</h4>
              <p className="pr-fade">
                Connect to be able to log in to your
                jobbatical account with LinkedIn
              </p>
            </div>
            <div  className="connect-button">
              <button>
                <span>CONNECT WITH LINKEDIN</span>
              </button>
            </div>
          </div>
        </section>
        <hr />
        <section id="pr-login" className="pr-layout">
          <h3>Email & password</h3>
          <div id="reset">
            <div className="email">
              <h4>Email address</h4>
              <input placeholder="youremail" type="email" className="pr-fade" />
              <span>CHANGE</span>
            </div>
            <div className="email">
              <h4>password</h4>
              <input placeholder="some password" type="password"  className="pr-fade" />
              <span>CHANGE</span>
            </div>
          </div>
        </section>
        </article>
      </div>
    )
  }
}

export default GeneralPreferences;