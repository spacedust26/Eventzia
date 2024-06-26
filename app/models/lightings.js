import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const lightingTypeSchema = new Schema({
  type: { type: String, required: true },
  price: { type: String, required: true }
});

const lightingSchema = new Schema({
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
  types: { type: [lightingTypeSchema], required: true }
});

const Lighting = models.Lighting || mongoose.model("Lighting", lightingSchema);
export default Lighting;
