import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  try {
    const body = await req.json();
    const items = body.cartItems;
    console.log('Received items:', items);

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid items array" }, { status: 400 });
    }

    const transformedItems = items.map((item) => ({
      price_data: {
        currency: 'usd', // Use INR for Indian Rupees
        product_data: {
          name: item.title,
          metadata: {
            product_id: item._id, 
            category: item.category,
            address: item.address,
          },
        },
        unit_amount: item.price * 100, 
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: transformedItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    });

    return NextResponse.json({ sessionURL: session.url }, { status: 200 });
  } catch (err) {
    console.error('Error creating Stripe session:', err);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
};