const express = require("express");
const router = express.Router();
const Note = require("./models/noteModel");
const User = require("./models/usersSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = 'randomFraslklj0908908hhe';
//ENVOYER NOTE A MONGO
router.route("/create").post((req, res) =>{
   const title = req.body.title;
   const content = req.body.content;
   const newNote= new Note({
       title,
       content
   });

   newNote.save();
})
//Register

router.route("/register").post((req, res) =>{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  const newUser= new User({
      name,
      email,
      password: hashedPassword
  });
  newUser.save();

})
// ENVOYER CONTENU MONGO VERS LA PAGE NOTE DU SITE
router.route("/notes").get((req, res) =>{
  Note.find()
  .then(foundNotes=> res.json(foundNotes)) 
})

router.route('/login'). post(async (req, res) =>{
  const {email, password, _id} = req.body;
  
  try{
const userDoc =await User.findOne({email});
if(userDoc){
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if(passOk){
    jwt.sign({email:userDoc.email, id:userDoc, _id}, jwtSecret, {}, (err, token)=>{
      if (err) throw err;
      res.cookie('token', token).json(userDoc);
    });
  }else{
    res.status(422).json('not ok')
  }
} else {
  res.status(404).json('not found');
}
  }
  catch(err){
    console.error(err);
    res.status(500).json('server error');
  }
})


router.route('/profile'). get(async (req, res) =>{
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name,email,_id} = await User.findById(userData.id);
      res.json({name,email,_id});
    });
  } else {
    res.json(null);
  }
})
router.route('/logout'). post((req, res) =>{
  res.cookie('token', '').json(true);
})


module.exports = router;