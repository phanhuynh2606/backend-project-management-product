const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/auth.controller");
const validate = require("../../validaters/admin/auth.validate");
//[GET/admin/auth
router.get("/login", controller.login);

router.post("/login",validate.loginPost ,controller.loginPost);

module.exports = router;