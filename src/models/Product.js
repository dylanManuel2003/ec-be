const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "The Task title is required "],
      unique: true,
      trim: true,
      maxlength: [50, "title cannot be grater than 40 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, "title cannot be grater than 200 characters"],
    },
    price: {
      type: Number,
      required: true,
    },
    // category: {
    //   type: String,
    //   required: true,
    // },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
