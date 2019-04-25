import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
import * as userActions from '../../actions/User/UserActions';
import Footer from '../Footer/Footer';
import AuthWindow from '../Pop/Pop';
//import { withRouter } from 'react-router-dom';




class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleIntro() {
    this.props.actions.playIntro();
  }

  closeModal() {
    this.props.actions.closeIntro();
  }

  handleAuth(provider, e) {
    e.preventDefault();
    this.props.actions.popAuth(provider);
  }


  handleNext(e) {
    e.preventDefault();
    const { inputValue } = this.state
    // validate input for errors
    this.props.actions.signIn(inputValue) 
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value
    })
  }
  
  render() {
    const { showModal, showPopUp, media } = this.props;
    return (
      <div className="main">
        {
          showModal ? 
         (
            <Modal 
            closeModal={this.closeModal.bind(this)}
            />
         ) : ''
        }

        {
          showPopUp ? 
          (
           <AuthWindow
            provider={media}
           />
          ): ''
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
              <li><a href="http://fakelink">Sales & marketing jobs</a></li>
              <li><a href="http://fakelink">Software engineering jobs</a></li>
              <li><a href="http://fakelink">Product & design, UI/UX jobs</a></li>
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
            <form 
              className="social-medias" 
              onSubmit={this.handleNext.bind(this)}
            >
              <span className="auth-intro">Sign Up or Log in using:</span>
              <button id="google" onClick={(e) => this.handleAuth('google', e)}>
                <img src={googleImage} alt="google-brand" />
                 <span className="content">Continue with Google</span>
              </button>
              <button id="facebook" onClick={(e) => this.handleAuth('facebook', e)}>
                <img src={facebookImage} alt="facebook-brand" />
                 <span className="content">Continue with Facebook</span>
              </button>
              <button id="linkedin" onClick={(e) => this.handleAuth('linkedin', e)}>
                <img src={linkedinImage} alt="linkedin-brand" />
                  <span className="content">Continue with LinkedIn</span>
               </button>
              <span className="auth-intro">Or continue wth email</span>
              <div className="input-wrapper">
                <FontAwesomeIcon icon="envelope" id="envelope" />
                <input 
                  id="email-box" 
                  type="email" 
                  defaultValue={this.state.inputValue}
                  placeholder={`    Your email address`}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
             <input type="submit" value="NEXT"/>
            </form>
         </div>
        </section>
        <section className="body"></section>
        <Footer />
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    showModal: state.homeState.openIntro,
    showPopUp: state.homeState.popUpWindow,
    media: state.homeState.provider,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...homeActions, ...userActions}, dispatch)
  }
}

export default connect(MapStateToProps, mapDispatchToProps)(Home);