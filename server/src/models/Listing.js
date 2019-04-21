import mongoose from 'mongoose';

const ListingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
  },
},
{
  timestamps: true
});

const Listing = mongoose.model('User', ListingSchema);
module.exports = Listing;
