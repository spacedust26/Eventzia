import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Item from "@/app/models/item";

export const GET = async (request) => {
  try {
    await connectToDB();
    const products = await Item.find();
    return new NextResponse(JSON.stringify({ products }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
