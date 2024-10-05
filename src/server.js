const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
require("dotenv").config();

const port = process.env.PORT || 8000; 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const mg = mailgun({
  apiKey: 'ce12e02066d1433edbb50cfc0c78052e-afce6020-d6e4035c',
  domain: 'sandbox169760f593954862ac614fe1995b695f.mailgun.org',
});


const sendWelcomeEmail = (toEmail) => {
  const data = {
    from: 'zhiyi9043@gmail.com',
    to: toEmail,
    subject: 'Welcome to DEV@Deakin!',
    html: `
      <html>
      <body>
        <h1>Welcome!</h1>
        <p>Thank you for subscribing to DEV@Deakin.</p>
        <p>We’re glad to have you with us.</p>
      </body>
      </html>
    `,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error('Failed to send email:', error);
    } else {
      console.log('Email sent:', body);
    }
  });
};


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post('/subscribe', (req, res) => {
  const email = req.body.email;
  
  if (email) {
    sendWelcomeEmail(email);
    res.status(200).send('Welcome email sent.');
  } else {
    res.status(400).send('Email is required.');
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});