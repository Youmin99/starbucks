const getValidationNumber = async () => {
    document.querySelector('#ValidationInputWrapper').style.display = 'flex';

    const myphone =
        document.getElementById('PhoneNumber01').value +
        document.getElementById('PhoneNumber02').value +
        document.getElementById('PhoneNumber03').value;

    axios
        .post('http://localhost:5000/tokens/phone', {
            qqq: myphone,
        })
        .then((res) => {
            console.log(res);
            //document.getElementById('result').innerText = res.data;
        });
};

// 회원 가입 API 요청
const submitSignup = async () => {
    axios
        .post('http://localhost:5000/email', {
            name: document.getElementById('SignupName').value,
            email: document.getElementById('SignupEmail').value,
        })
        .then((res) => {
            console.log(res);
            //document.getElementById('result').innerText = res.data;
        });
};
