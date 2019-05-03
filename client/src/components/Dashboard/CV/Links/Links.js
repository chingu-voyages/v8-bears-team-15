import React from 'react';
import { reduxForm, Field } from 'redux-form';
// import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Links.css';


class LinksForm extends React.Component{
  render(){
    const { handleSubmit, reset } = this.props;
    return (
      <form 
        id="links-form"
        onSubmit={
          handleSubmit(val => console.log(val))
          }
      >
        <div id="links-layout">
        {/* first section */}
          <div id="about-head" className="links-row">
            <div className="links-row" id="left-nav">
              <h1>Links</h1>
              <span>My social media & homepage links</span>
            </div>
            <div 
              id="awesome"
              onClick={this.props.handleClose}
            >
              <FontAwesomeIcon  icon="times-circle"/>
            </div>
          </div>
          <p id="links-message">
            Add some extra firepower to your profile by providing links to 
            professional and social media profiles.
          </p>
        {/* ends here */}
          <section className="links-col social-section">
            <div className="links-row profile">
              <label className="label">LinkedIn profile</label>
              <Field 
                type="text" 
                placeholder="https://www.linkedin.com/in/example" 
                component="input"
                name="linkedin"
              />
            </div>
            <div className="links-row profile">
              <label className="label">Personal Website</label>
              <Field 
                type="text" 
                placeholder="http://www.example.com" 
                component="input"
                name="website"
              />
            </div>
            <div className="links-row profile">
              <label className="label">Facebook</label>
              <Field 
                type="text" 
                placeholder="https://www.facebook.com/example" 
                component="input"
                name="facebook"
              />
            </div>
            {/* <div className="links-row profile">
              <label className="label">Facebook</label>
              <Field 
                type="text" 
                placeholder="Type a language" 
                component="input"
                name=""
              />
            </div> */}
            <div className="links-row profile">
              <label className="label">Twitter handle</label>
              <Field 
                type="text" 
                placeholder="@example"
                name="twitter"
                component="input" 
              />
            </div>
            <div className="links-row profile">
              <label className="label">Google</label>
              <Field 
                type="text" 
                placeholder="https://plus.google.com/+example"
                name="google"
                component="input"
              />
            </div>
          </section>
          <div className="links-row">
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

// const mapStatetToProps = (state) => {
//   return {
//     linkEntries: state.form.LinksForm,
//   };
// };

const EditLinks = reduxForm({
  form: 'LinksForm'
})(LinksForm)

export default EditLinks;