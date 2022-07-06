const express = require('express');

const verifyJWT = require('../verifyJWT');
const parentController = require('../controllers/parent');

const router = express.Router();

//get username
router.get("/parent/isUserAuth", verifyJWT, parentController.isUserAuth)

//get all users
router.get("/parent/users", parentController.users);

//get single users
router.get("/parent/user/:id", parentController.getUser);

//register user
router.post("/parent/register", parentController.registerUser)


//log in
router.post("/parent/login", parentController.login)

//update parent
router.put("/parent/update/:id", parentController.updateParent)

//removee booked tutor
router.put("/parent/remove/:id", parentController.removeTutor)



module.exports = router;