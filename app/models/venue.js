import { Schema, models } from 'mongoose';
import mongoose from 'mongoose';

const venueSchema = new Schema({
    id: { type: String, required: true },
    img: { type: String, required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    star: { type: Number, required: true, min: 0, max: 5 },
    review: { type: Number, required: true, min: 0, max: 5 },
    viewmore: { type: String, required: true },
    about: { type: String, required: true },
    seating: { type: Number, required: true },
    timings: [{ type: String, required: true }],
    since: { type: String, required: true },
    roomsavailable: { type: Number, required: true },
    avgprice: { type: String, required: true },
    cancellation: { type: String, required: true },
    specifications: [{ type: String, required: true }]
});

const Venue = models.Venue ||  mongoose.model("Venue", venueSchema);
export default Venue;
