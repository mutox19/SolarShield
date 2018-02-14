//touch server/smtp.js
//Meteor.startup(function () {
import { Email } from 'meteor/email'

process.env.MAIL_URL = "smtp://postmaster@sandboxf5ad9f04e9ed4ecb8cb4af4f81a43216.mailgun.org:93b0d5cdc81dcbaa5129cd7e502690a2@smtp.mailgun.org:587";

Meteor.methods({
  'sendEmail': function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    //console.log(to + from + subject);
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});


//});
//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
