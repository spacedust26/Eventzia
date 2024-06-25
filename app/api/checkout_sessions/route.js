const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const items = req.body.cartItems;
      console.log(items);
      const transformedItems = items.map((item) => ({
        id: item._id,
        category: item.category,
        title: item.title,
        address: item.address,
        stock: item.stock,
        hall: item.hall,
        time: item.time,
        price: item.price,
        quantity: item.quantity
      }));

      const session = await stripe.checkout.sessions.create({
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.json({ sessionURL: session.success_url });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}


