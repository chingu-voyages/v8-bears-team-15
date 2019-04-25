import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AddEducation.css';


class AddEducationForm extends React.Component{
  render(){
    const { handleSubmit, reset } = this.props;
    return (
      <form id="experience-form"
        onSubmit={
        handleSubmit(val => console.log(val))
        }
      >
        <div id="experience-layout">
          <div id="experience-head" className="experience-row">
            <div>
              
            </div>
            <div id="bin">
              <FontAwesomeIcon  
              icon="trash" 
              onClick={this.props.closeThis}
              />
            </div>
          </div>
          <div  className="experience-row">
            <div className="experience-col company" >
              <label>Degree or level of study</label>
              <Field 
                type="text"
                name="degree"
                component="input"
              />
            </div>
            <div className="experience-col company" >
              <label>Field of study </label>
              <Field 
                type="text" 
                name="study"
                component="input"
              />
            </div>
          </div>

          <div  className="experience-row">
            <div className="experience-col company" >
              <label>University or school</label>
              <Field 
                type="text"
                name="school"
                component="input"
              />
            </div>
            <div className="experience-col company" >
              <label>Location</label>
              <Field 
                type="text"
                name="company"
                component="input"
              />
            </div>
          </div>

          {/* <div  className="experience-row">
            <div className="experience-col" >
              <label>From</label>
              <div className="experience-row from">
                <Field type="text" name="from-date" />
                <Field  type="text" name="from-year" />
              </div>
            </div>
            <div className="experience-col" >
              <label>To</label>
              <div className="experience-row from">
                <Field type="text" name="to-date"/>
                <Field type="text" name="to-year"/>
              </div>
            </div>
          </div> */}
          <div className="about-col">
            <label>Additional Information <span>optional</span></label>
            <Field id="intro-box" component="textarea" name="information" />
          </div>

          <div className="experience-row">
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

const mapStatetToProps = (state) => {
  return {
    educationsEntries: state.form.educationForm,
  };
};

const AddEducation = connect(mapStatetToProps)(reduxForm({
  form: 'educationForm'
})(AddEducationForm))

export default AddEducation;