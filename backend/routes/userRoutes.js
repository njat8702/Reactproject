const express = require("express");
const router = express.Router();

const { createUser, fetchUser, deleteUser,editUser } = require("../controllers/userController");
// const { updateUser, deleteUser } = require("../model/userModel");

router.post("/user", createUser);
router.get("/user", fetchUser);
router.delete("/user/:id",deleteUser);
router.put("/users/:id", editUser);

module.exports = router;