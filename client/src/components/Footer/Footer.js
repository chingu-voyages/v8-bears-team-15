import React from 'react';

import './Footer.css';

import facebook from '../../images/social-media/facebook.png';
import twitter from '../../images/social-media/twitter.png';
import linkedin from '../../images/social-media/linkedin.png';
import googleplus from '../../images/social-media/googleplus.png';
import instagram from '../../images/social-media/instagram.png';

class Footer extends React.Component {
  render() {
    return (
     <div className="footer-main">
       <section className="upper-footer">
         <div className="footer-links">
           <h6>FOR TALENT</h6>
           <hr />
           <ul>
             <li>
               <a href="https://fakelink">
                HOME
               </a>
             </li>
             <li>
               <a href="https://fakelink">
               FIND JOBS
               </a>
             </li>
             <li>
               <a href="https://fakelink">
               JOIN JOBBATICAL
               </a>
             </li>
           </ul>
         </div>
         <div className="footer-links">
         <h6>FOR COMPANIES</h6>
           <hr />
           <ul>
             <li>
               <a href="https://fakelink">
                WHAT WE OFFER
               </a>
             </li>
             <li>
               <a href="https://fakelink">
                REVIEWS
               </a>
             </li>
           </ul>
         </div>
         <div className="footer-links">
         <h6>JOBBATICAL</h6>
           <hr />
           <ul>
             <li>
               <a href="https://fakelink">
                OUR STORY & PEOPLE
               </a>
             </li>
             <li>
               <a href="https://fakelink">
                SUPPORT
               </a>
             </li>
             <li>
               <a href="https://fakelink">
                JOIN THE TEAM
               </a>
             </li>
             <li>
               <a href="https://fakelink">
                BLOG
               </a>
             </li>
           </ul>
         </div>
         <div className="footer-links" >
          <h6>FOLLOW US</h6>
          <hr />
           <ul id="media-group">
             <li>
               <a href="https://fakelink">
                 <div className="media-links">
                   <span>FACEBOOK</span>
                   <img src ={facebook} alt="facebook-brand"/>
                 </div>
               </a>
             </li>
             <li>
               <a href="https://fakelink">
               <div className="media-links">
                   <span>TWITTER</span>
                   <img src ={twitter} alt="facebook-brand"/>
                 </div>
               </a>
             </li>
             <li>
               <a href="https://fakelink">
               <div className="media-links">
                   <span>LINKEDIN</span>
                   <img src ={linkedin} alt="facebook-brand"/>
                 </div>
               </a>
             </li>
             <li>
               <a href="https://fakelink">
               <div className="media-links">
                   <span>GOOGLE+</span>
                   <img src ={googleplus} alt="facebook-brand"/>
                 </div>
               </a>
             </li>
             <li>
               <a href="https://fakelink">
               <div className="media-links" id="instagram">
                   <span>INSTAGRAM</span>
                   <img src ={instagram} alt="facebook-brand"/>
                 </div>
               </a>
             </li>
           </ul>
         </div>
       </section>
       <hr />
       <section className="footer-base">
         <p>&copy; Chingu Bears Team 15</p>
         <p>&copy; Terms of service Privacy policy</p>
       </section>
     </div>
    )
  }
}

export default Footer;