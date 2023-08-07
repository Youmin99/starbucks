import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import { checkPhone, getToken, sendTokenToSMS } from './phone.js';
import {
    checkEmail,
    getWelcomeTemplate,
    sendTemplateToEmail,
} from './email.js';
import mongoose from 'mongoose';
import { User } from './models/user.model.js';
import { Token } from './models/token.model.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.use(cors());

app.get('/users', async (req, res) => {
    const result = await User.find();

    res.send(result);
});

app.post('/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        pwd: req.body.pwd,
        phone: req.body.phone,
        prefer: req.body.prefer,
    });

    await user.save();
});

app.get('/starbucks', async (req, res) => {
    const result = [
        { name: '아메리카노', kcal: 5 },
        { name: '아메리카노', kcal: 5 },
        { name: '아메리카노', kcal: 5 },
        { name: '아메리카노', kcal: 5 },
        { name: '아메리카노', kcal: 5 },
        { name: '아메리카노', kcal: 5 },
        { name: '아메리카노', kcal: 5 },
        { name: '아메리카노', kcal: 5 },
        { name: '아메리카노', kcal: 5 },
    ];

    const user = await User.find();

    res.send(user);
});

app.post('/tokens/phone', async (req, res) => {
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

    // sendTokenToSMS(myphone, mytoken);
    res.send('Verification completed!!!');
});

app.post('/email', (req, res) => {
    const { name, email } = req.body;

    const isValid = checkEmail(email);
    if (isValid === false) return;

    const myTemplate = getWelcomeTemplate({ name });

    sendTemplateToEmail(email, myTemplate, name);
    res.send('Registration completed!!!');
});

mongoose
    .connect('mongodb://my-database:27017/mydocker')
    .then(() => console.log('db connect success.'))
    .catch(() => console.log('db connect fail.'));

app.listen(5000, () => {
    console.log(`http://localhost:5000/`);
});
