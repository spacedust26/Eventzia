import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Cake from "@/app/models/cake";


export const GET = async (request) => {
  try {
    await connectToDB();
    const cake= await Cake.find();
    const items = await mongoose.connection.db.collection('items').find().toArray();
    return new NextResponse(JSON.stringify({ cake, items }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
