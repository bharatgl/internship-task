const express = require("express");
const userRoute = express.Router();
const { LogIn, getAllUser, signUp } = require("../Controllers/Usercontroller")

userRoute.post('/login',LogIn);
userRoute.post('/signup',signUp);
userRoute.get('/getalluser',getAllUser);

module.exports = userRoute;
