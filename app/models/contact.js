import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema({
  name:{
    type: String,
    required: [true, "Name is required"],
    trime: true, //removes whitespace from beginning and end of the string
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"]
  },
  email:{
    type: String,
    required : [true, "Email is required"],
    match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i, "Invalid email address"]
  },
  message:{
    type: String,
    required : [true, "Message is required"],
  },
  date: {
    type: Date,
    default : Date.now,
  },
})

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact