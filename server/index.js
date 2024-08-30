const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const multer = require('multer');
const path = require('path');
const ClientModel= require('./models/Client')
const UserModel = require('./models/User')

const app= express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/HR");





app.post("/login" ,(req,res)=>{
    const {email,password}= req.body;
    ClientModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("wrong password")
            }
        }else{
            res.json("no existing record")
        }
    })
})

app.post('/register',(req,res)=>{
    ClientModel.create(req.body)
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'assets')); // Store files in the 'assets' folder
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });


app.post('/user',upload.single('resume'),(req,res)=>{
    UserModel.create(req.body).then(users=>res.json(users)).catch(err=>res.json(err))
})
app.post('')




app.listen(3001, ()=>{
    console.log("server is running");
})