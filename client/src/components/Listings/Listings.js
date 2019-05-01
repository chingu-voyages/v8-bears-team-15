import React, {Component} from 'react';
import ProfileCard from '../Cards/Profile/ProfileCard';

import './Listing.css'
import ListingCard from '../Cards/Listings/ListingCard';


class Listing extends Component{
  render() {
    return (
      <div className="listing-main">
        {/* <ListingCard />
        <ProfileCard /> */}
        {
          this.props.data !== undefined && 
          this.props.data.map((list) => {
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