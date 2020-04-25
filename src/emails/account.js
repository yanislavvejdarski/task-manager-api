require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = process.env.API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alcantlux@gmail.com',
        subject: 'Thanks for joining in !',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alcantlux@gmail.com',
        subject: 'Glad to hear your feedback :)',
        text: `Sorry to hear ${name} that you are cancelling our services.\n
               We would love if you give us feedback on how we can improve`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}