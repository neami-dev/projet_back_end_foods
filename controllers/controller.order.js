const Order = require("../models/model.order")
const httpStatusText = require("../utils/httpStatusText")
const wrapper = require("../middlewares/asyncWrapper");
const appError = require("../utils/appError");

const getAllOrders =wrapper(async(req,res)=>{
    const orders = await Order.find({},{"__v":0})
    res.status(200).json({status:httpStatusText.SUCCESS,data:orders})
})  
const getOrder =wrapper(async(req,res,next)=>{
    const orderId = req.params.orderId
    const order = await Order.findOne({_id:orderId},{"_v":false})
    if (!order) {
        const error = appError.create("order not found!",404,httpStatusText.FAIL)
        return next(error)
    }
    res.status(200).json({status:httpStatusText.SUCCESS,data:order})
})  

const addOrders = wrapper(async (req,res)=>{
    const newOrders = new Order(req.body)
    await newOrders.save()
    res.status(201).json({status:httpStatusText.SUCCESS,data:newOrders})
 
})
const deleteOrders = wrapper(async (req,res,next)=>{
    const orderId = req.params.orderId
    const deleteOrder = await Order.findByIdAndDelete(orderId)
    console.log(deleteOrder);
    if(!deleteOrder){ 
        const error = appError.create("order not found !",404,httpStatusText.FAIL)
        return next(error)
    }
    res.status(200).json({status:httpStatusText.SUCCESS,data:null})
})
const updateOrders = wrapper(async (req,res,next)=>{
    const orderId = req.params.orderId
    const updateOrder = await Order.findByIdAndUpdate(orderId,req.body)
    if (!updateOrder) {
        const error = appError.create("order not found !",404,httpStatusText.FAIL)
        return next(error)
    }
    res.status(200).json({status:httpStatusText.SUCCESS,data:null})


})
module.exports={
    getAllOrders,
    getOrder,
    addOrders,
    deleteOrders,
    updateOrders,
}