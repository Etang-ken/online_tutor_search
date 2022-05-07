const express = require('express');

const verifyJWT = require('../verifyJWT');
const tutorController = require('../controllers/tutor');

const router = express.Router();

//get username
router.get("/tutor/isUserAuth", verifyJWT, tutorController.isUserAuth)

//get all users
router.get("/tutor/users", tutorController.users);

//register user
router.post("/tutor/register", tutorController.registerUser)


//log in
router.post("/tutor/login", tutorController.login)

module.exports = router;