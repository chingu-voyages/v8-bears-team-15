"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CompanySchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  Location: {
    type: String
  },
  link: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  accountType: {
    type: String,
    "enum": ['individaul', 'company'],
    "default": 'company'
  },
  verified: {
    type: Boolean,
    "default": false
  },
  imageUrl: {
    type: String,
    "default": 'http://lorempixel.com/100/100/people/'
  }
}, {
  timestamps: true
});

var Company = _mongoose["default"].model('Company', CompanySchema);

module.exports = Company;