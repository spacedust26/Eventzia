import  mongoose, {Schema, models} from "mongoose"

const userSchema = new Schema({
  username: { 
    type : String,
    required : true,
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"]
  },
  email: {
    type : String,
    required : true,
    match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i, "Invalid email address"]
  },
  password: {
    type : String,
    required : true,
  },
}, {timestamps: true})

const User = models.User || mongoose.model("User", userSchema)
// console.log("User model defined:", User);
export default User