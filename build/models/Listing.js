"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListingSchema = new _mongoose["default"].Schema({
  position: {
    type: String,
    required: true
  },
  role: {
    type: String
  },
  visa: {
    type: Boolean
  },
  location: {
    type: String
  },
  country: {
    type: String
  },
  description: {
    type: String
  },
  validity: {
    type: Number
  },
  category: {
    type: String
  },
  expired: {
    type: Boolean,
    "default": false
  },
  task: {
    type: String
  },
  createdBy: {
    type: _mongoose["default"].Schema.ObjectId,
    ref: 'Company'
  },
  image: {
    type: String,
    "default": 'http://lorempixel.com/100/100/people/'
  },
  requirements: {
    type: String
  }
}, {
  timestamps: true
});

var Listing = _mongoose["default"].model('Listing', ListingSchema);

module.exports = Listing;