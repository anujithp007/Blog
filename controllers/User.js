const { default: mongoose } = require('mongoose');
const Blog=require('../models/blogmodel');
const User = require('../models/usermodel');
const Category = require('../models/categorymodel');


const bcrypt=require('bcrypt')
const saltrounds=10
 
 
 const addBlog=async(req,res)=>{
   
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
    
        try {
            const authorId = req.params.id;
            const blogs = await Blog.find({ author: authorId }).populate('author').populate('category');


            res.json(blogs);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            res.status(500).send('Internal Server Error');
        }
    };
    const singleBlog=async(req,res,next)=>{
       
        const id = req.params.id;
        console.log(id,'blogid');
    try {
        const blog = await Blog.findById(id)
        .populate('author') // Populates the author field with its corresponding document
        .populate('category');
        console.log(blog.author.email,'email');
        // If the blog post with the given ID is found, send it as a response
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog post not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
    };
    const allBlogs=async(req,res)=>{
        try{
            const response=await Blog.find().populate('author').populate('category');
            console.log(response,'kii');
            if(response){
                res.json(response)
            }
            else{
                res.status(404).json({ message: 'Blog post not found' });
            }

        }
        catch(e){
            console.error(e);
            res.status(500).json({message:'server error'})
        }
    }
    const deleteBlog=async(req,res)=>{
        let id=req.params.id
        console.log(id,'kkoiipi');
        const response=await Blog.findByIdAndDelete(id)
        console.log(response,'fgf');
    }
    const findAuthor=async(req,res)=>{
        try{
               
                const response=await User.find({usertype:'user'})
                console.log(response,'auth:res');
                res.json(response)

        }
        catch(e){
                console.error(e.message)
        }
    }
    const profileView=async(req,res,next)=>{
        let id=req.params.id
        console.log(id);
        let response=await User.findById(id)
        let counts=await Blog.countDocuments({author:id})
        console.log(counts,'countnig')
        console.log(response);
        res.json({response,counts})

    }
    const updateBlogs=async(req,res,next)=>{
            try {
                const { id } = req.params;
                console.log(id,'up');
                let userid=req.decoded.id
                console.log(userid,'useriddd');
                const updatedBlog = await Blog.findOneAndUpdate({ _id: id, author: userid }, req.body, { new: true });
                console.log(updatedBlog,'uppp');
                res.json(updatedBlog);

            } catch (error) {
                console.error(error.message);
                res.status(500).send('Server Error');
            }
        }
        const updateProfiles= async (req,res,next)=>{
            
                try{
                    const id=req.params.id
                    

                    console.log(req.body);
                    const hashPassword= await bcrypt.hash(req.body.password,saltrounds)
                    console.log(hashPassword,'encrypted pw');
                    
                    let newUser= {
                      ...req.body,
                      password:hashPassword,
                    //   file:req.file.filename
                    }
                    console.log(newUser);
                    let response=await User.findByIdAndUpdate(id,newUser)
                    res.json(response)
                    console.log(response);
                  }
               
            
            catch(e){
                console.log(e.message);

            }

        }
        





module.exports={addBlog,userBlog,singleBlog,allBlogs,deleteBlog,findAuthor,profileView,updateBlogs,updateProfiles}
