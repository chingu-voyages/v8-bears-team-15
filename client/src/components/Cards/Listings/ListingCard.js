import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import testpic from '../../../images/testcard.jpg'
import './ListingCard.css';

function ListingCard(props) {
  return (
    // <div className="listing-card-main">
    //   <div id="card-layout">
    //   <span>Nimble</span>
    //   <h4 id="card-head">Lead Web Developer</h4>
    //   <span id="card-location">BANGKOK, THAILAND</span>
    //   <img src={testpic} alt="testpic" id="card-image" />
    //   <div className="card-row properties">
    //     <span>A MONTH TO APPLY</span>
    //     <div className="card-row" id="left-content">
    //       <span>SAVE</span>
    //       <FontAwesomeIcon icon="bookmark" id="bookmark" />
    //     </div>
    //   </div>
    //   </div>
    // </div>
    <div className="listing-card-main">
          <div id="card-layout">
          <span>Nimble</span>
          <h4 id="card-head">{props.list.position}</h4>
          <span id="card-location">{props.list.location}</span>
         <img src={props.list.image} alt="testpic" id="card-image" />
          <div className="card-row properties">
            <span>A MONTH TO APPLY</span>
            <div className="card-row" id="left-content">
              <span>SAVE</span>
              <FontAwesomeIcon icon="bookmark" id="bookmark" />
            </div>
          </div>
          </div>
  </div>
  )
}


export default ListingCard;