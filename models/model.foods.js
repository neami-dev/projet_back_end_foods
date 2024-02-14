
const  mongoose  = require("mongoose");

const foodsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    price:{ 
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String

    },
    cuisine:{
        type:String,
        required:true
    },
    time:{
        type:Number,
        required:true
    },
    date: { type: Date,
         default: Date.now
         }
}) 

module.exports = mongoose.model("Food",foodsSchema);

 