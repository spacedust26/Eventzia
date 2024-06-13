import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";

export async function POST(req) {
  const { name, email, message } = await req.json();
  
  try{
    await connectToDB();
    await Contact.create({name, email, message})
    return NextResponse.json({
      msg : ['Message sent successfully'],
      success : true,
    })
  }catch(error) {
    if(error instanceof mongoose.Error.ValidationError){
      let errorList = [];
      for(let e in error.errors){
        errorList.push(error.errors[e].message);
      }
      console.log(errorList)
      return NextResponse.json({msg : errorList})
    }else{
      return NextResponse.json({msg: "Unable to send the message"});
    }
  }
}