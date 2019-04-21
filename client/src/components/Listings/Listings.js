import React, {Component} from 'react';
import ProfileCard from '../Cards/Profile/ProfileCard';

import './Listing.css'


class Listing extends Component{
  render() {
    return (
      <div className="listing-main">
        <ProfileCard />
      </div>
    )
  }
}

export default Listing;