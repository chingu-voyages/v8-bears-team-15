import React, {Component} from 'react';
import ProfileCard from '../Cards/Profile/ProfileCard';

import './Listing.css'
import ListingCard from '../Cards/Listings/ListingCard';


class Listing extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    let cards = this.state;
    this.setState({
      count: cards++
    })
  }
  
  // generateArray() {
  //  return  new Promise((resolve, reject ) => {
  //     const newArray =
  //     this.props.data !== undefined &&
  //     this.props.data.map((list, i) => {
  //       return (
  //         <ListingCard 
  //         list = {list}
  //         key={`${list._id}`}
  //       />
  //       )
  //     })
  //     newArray.push(<ProfileCard key={`lone-child-doc`} />)
  //     resolve(newArray);
  //   })
  // }

  render() {
    

    return (
      <div className="listing-main">
        {/* <ListingCard />
        <ProfileCard /> */}
        {
          this.props.data !== undefined && 
          this.props.data.splice(2, 0, {}) &&
          this.props.data.map((list, i) => {
            if(i === 2) return <ProfileCard key={`lone-child-${i}`} />
            return (
              <ListingCard 
              list = {list}
              key={`${list._id}`}
            />
            )
          })
        }
      </div>
    )
  }
}

export default Listing;