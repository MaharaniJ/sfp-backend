const express = require('express');
const router = new express.Router();
const controllers = require("../controllers/userController")
const upload = require("../multerconfig/config");

router.post("/user/register",upload.single("user_profile"),controllers.postuser)

module.exports = router;