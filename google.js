const {google} = require('googleapis');

module.exports = {
  googleOAuthClient: new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.APP_URL + process.env.GOOGLE_REDIRECT_URL
  )
};
