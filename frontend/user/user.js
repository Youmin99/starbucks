// 회원 목록 조회 API를 요청해주세요.
const getUser = () => {
    axios.get('http://localhost:5000/users').then((res) => {
        console.log(res.data);
        const users = res.data;
        users.map((index) => {
            createUserDiv(index);
        });
    });
};

const createUserDiv = (data) => {
    const userTableItem = document.createElement('div');
    userTableItem.className = 'User_Table_Item';

    const nameItem = document.createElement('div');
    nameItem.className = 'Item_Info';
    nameItem.textContent = data?.name || 'user';

    const emailItem = document.createElement('div');
    emailItem.className = 'Item_Info';
    emailItem.textContent = data?.email || 'abc@gmail.com';

    const phoneItem = document.createElement('div');
    phoneItem.className = 'Item_Info';
    phoneItem.textContent = data?.phone || '010-1234-5678';

    const preferItem = document.createElement('div');
    preferItem.className = 'Item_Info';
    preferItem.textContent = data?.prefer || 'naver.com';

    const userTableSubItem = document.createElement('div');
    userTableSubItem.className = 'User_Table_Item';

    const ogImgItem = document.createElement('img');
    ogImgItem.className = 'Og_Img_Info';
    ogImgItem.src = data?.og?.image;

    const ogTitleItem = document.createElement('div');
    ogTitleItem.className = 'Og_Item_Title';
    ogTitleItem.textContent = data?.og?.title;

    const ogDescItem = document.createElement('div');
    ogDescItem.className = 'Og_Item_Info';
    ogDescItem.textContent = data?.og?.description;

    const menuBack = document.querySelector('#User_Data_Wrapper');
    menuBack.appendChild(userTableItem);
    menuBack.appendChild(userTableSubItem);
    userTableItem.appendChild(nameItem);
    userTableItem.appendChild(emailItem);
    userTableItem.appendChild(phoneItem);
    userTableItem.appendChild(preferItem);
    userTableSubItem.appendChild(ogImgItem);
    userTableSubItem.appendChild(ogTitleItem);
    userTableSubItem.appendChild(ogDescItem);
};
