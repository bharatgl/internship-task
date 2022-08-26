const mongoose = require("mongoose");
const Caschema = mongoose.Schema(
  {
    user_name: {
      type: String,
      require: true,
    },
    user_id: {
      type: String,
      require: true,
    },
    order: {
      type: Object,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", Cartschema);
