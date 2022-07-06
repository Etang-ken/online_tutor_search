const express = require('express');

const verifyJWT = require('../verifyJWT');
const adminController = require('../controllers/admin');

const router = express.Router();

//get username
router.get("/admin/isUserAuth", verifyJWT, adminController.isUserAuth)

//get all users
router.get("/admin/users", adminController.users);

//get single users
router.get("/admin/user/:id", adminController.getUser);

//register user
router.post("/admin/register", adminController.registerUser)


//log in
router.post("/admin/login", adminController.login)

//approve tutor
router.put("/admin/approvedTutors/:id", adminController.approvedTutors)

module.exports = router;