
const mongoose=require('mongoose')
const user=require('./usermodel')
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
    }
   
})
let Blog=mongoose.model('Blog',BlogSchema,'blog')
module.exports=Blog