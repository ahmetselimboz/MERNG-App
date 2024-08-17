import mongoose from "mongoose"


const schema = new mongoose.Schema({
    name:String,
    price:String,
    color:String
},{versionKey:false, timestamps:true})

const Product = mongoose.model("Product", schema)

export default Product