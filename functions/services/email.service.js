const nodemailer = require('nodemailer');
const ejs = require('ejs');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nyabuyabonvic@gmail.com",
    pass: "angelemo",
  },
});

function sendEmail(mailOptionsObject){
  let msg;
  ejs.renderFile(`${__dirname}/../templates/booking.ejs`, mailOptionsObject, {}, (err, html) => {
    if (err) {
      console.error(err);
    } else {
      transporter.sendMail({
        to: mailOptionsObject.to,
        from: 'nyabuyabonvic@gmail.com',
        subject: mailOptionsObject.subject,
        html
      });
    }
  });
}

module.exports = sendEmail;
