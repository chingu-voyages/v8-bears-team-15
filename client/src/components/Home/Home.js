import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay,faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import './Home.css';
import '../../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

import whiteLogo from '../../images/jb_logo_white.svg';
import googleImage from '../../images/auth/google_icon.png';
import facebookImage from '../../images/auth/facebook.png';
import linkedinImage from '../../images/auth/linkedin.png';

import Modal from '../Modal/Modal';
import * as homeActions from '../../actions/Home/HomeActions';

library.add(faPlay, faEnvelope)

class Home extends React.Component{
  handleIntro() {
    this.props.actions.playIntro();
  }

  closeModal() {
    this.props.actions.closeIntro();
  }
  
  render() {
    const { showModal } = this.props;
    return (
      <div>
        {
          showModal ? 
         (
            <Modal 
            closeModal={this.closeModal.bind(this)}
            />
         ) : ''
        }
        <section className="intro">
         <div className="video-div">
           <video autoPlay muted loop  id="hero-video">
            <source src="https://s3-eu-west-1.amazonaws.com/jpublic/home/homepage_desktop_bg.mp4" type="video/mp4" />
            <source src="https://s3-eu-west-1.amazonaws.com/jpublic/home/homepage_desktop_bg.webm" type="video/webm" />
          </video>
         </div>
         <header>
            <a id="brand" href="http://fakelink">
              <img id="white-logo" src={whiteLogo} alt="white-logo"/>
              {/* <span>BRAND</span> */}
            </a>
            <nav>
              <li>Sales & marketing jobs</li>
              <li>Software engineering jobs</li>
              <li>Product & design, UI/UX jobs</li>
            </nav>
            <div id="nav-button">
            <button>
             FOR COMPANIES
            </button>
            </div>
         </header>
         <div className="hero">
            <div className="message">
              <h1>Get matched <br></br> with a job abroad</h1>
              <p>
              Use Jobbatical to find a tech, business or creative 
              job<br /> anywhere in the world. Because your skills matter
               more <br /> than your passport.
              </p>
              <div className="watch">
                  <div id="play-button" onClick={this.handleIntro.bind(this)}>
                   <FontAwesomeIcon icon="play" />
                  </div>
                <span>
                  Watch the introduction
                </span>
              </div>
            </div>
            <form className="social-medias">
              <span className="auth-intro">Sign Up or Log in using:</span>
              <button id="google">
                <img src={googleImage} alt="google-brand" />
                 <span className="content">Continue with Google</span>
              </button>
              <button id="facebook">
                <img src={facebookImage} alt="facebook-brand" />
                 <span className="content">Continue with Facebook</span>
              </button>
              <button id="linkedin">
                <img src={linkedinImage} alt="linkedin-brand" />
                  <span className="content">Continue with LinkedIn</span>
               </button>
              <span className="auth-intro">Or continue wth email</span>
              <div className="input-wrapper">
                <FontAwesomeIcon icon="envelope" id="envelope" />
                <input id="email-box" type="text-area" placeholder={`    Your email address`}/>
              </div>
             <input type="submit" placeholder="NEXT"/>
            </form>
         </div>
        </section>
        <section className="body"></section>
        <section className="base"></section>
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    showModal: state.homeState.openIntro,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(homeActions), dispatch)
  }
}

export default connect(MapStateToProps, mapDispatchToProps)(Home);