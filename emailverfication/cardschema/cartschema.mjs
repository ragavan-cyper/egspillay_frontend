import mongoose from "mongoose";


const cartschema=new mongoose.Schema({
  
        name:String,
        item:[
            {
            productname:String,
            price:Number,
            quantity: {
                type:Number,
                default:1


            }
        }
    ]
})

const Cart=mongoose.model("Cart",cartschema)
export default Cart