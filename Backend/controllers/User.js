const { default: mongoose } = require('mongoose');
const Blog=require('../models/blogmodel');
const User = require('../models/usermodel');
const Category = require('../models/categorymodel');
 
 
 
 const addBlog=async(req,res,next)=>{
   
  const {title,content,author,image}=req.body
  console.log(req.body);
  try{
    let newPost=new Blog(req.body)
    let response=await newPost.save()
    console.log(response);
    res.json(response)
}
catch(err){
    console.log(err.message);
    res.status(500).json({ message: err.message })
}
}

const userBlog=async(req,res,next)=>{
    try{
        console.log('running');
        let id=new mongoose.Types.ObjectId(req.params.id)
        
        console.log(id);
        let response=await Blog.find({author:id})
        
        console.log(response);
        res.json(response)
    }
    catch(e){
        console.log(e);
    }
}



module.exports={addBlog,userBlog}