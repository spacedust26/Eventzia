import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const photoSchema = new Schema({
  id: { type: String, required: true },
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  star: {
    type: Number,
    default: 0
  },
  review: {
    type: Number,
    default: 0
  },
  viewmore: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  specifications: {
    type: [String],
    required: true
  },
  packages: {
    type: Map,
    of: String,
    required: true
  }
});

const Photo = models.Photo || mongoose.model("Photo", photoSchema);
export default Photo;
