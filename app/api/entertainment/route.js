import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Entertainment from "@/app/models/entertainment";
import mongoose from "mongoose";

export const GET = async (request) => {
  try {
    await connectToDB();
    const entertainment = await Entertainment.find();
    const items = await mongoose.connection.db.collection('items').find().toArray();
    return new NextResponse(JSON.stringify({ entertainment, items }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
