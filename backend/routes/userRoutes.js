const express = require("express");
const router = express.Router();

const { createUser, fetchUser, removeUser } = require("../controllers/userController");

router.post("/user", createUser);
router.get("/user", fetchUser);
router.delete("/user/id",removeUser);

module.exports = router;