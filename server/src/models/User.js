import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  profileId: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  accountType: {
    type: String,
    enum: ['individaul', 'company'],
    default: 'individaul',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
    default: 'http://lorempixel.com/100/100/people/'
  },
  skills: [
    {
      skill: String,
      years: Number,
    }
  ],
  wishlist: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Listing',
    }
  ],
  timestamps: true
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
