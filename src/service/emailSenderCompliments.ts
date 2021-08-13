import nodemailer from 'nodemailer';



class sendEmailCompliments{
    async execute(email_receiver:string, name:string, name_sender:string){

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "emailfortest767@gmail.com",
                pass: "car@lho12"
            }
        });

        const mailOptions = {
            from: '"Compliments App" <emailfortest767@gmail.com>',
            to: email_receiver,
            subject: "Compliments Receiver",
            html: `
                <h3>Hello ${name}!</h3>
                <p>${name_sender} just sent you a compliment!</p>
            `
        };

        transporter.sendMail(mailOptions, function (err, info){
            if (err) {
                console.log(err);
            }else {
                console.log('Email send');
            }
        })
    }
}


export {sendEmailCompliments}