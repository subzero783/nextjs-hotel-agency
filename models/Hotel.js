import { Schema, model, models } from "mongoose";

const HotelSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Hotel name is required"],
    },
    type: {
      type: String,
      required: [true, "Property type is required (e.g. Hotel, Resort)"],
    },
    description: {
      type: String,
    },
    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    star_rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    amenities: [String],
    price_per_night: {
      type: Number,
      required: [true, "Price per night is required."],
    },
    contact_info: {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
    images: [String],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Hotel = models.Hotel || model("Hotel", HotelSchema);

export default Hotel;
