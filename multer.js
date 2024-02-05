const express=require('express');
const app=express();
const multer=require('multer');
const path=require('path');

const folder="./uploads/";
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,folder);
    },
    filename:(req,file,cb)=>{
        const fileExt=path.extname(file.originalname);
        const fileName=file.originalname.replace(fileExt,"").toLowerCase();
        console.log(fileExt);
        console.log(fileName)
        cb(null,fileName+fileExt);
    },
});


var upload=multer({
    storage:storage,
  
})

app.post('/',upload.single('antor'),(req,res)=>{
    res.send('File uploader successfully');
})

app.listen(3000,(err)=>{
    console.log('listening at port 3000');
})