import { connectToDB } from "@/app/lib/utils";
import User from "@/app/models/user";
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST(req){
  try{
    const {username, email, password} = await req.json();
    // console.log(username);
    // console.log(email);
    // console.log(password);
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDB();
    await User.create({username, email, password: hashedPassword})

    return NextResponse.json({message: "User registered"}, {status: 201})
  }catch(error){
    return NextResponse.json({message: "An error occured while registering the user"}, {status : 500})
  }
}