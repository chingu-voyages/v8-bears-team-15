import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  listing: {
    type: mongoose.Schema.ObjectId,
    ref: 'Listing',
  },
  cover_letter: {
    type: String,
  },
},
{
  timestamps: true
});

const Application = mongoose.model('User', ApplicationSchema);
module.exports = Application;
