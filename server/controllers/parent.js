const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/Parent')


//get username
exports.isUserAuth = (req, res) => {
    return res.json({isLoggedIn: true, username: req.user.username})
}

//get all users
exports.users =  async(req, res, next)=>{
    //res.send({msg: 'test'});
    try{
        const users = await User.find({});
        res.send(users);
        next();
    }catch(err){
        return next(new errors.InvalidContentError(err));
    }
    
};

//register user
exports.registerUser = async (req, res) => {
    const user = req.body;

    const takenUsername = await User.findOne({ username: user.username})
    const takenEmail = await User.findOne({email: user.email})

    if(takenUsername || takenEmail) {
        res.json({message: "Username or email has already been taken"})
    } else {
        user.password = await bcrypt.hash(req.body.password, 10)

        const dbUser = new User({
            username: user.username,
            email: user.email.toLowerCase(),
            password: user.password,
            useAs: user.useAs
        })

        dbUser.save()
        res.json({message: "Success"})
    }
}


//log in
exports.login = (req, res) => {
    const userLoggingIn = req.body;

    User.findOne({username: userLoggingIn.username})
    .then(dbUser => {
        if (!dbUser) {
            return res.json({message: "Invalid Username or Password"})
        }
        bcrypt.compare(userLoggingIn.password, dbUser.password)
        .then(isCorrect => {
            if(isCorrect) {
                const payload = {
                    id: dbUser._id,
                    username: dbUser.username,
                    password: dbUser.password
                }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn: 86400},
                    (err, token) => {
                        if(err) return res.json({message: err})
                        return res.json({
                            message: "Success",
                            token: "Bearer" + token
                        })
                    }
                )
            } else {
                return res.json({
                    message: "Invalid Username or Password"
                })
            }
            
        })
    })
}


//get single user
exports.getUser = async (req, res, next) => {
        
    try {
        const user = await User.findById(req.params.id);
        res.send(user);
    next();
    } catch (err) {
        return next(`There is no customer with the id ${req.params.id}`)
            
    }
    
};

//update parent
exports.updateParent = (req, res, next) => {
    const book = req.body;
       User.findOneAndUpdate(
        {_id: req.params.id},
        { $addToSet: { booked: book.tutor }},
        function (err, result) {
            if(err){
                res.send(err)
            } else {
                res.send(result);
                console.log(book)
            }
        }
    )
}

    //remove booked tutor
    //update parent
exports.removeTutor = (req, res, next) => {
    const book = req.body;
       User.findOneAndUpdate(
        {_id: req.params.id},
        { $pull: { booked: book.tutor }},
        function (err, result) {
            if(err){
                res.send(err)
            } else {
                res.send(result);
                console.log(book)
            }
        }
    )
}
    // try{
    //     const user = await User.findOneAndUpdate({ _id: req.params.id}, req.body );
    //     res.sendStatus(200);
    // } catch (err) {
    //     return `There is no customer with the id ${req.params.id}`;
    // }
// };