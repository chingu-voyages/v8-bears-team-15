"use strict";

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _passport = _interopRequireDefault(require("passport"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _index = _interopRequireDefault(require("./routes/index"));

var _config = require("./config/config");

var _logger = require("./helper/logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import multer from 'multer';
// // upload storage
var config = (0, _config.envConfig)(); // Connect database

_mongoose["default"].connect(config.database, {
  useNewUrlParser: true
}).then(function () {
  _logger.logger.info("Connected to DB: ".concat(config.database));
})["catch"](function (error) {
  _logger.logger.error({
    message: 'Failed to connect to DB',
    error: error.message
  });
}); // Instantiate server


var app = (0, _express["default"])();
var MongoStore = (0, _connectMongo["default"])(_expressSession["default"]);
app.server = _http["default"].createServer(app);
app.use(_bodyParser["default"].json({
  extended: false
}));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use((0, _expressSession["default"])({
  store: new MongoStore({
    mongooseConnection: _mongoose["default"].connection
  }),
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: false
}));
app.use((0, _morgan["default"])('dev'));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use('/', _index["default"]);

if (!module.parent) {
  app.listen(config.port, function () {
    _logger.logger.info("CORS-enabled web server listening on port ".concat(config.port));
  });
}

module.exports = app;