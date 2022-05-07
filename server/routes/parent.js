const express = require('express');

const verifyJWT = require('../verifyJWT');
const parentController = require('../controllers/parent');

const router = express.Router();

//get username
router.get("/parent/isUserAuth", verifyJWT, parentController.isUserAuth)

//get all users
router.get("/parent/users", parentController.users);

//register user
router.post("/parent/register", parentController.registerUser)


//log in
router.post("/parent/login", parentController.login)

module.exports = router;