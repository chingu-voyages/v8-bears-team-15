/* eslint-disable no-tabs */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable indent */

const dotenv = require('dotenv');

dotenv.config();

// eslint-disable-next-line no-unused-vars
const env = process.env.NODE_ENV || 'development';

module.exports = {
	"test": "mongodb://localhost/bears15Test",
	"development": "mongodb://localhost/bears15",
	"prod": "localhost/PROD_DB_NAME"
};
