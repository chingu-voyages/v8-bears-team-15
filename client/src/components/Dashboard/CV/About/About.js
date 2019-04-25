import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './About.css';


class AboutForm extends React.Component{
  
  render(){
    const { handleSubmit, reset } = this.props;
    return (
      <form id="about-form"
        onSubmit={
          handleSubmit(val => console.log(val))
        }
      >
        <div id="about-layout">
          <div id="about-head" className="about-row">
            <h1>About me</h1>
            <div 
              id="awesome"
              onClick={this.props.handleClose}
            >
              <FontAwesomeIcon  icon="times-circle"/>
            </div>
          </div>
          <div  className="about-row">
            <div className="about-col" id="family">
              <label>First name</label>
              <Field 
               type="text"
               name="firstName"
               component="input" 
              />
            </div>
            <div className="about-col" id="family">
              <label>Last name</label>
              <Field 
                type="text"
                name="lastName"
                component="input" 
              />
            </div>
          </div>
          <div className="about-col">
            <label>Living in</label>
            <Field 
              type="text"  
              component="input"
              name="location"
            />
          </div>
          <div className="about-col">
            <label>Introduction <span>Just a few words about me</span></label>
            <Field 
              id="intro-box"
              component="textarea"
              name="introduction"
            />
          </div>
          {/* <div>
            <label>Professional experience since</label>
          </div> */}
          <div className="about-row">
            <div>
              <button type="submit">SAVE</button>
            </div>
            <div>
              <button type="button" onClick={reset}>CANCEL</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

// export default About;

const mapStatetToProps = (state) => {
 // console.log("state at about", state.form.aboutForm)
  return {
    aboutEntries: state.form.aboutForm,
  };
};

const About = connect(mapStatetToProps)(reduxForm({
  form: 'aboutForm'
})(AboutForm))

export default About;

