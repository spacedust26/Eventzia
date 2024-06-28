// import { connectToDB } from '@/app/lib/utils';
// import { NextResponse } from 'next/server';
// import Cart from '@/app/models/cart';

// export const POST = async(req) => {
//   await connectToDB();

//   if (req.method === 'POST') {
//     try {
//       const cartData = await req.body;
//       const newCart = new Cart(cartData);
//       await newCart.save(); 
//       console.log("Cart data from route.js" ,newCart);
//       return NextResponse.json({ success: true, data: newCart }, { status: 201 });
//     } catch (error) {
//       return NextResponse.json({ success: false, error: error.message }, { status: 400 });
//     }
//   } else {
//     return NextResponse.json({ success: false, message: 'Method not allowed' }, { status: 405 });
//   }
// };
import { connectToDB } from '@/app/lib/utils';
import { NextResponse } from 'next/server';
import Cart from '@/app/models/cart';

export const POST = async (req) => {
  await connectToDB();

  if (req.method === 'POST') {
    try {
      const cartData = await req.json(); // Parse the request body
      console.log("Parsed cart data:", cartData); // Log the parsed data

      // Validate the parsed data
      if (!cartData.date || !cartData.eventName || !cartData.desc || !cartData.totalAmount || !Array.isArray(cartData.item_info)) {
        return NextResponse.json({ success: false, error: 'Invalid cart data' }, { status: 400 });
      }

      const newCart = new Cart(cartData);
      await newCart.save(); // Save the new cart data to MongoDB
      console.log("Cart data saved to MongoDB:", newCart);
      return NextResponse.json({ success: true, data: newCart }, { status: 201 });
    } catch (error) {
      console.error("Error saving cart:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
  } else {
    return NextResponse.json({ success: false, message: 'Method not allowed' }, { status: 405 });
  }
};
