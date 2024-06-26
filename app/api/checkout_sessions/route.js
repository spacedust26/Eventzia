import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  try {
    const body = await req.json();
    const items = body.cartItems;
    console.log('Received items:', items);

    // Check if items array is valid
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




// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// export const POST = async(req, res)=> {
//   if (req.method === 'POST') {
//     try {
//       const items = req.body.cartItems;
//       console.log(items);
//       const transformedItems = items.map((item) => ({
//         id: item._id,
//         category: item.category,
//         title: item.title,
//         address: item.address,
//         stock: item.stock,
//         hall: item.hall,
//         time: item.time,
//         price: item.price,
//         quantity: item.quantity
//       }));

//       const session = await stripe.checkout.sessions.create({
//         line_items: transformedItems,
//         mode: 'payment',
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       });

//       res.json({ "sessionURL" : session.url });
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }
