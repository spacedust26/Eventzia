import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const occasionSchema = new Schema({
  occasion: { type: String, required: true },
  price: { type: String, required: true }
});

const priestSchema = new Schema({
  id: { type: String, required: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  about: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  star: { type: Number, required: true },
  review: { type: Number, required: true },
  viewmore: { type: String, required: true },
  specifications: { type: [String], required: true },
  occasions: { type: [occasionSchema], required: true }
});

const Priest = models.Priest || mongoose.model("Priest", priestSchema);
export default Priest;
