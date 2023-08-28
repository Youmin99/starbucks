import { Token } from '../models/token.model.js';
import {
    checkPhone,
    getToken,
    sendTokenToSMS,
} from './controllers/services/phone.js';

export class PhoneController {
    postPhone = async (req, res) => {
        const myphone = req.body.qqq;

        const isValid = checkPhone(myphone);
        if (isValid === false) return;

        const mytoken = getToken();
        const isToken = await Token.exists({ phone: myphone });

        if (!isToken) {
            const token = new Token({
                token: mytoken,
                phone: myphone,
            });
            await token.save();
        } else {
            await Token.updateOne({ phone: myphone }, { token: mytoken });
        }

        sendTokenToSMS(myphone, mytoken);
        res.send('Verification completed!!!');
    };

    patchPhone = async (req, res) => {
        const token = req.body.token;
        const myphone = req.body.phone;

        const tokenData = await Token.find({ phone: myphone });

        if (token == tokenData[0].token) {
            await Token.updateOne({ phone: myphone }, { isAuth: true });
        } else {
            res.send('Verification fail');
        }

        res.send('Verification completed!!!');
    };
}
