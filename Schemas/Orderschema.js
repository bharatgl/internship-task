const mongoose = require("mongoose");
const Orderschema = mongoose.Schema(
  {
  
    order: {
      type: Object,
      require: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", Orderschema);
