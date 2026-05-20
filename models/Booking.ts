import mongoose, { Schema, models } from "mongoose";

const BookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    room: {
      type: String,
      required: true,
    },

    guests: {
      type: String,
      required: true,
    },

    checkIn: {
      type: String,
      required: true,
    },

    checkOut: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking =
  models.Booking || mongoose.model("Booking", BookingSchema);

export default Booking;