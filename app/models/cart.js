import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const cartSchema = new Schema({
    eventname: { type: String, required: true },
    date: { type: Date, required: true },
    venue:[{ type: String }],
    
});

const Cart = models.Cart ||  mongoose.model("Cart", cartSchema);
export default Cart;
