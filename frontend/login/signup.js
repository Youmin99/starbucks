// 휴대폰 인증 토큰 전송하기
//import 'dotenv/config';

const getValidationNumber = async () => {
    document.querySelector('#ValidationInputWrapper').style.display = 'flex';
    console.log(11);
    const myphone =
        document.getElementById('PhoneNumber01').value +
        document.getElementById('PhoneNumber02').value +
        document.getElementById('PhoneNumber03').value;
    console.log(document.getElementById('PhoneNumber01').value);
    axios
        .post('http://localhost:5000/tokens/phone', {
            qqq: myphone,
        })
        .then((res) => {
            console.log(res);
            document.getElementById('result').innerText = res.data;
        });
};

// 회원 가입 API 요청
const submitSignup = async () => {
    console.log('회원 가입 이메일 전송');
};
