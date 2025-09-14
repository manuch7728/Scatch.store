const  mongoose= require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/scatch")

const userSchema=mongoose.userSchema({
    fullname:String,
    email:String,
    password:String,

    cart:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },
    
    contact:Number,
    picture:String,

    isadmin:Boolean
})

module.exports=mongoose.module("user",userSchema)