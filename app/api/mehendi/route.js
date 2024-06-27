import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Mehendi from "@/app/models/mehendi";
import mongoose from "mongoose";

export const GET = async (request) => {
  try {
    await connectToDB();
    const mehendi = await Mehendi.find();
    const items = await mongoose.connection.db.collection('items').find().toArray();
    return new NextResponse(JSON.stringify({ mehendi, items }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
