const express = require("express");
const userRoute = express.Router();
const { LogIn, getAllUser, signIn } = require("../Controllers/Usercontroller")

userRoute.post('/login',LogIn);
userRoute.post('/signin',signIn);
userRoute.get('/getalluser',getAllUser);

module.exports = userRoute;
