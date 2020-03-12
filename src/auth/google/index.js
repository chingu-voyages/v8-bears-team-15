const { google } = require("googleapis");

const { google } = require("../../config/config");

const { clientID, clientSecret, callbackURL } = google;

const oauth2Client = new google.auth.OAuth2(
  clientID,
  clientSecret,
  callbackURL
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
	'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.email',
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: "offline",
  prompt: 'consent',
  // If you only need one scope you can pass it as a string
  scope: scopes
});
