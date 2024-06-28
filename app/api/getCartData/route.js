import { connectToDB } from '@/app/lib/utils';
import Cart from '@/app/models/cart';
import { NextResponse } from 'next/server';

export const GET = async (req) =>{
  await connectToDB();
  try{
    const cartData = await Cart.find();
    return NextResponse.json({sucess:true, data: cartData}, {status: 200});
  }catch(error){
    return NextResponse.json({sucess:false, error: error.message}, {status:400});
  }
};