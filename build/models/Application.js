"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ApplicationSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: _mongoose["default"].Schema.ObjectId,
    ref: 'User'
  },
  listing: {
    type: _mongoose["default"].Schema.ObjectId,
    ref: 'Listing'
  },
  cover_letter: {
    type: String
  }
}, {
  timestamps: true
});

var Application = _mongoose["default"].model('User', ApplicationSchema);

module.exports = Application;