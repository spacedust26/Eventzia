import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const packageSchema = new Schema({
  Basic: { type: String, required: true },
  Premium: { type: String, required: true },
  Deluxe: { type: String, required: true }
});

const photoSchema = new Schema({
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
  packages: { type: packageSchema, required: true }
});

const Photos = models.Photos || mongoose.model("Photos", photoSchema);
export default Photos;
