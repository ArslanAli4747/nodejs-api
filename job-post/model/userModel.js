const mongo = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const UserSchema = new mongo.Schema({
    name:{
        type:String,
        required:true,
        minlength:4,
        maxlength:16
    },
    email:{
        type:String,
        required:true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }

})


UserSchema.pre("save",async function(){

    const salt =await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

UserSchema.methods.creatJWT = function(){
    return jwt.sign({id:this._id,name:this.name},process.env.JWT_TOKEN,{expiresIn:"2d"})
}

UserSchema.methods.mtch = async function(pass){
    const matched = await bcrypt.compare(pass,this.password)
    return matched
}




module.exports = mongo.model("User-AUTH",UserSchema)


