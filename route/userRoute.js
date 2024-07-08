const { getAllUser, addUser, contact } = require("../controller/userController")

const router = require("express").Router()

router
    .post('/sendmail', contact)

module.exports = router