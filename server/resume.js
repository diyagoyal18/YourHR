const express = require('express')
const expressFileUpload= require('express-fileupload')
const path = require('path');

const assetFolder = path.join(__dirname,"assets" )


const router = express.Router()

router.post('/',(req,res)=>{
    const { resume }= req.files;
    resume.mv(path.join(assetFolder,resume.name));
    console.log(req.files);
})

module.exports= router;