const  mongoose= require("mongoose")


const ownerSchema=mongoose.userSchema({
    fullname:String,
    email:String,
    password:String,

    
    picture:String,
    gstno:String

})

module.exports=mongoose.module("owner",ownerSchema)