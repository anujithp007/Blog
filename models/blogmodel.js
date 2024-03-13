
const mongoose=require('mongoose')
const user=require('./usermodel')
const category = require('./categorymodel')
let BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        min:50,
        unique:true

    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user
    },
    image:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:category
        
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
   
})
let Blog=mongoose.model('Blog',BlogSchema,'blog')
module.exports=Blog