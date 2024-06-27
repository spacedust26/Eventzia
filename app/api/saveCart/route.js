import { connectToDB } from '@/app/lib/utils';
import { NextResponse } from 'next/server';
import Cart from '@/app/models/cart';

export const POST = async(req) => {
  await connectToDB();

  if (req.method === 'POST') {
    try {
      const cartData = await req.body;
      const newCart = new Cart(cartData);
      console.log(newCart);
      return NextResponse.json({ success: true, data: newCart }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
  } else {
    return NextResponse.json({ success: false, message: 'Method not allowed' }, { status: 405 });
  }
};
