"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;

var _tracer = _interopRequireDefault(require("tracer"));

var _colors = _interopRequireDefault(require("colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line import/prefer-default-export
var logger = _tracer["default"].colorConsole({
  filters: [_colors["default"].underline, _colors["default"].green, {
    warn: _colors["default"].yellow,
    error: [_colors["default"].red, _colors["default"].bold]
  }]
});

exports.logger = logger;