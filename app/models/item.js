import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const itemSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  address: { type: String},
  hall: { type: String},
  time: { type: String},
  price: { type: Number}
});

const Item = models.Item ||  mongoose.model("Item", itemSchema);
export default Item;
