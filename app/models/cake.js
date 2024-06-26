import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const cakeTypeSchema = new Schema({
  type: { type: String, required: true },
  weights: { type: [weightSchema], required: true }
});

const cakeSchema = new Schema({
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
  typesofcake: { type: [cakeTypeSchema], required: true }
});

const Cake = models.Cake ||  mongoose.model("Cake", cakeSchema);
export default Cake;