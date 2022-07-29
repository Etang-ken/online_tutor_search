const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/Tutor')

// const MongoClient = require("mongodb").MongoClient;
// const dbURI = 'mongodb://127.0.0.1:27017/regs';
// const ObjectId = require("mongodb").ObjectId;


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


//update
exports.updateTutor =  async (req, res, next) => {
    //check for json

    if(!req.is('application/json')) {
        return;
    }

    try{
        const user = await User.findOneAndUpdate({ _id: req.params.id}, req.body );
        res.sendStatus(200);
    } catch (err) {
        return `There is no customer with the id ${req.params.id}`;
    }
};
// (req, response) => {
    
//     MongoClient.connect(dbURI, function(err, db){
//         if(err) throw err;
//         let dbo = db.db("regs")
//         let myquery = { _id: ObjectId( req.params.id )};
//         let newValues = {
//             $set: {
//                 fullnames: req.body.fullnames,
//                 email: req.body.email,
//                 dateOfBirth: req.body.dateOfBirth,
//                 placeOfBirth: req.body.placeOfBirth,
//                 subject: req.body.subject,
//                 location: req.body.location,
//                 sex: req.body.sex,
//                 description: req.body.description,
//                 daysAvailable: req.body.daysAvailable,
//                 timeAvailable: req.body.timeAvailable,
//                 diplomas: req.body.diplomas,
//                 schoolsTaught: req.body.schoolsTaught,
//                 yearsExperience: req.body.yearsExperience,
//                 pricePerHour: req.body.pricePerHour,
//                 platform: req.body.platform,
//                 picture: req.body.picture
//             }
//         }

//     dbo
//     .collection("users")
//     .updateOne(myquery, newValues, function (err, res){
//         if (err) throw err;
//         console.log("1 document updated");
//         response.json(res);
//     });
//     })
    
    
// };


// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, "../../client/public/assets");
//     },
//     filename: function(req, file, cb) {
//         // uuidv4) + '-' + Date.now() + path.extname(
//         cb(null, file.originalname);
//     }
// });
// (upload.single('picture'),

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// const upload = multer({storage: storage});



// exports.updateTutor = async (req, res, next) => {
//     //check for json
//      User.findById(req.params.id)
//      .then((user) => {
//         user.fullnames= req.body.fullnames;
//         user.email= req.body.email;
//         user.dateOfBirth= req.body.dateOfBirth;
//         user.placeOfBirth= req.body.placeOfBirth;
//         user.subject= req.body.subject;
//         user.location= req.body.location;
//         user.sex= req.body.sex;
//         user.description= req.body.description;
//         user.daysAvailable= req.body.daysAvailable;
//         user.timeAvailable= req.body.timeAvailable;
//         user.diplomas= req.body.diplomas;
//         user.schoolsTaught= req.body.schoolsTaught;
//         user.yearsExperience= req.body.yearsExperience;
//         user.pricePerHour= req.body.pricePerHour;
//         user.platform= req.body.platform;
//         // user.picture= req.file.originalname;

//         user.save()
//         console.log(user)
//         .then(() => res.json("Profile Update!"))
//         .catch((err) => res.status(400).json('Error' + err));
//      })

     
//      .catch((err) => res.status(400).json('Error' + err));
                
     
      
// };