import React from 'react';

import './Home.css';
import whiteLogo from '../../images/jb_logo_white.svg';

class Home extends React.Component{
  render() {
    return (
      <div>
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
                <div id="play"></div>
                <span>Watch the introduction</span>
              </div>
            </div>
            <form className="social-medias">
              <span id="signup-intro">Sign Up or Log in using:</span>
              <button id="google">Continue with Google</button>
              <button id="facebook">Continue with Facebook</button>
              <button id="linkedin">Continue with LinkedIn</button>
              <span id="login-intro">Or continue wth email</span>
              <input id="email-box" type="text-area" placeholder="Your email address"/>
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

export default Home;