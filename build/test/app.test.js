"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var should = _chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

describe('Server', function () {
  it('should return 200 if the server is running', function (done) {
    _chai["default"].request(_index["default"]).get('/').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  it('should return an error for fake routes', function (done) {
    _chai["default"].request(_index["default"]).get('/fakeroute').end(function (err, res) {
      res.should.have.status(200);
      res.body.message.should.equal('The endpoint you have hit does not exist');
      done();
    });
  });
});