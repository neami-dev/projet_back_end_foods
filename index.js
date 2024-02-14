require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Order = require("./models/model.order");
const app = express();
const cors = require('cors');
const routeFoods = require("./routes/route.foods")
const routeOrders = require("./routes/route.order")
const routeUsers = require("./routes/route.user")
const port = process.env.PORT;
const url = process.env.MONGO_URL;
const httpStatusText = require("./utils/httpStatusText")

mongoose
    .connect(url)
    .then(() => {
        console.log("db connect");
    })
    .catch((err) => {
        console.log("error in database==>",err);
    }); 
app.use(cors())
app.use(express.json());
app.use("/api/foods",routeFoods)
app.use("/api/orders",routeOrders)
app.use("/api/users",routeUsers)

 
app.all("*",(req,res)=>{
  res.status(500).json({error: "this resourses is not available!"});
})
app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).json({
        status:err.statusText || httpStatusText.ERROR,
        message: err.message,
        code : err.statusCode || 500,
        data:null
    });
})
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
