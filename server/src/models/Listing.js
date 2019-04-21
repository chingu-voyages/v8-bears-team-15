import mongoose from 'mongoose';

const ListingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  timestamps: true
});

const Listing = mongoose.model('User', ListingSchema);
module.exports = Listing;
