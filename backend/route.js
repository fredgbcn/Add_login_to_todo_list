const express = require("express");
const router = express.Router();
const Note = require("./models/noteModel");
const User = require("./models/usersSchema");

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
  const newUser= new User({
      name,
      email,
      password
  });

  newUser.save();
})
// ENVOYER CONTENU MONGO VERS LA PAGE NOTE DU SITE
router.route("/notes").get((req, res) =>{
  Note.find()
  .then(foundNotes=> res.json(foundNotes)) 
})

module.exports = router;