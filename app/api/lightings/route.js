import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Lightings from "@/app/models/lightings";
import mongoose from "mongoose";

export const GET = async (request) => {
  try {
    await connectToDB();
    const lightings = await Lightings.find();
    const items = await mongoose.connection.db.collection('items').find().toArray();
    return new NextResponse(JSON.stringify({ lightings, items }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
