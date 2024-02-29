const express=require ('express')
const app=express()
const mongoose=require('mongoose')
const cors =require('cors')
const User=require('./models/usermodel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { addBlog } = require('./controllers/User')
const {addCategory, findCategory}=require('./controllers/Category')
mongoose.connect('mongodb://127.0.0.1:27017/blog')
//   .then(() => console.log('Connected!'));


  const db=mongoose.connection
app.use(express.json({limit:'50mb'}))
app.use(cors()) 
const saltrounds=10

const verifyToken=(req,res,next)=>{
  let token=req.headers['authorization']
  console.log(token);
  token=token.split(' ')
  console.log(token[1]);
  if (!token[1]) {
    return res.status(403).json({ message: 'Token is not provided' });
  }

  jwt.verify(token[1], 'token', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    } 
    req.decoded = decoded;  
    console.log(req.decoded,'token');
    next();
  });
}

app.post('/register',async (req,res)=>{
  try{

    console.log(req.body);
    const hashPassword= await bcrypt.hash(req.body.password,saltrounds)
    console.log(hashPassword,'encrypted pw');
    
    let newUser= new User({
      ...req.body,
      password:hashPassword
    })
    console.log(newUser);
    let response=await newUser.save()
    res.json(response)
    console.log(response);
  }
  catch(e){
    console.log('error:',e);
    res.json(e.message)
  }
    

})

app.post('/login',async (req,res)=>{
  try{

    const {email,password}=req.body
    console.log(req.body)
    const user= await User.findOne({email})
    console.log(user.id,'user');
    if(!user){
      return res.status(401).json({message:'invalide username'})
    }
    let  passwordcompare=await bcrypt.compare(password,user.password)
    if(!passwordcompare){
  return res.status(401).json({message:'invalide password'})
}

let token=jwt.sign({id:user.id,email:user.email},"token")
res.json({user,token})
}
catch(e){
  console.error('login error')
}

})
app.get('/find/:id',verifyToken,async(req,res)=>{
  let id=req.params.id
      let response=await User.findById(id)
      console.log(response);
      res.json(response)
})


app.post('/addblog',addBlog)
app.post('/addcategory',addCategory)
app.get('/findcategory',findCategory)

app.listen(5000,()=>{
    console.log('server connected');
})