const express = require("express");
const productRoute = express.Router();

const {
  addFood,
  getFood,
  updateFood,
  deleteFood,
} = require("../Controllers/Productcontroller");

productRoute.post("/addfood", addFood);
productRoute.get("/getfood", getFood);
productRoute.post("/updatefood", updateFood);
productRoute.post("/deletefood", deleteFood);

module.exports = productRoute;
