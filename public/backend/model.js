const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String,require:true},
    datetime:{type:String,require:true},
    price:{type:Number}
});
const Model=mongoose.model('Moneytracker',userSchema);
module.exports= Model;