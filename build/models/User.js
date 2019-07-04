"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserSchema = new _mongoose["default"].Schema({
  username: {
    type: String // required: true,

  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  profileId: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  accountType: {
    type: String,
    "enum": ['individaul', 'company'],
    "default": 'individaul'
  },
  verified: {
    type: Boolean,
    "default": false
  },
  imageUrl: {
    type: String,
    "default": 'http://lorempixel.com/100/100/people/'
  },
  skills: [{
    skill: String,
    years: Number
  }],
  wishlist: [{
    type: _mongoose["default"].Schema.ObjectId,
    ref: 'Listing'
  }]
}, {
  timestamps: true
});

var User = _mongoose["default"].model('User', UserSchema);

module.exports = User;