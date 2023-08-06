import nodemailer from 'nodemailer';
import { getToday } from './utils.js';
import 'dotenv/config';

export function checkEmail(myemail) {
    if (myemail === undefined || myemail.includes('@') === false) {
        console.log('error check @');
        return false;
    } else {
        return true;
    }
}

export function getWelcomeTemplate({ name }) {
    const mytemplate = `
        <html>
            <body>
                <h1>wellcome! cordbucks ${name}</h1>
                <hr />
                <div>name: ${name}</div>
                <div>date: ${getToday()}</div>
            </body>
        </html>
    `;
    return mytemplate;
}

export async function sendTemplateToEmail(myemail, mytemplate, name) {
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    const result = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: myemail,
        subject: `${name} welcome to join!!!`,
        html: mytemplate,
    });
    console.log(result);
}
