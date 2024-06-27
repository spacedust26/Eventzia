import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Decor from "@/app/models/decor";
import mongoose from "mongoose";

export const GET = async (request) => {
  try {
    await connectToDB();
    const decor = await Decor.find();
    const items = await mongoose.connection.db.collection('items').find().toArray();
    return new NextResponse(JSON.stringify({ decor, items }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
