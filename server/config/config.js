module.exports = {
  port: process.env.PORT || 8081,
  database: process.env.MONGODB_URI || 'mongod://localhost/bears15',
  jwtPrivateKey: process.env.JWT_PRIVATE || 'prvate super secret key'
}