const mongoose = require("mongoose");
const { Schema } = mongoose;

const ApiSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  Date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DemoApi", ApiSchema);
