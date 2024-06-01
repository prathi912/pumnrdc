const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pranavrathi07@gmail.com', // replace with your Gmail email
    pass: 'Vidhilahoti2'   // replace with your Gmail password or App password
  }
});

// API endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  const { firstName, lastName, companyName, email, phoneNumber, message, consent } = req.body;

  const mailOptions = {
    from: 'pranavrathi07@gmail.com', // replace with your Gmail email
    to: 'rathipranav07@gmail.com', // replace with the recipient's email
    subject: 'New Form Submission',
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nCompany Name: ${companyName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}\nConsent: ${consent}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send({ status: 'success' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
