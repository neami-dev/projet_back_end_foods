const mongoose = require("mongoose")
const date =  new Date();
const ordersSchema = new mongoose.Schema({

    idProduct:{
        type:String,
        required:true
    },
    firstName :{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    confirmOrder:{
        type :Boolean,
        default:false
    },
    adress:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    date:{
        type: Date,
        default:date
    },
    
    phoneNumber:{
        type:Number,
         
    }
})
 
module.exports = mongoose.model("Order",ordersSchema)