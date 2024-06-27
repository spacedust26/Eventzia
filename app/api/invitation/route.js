import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Invitation from "@/app/models/invitation";
import mongoose from "mongoose";

export const GET = async (request) => {
  try {
    await connectToDB();
    const invitation = await Invitation.find();
    const items = await mongoose.connection.db.collection('items').find().toArray();
    return new NextResponse(JSON.stringify({ invitation, items }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};I