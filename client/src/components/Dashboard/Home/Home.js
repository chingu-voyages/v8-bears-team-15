import React, {Component} from 'react';

import Listing from '../../Listings/Listings';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Home.css';

class DashBoardHome extends Component{
  render() {
    return (
      <div className="main">
        <Header />
        <div className="center-div">
          <h1>Explore jobs</h1>
          <div className="categories">
             <button>All jobs</button>
             <div className="select">
               <button>Sales & marketing</button>
               <button>Software Engineering</button>
               <button>Product & design, UI/UX</button>
             </div>
          </div>
          <Listing />
        </div>
        <Footer />
      </div>
    )
  }
}

export default DashBoardHome;