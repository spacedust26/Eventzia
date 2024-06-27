import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Clothing from "@/app/models/clothing";
import mongoose from "mongoose";

export const GET = async (request) => {
  try {
    await connectToDB();
    const clothing = await Clothing.find();
    const items = await mongoose.connection.db.collection('items').find().toArray();
    return new NextResponse(JSON.stringify({ clothing, items }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
