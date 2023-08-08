import nodemailer from 'nodemailer';
import { getToday } from './utils.js';
import { Token } from './models/token.model.js';
import 'dotenv/config';

export function checkEmail(myemail) {
    if (myemail === undefined || myemail.includes('@') === false) {
        console.log('error check @');
        return false;
    } else {
        return true;
    }
}

export async function checkValidation(myphone) {
    const tokenData = await Token.find({ phone: myphone });

    return tokenData[0].isAuth;
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
