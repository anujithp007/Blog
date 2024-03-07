const Category=require('../models/categorymodel')


const addCategory=async(req,res)=>{
    const {category}=req.body
    console.log(req.body);
    try{
            let newCategory=new Category(req.body)
            let response=await newCategory.save()
            console.log(response,'cat.res');
    }
    catch(e){
        console.log(e.message);

    }
}

const findCategory=async(req,res)=>{
    try{

        let response=await Category.find()
        res.json(response)
    }
    catch(e){
        console.log(e.message);
    }
}
module.exports={addCategory,findCategory}