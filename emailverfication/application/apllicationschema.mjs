
import mongoose, { Schema } from "mongoose";


const applly=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        
    },
   number: {
  type: Number,
  required: true,
  match: [/^\d{10}$/, "Number must be exactly 10 digits"]
},

    college:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }

})

const aplication=mongoose.model("apply",applly)
export default aplication