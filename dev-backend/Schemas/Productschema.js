const mongoose = require("mongoose");
const Userschema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    food_type: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  }
);

module.exports = mongoose.model("Product", Userschema);
