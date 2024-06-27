import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Makeup from "@/app/models/makeup";
import mongoose from "mongoose";

export const GET = async (request) => {
  try {
    await connectToDB();
    const makeup = await Makeup.find();
    const items = await mongoose.connection.db.collection('items').find().toArray();
    return new NextResponse(JSON.stringify({ makeup, items }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
