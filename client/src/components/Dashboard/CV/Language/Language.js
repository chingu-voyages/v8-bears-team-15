import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Language.css';


class LanguageForm extends React.Component{
  render(){
    const { handleSubmit, reset } = this.props;
    return (
      <form 
        id="languages-form"
        onSubmit={
          handleSubmit(val => console.log(val))
          }
      >
        <div id="languages-layout">
          <div id="about-head" className="languages-row">
            <div className="languages-row" id="left-nav">
              <h1>Language skills</h1>
              <span>My languages & proficiency levels</span>
            </div>
            <div 
              id="awesome"
              onClick={this.props.handleClose}
            >
              <FontAwesomeIcon  icon="times-circle"/>
            </div>
          </div>
          <div className="languages-col">
            <label>add new language</label>
            <Field 
              type="text" 
              placeholder="Type a language"
              component="input"
              name="language" 
            />
          </div>
          <div className="languages-row">
            <div>
              <button type="submit">SAVE</button>
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


const EditLanguage = reduxForm({
  form: 'LanguageForm'
})(LanguageForm)

export default EditLanguage;