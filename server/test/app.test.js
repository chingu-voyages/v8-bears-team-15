import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const should = chai.should();
chai.use(chaiHttp);

describe('Server', () => {
  it('should return 200 if the server is running', (done) => {
    chai.request(server).get('/').end(function(err, res) {
      res.should.have.status(200);
      done();
    });
  });

  it('should return an error for fake routes', (done) => {
    chai.request(server).get('/fakeroute').end(function(err, res) {
      res.should.have.status(200);
      res.body.message.should.equal('The endpoint you have hit does not exist');
      done();
    });
  });
});
