import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Venue from "@/app/models/venue";
import mongoose from "mongoose";

export const GET = async (request) => {
  try {
    await connectToDB();
    const venues = await Venue.find();
    const items = await mongoose.connection.db.collection('items').find().toArray();
    return new NextResponse(JSON.stringify({ venues, items }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
