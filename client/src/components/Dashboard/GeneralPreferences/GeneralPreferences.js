/*global google*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Script from 'react-load-script';

import './GeneralPreferences.css'

import JobPreferenceCard from '../../Cards/JobPreference/JobPreference';
import {DayPicker, 
  MonthPicker, 
  YearPicker,
  GenderPicker,
} from '../../helpModules/Calender/Date';


// const google = window.google;
class GeneralPreferences extends React.Component{
  constructor(props) {
    super(props);
    this.locationInput = React.createRef();
    this.countryInput = React.createRef();
    this.state = {
      inputValue: null,
      inputArr: [],
      city: '',
      query: '',
      country: '',
      cQuery: ''
    };
  }
   
 
  deleteCard(e){
    let popVal = e.target.parentElement.textContent;
    let arr = popVal.split('')
    arr.shift()
    arr.pop()
    let finalVal = arr.join('')
    this.setState({
      inputArr: this.state.inputArr.filter((item) => {
        return (item.value !== finalVal)
      })
    })
  }

  
  handleKeyDown(e) {
    if(e.key === 'Enter') {
      this.setState({
      inputArr: this.state.inputArr.concat(
        [{
          component: <JobPreferenceCard
          value={e.target.value} 
          key={`key ${this.state.inputArr.length}`} 
          destroyCard={this.deleteCard.bind(this)}
          />,
          value: e.target.value
        }]
        ),
      })
      e.currentTarget.value="";
    }
  }

  handleScriptLoad() {
    // console.log(this.locationInput.current)
    let options = {
      types: ['(cities)']
    }

    this.autocomplete = new google.maps.places.Autocomplete(
      this.locationInput.current, options
    )
    // console.log(typeof this.autocomplete)
    this.autocomplete2 = new google.maps.places.Autocomplete(
      this.countryInput.current, options
    ) 

    this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace();
      let address = place.address_components;

    if(address) {
      this.setState({
        city: address[0].long_name,
        query: place.formatted_address,
      })
     }
    })

    this.autocomplete2.addListener('place_changed', () => {
      let place = this.autocomplete2.getPlace();
      let address = place.address_components;

    if(address) {
      this.setState({
        country: address[0].long_name,
        cQuery: place.formatted_address,
      })
     }
    })
  }

  

  // handlePlaceSelect() {
  //   let place = this.autocomplete.getPlace();
  //   let address = place.address_components;

  //   if(address) {
  //     this.setState({
  //       city: address[0].long_name,
  //       query: place.formatted_address,
  //     })
  //   }
  // }

  render(){
    const { inputArr } = this.state;
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
        <section  className="pr-layout upper-layout">
          <h3>Location Preferences</h3>
          <p>
            List countries and/or cities you'd love to
            move to(e.g London, Tokyo, Germany)
          </p>
          <div>
          <Script 
              url="https://maps.googleapis.com/maps/api/js?key=API_KEY&libraries=places"
              onLoad={this.handleScriptLoad.bind(this)}
           />
            <input 
              type="text" 
              placeholder="Enter a Location" 
              className="pr-fade" 
              ref={this.locationInput}
            />
          </div>
        </section>
        <section  id="roles" className="pr-layout upper-layout">
          <h3>Job Preferences</h3>
          <p>
            List job titles or keywords that interest you most
            in your job search(e.g developer, system administrator)
          </p>
          <div id="location">
            <div className="pr-row locations">
             {inputArr.map((item, i) => item.component)}
            </div>
            <input 
              type="text" 
              placeholder={`Enter a Role`}
              className="pr-fade inputs" 
              onKeyDown={this.handleKeyDown.bind(this)}
            />
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
              // value={this.state.query}
              // onChange={console.log("to change")}
              ref={this.countryInput}
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
        <section id="calendar" className="pr-layout upper-layout pr-row">
        <div id="picker-left" className="pr-row">
        <div id="picker-wrapper" >
            <div id="my-month-cover" className="pr-row year-cover" >
                <span>Month</span>
               <FontAwesomeIcon icon="chevron-down" id="select-icon" />
            </div>
            <MonthPicker />
          </div>
          <div id="picker-wrapper">
            <div id="my-day-cover" className="pr-row year-cover" >
                <span>Day</span>
               <FontAwesomeIcon icon="chevron-down" id="select-icon" />
            </div>
            <DayPicker />
          </div>
          <div id="picker-wrapper">
            <div id="my-year-cover" className="pr-row year-cover" >
                <span>Year</span>
               <FontAwesomeIcon icon="chevron-down" id="select-icon" />
            </div>
            <YearPicker />
          </div>
        </div>
        <div id="picker-right">
         <div id="picker-wrapper">
            <div id="my-gender-cover" className="pr-row year-cover" >
                <span>Not Specified</span>
               <FontAwesomeIcon icon="chevron-down" id="select-icon" />
            </div>
            <GenderPicker />
          </div>
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