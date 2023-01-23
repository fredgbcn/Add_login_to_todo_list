const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()


 app.use(cors());
 app.use(express.json());
 mongoose.set("strictQuery", false);
 //connect to mongoose
 mongoose.connect(process.env.MONGO_CODE, {useNewUrlParser: true}).then(()=>{
    console.log("connecté à Mongodb")
});
 //require route
 app.use("/", require("./route"));

app.use('/login', (req, res) => {
    res.send({  
      token: 'test123'  
    });
});
 app.listen(3001, function(){
     console.log("express server is running on port 3001")
 })