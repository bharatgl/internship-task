const userModel = require("../Schemas/Userschema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const LogIn = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
    return  res.status(201).json({ message: "user already exists" });
    } else {
      const hashPassword = await bcrypt.hash(password,10);

      const newUser = new userModel({
        name: name,
        email: email,
        password: hashPassword,
      });

      const response = await newUser.save();
      res.status(200).json(response);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const signUp = async (req, res) => {};

const getAllUser = async (req, res) => {
  try {
    const response = await userModel.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

module.exports = { LogIn, getAllUser, signUp };
