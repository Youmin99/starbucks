import 'dotenv/config';
import Twilio from 'twilio/lib/rest/Twilio.js';

export async function sendTokenToSMS(myphone, token) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const sender = process.env.SMS_SENDER;

    const client = new Twilio(accountSid, authToken);

    await client.messages
        .create({
            body: `Your verification code is: [${token}]`,
            from: `+${sender}`,
            to: `+1${myphone}`,
        })
        .then((message) => console.log(message.sid));
}

export function checkPhone(myphone) {
    if (myphone.length < 10 || myphone.length > 11) {
        console.log('error!!! write right phone number!!!');
        return false;
    } else {
        return true;
    }
}

export function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    console.log(result);
    return result;
}
