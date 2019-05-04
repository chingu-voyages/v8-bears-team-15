import mongoose from 'mongoose';

const ListingSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  visa: {
    type: Boolean,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
  description: {
    type: String,
  },
  validity: {
    type: Number,
  },
  category: {
    type: String,
  },
  expired: {
    type: Boolean,
    default: false,
  },
  task: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
  },
  image: {
    type: String,
    default: 'http://lorempixel.com/100/100/people/'
  },
  requirements: {
    type: String,
  }
},
{
  timestamps: true
});

const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing;
