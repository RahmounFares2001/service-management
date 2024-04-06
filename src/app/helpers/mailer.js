import nodemailer from "nodemailer";

import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

// (where i should send email, )
export const sendEmail = async ({email, emailType, userId}) => {
    try {
        // create hashed token

        const hashedToke = await bcryptjs.hash(userId.valueOf(), 10);
        const hashedToken = hashedToke.replace(/[./]/g, '')

        
        // verify and reset passsword
        if(emailType == 'VERIFY') {
            await User.findByIdAndUpdate(userId,
                {
                    verifyToken: hashedToken,
                    verifyTokenExpiry:  new Date(Date.now() + 3600000) },
                {
                    new: true,
                    runValidators: true
                })
        } else if (emailType == 'RESET') {
            await User.findByIdAndUpdate(userId,
                {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry:  new Date(Date.now() + 3600000) },
                {
                    new: true,
                    runValidators: true
                })
        }

        // send email
        var transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAILER_USER,
                pass: process.env.MAILER_PASSWORD,
            }
            }
          );
        
        // mail options
        const mailOptions = {   
            from: process.env.MAILER_USER,
            to: email,
            subject: emailType == 'VERIFY' ? 'Verify your email' : 'Reset your password',
            html: `<p>Click <a href={${process.env.DOMAIN}/verifyEmail?token=${hashedToken}}>here</a>
                        to${emailType == 'VERIFY'? ' verify your email' : 'reset your password'}
                   </p>
                   ${emailType === 'VERIFY' ? `<p>${process.env.DOMAIN}/verifyEmail?token=${hashedToken}</p>` : 
                                            `<p>${process.env.DOMAIN}/resetPassword?token=${hashedToken}</p>` }`
        };

        const mailResponse = transport.sendMail(mailOptions);



        return mailResponse;
        
    } catch (error) {
        // throw new Error(error.message);
        console.log(error);
    }
};