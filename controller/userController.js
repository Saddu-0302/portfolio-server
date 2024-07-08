const asyncHandler = require("express-async-handler")
const User = require("../model/User")

const sendEmail = require("../utils/email")
exports.contact = asyncHandler(async (req, res) => {
    const { name, email, mobile, subject, message } = req.body

    console.log(req.body);

    const client = await sendEmail({
        name,
        to: email,
        message: req.body.message,
        subject: req.body.subject,
    })
    const me = await sendEmail({
        name,
        to: process.env.FROM_EMAIL,
        message: `
        Name:${name},
        Email:${email}
        Mobile:${mobile}
        Subject:${subject}
        Message:${message}
        `,
    })

    if (client) {
        res.status(200).json({ message: "Email Send Success" })
    } else {
        res.status(400).json({ message: "unable to send message" })
    }
    if (me) {
        res.status(200).json({ message: "Email Send Success" })
    } else {
        res.status(400).json({ message: "unable to send message" })
    }

    res.status(201).json({ message: 'contact added success', })
})
