import React from 'react';

import './Modal.css';

class Modal extends React.Component {
  
  render() {
    const {closeModal} = this.props;
    return (
      <div className="container">
        <iframe 
          src="https://www.youtube.com/embed/0-H1vpJfiG0" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
          title="intro"
          className="frame"
        />
        <span
         onClick={closeModal}
        >
          X
        </span>
   </div>
    )
  }
}

export default Modal;