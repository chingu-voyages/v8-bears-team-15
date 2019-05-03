import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AddExperience.css';


class AddExperienceForm extends React.Component{
  render(){
    const { handleSubmit, reset } = this.props;
    return (
      <form 
        id="experience-form"
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
          <div className="experience-col" >
              <label>Position</label>
              <Field 
                type="text"
                name="position"
                component="input" 
              />
            </div>
          <div  className="experience-row">
            <div className="experience-col company" >
              <label>Company</label>
              <Field 
                type="text"
                name="company"
                component="input" 
              />
            </div>
            <div className="experience-col company" >
              <label>Location</label>
              <Field 
                type="text"
                name="location"
                component="input" 
              />
            </div>
          </div>

          {/* <div  className="experience-row">
            <div className="experience-col" >
              <label>From</label>
              <div className="experience-row from">
                <Field 
                  type="text"
                  name="position"
                  component="input" 
                />
                <Field type="text" />
              </div>
            </div>
            <div className="experience-col" >
              <label>To</label>
              <div className="experience-row from">
                <Field type="text" />
                <Field type="text" />
              </div>
            </div>
          </div> */}
          <div className="about-col">
            <label>Additional Information <span>optional</span></label>
            <Field id="intro-box" name="summary" component="textarea" />
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


const Skills = reduxForm({
  form: 'AddExperienceForm'
})(AddExperienceForm)

export default Skills;

//  export class AddClippedExperience extends React.Component{
//   render(){
//     return (
//       <form id="experience-form">
//         <div id="experience-layout">
//           <div id="experience-head" className="experience-row">
//             <div>
              
//             </div>
//             <div id="bin">
//               <FontAwesomeIcon  
//                 icon="trash" 
//                 onClick={this.props.handleClose}
//               />
//             </div>
//           </div>
//           <div className="experience-col" >
//               <label>Position</label>
//               <Field type="text" />
//             </div>
//           <div  className="experience-row">
//             <div className="experience-col company" >
//               <label>Company</label>
//               <Field type="text" />
//             </div>
//             <div className="experience-col company" >
//               <label>Location</label>
//               <Field type="text" />
//             </div>
//           </div>

//           <div  className="experience-row">
//             <div className="experience-col" >
//               <label>From</label>
//               <div className="experience-row from">
//                 <Field type="text" />
//                 <Field type="text" />
//               </div>
//             </div>
//             <div className="experience-col" >
//               <label>To</label>
//               <div className="experience-row from">
//                 <Field type="text" />
//                 <Field type="text" />
//               </div>
//             </div>
//           </div>
//           <div className="about-col">
//             <label>Additional Information <span>optional</span></label>
//             <textarea id="intro-box" />
//           </div>

//           <div className="experience-row">
//             <div>
//               <button>SAVE</button>
//             </div>
//             <div>
//               <button>CANCEL</button>
//             </div>
//           </div>
//         </div>
//       </form>
//     )
//   }
// }

// export default AddExperience;