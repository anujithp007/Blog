const Blog=require('../models/blogmodel')
 
 
 
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


module.exports={addBlog}