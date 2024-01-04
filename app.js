//             user: 'emmanuelsimona@gmail.com', 
//             pass: 'vskyfkczoswnfvcu'
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Serve static files from the 'styles' folder
app.use('/css', express.static('css'));
// Serve static files from the "public" directory

app.use(express.static('images'));
app.use(express.static('js'));


// Set up middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Create a nodemailer transporter with your email credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'emmanuelsimona@gmail.com', 
        pass: 'vskyfkczoswnfvcu'
    },
  });

  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'emmanuelsimona@gmail.com', // Replace with your recipient email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    // Display a simple confirmation message on the same page
    res.send(`
      <h1>Message sent!</h1>

      <p><a href="/">Go back</a></p>
    `);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});