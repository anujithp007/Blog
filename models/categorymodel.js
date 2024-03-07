const mongoose=require('mongoose')
let categorySchema=new mongoose.Schema({
   
    category:{
        type:String,
    }

})
let Category=mongoose.model('Category',categorySchema,'category')
module.exports=Category