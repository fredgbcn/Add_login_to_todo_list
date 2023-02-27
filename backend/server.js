const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config()


app.set('view-engine', 'ejs');
app.use(express.urlencoded({extend: false}))  
 app.use(cors());
 app.use(express.json());
 mongoose.set("strictQuery", false);
 //connect to mongoose
 mongoose.connect(process.env.MONGO_CODE, {useNewUrlParser: true}).then(()=>{
    console.log("connect à Mongodb")
});
 //require route
 app.use("/", require("./route"));


 app.listen(3001, function(){
     console.log("express server is running on port 3001")
 })