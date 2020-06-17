const functions = require('firebase-functions');
const sendemail = require('./services/email.service');

exports.sendmail = functions.https.onRequest((req, res) => {
  const { query } = req;

  sendemail(query);
  res.end("Received POST request!");
});