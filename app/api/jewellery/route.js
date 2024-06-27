import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Jewellery from "@/app/models/jewellery";

export const GET = async (request) => {
  try {
    await connectToDB();
    const jewellery = await Jewellery.find();
    console.log(jewellery)
    const items = await mongoose.connection.db.collection('items').find().toArray();
    return new NextResponse(JSON.stringify({ jewellery, items }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
