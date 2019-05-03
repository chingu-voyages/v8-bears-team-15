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
      listArray: [],
      tempArray: []
    }
  }

  componentWillMount() {
    this.props.actions.userDashBoard();
  }

  componentWillReceiveProps(nextProps){
    if(this.listings !== nextProps.listings){
     this.setState({
       listArray: nextProps.listings
     })
    }
  }

  filterListings(option, array) {
    console.log("state", array)
    // eslint-disable-next-line array-callback-return
    let newArray =  array.filter((item) => {
      if(item.type === option){
        return item;
      }
    })
    this.setState({
      tempArray: newArray,
    })
  }

  handleSelect(option){
    let array = this.state.listArray;
    // this.filterListings(option, stateArray)
    if(this.state.tempArray.length === 0) {
      this.filterListings(option, array)
    }else{
      this.setState({
        tempArray: [],
      })
      this.filterListings(option, array)
    }
  }

  render() {
    const { listArray, tempArray } = this.state;
    return (
      <AuxComp>
      <div className="main">
        <Header />
        <div className="center-div">
          <h1>Explore jobs</h1>
          <div className="categories">
             <div id="all">
               <button 
                // onClick={this.getAllArray.bind(this)}
               >All jobs</button>
             </div>
             <div className="select">
               <button 
                 onClick={this.handleSelect.bind(this, 'sales')}
               >Sales & marketing</button>
               <button
                  onClick={this.handleSelect.bind(this, 'software')}
               >Software Engineering</button>
               <button
                  onClick={this.handleSelect.bind(this, 'ui')}
               >Product & design, UI/UX</button>
             </div>
          </div>
          <Listing
            data={tempArray.length === 0 ? listArray : tempArray }
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