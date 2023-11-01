const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        ProductName:{
            type:String,
            required:true
        },
        Price:{
            type:Number,
            required:true
        },
        discount:{
            type:Number,
            required:true
        },
        availability:{
            type:Boolean,
            required:true
        },
        productDescription:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,

    }
);

module.exports = mongoose.model("ProductsModel",productSchema,"MyProducts")