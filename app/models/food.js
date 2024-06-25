import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  items: { type: [String], required: true },
  price: { type: Number, required: true }
});

const foodSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
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
    required: true
  },
  review: {
    type: Number,
    required: true
  },
  viewmore: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  specifications: {
    type: [String],
    required: true
  },
  menu: {
    Premium: {
      type: menuSchema,
      required: true
    },
    Regular: {
      type: menuSchema,
      required: true
    }
  }
});

const Food = models.Food ||  mongoose.model("Food", foodSchema);
export default Food;
