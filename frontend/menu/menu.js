const getCoffee = () => {
    axios.get('http://localhost:5000/starbucks').then((res) => {
        const menu = res.data;
        menu.map((index) => {
            createMenuCard(index);
        });
    });
};

const createMenuCard = (data) => {
    const menuCardWrapper = document.createElement('div');
    menuCardWrapper.className = 'Menu_Card_Wrapper';

    const menuCardImgBox = document.createElement('div');
    menuCardImgBox.className = 'Menu_Card_ImgBox';

    const menuCardName = document.createElement('div');
    menuCardName.className = 'Menu_Card_Name';
    menuCardName.textContent = data?.name || 'meun name';

    const menuCardInfo = document.createElement('div');
    menuCardInfo.className = 'Menu_Card_Info';
    menuCardInfo.textContent = data?.kcal || 'kcal';

    const menuWrapper = document.querySelector('#Menu_Background');
    menuCardWrapper.appendChild(menuCardImgBox);
    menuCardWrapper.appendChild(menuCardName);
    menuCardWrapper.appendChild(menuCardInfo);
    menuWrapper.appendChild(menuCardWrapper);
};
