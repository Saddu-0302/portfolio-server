require("dotenv").config({ path: ".env" })
const nodemailer = require("nodemailer")

const sendEmail = ({
    name,
    to = process.env.FROM_EMAIL,
    subject = "Visiting my portfolio",
    message = `hi ${name} Thanks for visiting my portfolio I will contact you soon 👉 https://portfolio-ruby-nine-20.vercel.app/ `
}) => new Promise((resolve, reject) => {

    const mailer = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.EMAIL_PASS
        }
    })
    mailer.sendMail(
        {
            from: process.env.FROM_EMAIL,
            to,
            subject,
            text: message
        },
        (err) => {
            if (err) {
                console.log(err);
                return reject(err)
            } else {
                console.log("email send success");

                return resolve("email send success")
            }
        }
    )

})

module.exports = sendEmail

