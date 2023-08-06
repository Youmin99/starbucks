import nodemailer from 'nodemailer';

export function checkEmail(myemail) {
    if (myemail === undefined || myemail.includes('@') === false) {
        console.log('error check @');
        return false;
    } else {
        return true;
    }
}

export function getWelcomeTemplate({ name, age, school }) {
    const mytemplate = `
        <html>
            <body>
                <h1>wellcome! ${name}</h1>
                <hr />
                <div>name: ${name}</div>
                <div>age: ${age}</div>
                <div>school: ${school}</div>
                <div>date: ${school}</div>
            </body>
        </html>
    `;
    return mytemplate;
}

export async function sendTemplateToEmail(myemail, mytemplate) {
    const EMAIL_USER = 'logic9904@gmail.com';
    const EMAIL_PASS = 'pvrkhucwthoelyxs';
    const EMAIL_SENDER = 'logic9904@gmail.com';

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    const result = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: myemail,
        subject: '[youmin] welcome to join!!!',
        html: mytemplate,
    });
    console.log(result);
}
