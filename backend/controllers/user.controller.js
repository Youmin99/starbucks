import { Email } from './services/email.js';
import { opengraph } from './services/og.js';
import { User } from '../models/user.model.js';

export class UserController {
    getUser = async (req, res) => {
        const result = await User.find();

        res.send(result);
    };

    postUser = async (req, res) => {
        const EmailService = new Email();

        const { name, email, pwd, phone, prefer } = req.body;

        const isPhoneValid = await EmailService.checkValidation(phone);
        if (isPhoneValid === false) {
            res.statusCode = 422;
            res.send('Phone is not Valid');
        }

        const isValid = EmailService.checkEmail(email);
        if (isValid === false) return;

        const OG = await opengraph(prefer);

        const user = new User({
            name: name,
            email: email,
            pwd: pwd,
            phone: phone,
            prefer: prefer,
            og: {
                title: OG.title,
                image: OG.image,
                description: OG.description,
            },
        });

        await user.save();

        const myTemplate = EmailService.getWelcomeTemplate({ name });

        EmailService.sendTemplateToEmail(email, myTemplate, name);
        res.send('Registration completed!!!');
    };
}
