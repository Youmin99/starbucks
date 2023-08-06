import 'dotenv/config'; // SDK 가져오기
import * as Twilio from 'twilio';

export async function sendTokenToSMS(myphone, token) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const sender = process.env.SMS_SENDER;

    const client = Twilio(accountSid, authToken);
    console.log(sender);

    const m = await client.messages
        .create({
            body: 'hi', //`  요청하신 인증번호는 [${token}] 입니다.`
            from: `+${sender}`,
            to: `+1${myphone}`,
        })
        .then((message) => console.log(message.sid));

    // console.log(myphone + '번호로 인증번호' + token + '를 전송합니다!!!');
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
