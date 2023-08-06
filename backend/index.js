import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.use(cors());

app.get('/users', (req, res) => {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
        {
            email: 'aaa@gmail.com',
            name: 'aaa',
            phone: '010-1234-5678',
            personal: '220110-2222222',
            prefer: 'https://naver.com',
        },
        {
            email: 'aaa@gmail.com',
            name: 'aaa',
            phone: '010-1234-5678',
            personal: '220110-2222222',
            prefer: 'https://naver.com',
        },
        {
            email: 'aaa@gmail.com',
            name: 'aaa',
            phone: '010-1234-5678',
            personal: '220110-2222222',
            prefer: 'https://naver.com',
        },
    ];

    res.send(result);
});

app.get('/starbucks', (req, res) => {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
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

    // 2. 꺼내온 결과 응답 주기
    res.send(result);
});

app.post('/tokens/phone', (req, res) => {
    const myphone = req.body.qqq;

    // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
    const isValid = checkPhone(myphone);
    if (isValid === false) return;

    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();

    // 3. 핸드폰번호에 토큰 전송하기
    // sendTokenToSMS(myphone, mytoken);
    res.send('인증완료!!!');
});

app.listen(5000, () => {
    console.log('백엔드 API 서버가 켜졌어요!!!');
    console.log(`http://localhost:5000/`);
});
