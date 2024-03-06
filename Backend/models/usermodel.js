const mongoose=require('mongoose')
let userSchema=new mongoose.Schema({
    firstname: {
        type:String

    },
    email:{
            type:String,
            required:true,
            unique:true
    },
    password:{
        type:String,
        required:true
        
    },
    dob:{
        type:Date,
       
    },
    usertype:{
        type:String,
        default:'user',
        required:true
    },
    file:{
        type:String,
        
    }

})
let User=mongoose.model('User',userSchema,'user')
module.exports=User