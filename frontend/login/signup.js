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
        });
};

const submitToken = async () => {
    axios
        .patch('http://localhost:5000/tokens/phone', {
            token: document.getElementById('TokenInput').value,
            phone:
                document.getElementById('PhoneNumber01').value +
                document.getElementById('PhoneNumber02').value +
                document.getElementById('PhoneNumber03').value,
        })
        .then((res) => {
            document.getElementById('result').innerText = res.data;
        });
};

const submitSignup = async () => {
    axios
        .post('http://localhost:5000/users', {
            name: document.getElementById('SignupName').value,
            email: document.getElementById('SignupEmail').value,
            prefer: document.getElementById('SignupPrefer').value,
            pwd: document.getElementById('SignupPwd').value,
            phone:
                document.getElementById('PhoneNumber01').value +
                document.getElementById('PhoneNumber02').value +
                document.getElementById('PhoneNumber03').value,
        })
        .then((res) => {
            console.log(res);
        });
};
