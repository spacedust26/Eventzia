import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import Venue from "@/app/models/venue";

export const GET = async(request) =>{
  try{
    await connectToDB();
    const venue = await Venue.find();
    return new NextResponse(JSON.stringify(venue), {status: 200});
  }catch(error){
    return new NextResponse("Error in fecthing venue "+ error, {status: 500});
  }
}