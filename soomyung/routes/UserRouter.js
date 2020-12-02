const express = require("express");
const router = express.Router();

const { UserController } = require("../controllers");

router.post("/signup", UserController.signUp);
router.post("/login", UserController.login);

module.exports = router;
