import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
