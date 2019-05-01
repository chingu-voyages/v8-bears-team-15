import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Listing from '../../Listings/Listings';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Home.css';

import * as userActions from '../../../actions/User/UserActions';
import AuxComp from './../../../HOC/AuxComp/AuxComp';

class DashBoardHome extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state={
      listArray: []
    }
  }

  componentWillMount() {
    this.props.actions.userDashBoard()
  }

  componentWillReceiveProps(nextProps){
    if(this.listings !== nextProps.listings){
     this.setState({
       listArray: nextProps.listings
     })
    }
  }

  getListArray(){

  }

  render() {
    const { listArray } = this.state;
    return (
      <AuxComp>
      <div className="main">
        <Header />
        <div className="center-div">
          <h1>Explore jobs</h1>
          <div className="categories">
             <div id="all">
               <button>All jobs</button>
             </div>
             <div className="select">
               <button>Sales & marketing</button>
               <button>Software Engineering</button>
               <button>Product & design, UI/UX</button>
             </div>
          </div>
          <Listing
            data={listArray}
           />
        </div>
        <Footer />
      </div>
      </AuxComp>
    )
  }
}

// export default DashBoardHome;

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...userActions}, dispatch)
  }
}

const mapStateToProps = (state) => {
  console.log("list at home", state.userState.allListings)
  return {
    user: state.userState.user, 
    listings: state.userState.allListings,
  }
}

const DashBoard =  connect(mapStateToProps, mapDispatchToProps)(DashBoardHome);

export default DashBoard;