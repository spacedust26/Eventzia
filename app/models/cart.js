import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';
import Item from '@/app/models/item';

const currentDate = new Date();
const minDate = new Date(currentDate);
minDate.setDate(minDate.getDate() + 10); //10 days after current
const maxDate = new Date(currentDate);
maxDate.setFullYear(maxDate.getFullYear() + 1); // 1yr after current

const CartSchema = new Schema({
  date: {
    type: Date,
    min: minDate,
    max: maxDate,
    validate: {
      validator: function(v) {
        return v >= minDate && v <= maxDate;
      },
      message: props => `${props.value} is not a valid date!`
    }
  },
  eventName: { type: String},
  desc: { type: String },
  totalAmount: { type: Number},
  item_info: [Item.schema]
});

const Cart = models.Cart || mongoose.model("Cart", CartSchema);
export default Cart;
