import  mongoose, {Schema, models} from "mongoose"

const userSchema = new Schema({
  username: { 
    type : String,
    required : true,
  },
  email: {
    type : String,
    required : true,
  },
  password: {
    type : String,
    required : true,
  },
}, {timestamps: true})

const User = models.User || mongoose.model("User", userSchema)
console.log("User model defined:", User);
export default User