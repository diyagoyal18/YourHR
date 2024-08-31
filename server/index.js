const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const multer = require('multer');
const path = require('path');
const ClientModel= require('./models/Client')
const UserModel = require('./models/User')
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const resume= require('./resume')
require('dotenv').config();
const app= express()
app.use(express.json())
app.use(cors())


const mongoURI= "mongodb://127.0.0.1:27017/HR"
mongoose.connect(mongoURI);
app.use('/resume',resume)

const port = process.env.PORT || 3001;


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

app.post('/user',(req,res)=>{
    UserModel.create(req.body).then(users=>res.json(users)).catch(err=>res.json(err))
})
app.post('')




app.listen(port, ()=>{
    console.log("server is running");
})