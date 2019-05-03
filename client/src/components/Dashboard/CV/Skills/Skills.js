import React from 'react';
import { reduxForm, Field } from 'redux-form';
// import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Skills.css';


class SkillsForm extends React.Component{
  render(){
    const { handleSubmit, reset } = this.props;
    return (
      <form id="skills-form"
        onSubmit={
        handleSubmit(val => console.log(val))
        }
      >
        <div id="skills-layout">
          <div id="about-head" className="skills-row">
            <div className="skills-row" id="left-nav">
              <h1>Skills</h1>
              <span>My most important professional skills</span>
            </div>
            <div 
              id="awesome"
              onClick={this.props.handleClose}
            >
              <FontAwesomeIcon  icon="times-circle"/>
            </div>
          </div>
          <div className="skills-col">
            <label>add new skill</label>
            <Field 
              component="input" 
              name="skill"
              type="text" 
              placeholder="Type in a skill and hit Enter" 
            />
          </div>
          <div className="skills-row">
            <div>
              <button id="active" type="submit">SAVE</button>
            </div>
            <div>
              <button onClick={reset}>CANCEL</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

// const mapStatetToProps = (state) => {
//    return {
//      skillsEntries: state.form.skillsForm,
//    };
//  };
 
 const Skills = reduxForm({
   form: 'skillsForm'
 })(SkillsForm)

export default Skills;