import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const itemSchema = new Schema({
  id: { type: String, required: true },
  category: {type: String},
  title: { type: String, required: true },
  address: { type: String},
  stock: { type: Number},
  hall: { type: String},
  time: { type: String},
  price: { type: Number, required: true}
});

const Item = models.Item ||  mongoose.model("Item", itemSchema);
export default Item;
