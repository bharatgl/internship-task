const userRouter = require("./Route/User.js");
const userCart = require("./Route/Cart.js");
const userOrder = require("./Route/Order.js");
const userProduct = require("./Route/Product.js");

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi Bharat");
});

app.use("/product", userProduct);
app.use("/cart", userCart);
app.use("/order", userOrder);
app.use("/user", userRouter);

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://bharatgl:recon9976@cluster0.9dsyo7k.mongodb.net/appleute?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("ho gya show output");
  });
// mongodb+srv://bharatgl:recon9976@cluster0.9dsyo7k.mongodb.net/appleute?retryWrites=true&w=majority

app.listen(4000);
