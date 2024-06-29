import { connectToDB } from '@/app/lib/utils';
import { NextResponse } from 'next/server';
import Cart from '@/app/models/cart';

export const DELETE = async (req) => {
  await connectToDB();
  if(req.method === 'DELETE') {
      try {
        const body = await req.json(); // Parse the JSON body
        const { id } = body; 
        const deletedEvent = await Cart.findByIdAndDelete(id);
        if (!deletedEvent) {
          return NextResponse.json({ success: false, message: 'Event not found' }, {status: 404});
        }
        return NextResponse.json({ success: true, data: deletedEvent }, {status: 200});
      } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, {status: 400});
      }
    }
    else{
      return NextResponse.json({ success: false, message: 'Method not allowed'}, {status: 400});
  }
}