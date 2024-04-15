// import nodemailer from 'nodemailer';

// export async function sendEmailNotification(email, appointmentDate) {
//     // transporter
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.MAILER_USER,
//             pass: process.env.MAILER_PASSWORD,
//         }
//         }
//     );

//   // Options
//   const mailOptions = {
//     from: process.env.MAILER_USER,
//     to: email,
//     subject: 'Appointment Reminder',
//     text: `Hello, A reminder that your appointment is for ${appointmentDate}.`
//   };

//   // Send email
//   const info = await transporter.sendMail(mailOptions);
// }
