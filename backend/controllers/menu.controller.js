import { EmailService } from './services/email.js';
import { opengraph } from './services/og.js';

export class MenuController {
    getMenu = async (req, res) => {
        const result = [
            { name: 'Batch Brew', kcal: 5, url: 'BatchBrew.png' },
            { name: 'Caffe Latte', kcal: 15, url: 'caffelatte.png' },
            { name: 'Caffe Mocha', kcal: 5, url: 'caffemocha.png' },
            { name: 'Cappuccino', kcal: 5, url: 'cappuccino.png' },
            {
                name: 'Dark Chocolate Latte',
                kcal: 5,
                url: 'DarkChocolateLatte.png',
            },
            { name: 'Espresso', kcal: 5, url: 'espresso.png' },
            { name: 'Iced Caffe Mocha', kcal: 5, url: 'icedcaffemocha.png' },
            {
                name: 'Iced White Chocolate Mocha',
                kcal: 5,
                url: 'WhiteChocolateMocha.png',
            },
            {
                name: 'Caramel Latte',
                kcal: 5,
                url: 'CaramelLatte.png',
            },
        ];

        res.send(result);
    };
}
