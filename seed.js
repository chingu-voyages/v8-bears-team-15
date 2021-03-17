const dotenv = require('dotenv');
dotenv.config();


module.exports = {
	"undefined": "localhost/LOCAL_DB_NAME",
	"development": "localhost/bears15",
	"prod": process.env.MONGODB_URI
}