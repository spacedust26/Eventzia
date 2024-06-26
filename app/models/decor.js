import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const decorTypeSchema = new Schema({
  type: { type: String, required: true },
  price: { type: String, required: true }
});

const decorSchema = new Schema({
  id: { type: String, required: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  star: { type: Number, required: true },
  review: { type: Number, required: true },
  viewmore: { type: String, required: true },
  about: { type: String, required: true },
  specifications: { type: [String], required: true },
  types: { type: [decorTypeSchema], required: true }
});

const Decor = models.Decor ||  mongoose.model("Decor", decorSchema);
export default Decor;