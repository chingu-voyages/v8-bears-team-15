// module.exports = {
// 	"undefined": "localhost/LOCAL_DB_NAME",
// 	"dev": "localhost/DEV_DB_NAME",
// 	"prod": "localhost/PROD_DB_NAME"
// }

/* eslint-disable no-tabs */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable indent */

// const dotenv = require('dotenv');

// dotenv.config();

// eslint-disable-next-line no-unused-vars
const env = process.env.NODE_ENV || 'development';

console.log("env at seed", env);

module.exports = {
	"test": "mongodb://localhost/bears15Test",
	"dev": "localhost/bears15",
	"production": "mongodb://admin:bears15admin@ds151066.mlab.com:51066/jobbatical-clone"
};
