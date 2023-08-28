import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import { UserController } from './controllers/user.controller.js';
import { MenuController } from './controllers/menu.controller.js';
import { PhoneController } from './controllers/phone.controller.js';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.use(cors());

const UserController = new UserController();
const MenuController = new MenuController();
const PhoneController = new PhoneController();

app.get('/users', UserController.getUser);
app.post('/users', UserController.postUser);

app.get('/starbucks', MenuController.getMenu);

app.post('/tokens/phone', PhoneController.postPhone);
app.patch('/tokens/phone', PhoneController.patchPhone);

mongoose
    .connect('mongodb://my-database:27017/mydocker')
    .then(() => console.log('db connect success.'))
    .catch(() => console.log('db connect fail.'));

app.listen(5000, () => {
    console.log(`http://localhost:5000/`);
});
