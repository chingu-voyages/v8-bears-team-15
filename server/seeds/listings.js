const mongoose = require('mongoose');

const listings = [
  {
    position: 'Lead Web Developer',
    createdBy: mongoose.Types.ObjectId('5cc8863f0eae83536483486a'),
    role: 'full time',
    visa: true,
    location: 'Kuala lumpur',
    country: 'malaysia',
    validity: 23,
    image: 'https://res.cloudinary.com/jidemobell/image/upload/v1556633480/nick-kane-747702-unsplash_ssbmhg.jpg'
  },
  {
    position: 'company moderator',
    createdBy: mongoose.Types.ObjectId('5cc8863f0eae83536483486a'),
    role: 'full time',
    visa: true,
    location: 'Kuala lumpur',
    country: 'malaysia',
    validity: 23,
    image: 'https://res.cloudinary.com/jidemobell/image/upload/v1556633480/nick-kane-747702-unsplash_ssbmhg.jpg'
  },
  {
    position: 'company moderator',
    createdBy: mongoose.Types.ObjectId('5cc8863f0eae83536483486a'),
    role: 'full time',
    visa: true,
    location: 'Kuala lumpur',
    country: 'malaysia',
    validity: 23,
    image: 'https://res.cloudinary.com/jidemobell/image/upload/v1556633480/nick-kane-747702-unsplash_ssbmhg.jpg'
  },
  {
    position: 'company moderator',
    createdBy: mongoose.Types.ObjectId('5cc8863f0eae83536483486a'),
    role: 'full time',
    visa: true,
    location: 'Kuala lumpur',
    country: 'malaysia',
    validity: 23,
    image: 'https://res.cloudinary.com/jidemobell/image/upload/v1556633480/nick-kane-747702-unsplash_ssbmhg.jpg'
  },
  {
    position: 'senior android developer',
    createdBy: mongoose.Types.ObjectId('5cc8863f0eae83536483486b'),
    role: 'full time',
    visa: true,
    location: 'talinn',
    country: 'estonia',
    validity: 30,
    image: 'https://res.cloudinary.com/jidemobell/image/upload/v1556633483/paolo-nicolello-739296-unsplash_qghgyt.jpg',
  },
];

module.exports = listings;
